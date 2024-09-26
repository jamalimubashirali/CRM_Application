import React from 'react'
import ReactTableComponent from './Table'
import CustomerChart from './CustomerChart'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

const Customer = () => {
  const data = useLoaderData();
  return (
    <div className='w-full flex flex-col p-5 gap-y-10'>
      <CustomerChart />
      <div className='w-full gap-y-2'>
        <div className='mb-4 flex flex-row justify-between'>
        <button className='px-3 py-1 bg-green-600 text-white text-xl rounded-md'>
          Create
        </button>
        <input
          className='border-2 border-gray-300 p-2 w-1/3 rounded-xl outline-gray-400 bg-slate-200'
          placeholder='Search' 
          type="text" />
        </div>
            <ReactTableComponent data = {data}/>
      </div>
    </div>
  )
}

export default Customer

export const getCustomers = async () => {
  try {
    const response = await axios.get('/api/customer');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};