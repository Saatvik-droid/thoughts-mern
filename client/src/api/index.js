import axios from 'axios'

const url = 'http://localhost:5000/thoughts'

export const getThoughts = () => axios.get(url)
export const createthought = (newThought) => axios.post(url, newThought)
