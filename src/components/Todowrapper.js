import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edittodo from "./Edittodo";

export default function Todowrapper() {
  const [todos, setTodoes] = useState([]);

  const addTodo = (todo) => {
    setTodoes([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleTodo = (id) => {
    setTodoes(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoes(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodoes(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask=(task,id)=>{
     setTodoes(todos.map((todo)=>todo.id===id?{...todo, task, isEditing:!todo.isEditing}:todo));
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <Edittodo todo={todo} editTask={editTask}/>
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleTodo={deleTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}
