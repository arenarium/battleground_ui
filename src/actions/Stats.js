import {REQUEST_PLAYER_STATS, RECEIVE_PLAYER_STATS, RECEIVE_LEADER_STATS, REQUEST_LEADER_STATS} from "./index"


export const requestLeaderStats = gameType => {
  return {
    type: REQUEST_LEADER_STATS,
    gameType
  }
}

export const receiveLeaderStats = data => {
  return {
    type: RECEIVE_LEADER_STATS,
    data
  }
}

export const requestPlayerStats = agentID => {
  return {
    type: REQUEST_PLAYER_STATS,
    agentID
  }
}

export const receivePlayerStats = data => {
  return {
    type: RECEIVE_PLAYER_STATS,
    data
  }
}

export function fetchLeaderStats(gameType) {
  return function (dispatch) {
    dispatch(requestLeaderStats(gameType))
    return fetch('/api/stats/'+gameType)
    .then(
      response => response.json(),
      error => console.log('An error occured.', error)
    )
    .then(json =>{
      dispatch(receiveLeaderStats(json))
    }
  )
  }
}


export function fetchSinglePlayerStats(agentID) {
  return function (dispatch) {
    dispatch(requestPlayerStats(agentID))
    return fetch('/api/agents/'+agentID)
    .then(
      response => response.json(),
      error => console.log('An error occured.', error)
    )
    .then(json =>{
      dispatch(receivePlayerStats(json))
    }
  )
  }
}
