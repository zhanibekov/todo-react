import React from 'react'
import Check from './Check'
const TodoItem = ({ todo }) => {
  return (
    <div className='flex items-center mb-4 rounded-2xl bg-slate-800 p-5'>
      <Check />
    {todo.title}
    </div>
  )
}

export default TodoItem