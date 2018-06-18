import React, { Component } from 'react';
import {connect} from "react-redux"

import LeaderStatsViewer from '../components/LeaderStatsViewer'
import SinglePlayerStats from '../components/SinglePlayerStats'

import {Container, Segment, Header} from 'semantic-ui-react'

class PlayerStats extends Component {

  componentDidMount(){
  }

  render(){
    console.log(this.props.match);
    var content
    var selector
    if ('selector' in this.props.match.params){
      selector = this.props.match.params.selector
    } else {
      selector='none'
    }

    switch (selector) {
      case 'agent':
      content = (
        <Container>
        <Header>Recent games for:</Header>
        <SinglePlayerStats match={this.props.match}/>
        </Container>
      )
      break
      default:
      content = (
        <Container>
        <Header>Top ranking agents:</Header>
        <LeaderStatsViewer/>
        </Container>
      )
    }

    return(
      <Segment vertical>
          {content}
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    match: ownProps.match,
    location: ownProps.location
  }
}

export default connect(mapStateToProps)(PlayerStats)
//
