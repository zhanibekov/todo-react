import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

const TodoItem = ({ todo }) => {
  return (
    <div>
    <BsCheckAll />    
    {todo.title}
    </div>
  )
}

export default TodoItem