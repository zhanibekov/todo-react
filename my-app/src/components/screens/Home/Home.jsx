import TodoItem from './item/TodoItem'
import React, { useState } from 'react';  

const data = [
{
  _id: 'wefw23232',
  title: "Start",
  isCompleted: false,
},
{
  _id: 'wefw23233',
  title: 'in progress',
  isCompleted: false,
},
{
  _id: 'wefw23234',
  title: 'Home Work',
  isCompleted: false,
},
{
  _id: 'wefw23235',
  title: 'Finish the essay Abay Kunanbayev',
  isCompleted: false,
},
{
  _id: 'wefw23236',
  title: 'Finish the essay Abay Kunanbayev',
  isCompleted: false,
}

]

const Home = () => {                                  // Л //
  const [todos, setTodos] = useState(data)            // О //                                               //
    const changeTodo = id => {                        // Г //
    const copy = [...todos]                           // И //
    const current = copy.find(t => t._id === id)      // К //
    current.isCompleted = !current.isCompleted        // А //
    setTodos(copy)                                 //<------->//
  } 

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id !== id))
  }

  const addTodo = () => {

  }
  return ( 
  <div className='text-white w-4/5 mx-auto'> 
    <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
  {todos.map(todo =>(
    <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo = {removeTodo} />
  ))}
  </div>
  )
}


export default Home