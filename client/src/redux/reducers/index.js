import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import thoughtsReducer from './thoughts'

export default(history) => combineReducers({ 
    router: connectRouter(history),
    thoughtsState: thoughtsReducer
})