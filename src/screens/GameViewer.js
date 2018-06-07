import React from 'react'
import {connect} from "react-redux"

import GameSelector from '../components/GameSelector'
import GameStateViewer from '../components/GameStateViewer'
import {Segment, Container, Header, Divider} from 'semantic-ui-react'
import {selectGame} from "../actions/GameViewer"


const GameViewer = ({match, onSelectGame}) => {
  if ("gameID" in match.params){
    onSelectGame(match.params.gameID)
  }
  return (
  <Segment vertical>
    <Container>
      <Header>Watch and Learn from ongoing games or replays</Header>
      <Segment>
        <GameSelector/>
        <Divider/>
        <GameStateViewer/>
      </Segment>
    </Container>
  </Segment>
)
}

const mapStateToProps = (state, ownProps) => {
  return {
    match: ownProps.match,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectGame: (id) => dispatch(selectGame(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameViewer)
