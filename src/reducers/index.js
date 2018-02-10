import { combineReducers } from 'redux'
import gameList from './gameList'
import gameStates from './gameStates'
import playerStats from './playerStats'

const battlegroundApp = combineReducers({
    gameList,
    gameStates,
    playerStats,
})

export default battlegroundApp
