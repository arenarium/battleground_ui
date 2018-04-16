// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.

const playerStats = (state = {playerStats:[]}, action) => {
  switch (action.type) {
    case 'REQUEST_PLAYER_STATS':
    return ({
      ...state,
      isFetching: true,
    })
    case 'RECEIVE_PLAYER_STATS':
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