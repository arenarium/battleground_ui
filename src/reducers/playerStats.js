// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.

import {REQUEST_PLAYER_STATS, RECEIVE_PLAYER_STATS, RECEIVE_LEADER_STATS, REQUEST_LEADER_STATS} from "../actions"


const playerStats = (state = {leaderStats:[]}, action) => {
  switch (action.type) {
    case REQUEST_LEADER_STATS:
    return ({
      ...state,
      isFetching: true,
    })
    case RECEIVE_LEADER_STATS:
    return ({
      ...state,
      isFetching: false,
      leaderStats: action.data,
    })
    case REQUEST_PLAYER_STATS:
    return ({
      ...state,
      isFetching: true,
    })
    case RECEIVE_PLAYER_STATS:
    return ({
      ...state,
      isFetching: false,
      playerStats: action.data,
    })
    default:
    return state
  }
}


export default playerStats
