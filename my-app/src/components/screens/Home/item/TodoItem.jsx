import React from 'react'
import cn from 'classnames'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'
const TodoItem = ({ todo, changeTodo , removeTodo }) => {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-slate-800 p-5 w-full'>
    <button className='flex items-center' onClick={()=> changeTodo(todo._id)}>
      <Check isCompleted={todo.isCompleted}/>
    <span className={cn({
      'line-through': todo.isCompleted,
    })}>{todo.title}
    </span>
    </button>
    <button onClick={() => removeTodo(todo._id)}>
    <BsTrash size={24} className='text-gray-600 hover:text-pink-700 
    transition-color ease-in-out duration-300'/>
    </button>             
    </div>    ////// КОМПОНЕНТ TRASH  ////
  )
}

export default TodoItem