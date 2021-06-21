import * as api from '../api/index'
import * as actionTypes from '../actionTypes'

export const getThoughts = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL })
    try {
        const { data } = await api.getThoughts()
        dispatch({ type: actionTypes.GET_ALL_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createThought = (newThought) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE })
    try {
        const { data } = await api.createThought(newThought)
        dispatch({ type: actionTypes.CREATE_SUCCESS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateThought = (id, updatedThought) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE})
    try {
        const { data } = await api.updateThought(id, updatedThought)
        dispatch({ type: actionTypes.UPDATE_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteThought = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE})
    try {
        await api.deleteThought(id)
        dispatch({ type: actionTypes.DELETE_SUCCESS, payload: id })
    } catch (error) {
        console.log(error)
    }
}