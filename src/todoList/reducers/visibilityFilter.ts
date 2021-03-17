import { VISIBILITY_FILTERS, SET_FILTER } from "../constants";
import { todoActionTypes } from "../types";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: todoActionTypes) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
