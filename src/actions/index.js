// Actions are functions.
// Actions are called by passing them to the dispatcher from a container.
// dispatcher passes actions to reducers to update state.


export const SELECT_GAME = 'SELECT_GAME'
export const SELECT_TURN = 'SELECT_TURN'
export const SELECT_PAGE = 'SELECT_PAGE'
export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const REQUEST_STATES = 'REQUEST_STATES'
export const RECEIVE_STATES = 'RECEIVE_STATES'
export const CHANGE_AUTOPLAY = 'CHANGE_AUTOPLAY'
export const CHANGE_TEXT_STATE = 'CHANGE_TEXT_STATE'
export const AUTO_INCREMENT_TURN = 'AUTO_INCREMENT_TURN'


export const REQUEST_PLAYER_STATS = 'REQUEST_PLAYER_STATS'
export const RECEIVE_PLAYER_STATS = 'RECEIVE_PLAYER_STATS'

export const CODE_UPLOAD_ON_CHANGE = 'CODE_UPLOAD_ON_CHANGE'
export const CODE_UPLOAD_START = 'CODE_UPLOAD_START'
export const CODE_UPLOAD_FAIL = 'CODE_UPLOAD_FAIL'
export const CODE_UPLOAD_SUCCESS = 'CODE_UPLOAD_SUCCESS'
