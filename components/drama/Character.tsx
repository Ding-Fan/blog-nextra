"use client";

import React from "react";
import { ct } from "../../scripts/utils";
import { Avatar } from "../Avatar";

export type CharacterName = 'tenchou' | 'watashi' | 'customer';
export type Language = 'en' | 'jp';

export interface CharacterProps {
    name: CharacterName;
    children: React.ReactNode;
    language?: Language;
    className?: string;
    emotion?: 'normal' | 'angry' | 'happy' | 'confused' | 'tired' | 'excited' | 'embarrassed' | 'thoughtful' | 'curious';
    avatar?: string; // Optional custom avatar image path
    noAvatar?: boolean; // Set to true to disable avatar display
    isAction?: boolean; // Set to true for action descriptions
}

const characterData = {
    tenchou: {
        names: { en: 'Manager', jp: '店長' },
        colors: 'bg-orange-100 text-orange-800 border-orange-200',
        actionColors: 'bg-gray-50 text-gray-600 border-gray-300',
        avatar: '👨‍💼',
        avatarPath: '/images/characters/tenchou-avatar.png'
    },
    watashi: {
        names: { en: 'Me', jp: '私' },
        colors: 'bg-pink-100 text-pink-800 border-pink-200',
        actionColors: 'bg-gray-50 text-gray-600 border-gray-300',
        avatar: '👱‍♀️',
        avatarPath: '/images/characters/watashi-avatar.png'
    },
    customer: {
        names: { en: 'Customer', jp: 'お客さん' },
        colors: 'bg-blue-100 text-blue-800 border-blue-200',
        actionColors: 'bg-gray-50 text-gray-600 border-gray-300',
        avatar: '🧑‍💼',
        avatarPath: '/images/characters/customer-avatar.png' // Fallback, may not exist
    }
} as const;

const emotionStyles = {
    normal: '',
    angry: 'shadow-red-200 shadow-lg',
    happy: 'shadow-yellow-200 shadow-lg',
    confused: 'shadow-gray-200 shadow-lg',
    tired: 'shadow-purple-200 shadow-lg',
    excited: 'shadow-green-200 shadow-md animate-pulse [animation-duration:2s]',
    embarrassed: 'shadow-pink-200 shadow-lg',
    thoughtful: 'shadow-blue-200 shadow-lg',
    curious: 'shadow-orange-200 shadow-lg'
} as const;

const Character = ({
    name,
    children,
    language = 'jp',
    emotion = 'normal',
    avatar,
    noAvatar = false,
    isAction = false,
    className
}: CharacterProps) => {
    const character = characterData[name];
    const displayName = character.names[language];

    // Determine which avatar to use
    const avatarSrc = noAvatar ? null : (avatar || character.avatarPath);

    // Choose colors based on isAction
    const colors = isAction ? character.actionColors : character.colors;

    return (<div className={ct(
        'my-3 rounded-lg border-l-4 border-2 flex',
        colors,
        !isAction && emotionStyles[emotion],
        className
    )}>
        {/* Left side - Avatar */}
        <div className="flex-shrink-0 border-r border-gray-300">
            {avatarSrc ? (
                <Avatar
                    src={avatarSrc}
                    alt={`${displayName} avatar`}
                    name={name}
                    emotion={emotion}
                    size="md"
                />
            ) : (
                <span className="text-2xl">{character.avatar}</span>
            )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 pl-3">
            <div>
                <h4 className="font-bold text-base">{displayName}</h4>
            </div>
            <div className={ct(
                "text-base leading-relaxed",
                isAction && "italic text-gray-600"
            )}>
                {children}
            </div>
        </div>
    </div>
    );
};

export default Character;
