import React from 'react';
import { exampleGameState } from "../data/example_arena_game_state"
import {Card}  from 'semantic-ui-react'

let defaultState = JSON.parse(exampleGameState)

let colors = ["red", "green", "blue", "yellow"]

const Gladiator = ({name, color, health}) => {
  return(
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          Health: {health}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export const CurrentPlayers = ({gameState=defaultState, playerMetaData})=>{
  var playerIDs =  JSON.parse(gameState['player_ids'])

  var gladiatorData = gameState['game_state']["gladiators"]

  var gladiatorElements = []

  for (var i = 0; i < gladiatorData.length; i++) {
    let gladiator = gladiatorData[i]
    let id = playerIDs[i]
    let name = playerMetaData[id]['name']
    gladiatorElements.push(
      <Gladiator
        name={name}
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
