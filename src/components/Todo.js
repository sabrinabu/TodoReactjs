import React from 'react'

export default function Todo({todo, deleTodo, toggleTodo, editTodo}) {
  console.log(todo)
  return (
    <div className='Todo'>
      <p onClick={()=>toggleTodo(todo.id)} className={`${todo.completed ? "completed" : "incompleted"}`}>{todo.task}</p>
      <div>
        <button onClick={()=> editTodo(todo.id)}>Edit</button>
        <button onClick={()=>deleTodo(todo.id)}>Del</button>
        
      </div>
    </div>
  )
}
