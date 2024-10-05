import React, { useEffect, useState } from 'react';
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import { createViewMonthGrid } from '@schedule-x/calendar';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import '@schedule-x/theme-default/dist/calendar.css';

const TaskScheduler = ({ tasks }) => {
  const [events, setEvents] = useState(tasks);

  const calendar = useCalendarApp(
    {
      views: [createViewMonthGrid()],
      events: events.map((task) => ({
        id : task._id,
        title : task.taskName,
        description : task.assignedTo,
        start : task.dueDate,
        end : task.dueDate,
      })), 
      selectedDate: '2024-10-01',
      plugins: [createEventModalPlugin()],
    }
  );

  return (
    <div className='w-full h-[66vh]'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default TaskScheduler;
