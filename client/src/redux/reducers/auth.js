import { AUTH, LOGOUT } from '../actionTypes'

const initialState = {
    authData: null
}

export default (authState = initialState, action) => {
    switch(action.type) {
        case AUTH:
            return { ...authState, authData: action.payload }
        case LOGOUT:
            return authState
        default:
             return authState
    }

}