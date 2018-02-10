import React from 'react'
import GameSelector from '../components/GameSelector'
import GameStateViewer from '../components/GameStateViewer'
import {Segment, Container, Header, Button, Divider} from 'semantic-ui-react'
import gameTypes from '../data/gameTypes'

const GameViewer =() => (
  <Segment vertical>
    <Container>
      <Header>Watch and Learn from ongoing games or replays</Header>
      <Segment>
        <GameSelector />
        <Divider/>
        <GameStateViewer/>
      </Segment>
    </Container>
  </Segment>
)

export default GameViewer
