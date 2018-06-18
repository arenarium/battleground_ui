import React from 'react';
import { exampleGameState } from "../data/example_arena_game_state"
import {Card, Dimmer, Container, Header}  from 'semantic-ui-react'
import AgentMetaData from './AgentMetaData'
let defaultState = JSON.parse(exampleGameState)

let colors = ["red", "green", "blue", "yellow"]

export const CurrentPlayers = ({gameState=defaultState, playerMetaData})=>{
  var playerIDs =  JSON.parse(gameState['player_ids'])

  var gladiatorData = gameState['game_state']["gladiators"]

  var gladiatorElements = []

  for (let i = 0; i < gladiatorData.length; i++) {
    let gladiator = gladiatorData[i]
    let id = playerIDs[i]
    gladiatorElements.push(
      <AgentMetaData
        metaData={playerMetaData[id]}
        health={gladiator['cur_hp']}
        color={colors[i%colors.length]}
        key={i}
        />
    )
  }

  // check for win condition
  var winnerName = '...'
  let maxIndex = 0
  var gameOver = (gameState['game_state']['game_over'] === 'True')
  if (gameOver){
    for (let i = 0; i < gladiatorData.length; i++) {
      if (gladiatorData[i]['cur_hp'] > gladiatorData[maxIndex]['cur_hp']) {
        maxIndex = i
      }
    }

    var winnerID = playerIDs[maxIndex]
    if (winnerID  in playerMetaData) {
      winnerName = playerMetaData[winnerID]['name']
    }

  }

  return (
    <Dimmer.Dimmable as={Container} dimmed={gameOver}>
    <Card.Group itemsPerRow={3}>
    {gladiatorElements}
    </Card.Group>
    <Dimmer active={gameOver}>
      <Header inverted>
      {winnerName} Wins!
      </Header>
    </Dimmer>
    </Dimmer.Dimmable>
  )
}

export default CurrentPlayers
