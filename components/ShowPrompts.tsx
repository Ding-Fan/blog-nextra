// components/ShowPrompts.tsx
import React from 'react';
import { PROMPTS } from '../data';
import PromptCard from './PromptCard';

const ShowPrompts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {PROMPTS.map((prompt) => (
        <PromptCard key={prompt.title} prompt={prompt} />
      ))}
    </div>
  );
};

export default ShowPrompts;
