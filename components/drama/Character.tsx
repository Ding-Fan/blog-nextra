"use client";

import React from "react";
import { ct } from "../../scripts/utils";

export type CharacterName = 'tenchou' | 'watashi' | 'customer';
export type Language = 'en' | 'jp';

export interface CharacterProps {
    name: CharacterName;
    children: React.ReactNode;
    language?: Language;
    className?: string;
    emotion?: 'normal' | 'angry' | 'happy' | 'confused' | 'tired' | 'excited';
}

const characterData = {
    tenchou: {
        names: { en: 'Manager', jp: '店長' },
        description: 'Old otaku manager with cap and glasses',
        colors: 'bg-orange-100 text-orange-800 border-orange-200',
        avatar: '👨‍💼'
    },
    watashi: {
        names: { en: 'Me', jp: '私' },
        description: 'Young blonde girl learning Japanese',
        colors: 'bg-pink-100 text-pink-800 border-pink-200',
        avatar: '👱‍♀️'
    },
    customer: {
        names: { en: 'Customer', jp: 'お客さん' },
        description: 'Store customer',
        colors: 'bg-blue-100 text-blue-800 border-blue-200',
        avatar: '🧑‍💼'
    }
} as const;

const emotionStyles = {
    normal: '',
    angry: 'shadow-red-200 shadow-lg',
    happy: 'shadow-yellow-200 shadow-lg',
    confused: 'shadow-gray-200 shadow-lg',
    tired: 'shadow-purple-200 shadow-lg',
    excited: 'shadow-green-200 shadow-md animate-pulse [animation-duration:2s]'
} as const;

const Character = ({
    name,
    children,
    language = 'jp',
    emotion = 'normal',
    className
}: CharacterProps) => {
    const character = characterData[name];
    const displayName = character.names[language];

    return (
        <div className={ct(
            'my-4 p-4 rounded-lg border-l-4 border-2',
            character.colors,
            emotionStyles[emotion],
            className
        )}>
            <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{character.avatar}</span>
                <div>
                    <h4 className="font-bold text-lg">{displayName}</h4>
                    <p className="text-xs opacity-70">{character.description}</p>
                </div>
            </div>
            <div className="text-base leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export default Character;
