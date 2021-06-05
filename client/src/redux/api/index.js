import axios from 'axios'

const url = 'http://localhost:5000/thoughts'

export const getThoughts = () => axios.get(url)
export const createThought = (newThought) => axios.post(url, newThought)
export const updateThought = (id, updatedThought) => axios.patch(`${url}/${id}`, updatedThought)
export const deleteThought = (id) => axios.delete(`${url}/${id}`)
