import { AUTH } from "../actionTypes";
import * as api from "../api";

export const signIn = (authData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(authData);
    dispatch({ type: AUTH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (authData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: AUTH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
