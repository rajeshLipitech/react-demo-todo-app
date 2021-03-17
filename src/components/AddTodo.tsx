import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../todoList/actions";

interface addTodoTypes {
  addTodo: any;
}

const AddTodo: React.FC<addTodoTypes> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    addTodo(input);
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
