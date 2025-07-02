"use client";

import React from "react";
import { ct } from "../../scripts/utils";

export interface NarratorProps {
    children: React.ReactNode;
    className?: string;
}

const Narrator = ({
    children,
    className
}: NarratorProps) => {
    return (
        <div className={ct(
            'my-3 p-3 bg-gray-100 rounded-lg border-l-4 border-gray-400 italic text-gray-700',
            className
        )}>
            <span className="text-sm font-medium text-gray-500 mr-2">📝 語り手:</span>
            {children}
        </div>
    );
};

export default Narrator;
