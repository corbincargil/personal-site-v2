"use client";

import Image from 'next/image';
import { useState } from 'react';

interface DesktopItemProps {
    name: string;
    icon: string;
    onClick?: () => void;
}

//todo: see about making this not a client component
export default function DesktopItem({ name, icon, onClick }: DesktopItemProps) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div 
            className={`flex flex-col items-center gap-1 p-2 w-24 h-min`}
            onClick={() => {
                setIsSelected(true);
                onClick?.();
            }}
            onBlur={() => setIsSelected(false)}
            tabIndex={0}
        >
            <div className={`p-1 rounded-[2px] ${isSelected ? 'bg-gray-400/30 outline-2 outline-gray-300/30' : ''}`}>
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="select-none pointer-events-none"
                    draggable={false}
                />
            </div>
            <p className={`text-xs text-center px-1 rounded line-clamp-2
                ${isSelected 
                    ? 'bg-blue-800 text-white' 
                    : 'text-primary'
                }`}>
                {name}
            </p>
        </div>
    );
} 