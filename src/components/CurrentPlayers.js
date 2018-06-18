import React from 'react';
import { exampleGameState } from "../data/example_arena_game_state"
import {Card}  from 'semantic-ui-react'
import AgentMetaData from './AgentMetaData'
let defaultState = JSON.parse(exampleGameState)

let colors = ["red", "green", "blue", "yellow"]

export const CurrentPlayers = ({gameState=defaultState, playerMetaData})=>{
  var playerIDs =  JSON.parse(gameState['player_ids'])

  var gladiatorData = gameState['game_state']["gladiators"]

  var gladiatorElements = []

  for (var i = 0; i < gladiatorData.length; i++) {
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

  return (
    <Card.Group itemsPerRow={3}>
    {gladiatorElements}
    </Card.Group>
  )
}

export default CurrentPlayers
