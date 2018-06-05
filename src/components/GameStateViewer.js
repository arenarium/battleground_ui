import React,  { Component }  from 'react';
import {connect} from "react-redux"
import StateNav from "./StateNav"
import ArenaState from './ArenaState'
import {Divider, Grid, Container, Segment}  from 'semantic-ui-react'

import {fetchGames, doAutoPlay} from "../actions/GameViewer"

class GameStateViewer extends Component {
  constructor(props){
    super(props)
    this.playing=false
  }

  componentDidMount(){
    if (!this.playing){
      this.playing=true
      this.props.doAutoPlay(1500)
    }
  }

render(){
  var content
  var gameState = this.props.gameState
  var textState = this.props.textState

  if (gameState != null){
    var currentGameState = gameState["game_state"]
    var lastMove = gameState["last_move"]

    var gameStateContent = null

    if (("dungeon" in currentGameState) & (textState==false)) {
      if ('size' in currentGameState['dungeon']){
        gameStateContent = (
          <ArenaState gameState={currentGameState}></ArenaState>
        )
      }
    }
    if (gameStateContent == null){
      var gameStateString = JSON.stringify(currentGameState, null, 4)
      gameStateContent = (
        <div>
          <p>Game State:</p>
          <pre>{gameStateString}</pre>
        </div>
      )
    }


    var lastMoveString = JSON.stringify(lastMove, null, 4)
    content = (
      <div>
        <Segment>
        <StateNav/>
        </Segment>
        <Grid fluid='true' celled='internally'>
          <Grid.Column width={12}>
            {gameStateContent}
          </Grid.Column>
          <Grid.Column width={4}>
            <p>Messages:</p>
            <pre>{lastMoveString}</pre>
          </Grid.Column>
        </Grid>
      </div>
    )
  } else {
    content = (<p>Select a game to view.</p>)
  }


  return (
    <div className="StateArrayViewer">
      {content}
    </div>
  );
}
}


const mapStateToProps = state => {
  // do work here
  return {
    gameState:state.gameStates.stateArray[state.gameStates.stateIndex],
    textState:state.gameStates.textState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doAutoPlay: (delay) => {
      dispatch(doAutoPlay(delay))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStateViewer)
