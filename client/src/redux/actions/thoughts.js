import { push } from "connected-react-router";

import * as api from "../api";
import {
  GET_ALL,
  GET_ALL_ERROR,
  CREATE,
  CREATE_ERROR,
  UPDATE,
  UPDATE_ERROR,
  LIKE,
  LIKE_ERROR,
  DELETE,
  DELETE_ERROR,
} from "../actionTypes";

export const getThoughts = () => async (dispatch) => {
  try {
    const { data } = await api.getThoughts();
    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createThought = (newThought) => async (dispatch) => {
  try {
    const { data } = await api.createThought(newThought);
    dispatch({ type: CREATE, payload: data });
    dispatch(push("/"));
  } catch (error) {
    console.log(error);
  }
};

export const updateThought = (id, updatedThought) => async (dispatch) => {
  try {
    const { data } = await api.updateThought(id, updatedThought);
    dispatch({ type: UPDATE, payload: data });
    dispatch(push("/"));
  } catch (error) {
    console.log(error);
  }
};

export const likeThought = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeThought(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteThought = (id) => async (dispatch) => {
  try {
    await api.deleteThought(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
