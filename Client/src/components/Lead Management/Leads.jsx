import React from 'react'
import LeadsChart from './LeadsChart'
import LeadsTable from './LeadsTable'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

export const leadsData = async () => {
  try {
    const response = await axios.get('/api/leads');
    if(response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return `An Error occured during data fetch ${error}`;
  }
}

const Leads = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className='w-full flex flex-col p-5 gap-y-10'>
      <LeadsChart />
      <LeadsTable leadsData={data}/>
    </div>
  )
}

export default Leads;
