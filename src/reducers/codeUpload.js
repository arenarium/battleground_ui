// Reducers update the state
// Reducers take a subset of the application state and an action as input
// Reducers return an updated state.
import {CODE_UPLOAD_ON_CHANGE, CODE_UPLOAD_START, CODE_UPLOAD_FAIL, CODE_UPLOAD_SUCCESS} from '../actions'

const default_state = {
  formData:{'agentName': null, 'file': '', 'gameType':'arena_game_pos'},
  didSubmit:false,
  success:false
}

const codeUpload = (state = default_state, action) => {
  switch (action.type) {

    case CODE_UPLOAD_ON_CHANGE:
      var newValues = {}
      for ( var prop in state.formData ) {
        // make sure the object has this value, and not its prototype
        if ( state.formData.hasOwnProperty( prop ) ) {
          newValues[ prop ] = state.formData[ prop ];
        }
      }
      newValues[action.name] = action.value
      return {...state, formData: newValues, didSubmit:false}

    case CODE_UPLOAD_START:
      return ({...state, didSubmit: true})

    case CODE_UPLOAD_SUCCESS:
      return ({...state, success: true})

    case CODE_UPLOAD_FAIL:
      return ({...state, success: false})

    default:
      return state
  }
}


export default codeUpload
