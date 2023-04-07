import React from 'react'

const todos = [
{
  title: "Start",
  isCompleted: false,
},
{
  title: 'Finish the essay collabaration',
  isCompleted: false,
},
{
  title: 'Home Work',
  isCompleted: false,
},
]

const Home = () => {
  return <div className='bg-gray-900 h-screen text-white'>Home
  
  {todos.map(todo => (<div>{todo.title}</div>))}
  </div>
}


export default Home