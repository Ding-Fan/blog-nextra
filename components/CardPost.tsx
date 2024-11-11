// CardPost.tsx
import React from 'react';
import { ct } from '../scripts/utils';
import { Post } from '../data/types';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
}

const CardPost = ({ post, className }: Props) => {
  return (
    <div className={ct("relative", className)}>
      <div className='p-2 pt-6 font-quote-content'>
        {post.content}
      </div>
      {/* learn from this */}
      {/* https://mui.com/material-ui/react-text-field/ */}
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend */}
      <fieldset className='p-2 border border-solid border-indigo-900 absolute -top-[10px] left-0 bottom-0 right-0 pointer-events-none' >
        {
          (post.author || post.title) && (
            <legend
              className='px-2 text-lg font-semibold font-serif text-indigo-900'
            >
              {post.author || (post.title as string)?.toUpperCase()}
            </legend>
          )
        }
      </fieldset>

      {
        post.description && (
          <div>
            <div className='ml-auto p-2 w-fit text-xs truncate '>
              {post.description}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default CardPost;

