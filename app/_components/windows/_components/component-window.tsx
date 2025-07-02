"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ComponentWindowData } from "../types";
import { useClientOnly } from "@/app/hooks/use-client-only";
import { useWindows } from "../use-windows";
import WindowHeader from "./window-header";

interface ComponentWindowProps {
    windowData: ComponentWindowData;
}

export default function ComponentWindow({ windowData }: ComponentWindowProps) {
    const isClient = useClientOnly();
    const windowRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [dimensions, setDimensions] = useState({
        width: windowData.size?.width || 480,
        height: windowData.size?.height || 320,
    });
    const { closeWindow, updateWindowPosition, focusWindow } = useWindows();

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
            updateWindowPosition(windowData.id, { x, y });
        },
        [isDragging, dragOffset, updateWindowPosition, windowData.id]
    );

    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleResizeStart = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!windowRef.current || !windowData.resizable) return;

            const rect = windowRef.current.getBoundingClientRect();
            setResizeStart({
                x: e.clientX,
                y: e.clientY,
                width: rect.width,
                height: rect.height,
            });
            setIsResizing(true);
        },
        [windowData.resizable]
    );

    const handleResizeMove = useCallback(
        (e: MouseEvent) => {
            if (!isResizing) return;

            const deltaX = e.clientX - resizeStart.x;
            const deltaY = e.clientY - resizeStart.y;

            const newWidth = Math.max(300, resizeStart.width + deltaX);
            const newHeight = Math.max(200, resizeStart.height + deltaY);

            setDimensions({ width: newWidth, height: newHeight });
        },
        [isResizing, resizeStart]
    );

    const handleResizeEnd = useCallback(() => {
        setIsResizing(false);
    }, []);

    const handleWindowClick = useCallback(() => {
        focusWindow(windowData.id);
    }, [focusWindow, windowData.id]);

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

    useEffect(() => {
        if (isResizing) {
            document.addEventListener("mousemove", handleResizeMove);
            document.addEventListener("mouseup", handleResizeEnd);
            return () => {
                document.removeEventListener("mousemove", handleResizeMove);
                document.removeEventListener("mouseup", handleResizeEnd);
            };
        }
    }, [isResizing, handleResizeMove, handleResizeEnd]);

    if (!isClient) {
        return null;
    }

    return (
        <div
            ref={windowRef}
            className={cn(
                "fixed bg-stone-800/90 backdrop-blur-md outline outline-stone-700 rounded-lg shadow-2xl",
                isDragging && "cursor-grabbing",
                isResizing && "cursor-nw-resize",
                windowData.isFocused ? "outline-stone-500" : "outline-stone-700"
            )}
            style={{
                left: `${windowData.position.x}px`,
                top: `${windowData.position.y}px`,
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                zIndex: windowData.zIndex,
            }}
            onClick={handleWindowClick}>
            <WindowHeader
                isDragging={isDragging}
                handleDragStart={handleDragStart}
                windowData={windowData}
                closeWindow={closeWindow}
            />
            <div
                className={cn(
                    "p-4 h-full overflow-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-stone-600/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-stone-600/70",
                    !windowData.isFocused && "opacity-50"
                )}>
                {windowData.content}
            </div>

            {windowData.resizable && (
                <div
                    className="absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize"
                    onMouseDown={handleResizeStart}>
                    <div className="w-full h-full flex items-end justify-end">
                        <div className="w-3 h-3 border-r-2 border-b-2 border-stone-500 rounded-br-sm" />
                    </div>
                </div>
            )}
        </div>
    );
}
