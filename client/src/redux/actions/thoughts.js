import * as api from '../api/index'

export const getThoughts = () => async (dispatch) => {
    try {
        const { data } = await api.getThoughts()

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createThought = (newThought) => async (dispatch) => {
    try {
        const { data } = await api.createThought(newThought)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateThought = (id, updatedThought) => async (dispatch) => {
    try {
        const { data } = await api.updateThought(id, updatedThought)

        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteThought = (id) => async (dispatch) => {
    try {
        await api.deleteThought(id)

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error)
    }
}