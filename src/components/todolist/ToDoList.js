import React from "react";
import { TodoWrapper } from "./TodoWrapper";
import Back from "../back/Back";
import "./todo.css";

const ToDoList = () => {
  return (
    <>
      <Back title="To Do List" />
      <TodoWrapper />
    </>
  );
};

export default ToDoList;
