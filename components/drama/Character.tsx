"use client";

import React from "react";
import { ct } from "../../scripts/utils";
import { Avatar } from "../Avatar";

export type CharacterName = 'tenchou' | 'watashi' | 'customer' | 'hiromitsu';
export type Language = 'en' | 'jp';

export interface CharacterProps {
    name: CharacterName;
    children: React.ReactNode;
    language?: Language;
    className?: string;
    emotion?: 'normal' | 'angry' | 'happy' | 'confused' | 'tired' | 'excited' | 'embarrassed' | 'thoughtful' | 'curious' | 'understanding' | 'amazed' | 'grateful' | 'proud' | 'gentle' | 'serious' | 'nervous';
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
    },
    hiromitsu: {
        names: { en: 'Hiromitsu', jp: '浩三' },
        colors: 'bg-green-100 text-green-800 border-green-200',
        actionColors: 'bg-gray-50 text-gray-600 border-gray-300',
        avatar: '👨‍💻',
        avatarPath: '/images/characters/hiromitsu-avatar.png'
    }
} as const;

// Japanese emotion tags mapping
const emotionTags = {
    normal: null,
    angry: '怒り',
    happy: '嬉しい',
    confused: '困惑',
    tired: '疲れた',
    excited: '興奮',
    embarrassed: '恥ずかしい',
    thoughtful: '考え中',
    curious: '好奇心',
    understanding: '理解した',
    amazed: '驚き',
    grateful: '感謝',
    proud: '誇らしい',
    gentle: '優しい',
    serious: '真剣',
    nervous: '緊張'
} as const;

// Emotion tag background colors
const emotionColors = {
    normal: '',
    angry: 'bg-red-500',
    happy: 'bg-yellow-500',
    confused: 'bg-gray-500',
    tired: 'bg-purple-500',
    excited: 'bg-green-500',
    embarrassed: 'bg-pink-500',
    thoughtful: 'bg-blue-700',
    curious: 'bg-orange-500',
    understanding: 'bg-emerald-500',
    amazed: 'bg-yellow-600',
    grateful: 'bg-amber-500',
    proud: 'bg-violet-600',
    gentle: 'bg-sky-500',
    serious: 'bg-slate-600',
    nervous: 'bg-cyan-500'
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
        className
    )}>
        {/* Left side - Avatar */}
        <div className="flex-shrink-0 border-r border-gray-300 relative">
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
            
            {/* Emotion tag */}
            {emotionTags[emotion] && (
                <div className={ct(
                    'absolute -top-2 -right-2 px-2 py-1 rounded text-xs font-bold text-white',
                    'shadow-lg border border-white/20 animate-in fade-in duration-300',
                    emotionColors[emotion],
                    emotion === 'excited' && 'animate-bounce',
                    emotion === 'amazed' && 'animate-pulse'
                )}>
                    {emotionTags[emotion]}
                </div>
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
