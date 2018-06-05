import React, { Component } from 'react';
import PlayerStatsViewer from '../components/PlayerStatsViewer'
import {Container, Segment} from 'semantic-ui-react'

class PlayerStats extends Component {

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
