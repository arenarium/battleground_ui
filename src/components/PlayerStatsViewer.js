import React from 'react';
import {connect} from "react-redux"

import {Segment, Table} from 'semantic-ui-react'
import GameTypeSelector from './GameTypeSelector'
import PlayerStatsTable from './PlayerStatsTable'
import {fetchStats} from '../actions/Stats'

export const PlayerStatsViewer = ({playerStats, gameType, onTypeSelect}) => {
  return (
    <Segment>
      <GameTypeSelector value={gameType} onChange={onTypeSelect}/>
      <PlayerStatsTable playerStats={playerStats}/>
    </Segment>
  )
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
