import React from 'react'
import IndividualStats from './IndividualStats'

const Stats = () => {
  return (
    <div className='flex flex-row justify-between shadow-sm w-full py-4 px-20  bg-gray-100 rounded-xl'>
        <IndividualStats title = {"Customers"} number = {2000}/>
        <IndividualStats title={"Users"} number={200}/>
        <IndividualStats title={"Leads"} number={10}/>
      </div>
  )
}

export default Stats
