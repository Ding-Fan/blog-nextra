import React from 'react';
import Ruby from './Ruby';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Word {
  ruby: string
  content: string
}

interface Synonym {
  content: Word[]
}

interface Props {
  words?: Word[]
  synonyms?: Synonym[]
}

const WordList = ({ words = [], synonyms = [] }: Props) => {

  const search = (text: string) => {
    window.open(`https://dictionary.goo.ne.jp/word/${text}`, '_blank');
  }

  return (
    <div className='text-sm md:text-base'>
      <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
        {
          words.map((word, index) => (
            <div key={index} className='flex items-baseline gap-2'>
              <Ruby className='border-b border-l pl-1 border-solid border-teal-800' ruby={word.ruby}>{word.content}</Ruby>
              <div onClick={() => search(word.content)}>
                <FontAwesomeIcon icon={faSearch} className='cursor-pointer text-base self-start text-teal-800' />
              </div>
            </div>
          ))
        }
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-6'>
        {
          synonyms.map((synonym, index) => {
            return (
              <div key={index} className='flex gap-2 border border-solid border-cyan-600 p-2 place-content-center'>
                {
                  synonym.content.map((word, index) => (
                    <div key={index}>
                      <Ruby className='border-b border-l pl-1 border-solid border-teal-800' ruby={word.ruby}>{word.content}</Ruby>
                    </div>
                  ))
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default WordList;
