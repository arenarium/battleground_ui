import React,  { Component }  from 'react';
import {connect} from "react-redux"
import StateNav from "./StateNav"
import ArenaState from './ArenaState'
import CurrentPlayers from './CurrentPlayers'
import {Grid, Segment, Container}  from 'semantic-ui-react'

import {doAutoPlay} from "../actions/GameViewer"

class GameStateViewer extends Component {
  constructor(props){
    super(props)
    this.playing=false
  }

  componentDidMount(){
    if (!this.props.isPlaying){
      this.playing=true
      this.props.doAutoPlay(500)
    }
  }

  render(){
    var content
    var gameState = this.props.gameState
    var textState = this.props.textState

    if (gameState != null){
      var currentGameState = gameState["game_state"]
      // var lastMove = gameState["last_move"]
      var lastMove = currentGameState['message']
      var gameStateContent = null

      // if game is arena game, and raw state is not requested
      if (("dungeon" in currentGameState) & (textState===false)) {
        if ('size' in currentGameState['dungeon']){
          gameStateContent = (
            <Container>
              <CurrentPlayers gameState={gameState} playerMetaData={this.props.playerMetaData}/>
              <ArenaState gameState={currentGameState}/>
            </Container>
          )
        }
      }

      // all other cases
      if (gameStateContent == null){
        var gameStateString = JSON.stringify(currentGameState, null, 4)
        gameStateContent = (
          <div>
            <p>Game State:</p>
            <pre>{gameStateString}</pre>
          </div>
        )
      }


      // add a message to show
      var lastMoveString = JSON.stringify(lastMove, null, 4)
      content = (
        <div>
          <Segment>
            <StateNav/>
          </Segment>
          <Grid stackable celled='internally'>
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
    gameState: state.gameStates.stateArray[state.gameStates.stateIndex],
    textState: state.gameStates.textState,
    isPlaying: state.gameStates.isPlaying,
    playerMetaData: state.playerData.players
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
