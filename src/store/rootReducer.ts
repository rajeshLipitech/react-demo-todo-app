import { combineReducers } from "redux";
import todos from "../todoList/reducers/todos";
import visibilityFilter from "../todoList/reducers/visibilityFilter";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
