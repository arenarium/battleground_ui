import React, {Component} from 'react';
import {connect} from "react-redux"
// import {push} from 'react-router-redux'

import {Segment, Header} from 'semantic-ui-react'
import GameTypeSelector from './GameTypeSelector'
import LeaderBoardTable from './LeaderBoardTable'
import {fetchLeaderStats} from '../actions/Stats'

class LeaderStatsViewer extends Component {

  componentDidMount(){
    console.log(this.props);
    this.props.onTypeSelect(this.props.gameType)
  }

  render(){
    console.log(this.props)
    var {playerStats, gameType, onTypeSelect} = this.props
    return (
      <Segment>
        <Header>Top ranking agents:</Header>
        <GameTypeSelector value={gameType} onChange={onTypeSelect}/>
        <LeaderBoardTable playerStats={playerStats} onClick={()=>{}}/>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerStats: state.playerStats.leaderStats,
    gameType: state.gameList.gameType,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTypeSelect: gameType => {dispatch(fetchLeaderStats(gameType))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderStatsViewer)
