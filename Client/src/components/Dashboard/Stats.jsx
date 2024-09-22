import React from 'react'
import IndividualStats from './IndividualStats'

const Stats = () => {
  return (
    <div className='flex flex-row justify-between shadow-md w-full py-4 px-20 bg-slate-50 rounded-xl'>
        <IndividualStats title = {"Customers"} number = {2000}/>
        <IndividualStats title={"Users"} number={200}/>
        <IndividualStats title={"Leads"} number={10}/>
      </div>
  )
}

export default Stats
