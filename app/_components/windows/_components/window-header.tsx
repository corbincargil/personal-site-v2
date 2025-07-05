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
                "flex items-center justify-between cursor-move select-none z-10 bg-muted w-full h-8 px-3 rounded-t-lg border-b border-stone-900 shadow-md",
                isDragging && "cursor-grabbing",
                windowData.isFocused && "bg-secondary",
                windowData.header === "ghost" && "bg-transparent border-none shadow-none"
            )}
            onMouseDown={handleDragStart}>
            <div className="flex gap-2">
                <div
                    className={cn(
                        "h-3 w-3 rounded-full bg-stone-600 cursor-pointer hover:bg-destructive/80",
                        windowData.isFocused && "bg-red-500"
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(windowData.id);
                    }}
                />
                <div className="h-3 w-3 rounded-full bg-stone-600" />
                <div className="h-3 w-3 rounded-full bg-stone-600" />
            </div>
            <div
                className={cn(
                    "text-sm font-medium truncate flex-1 text-center px-4",
                    windowData.isFocused ? "text-white" : "text-stone-400"
                )}>
                {windowData.title}
            </div>
            <div className="w-16" />
        </div>
    );
}
