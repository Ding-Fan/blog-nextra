import React from 'react';
import { ct } from '../scripts/utils';

interface AvatarProps {
    src: string;
    alt: string;
    name: string;
    emotion?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
};

const characterBorderColors = {
    watashi: 'border-pink-400',
    tenchou: 'border-blue-500',
    customer: 'border-gray-400'
};

const emotionEffects = {
    excited: 'scale-110 shadow-lg shadow-green-300',
    angry: 'shadow-lg shadow-red-300',
    happy: 'shadow-lg shadow-yellow-300',
    confused: 'shadow-lg shadow-gray-300',
    tired: 'shadow-lg shadow-purple-300',
    embarrassed: 'shadow-lg shadow-pink-300',
    thoughtful: 'shadow-lg shadow-blue-300',
    curious: 'shadow-lg shadow-orange-300',
    normal: ''
};

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    name,
    emotion = 'normal',
    size = 'md',
    className
}) => {
    const borderColor = characterBorderColors[name as keyof typeof characterBorderColors] || 'border-gray-400';
    const emotionEffect = emotionEffects[emotion as keyof typeof emotionEffects] || '';
    const sizeClass = sizeClasses[size];

    return (
        <div className={ct(
            'rounded-full overflow-hidden border-4 transition-all duration-300 ease-in-out',
            'shadow-md hover:shadow-lg',
            sizeClass,
            borderColor,
            emotionEffect,
            className
        )}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
        </div>
    );
};
