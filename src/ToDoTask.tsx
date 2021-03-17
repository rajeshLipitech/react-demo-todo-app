import React from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

const Container = styled.div`
  margin-left: 10px;
`;
export default function TodoApp() {
  return (
    <Container>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </Container>
  );
}
