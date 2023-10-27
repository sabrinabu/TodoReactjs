import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
  const[value, setValue]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
      addTodo(value);
    }
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} placeholder="what you are thinking?" className="todo-input" onChange={(e)=> setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}
