import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const todoListHandler = (event) => {
    event.preventDefault();

    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
  };

  return (
    <div>
      <form onSubmit={todoListHandler}>
        <input type="text" value={todo} onChange={inputHandler} />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
