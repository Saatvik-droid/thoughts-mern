import {
  GET_ALL,
  GET_ALL_ERROR,
  CREATE,
  CREATE_ERROR,
  UPDATE,
  UPDATE_ERROR,
  DELETE,
  DELETE_ERROR,
} from "../actionTypes";

const initialState = {
  thoughts: [],
  error: null,
};

export default (thoughtsState = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...thoughtsState, thoughts: action.payload, error: null };
    case GET_ALL_ERROR:
      return { ...thoughtsState, error: action.payload };
    case CREATE:
      return {
        ...thoughtsState,
        thoughts: [...thoughtsState.thoughts, action.payload],
        error: null,
      };
    case CREATE_ERROR:
      return { ...thoughtsState, error: action.payload };
    case UPDATE:
      return {
        ...thoughtsState,
        thoughts: thoughtsState.thoughts.map((thought) =>
          thought._id === action.payload_id ? action.payload : thought
        ),
        error: null,
      };
    case UPDATE_ERROR:
      return { ...thoughtsState, error: action.payload };
    case DELETE:
      return {
        ...thoughtsState,
        thoughts: thoughtsState.thoughts.filter(
          (thought) => thought._id !== action.payload.id
        ),
        error: null,
      };
    case DELETE_ERROR:
      return { ...thoughtsState, error: action.payload };
    default:
      return thoughtsState;
  }
};
