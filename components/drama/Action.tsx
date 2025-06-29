"use client";

import React from "react";
import { ct } from "../../scripts/utils";

export type Language = 'en' | 'jp';
export type CharacterName = 'tenchou' | 'watashi' | 'customer';

export interface ActionProps {
    character?: CharacterName | string;
    children: React.ReactNode;
    className?: string;
    language?: Language;
}

const characterNames = {
    tenchou: { en: 'Manager', jp: '店長' },
    watashi: { en: 'Me', jp: '私' },
    customer: { en: 'Customer', jp: 'お客さん' }
} as const;

const Action = ({
    character,
    children,
    className,
    language = 'jp'
}: ActionProps) => {
    // Get the display name for the character
    const getCharacterName = (char: string) => {
        if (char in characterNames) {
            return characterNames[char as CharacterName][language];
        }
        return char; // Return as-is if not a predefined character
    };

    const displayCharacter = character ? getCharacterName(character) : null;

    return (
        <div className={ct(
            'my-2 p-2 bg-yellow-50 rounded border-l-2 border-yellow-400 text-sm text-gray-700',
            className
        )}>
            <span className="font-medium text-yellow-700">
                {displayCharacter ? `*${displayCharacter}* ` : '*'}
            </span>
            <span className="italic">{children}</span>
        </div>
    );
};

export default Action;
