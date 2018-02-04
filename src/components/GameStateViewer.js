import React from 'react';
import {connect} from "react-redux"
import StateNav from "./StateNav"
import ArenaState from './ArenaState'

const GameStateViewer = ({gameState})=>{

  var content
  if (gameState != null){
    var currentGameState = gameState["game_state"]
    var lastMove = gameState["last_move"]

    var gameStateContent = null

    if ("dungeon" in currentGameState) {
      if ('size' in currentGameState['dungeon']){
      gameStateContent = (
        <ArenaState gameState={currentGameState}></ArenaState>
      )
    }
  }
  if (gameStateContent == null){
      var gameStateString = JSON.stringify(currentGameState, null, 4)
      gameStateContent = <pre>{gameStateString}</pre>
    }


    var lastMoveString = JSON.stringify(lastMove, null, 4)
    content = (
      <div>
        <StateNav/>
        <p>Last Move:</p>
        <pre>{lastMoveString}</pre>
        <p>Game State:</p>
        {gameStateContent}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStateViewer)
