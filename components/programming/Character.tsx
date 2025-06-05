"use client";

import React from "react";
import { ct } from "../../scripts/utils";

export type CharacterName = 'hiro' | 'sora' | 'haru';
export type Language = 'en' | 'jp';

export interface CharacterProps {
  name: CharacterName;
  language?: Language;
  className?: string;
}

const characterNames = {
  hiro: { en: 'Hiro', jp: 'ひろ' },
  sora: { en: 'Sora', jp: 'そら' },
  haru: { en: 'Haru', jp: 'はる' }
} as const;

const characterStyles = {
  hiro: 'bg-red-100 text-red-800 border-red-200',
  sora: 'bg-sky-100 text-sky-800 border-sky-200',
  haru: 'bg-purple-100 text-purple-800 border-purple-200'
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
      'inline-flex items-center px-5 py-1 rounded-full rounded-tl-none border text-2xl md:text-3xl font-bold mt-8 mb-2',
      'font-dotgothic16',
      styles,
      className
    )}>
      {displayName}
    </div>
  );
};

export default Character;
