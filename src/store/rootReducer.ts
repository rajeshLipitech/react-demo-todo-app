import { combineReducers } from "redux";
import todos from "../todoList/reducers/todos";
import visibilityFilter from "../todoList/reducers/visibilityFilter";
import testimonial from "./../todoList/reducers/testimonials";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  testimonial,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
