import React from 'react';
import { ct } from '../scripts/utils';
import BaseImage from './image/BaseImage';

interface AvatarProps {
    src: string;
    alt: string;
    name: string;
    emotion?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    thumbnailSrc?: string;
    isProgressive?: boolean;
}

const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36'
};

const emotionEffects = {
    excited: 'animate-[jump_10s_ease-out_infinite]',
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
    emotion = 'normal',
    size = 'md',
    className,
    thumbnailSrc,
    isProgressive = false
}) => {
    const emotionEffect = emotionEffects[emotion as keyof typeof emotionEffects] || '';
    const sizeClass = sizeClasses[size];

    return (
        <div className={ct(
            'rounded-lg overflow-hidden transition-all duration-300 ease-in-out',
            sizeClass,
            emotionEffect,
            className
        )}>
            <BaseImage
                src={src}
                alt={alt}
                thumbnailSrc={thumbnailSrc}
                isProgressive={isProgressive}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
        </div>
    );
};
