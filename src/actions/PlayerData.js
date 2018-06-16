import {REQUEST_PLAYER_META, RECEIVE_PLAYER_META} from "./index"



export const requestPlayerMeta = agentID => {
  return {
    type: REQUEST_PLAYER_META,
    agentID
  }
}

export const receivePlayerMeta = (agentID, data) => {
  return {
    type: RECEIVE_PLAYER_META,
    data,
    agentID
  }
}


export function fetchPlayerMetaData(playerID) {
  return function (dispatch) {
    dispatch(requestPlayerMeta(playerID))
    return fetch('/api/agents/meta/'+String(playerID))
    .then(
      response => response.json(),
      error => console.log('An error occured.', error)
    )
    .then(json =>{
      dispatch(receivePlayerMeta(playerID, json))
    }
  )
}
}
