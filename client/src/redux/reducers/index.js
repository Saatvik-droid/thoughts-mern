import { combineReducers } from 'redux'

import thoughtsReducer from './thoughts'

export default combineReducers({ thoughtsState: thoughtsReducer })