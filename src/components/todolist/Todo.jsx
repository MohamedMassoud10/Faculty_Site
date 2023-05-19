import React from "react";
import "./todo.css";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="ED">
        <BsTrash onClick={() => deleteTodo(task.id)}></BsTrash>
        <BsPencil onClick={() => editTodo(task.id)}></BsPencil>
      </div>
    </div>
  );
};
