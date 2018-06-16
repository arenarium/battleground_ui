// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.

import {REQUEST_PLAYER_META, RECEIVE_PLAYER_META}  from "../actions"


const playerStats = (state = {players:{}}, action) => {
  switch (action.type) {

    case REQUEST_PLAYER_META:
    return ({
      ...state,
      isFetching: true,
    })

    case RECEIVE_PLAYER_META:
    var newValues = {}
    for ( var prop in state.players ) {
      // make sure the object has this value, and not its prototype
      if ( state.players.hasOwnProperty( prop ) ) {
        newValues[ prop ] = state.players[ prop ];
      }
    }
    newValues[action.agentID] = action.data
    return ({
      ...state,
      isFetching: false,
      players: newValues,
    })

    default:
    return state
  }
}


export default playerStats
