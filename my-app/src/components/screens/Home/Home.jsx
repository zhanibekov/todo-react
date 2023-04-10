import React from 'react'
import TodoItem from './item/TodoItem'

const todos = [
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
}
]

const Home = () => {
  return ( 
  <div className='text-white w-4/5 mx-auto'> 
    <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
  {todos.map(todo =>(
    <TodoItem key={todo._id} todo={todo} />
  ))}
  </div>
  )
}


export default Home