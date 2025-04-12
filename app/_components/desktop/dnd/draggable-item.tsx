"use client";

import { useClientOnly } from "@/app/hooks/use-client-only";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

interface DraggableItemProps {
    id: string;
    isDragging?: boolean;
    children: ReactNode;
    position: { x: number; y: number };
}

/** Wrapper for DesktopItems to make them draggable. */
export default function DraggableItem({
    id,
    isDragging,
    children,
    position,
}: DraggableItemProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });
    const isClient = useClientOnly();

    if (!isClient) {
        return <div>{children}</div>;
    }

    const style = {
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
        transform: transform ? CSS.Transform.toString(transform) : undefined,
    } as const;

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
}
