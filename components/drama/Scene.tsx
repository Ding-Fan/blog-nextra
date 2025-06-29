"use client";

import React from "react";
import { ct } from "../../scripts/utils";

export interface SceneProps {
    title?: string;
    location?: string;
    time?: string;
    children: React.ReactNode;
    className?: string;
}

const Scene = ({
    title,
    location,
    time,
    children,
    className
}: SceneProps) => {
    return (
        <div className={ct(
            'my-8 p-6 bg-gray-50 rounded-xl border border-gray-200',
            className
        )}>
            {(title || location || time) && (
                <div className="mb-6 pb-4 border-b border-gray-300">
                    {title && (
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                    )}
                    <div className="flex gap-4 text-sm text-gray-600">
                        {location && (
                            <span className="flex items-center">
                                📍 <span className="ml-1">{location}</span>
                            </span>
                        )}
                        {time && (
                            <span className="flex items-center">
                                🕐 <span className="ml-1">{time}</span>
                            </span>
                        )}
                    </div>
                </div>
            )}
            <div className="space-y-2">
                {children}
            </div>
        </div>
    );
};

export default Scene;
