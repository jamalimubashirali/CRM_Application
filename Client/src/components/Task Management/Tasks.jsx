import React from 'react'
import TaskScheduler from './TaskSchelduler'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';

export const taskLoader = async () => {
  try {
    const response = await axios.get('/api/tasks');
    if(response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

const Tasks = () => {
  const tasks = useLoaderData();
  return (
    <div>
      <TaskScheduler tasks={tasks}/>
    </div>
  )
}

export default Tasks
