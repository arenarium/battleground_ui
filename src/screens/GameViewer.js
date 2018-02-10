import React from 'react'
import GameSelector from '../components/GameSelector'
import GameStateViewer from '../components/GameStateViewer'
import {Segment, Container, Header, Button, Divider} from 'semantic-ui-react'


const gameTypes = [
  ["Basic Game", "basic_game"],
  ["Arena Basic", "arena_game_pos"],
  ["Arena Perception", "arena_game_perc"],
]

const GameViewer =() => (
  <Segment vertical>
    <Container>
      <Header>Watch and Learn from ongoing games or replays</Header>
      <Segment>
        <GameSelector gameTypes={gameTypes}/>
        <Divider/>
        <GameStateViewer/>
      </Segment>
    </Container>
  </Segment>
)

export default GameViewer
