// CalendarPart.tsx
import React from 'react';

const CalendarPart = () => {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay = firstDayOfMonth.getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = [];

  // Fill the first week with empty cells if necessary
  for (let i = 0; i < startingDay; i++) {
    week.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // Push the last week if it has any days
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  return (
    <>
      {/* Render the days of the week */}
      {daysOfWeek.map((dayName) => (
        <div key={dayName} className="text-center font-bold bg-gray-200 p-2 border">
          {dayName}
        </div>
      ))}
      {/* Render the days */}
      {weeks.flat().map((day, idx) => {
        const isToday =
          day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

        return (
          <div
            key={idx}
            className={`text-center p-2 border h-24 ${isToday ? 'bg-blue-200' : ''}`}
          >
            {day ? day : ''}
          </div>
        );
      })}
    </>
  );
};

export default CalendarPart;
