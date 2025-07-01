import { cn } from "@/lib/utils";

interface HeaderProps {
    isDragging: boolean;
    handleDragStart: (e: React.MouseEvent) => void;
    onClose: () => void;
    folderName: string;
}

export default function Header({ isDragging, handleDragStart, onClose, folderName }: HeaderProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-between cursor-move select-none z-10 bg-stone-700 w-full h-8 px-3 rounded-t-lg sticky top-0",
                isDragging && "cursor-grabbing"
            )}
            onMouseDown={handleDragStart}>
            <div className="flex gap-2">
                <div
                    className="h-3 w-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400"
                    onClick={onClose}
                />
                <div className="h-3 w-3 rounded-full bg-stone-500" />
                <div className="h-3 w-3 rounded-full bg-stone-500" />
            </div>
            <div className="text-sm text-white font-medium truncate flex-1 text-center px-4">
                {folderName}
            </div>
            <div className="w-16" />
        </div>
    );
}
