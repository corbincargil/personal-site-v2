import { cn } from "@/lib/utils";
import { WindowData } from "../types";

export default function WindowHeader({
    isDragging,
    handleDragStart,
    windowData,
    closeWindow,
}: {
    isDragging: boolean;
    handleDragStart: (e: React.MouseEvent) => void;
    windowData: WindowData;
    closeWindow: (windowId: string) => void;
}) {
    return (
        <div
            className={cn(
                "flex items-center justify-between cursor-move select-none z-10 bg-stone-700/50 w-full h-8 px-3 rounded-t-lg",
                isDragging && "cursor-grabbing"
            )}
            onMouseDown={handleDragStart}>
            <div className="flex gap-2">
                <div
                    className="h-3 w-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400"
                    onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(windowData.id);
                    }}
                />
                <div className="h-3 w-3 rounded-full bg-stone-400" />
                <div className="h-3 w-3 rounded-full bg-stone-400" />
            </div>
            <div
                className={cn(
                    "text-sm font-medium truncate flex-1 text-center px-4",
                    windowData.isFocused ? "text-white" : "text-stone-400"
                )}>
                {windowData.title}
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
        </div>
    );
}
