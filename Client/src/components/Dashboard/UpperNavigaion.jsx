import React from 'react'

const UpperNavigaion = () => {
  return (
    <div className=' p-3 flex flex-row justify-between'>
      <h1 className='text-3xl'>Welcome, Username</h1>
      <input
      className='border-2 p-2 w-1/3 rounded-xl outline-gray-400 bg-slate-100'
      type="text" 
      name="" id="" 
      placeholder='Search'
       />
    </div>
  )
}

export default UpperNavigaion
