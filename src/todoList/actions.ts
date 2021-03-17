import { action } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./constants";

let nextTodoId = 0;

export const addTodo = (content: string) =>
  action(ADD_TODO, { id: ++nextTodoId, content });

export const toggleTodo = (id: number) => action(TOGGLE_TODO, { id });
export const setFilter = (filter: string) => action(SET_FILTER, { filter });
