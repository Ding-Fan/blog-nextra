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
      <div className='relative top-1/2 font-bold'>
        {post.author}
      </div>
      <div className='border-2 border-solid border-black p-4'>
        {post.content}
      </div>
      <div>
        {post.description}
      </div>
    </div>
  );
};

export default CardPost;

