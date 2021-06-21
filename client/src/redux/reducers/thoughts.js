import * as actionTypes from '../actionTypes'

const initialState = {
    thoughts: [],
    loading: false,
    error: null
}

export default (thoughtsState = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL:
            return { ...thoughtsState, loading: true }
        case actionTypes.GET_ALL_SUCCESS:
            return { ...thoughtsState, thoughts: action.payload, loading: false, error: null }
        case actionTypes.GET_ALL_ERROR:
            return { ...thoughtsState, loading: false, error: action.payload }
        case actionTypes.CREATE:
            return { ...thoughtsState, loading: true}
        case actionTypes.CREATE_SUCCESS:
            return { ...thoughtsState, thoughts: [...thoughtsState.thoughts, action.payload], loading: false }
        case actionTypes.CREATE_ERROR: 
            return { ...thoughtsState, loading: false, error: action.payload }
        case actionTypes.UPDATE:
            return { ...thoughtsState, loading: true }
        case actionTypes.UPDATE_SUCCESS:
            return { ...thoughtsState, thoughts: thoughtsState.thoughts.map((thought) => (thought._id === action.payload_id ? action.payload : thought)), loading: false, error: null }
        case actionTypes.UPDATE_ERROR:
            return { ...thoughtsState, loading: false, error: action.payload }
        case actionTypes.DELETE:
            return { ...thoughtsState, loading: true}
        case actionTypes.DELETE_SUCCESS:
            return { ...thoughtsState, thoughts: thoughtsState.thoughts.filter(thought => thought._id !== action.payload.id), loading: false, error: null }
        case actionTypes.DELETE_ERROR:
            return { ...thoughtsState, loading: false, error: action.payload }
        default: return thoughtsState
    }
}