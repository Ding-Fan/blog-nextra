import React from 'react';
import CalendarPart from './CalendarPart';
import TaskPillPart from './TaskPillPart';

const TokyoCalendar = () => {
  return (
    <div className="grid grid-cols-7">
      <CalendarPart />
      <TaskPillPart />
    </div>
  );
};

export default TokyoCalendar;
