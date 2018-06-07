// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.

const gameList = (state = {didInvalidate: true, gameArray:[], gameType:'arena_game_pos', gameID:null}, action) => {
  switch (action.type) {
    case 'SELECT_GAME':
    return ({
      ...state,
      gameID: action.id
    })
    case 'REQUEST_GAMES':
    return ({
      ...state,
      isFetching: true,
      didInvalidate: false,
      gameType:action.gameType
    })
    case 'RECEIVE_GAMES':
    return ({
      ...state,
      isFetching: false,
      didInvalidate: false,
      gameArray: action.data,
    })
    default:
    return state
  }
}


export default gameList
