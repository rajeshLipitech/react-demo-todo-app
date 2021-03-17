import { VISIBILITY_FILTERS } from "./constants";

export const getTodosState = (store: any) => store.todos;

export const getTodoList = (store: any) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: any, id: number) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = (store: any) => {
  return getTodoList(store).map((id: number) => {
    return getTodoById(store, id);
  });
};

export const getTodosByVisibilityFilter = (
  store: any,
  visibilityFilter: string
) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo: any) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo: any) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
