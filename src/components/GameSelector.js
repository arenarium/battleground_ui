import React from 'react';
import {connect} from "react-redux"
import {Dropdown, Grid, Container} from 'semantic-ui-react'
import {selectGame, fetchStates, fetchGames} from "../actions/GameViewer"

const GameSelector = ({gameTypes, gameArray, onTypeSelect, onGameSelect})=>{

  let typeOptions = []
  let gameOptions = []

  for (let key in gameArray) {
    if (gameArray.hasOwnProperty(key)) {
      let gameID = gameArray[key]["_id"]
      let gameType = gameArray[key]["game_type"]
      gameOptions.push(
        {text: gameType + ": " + gameID.substring(10,), value: gameID}
      )
    }
  }

  for (let key in gameTypes) {
    if (gameTypes.hasOwnProperty(key)) {
      let type = gameTypes[key]
      typeOptions.push(
        {text: type[0], value: type[1]}
      )
    }
  }

  return (
    <Container>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <p>Select a game to view:</p>
          </Grid.Column>
          <Grid.Column key={0}>
            <Dropdown
              fluid
              defaultValue={typeOptions[0]['value']}
              options={typeOptions}
              onChange={(event, selection) => onTypeSelect(selection['value'])}
              />
          </Grid.Column>
          <Grid.Column key={1}>
            <Dropdown
              fluid
              placeholder={"Select a Game"}
              options={gameOptions}
              onChange={(event, selection) => onGameSelect(selection['value'])}
              />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    gameArray: state.gameList.gameArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTypeSelect: gameType => {dispatch(fetchGames(gameType))},
    onGameSelect: id => {
      dispatch(selectGame(id))
      dispatch(fetchStates(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSelector)
