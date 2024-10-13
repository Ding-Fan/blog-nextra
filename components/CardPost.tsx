// CardPost.tsx
import React, { ReactNode } from 'react';
import { ct } from '../scripts/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  post: {
    author: ReactNode;
    content: ReactNode;
    description?: ReactNode;
  }
}

const CardPost = ({ post, className }: Props) => {
  return (
    <div className={ct("bg-stone-50 relative", className)}>
      <div
        className='relative inline-flex left-4 px-1 bg-stone-50 font-bold'
        style={{ transform: "translateY(50%)" }}
      >
        {post.author}
      </div>
      <div className='border-2 border-solid border-black p-4'>
        {post.content}
      </div>
      {
        post.description && (
          <div
            className='relative inline-flex left-1/2 px-1 bg-stone-50 font-bold'
            style={{ transform: "translateY(-50%) translateX(-50%)" }}
          >
            {post.description}
          </div>
        )
      }
    </div>
  );
};

export default CardPost;

