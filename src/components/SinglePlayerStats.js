import React, {Component} from 'react';
import {connect} from "react-redux"

import {Segment} from 'semantic-ui-react'
import {fetchSinglePlayerStats} from '../actions/Stats'

import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SinglePlayerStats extends Component {

  componentDidMount(){
    this.props.loadStats(this.props.match.params.id)
  }

  render(){
    var playerStats = this.props.playerStats
    let listItemArray=[]

    let i=0

    for (let key in playerStats) {
      if (playerStats.hasOwnProperty(key)) {

        let gameID = playerStats[key]['game_id']
        let time = playerStats[key]['time']
        let score = playerStats[key]['score']
        let win = playerStats[key]['win']

        listItemArray.push(
          <Table.Row key={i} positive={win} negative={!win}>
            <Table.Cell>
              <Link to={'/games/'+gameID}>
              {gameID}
              </Link>
            </Table.Cell>
            <Table.Cell>
              {time}
            </Table.Cell>
            <Table.Cell>
              {score}
            </Table.Cell>
          </Table.Row>
        )
        i+=1;
      }
    }

    console.log(playerStats);
    return (
      <Segment>
        <Table celled padded selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Game id</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {listItemArray}
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerStats: state.playerStats.playerStats,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadStats: playerID => {dispatch(fetchSinglePlayerStats(playerID))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerStats)
