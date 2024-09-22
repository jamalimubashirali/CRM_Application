import React from 'react'
import UpperNavigaion from './UpperNavigaion'
import Stats from './Stats'
import Charts from './Charts'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col p-5 gap-y-10'>
      <UpperNavigaion />
      <Stats />
      <Charts />
    </div>
  )
}

export default Dashboard
