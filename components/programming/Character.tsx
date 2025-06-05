"use client";

import React from "react";
import { ct } from "../../scripts/utils";
import { DotGothic16 } from "next/font/google";

export type CharacterName = 'hiro' | 'sora' | 'haru';
export type Language = 'en' | 'jp';

export interface CharacterProps {
  name: CharacterName;
  language?: Language;
  className?: string;
}

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const characterNames = {
  hiro: { en: 'Hiro:', jp: 'ひろ：' },
  sora: { en: 'Sora:', jp: 'そら：' },
  haru: { en: 'Haru:', jp: 'はる：' }
} as const;

const characterStyles = {
  hiro: 'bg-red-100 text-red-800',
  sora: 'bg-sky-100 text-sky-800',
  haru: 'bg-purple-100 text-purple-800'
} as const;

const Character = ({
  name,
  language = 'en',
  className
}: CharacterProps) => {
  const displayName = characterNames[name][language];
  const styles = characterStyles[name];

  return (
    <div className={ct(
      'inline-flex items-center pl-2 pr-3 rounded-full rounded-tl-none text-xl font-bold mt-8 mb-2',
      styles,
      // '!font-dotgothic16',
      // 'dot-gothic16',
      dotGothic16.className,
      className
    )}>
      {displayName}
    </div>
  );
};

export default Character;
