import { ADD_TODO, TOGGLE_TODO } from "../constants";
import { todoState, todoActionTypes } from "../types";

export const initialState: todoState = {
  allIds: [],
  byIds: {},
};

export const todo = (
  state = initialState,
  action: todoActionTypes
): todoState => {
  switch (action.type) {
    case ADD_TODO:
      console.log("adding todo", action.payload);
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default todo;
