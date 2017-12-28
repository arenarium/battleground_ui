import React from 'react';
// import {  Row, Col,Grid,Pager, Form,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
import StateNavContainer from '../containers/StateNavContainer'
// const MyPagination = withRouter(({numItems, newActivePage, history})=>(
// // {(eventKey)=>{history.push("../"+String(eventKey)+"/")}}
//   )
// )
//,stateIndex,length,autoPlay,onChangeAutoPlay ,onStateSelect
const GameStateViewer = ({gameState})=>{

  var content
  if (gameState != null){
    var currentGameState = gameState["game_state"]
    var lastMove = gameState["last_move"]
    var gameStateString = JSON.stringify(currentGameState, null, 4)
    var lastMoveString = JSON.stringify(lastMove, null, 4)
    content = (
      <div>
        <StateNavContainer/>
        <p>Last Move:</p>
        <pre>{lastMoveString}</pre>
        <p>Game State</p>
        <pre>{gameStateString}</pre>
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
