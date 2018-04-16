import React from 'react';
import {connect} from "react-redux"
import StateNav from "./StateNav"
import ArenaState from './ArenaState'
import {Divider, Grid, Container, Segment}  from 'semantic-ui-react'

const GameStateViewer = ({gameState, textState})=>{

  var content
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
        <Grid fluid celled='internally'>
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


const mapStateToProps = state => {
  // do work here
  return {
    gameState:state.gameStates.stateArray[state.gameStates.stateIndex],
    textState:state.gameStates.textState,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStateViewer)
