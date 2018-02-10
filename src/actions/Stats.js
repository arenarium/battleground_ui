import {REQUEST_PLAYER_STATS, RECEIVE_PLAYER_STATS} from "./index"


export const requestPlayerStats = gameType => {
  return {
    type: REQUEST_PLAYER_STATS,
    gameType
  }
}

export const receivePlayerStats = data => {
  return {
    type: RECEIVE_PLAYER_STATS,
    data
  }
}

export function fetchStats(gameType) {
  return function (dispatch) {
    dispatch(requestPlayerStats(gameType))
    return fetch('/api/stats/'+gameType)
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
