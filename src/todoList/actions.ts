import { action } from "typesafe-actions";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  FETCH_TESTIMONIALS,
  FETCH_TESTIMONIALS_SUCCESS,
  FETCH_TESTIMONIALS_ERROR,
} from "./constants";

let nextTodoId = 0;

export const addTodo = (content: string) =>
  action(ADD_TODO, { id: ++nextTodoId, content });

export const toggleTodo = (id: number) => action(TOGGLE_TODO, { id });
export const setFilter = (filter: string) => action(SET_FILTER, { filter });

export const fetchTestimonials = () => action(FETCH_TESTIMONIALS, {});
export const fetchTestimonialsSuccess = (response: any) =>
  action(FETCH_TESTIMONIALS_SUCCESS, response);
export const fetchTestimonialsError = (error: any) =>
  action(FETCH_TESTIMONIALS_ERROR, error);
