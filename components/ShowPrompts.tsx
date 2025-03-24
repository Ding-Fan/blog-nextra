"use client";
// components/ShowPrompts.tsx
import React from "react";
import { PROMPTS } from "../data";
import PromptCard from "./PromptCard";
import CardPost from "./CardPost";

const ShowPrompts: React.FC = () => {
  return (
    
      <CardPost
        className="mb-2"
        post={{
          title: "AI Prompt",
          content: (
            <div>
              Usage: Copy and paste in a new ChatGPT chat.
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-1">
                {PROMPTS.map((prompt, index) => {
                  return <PromptCard key={index} prompt={prompt} />;
                })}
              </div>
            </div>
          ),
        }}
      />
    
  );
};

export default ShowPrompts;
