import * as api from '../api/index'

export const getThoughts = () => async (dispatch) => {
    api.getThoughts()
        .then(({ data }) => dispatch({ type: 'FETCH_ALL', payload: data }))
        .catch(error => console.log(error))
}

export const createThought = (newThought) => async (dispatch) => {
    api.createThought(newThought)
        .then(({ data }) => dispatch({ type: 'CREATE', payload: data }))
        .catch(error => console.log(error))
}

export const updateThought = (id, updatedThought) => async (dispatch) => {
    api.updateThought(id, updatedThought)
        .then(({ data }) => dispatch({ type: 'UPDATE', payload: data }))
        .catch(error => console.log(error))
}

export const deleteThought = (id) => async (dispatch) => {
    api.deleteThought(id)
        .then(() => dispatch({ type: 'DELETE', payload: id }))
        .catch(error => console.log(error))
}