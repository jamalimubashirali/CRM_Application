import React, { useState } from 'react'
import ReactTableComponent from './Table'
import CustomerChart from './CustomerChart'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

const Customer = () => {
  const data = useLoaderData();
  return (
    <div className='w-full flex flex-col p-5 gap-y-10'>
      <CustomerChart data={data}/>
      <ReactTableComponent data = {data}/>
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