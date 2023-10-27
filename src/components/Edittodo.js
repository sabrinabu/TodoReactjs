import React, { useState } from 'react'

export default function Edittodo({todo, editTask}) {
  const[value, setValue]=useState(todo.task);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
      editTask(value, todo.id);
    }
  
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} placeholder="what you are thinking?" className="todo-input" onChange={(e)=> setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Update</button>
    </form>
  )
}
