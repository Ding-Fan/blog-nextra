"use client";
// TaskPillPart.tsx
import React from 'react';
import CardBlock from './CardBlock';
import dayjs from 'dayjs-setup';

const TaskPillPart: React.FC = () => {
  const CARD_DATA = [
    {
      id: '2',
      content: 'タスク1',
      startTime: dayjs(),
      category: 'hygiene',
      interval: dayjs.duration(2, 'minutes').asMilliseconds(),
    },
    {
      id: '3',
      content: 'タスク2',
      startTime: dayjs(),
      category: 'hygiene',
      interval: dayjs.duration(2, "minutes").asMilliseconds(),
    },
    {
      id: '4',
      content: 'タスク3',
      startTime: dayjs(),
      category: 'hygiene',
      interval: dayjs.duration(2, "minutes").asMilliseconds(),
    },
    {
      id: '5',
      content: 'タスク4',
      startTime: dayjs(),
      category: 'hygiene',
      interval: dayjs.duration(2, "minutes").asMilliseconds(),
    },
  ];

  // Create an array with 7 slots to represent the columns
  const numColumns = 7;
  const cells = Array.from({ length: numColumns }, (_, idx) => CARD_DATA[idx]);

  return (
    <>
      {cells.map((card, idx) => (
        <div key={idx} className="border h-16 flex items-center justify-center">
          {card ? (
            <CardBlock
              id={card.id}
              type='pill'
              content={card.content}
              category={card.category}
              startTime={card.startTime}
              className="h-6 w-full"
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default TaskPillPart;
