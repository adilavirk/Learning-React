import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();
  return (
    <div className='text-4xl p-4 bg-gray-700 text-white text-center'>User:{userid}</div>
  )
}

export default User