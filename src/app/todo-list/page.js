import React from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDos } from "../components/ToDos";

const TodoList = () => {
  return (
    <div>
      <div className="max-w-lg">
        <ToDoForm />
        <ToDos />
      </div>
    </div>
  );
};

export default TodoList;
