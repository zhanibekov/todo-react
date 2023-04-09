import React from 'react'
import { BsCheckAll } from 'react-icons/bs'


  const Check = ({isCompleted}) => {
    return (
    <div className='border-2 rounded-lg border-purple-800 w-5 h-5'>
      {isCompleted &&
        <BsCheckAll size={25} className='text-gray-900' />
      } 
    </div>
    )
  }
  export default Check