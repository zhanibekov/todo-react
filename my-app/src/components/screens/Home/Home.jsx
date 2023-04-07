import React from 'react'
import TodoItem from './TodoItem'

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
  <div className='bg-gray-900 h-screen text-white'>
  {todos.map(todo =>(
    <TodoItem key={todo._id} todo={todo} />
  ))}
  </div>
  )
}


export default Home