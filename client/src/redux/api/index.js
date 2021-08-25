import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getThoughts = () => API.get("/thoughts");
export const createThought = (newThought) => API.post("/thoughts", newThought);
export const updateThought = (id, updatedThought) =>
  API.patch(`/thoughts/${id}`, updatedThought);
export const deleteThought = (id) => API.delete(`/thoughts/${id}`);

export const signIn = (authData) => API.post("user/signin", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
