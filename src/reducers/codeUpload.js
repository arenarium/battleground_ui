// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.
import {CODE_UPLOAD_ON_CHANGE, CODE_UPLOAD_ON_SUBMIT} from '../actions'

const codeUpload = (state = {values:{'agentName': ''}}, action) => {
  switch (action.type) {

    case CODE_UPLOAD_ON_CHANGE:

    var newValues = state.values
    newValues[action.key] = action.value

    var newState = {...state, values: newValues}
    return newState

    case CODE_UPLOAD_ON_SUBMIT:

    return ({
      ...state,
        didSubmit: true,
  })
  default:
  return state
}
}


export default codeUpload
