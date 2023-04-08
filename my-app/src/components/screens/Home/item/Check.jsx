import React from 'react'
import { BsCheckAll } from 'react-icons/bs'


  const Check = ({isCompleted}) => {
    return(
      <div>
        {isCompleted &&
        <BsCheckAll size={24} className='bg-gray-900' />
        }
      </div>
    )
  }
export default Check