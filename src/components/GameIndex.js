import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';


const GameIndex = ({gameArray, onGameSelect})=>{

  let listItemArray=[]

  for (let key in gameArray) {
    if (gameArray.hasOwnProperty(key)) {

      let gameID = gameArray[key]["_id"]
      let gameType = gameArray[key]["game_type"]

      listItemArray.push(
        <ListGroupItem key={key} onClick={() => {onGameSelect(String(gameID))}}>
          {gameType+": "+gameID.substring(0,8)}
        </ListGroupItem>
      )
    }
  }

  return (
    <div className="GameIndex">
      <h4>Games:</h4>
      <ListGroup>
        {listItemArray}
      </ListGroup>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gameArray: state.gameList.gameArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGameSelect: id => {
      dispatch(selectGame(id))
      dispatch(fetchStates(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex)
