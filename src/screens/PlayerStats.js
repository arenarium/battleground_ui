import React, { Component } from 'react';
import PlayerStatsViewer from '../components/PlayerStatsViewer'
import GameTypeSelector from '../components/GameTypeSelector'
import {Container, Segment} from 'semantic-ui-react'

class PlayerStats extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return(
      <Segment vertical>
        <Container>
          <PlayerStatsViewer/>
        </Container>
      </Segment>
    )
  }
}

export default PlayerStats;
//
