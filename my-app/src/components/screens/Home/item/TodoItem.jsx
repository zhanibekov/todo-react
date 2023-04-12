import React from 'react'
import cn from 'classnames'
import Check from './Check'
import {FcFullTrash} from 'react-icons/fc'
const TodoItem = ({ todo, changeTodo }) => {
  return (
    <button className='flex items-center mb-4 rounded-2xl bg-slate-800 p-5 w-full'
    onClick={()=> changeTodo(todo._id)}>
      <Check isCompleted={todo.isCompleted}/>
    <span className={cn({
      'line-through': todo.isCompleted,
    })}>{todo.title}</span>
    <FcFullTrash  size={24}/>
    </button>
  )
}

export default TodoItem