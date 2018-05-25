import { combineReducers } from 'redux'
import gameList from './gameList'
import gameStates from './gameStates'
import playerStats from './playerStats'
import codeUpload from './codeUpload'

const battlegroundApp = combineReducers({
    gameList,
    gameStates,
    playerStats,
    codeUpload
  })

export default battlegroundApp
