import axios from "axios";

// Cannot access store outside a react hook, so I am directly subscribing to the store.
import { store } from "../store";

let user;

const getUser = () => {
  user = store.getState().authState.authData;
};

store.subscribe(getUser);

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (user) req.headers.Authorization = `Bearer ${user.token}`;

  return req;
});

export const getThoughts = () => API.get("/thoughts");
export const createThought = (newThought) => API.post("/thoughts", newThought);
export const updateThought = (id, updatedThought) =>
  API.patch(`/thoughts/${id}`, updatedThought);
export const deleteThought = (id) => API.delete(`/thoughts/${id}`);

export const signIn = (authData) => API.post("user/signin", authData);
export const signUp = (authData) => API.post("/user/signup", authData);
