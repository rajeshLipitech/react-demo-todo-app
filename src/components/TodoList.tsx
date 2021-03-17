import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../todoList/selectors";

interface todoList {
  todos: any;
}
const TodoList: React.FC<todoList> = ({ todos }) => (
  <>
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: any, index: number) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  </>
);

const mapStateToProps = (state: any) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);

  return { todos };
};

export default connect(mapStateToProps)(TodoList);
