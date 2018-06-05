import React, {Component} from 'react';
import {connect} from "react-redux"

import {Segment} from 'semantic-ui-react'
import GameTypeSelector from './GameTypeSelector'
import PlayerStatsTable from './PlayerStatsTable'
import {fetchStats} from '../actions/Stats'

class PlayerStatsViewer extends Component {

  componentDidMount(){
    this.props.populateGameList(this.props.gameType)
  }
  render(){
    var {playerStats, gameType, onTypeSelect} = this.props
    return (
      <Segment>
        <GameTypeSelector value={gameType} onChange={onTypeSelect}/>
        <PlayerStatsTable playerStats={playerStats}/>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerStats: state.playerStats.playerStats,
    gameType: state.gameList.gameType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTypeSelect: gameType => {dispatch(fetchStats(gameType))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsViewer)
