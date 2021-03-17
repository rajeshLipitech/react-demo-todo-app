import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../todoList/actions";

interface todoInterface {
  todo: any;
  toggleTodo: any;
}
const Todo: React.FC<todoInterface> = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"} <span>{todo.content}</span>
  </li>
);

export default connect(null, { toggleTodo })(Todo);
