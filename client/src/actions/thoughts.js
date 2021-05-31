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
        const { data } = await api.createthought(newThought)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        
    }
}