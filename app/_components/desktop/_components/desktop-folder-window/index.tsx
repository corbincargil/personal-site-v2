"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DesktopItemType } from "../../types";
import DesktopItem from "../desktop-item";
import { useClientOnly } from "@/app/hooks/use-client-only";
import Header from "./header";

interface DesktopFolderWindowProps {
    folder: DesktopItemType;
    onClose: () => void;
    initialPosition?: { x: number; y: number };
}

export default function DesktopFolderWindow({
    folder,
    onClose,
    initialPosition = { x: 100, y: 100 },
}: DesktopFolderWindowProps) {
    const isClient = useClientOnly();
    const windowRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState(initialPosition);

    const handleDragStart = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if (!windowRef.current) return;

        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setIsDragging(true);
    }, []);

    const handleDragMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging) return;

            const x = e.clientX - dragOffset.x;
            const y = e.clientY - dragOffset.y;
            setPosition({ x, y });
        },
        [isDragging, dragOffset]
    );

    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleDragMove);
            document.addEventListener("mouseup", handleDragEnd);
            return () => {
                document.removeEventListener("mousemove", handleDragMove);
                document.removeEventListener("mouseup", handleDragEnd);
            };
        }
    }, [isDragging, handleDragMove, handleDragEnd]);

    if (!isClient || !folder.contents) {
        return null;
    }

    return (
        <div
            ref={windowRef}
            className={cn(
                "fixed bg-stone-800/90 backdrop-blur-md outline outline-stone-700 rounded-lg shadow-2xl z-50",
                "w-120 h-80 resize",
                isDragging && "cursor-grabbing"
            )}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}>
            <Header
                isDragging={isDragging}
                handleDragStart={handleDragStart}
                onClose={onClose}
                folderName={folder.name}
            />

            <div className="p-4 h-full overflow-auto">
                <div className="grid grid-cols-4 gap-4">
                    {folder.contents.map((item) => (
                        <DesktopItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            icon={item.icon}
                            position={item.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
