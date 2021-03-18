import {
  FETCH_TESTIMONIALS,
  FETCH_TESTIMONIALS_ERROR,
  FETCH_TESTIMONIALS_SUCCESS,
} from "../constants";
import { todoActionTypes, testimonialState } from "../types";

export const initialState: testimonialState = {
  loading: false,
  data: null,
  error: null,
};

export const testimonial = (
  state = initialState,
  action: todoActionTypes
): testimonialState => {
  switch (action.type) {
    case FETCH_TESTIMONIALS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TESTIMONIALS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_TESTIMONIALS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default testimonial;
