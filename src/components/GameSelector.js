import React, { Component } from 'react';
import {connect} from "react-redux"
import {Dropdown, Grid, Container} from 'semantic-ui-react'
import {GameTypeSelector} from './GameTypeSelector'
import {selectGame, fetchStates, fetchGames} from "../actions/GameViewer"
import {push} from 'react-router-redux'

class GameSelector extends Component {

  componentDidMount(){
      this.props.populateGameList(this.props.selectedType)
      if (this.props.gameID){
        this.props.onGameSelect(this.props.gameID)
      }
  }

  render(){
    var  {gameArray, selectedType, onGameSelect} = this.props
    var onTypeSelect = this.props.onTypeSelect
    // console.log(onTypeSelect);
    // console.log(selectedType);
    let gameOptions = []

    let containsSelected=false

    for (let key in gameArray) {
      if (gameArray.hasOwnProperty(key)) {
        let gameID = gameArray[key]["_id"]
        if (gameID === this.props.gameID){
          containsSelected = true
        }
        let gameType = gameArray[key]["game_type"]
        gameOptions.push(
        {text: gameType + ": " + gameID.substring(10,), value: gameID}
        )
      }
    }

    if (this.props.gameID & !containsSelected){
      gameOptions.push(
      {text: selectedType + ": " + this.props.gameID.substring(10,), value: this.props.gameID}
      )
    }

    return (
      <Container>
      <Grid>
      <Grid.Row columns={4}>
        <Grid.Column>
          <p>Select a game to view:</p>
        </Grid.Column>
        <Grid.Column key={0}>
          <GameTypeSelector
            fluid={true}
            value={selectedType}
            onChange={onTypeSelect}
            />
        </Grid.Column>
        <Grid.Column key={1}>
          <Dropdown
            fluid
            value={this.props.gameID}
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
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
return {
gameArray: state.gameList.gameArray,
selectedType: state.gameList.gameType,
gameID: state.gameList.gameID
}
}

const mapDispatchToProps = dispatch => {
return {
populateGameList: gameType => {
  dispatch(fetchGames(gameType))
  },
onTypeSelect: gameType => {
  // console.log(gameType);
  dispatch(fetchGames(gameType))},
onGameSelect: id => {
  dispatch(selectGame(id))
  dispatch(push('/games/'+id))
  dispatch(fetchStates(id))
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSelector)
