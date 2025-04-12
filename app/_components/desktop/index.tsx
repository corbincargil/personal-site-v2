"use client";

import DesktopItem from "./_components/desktop-item";
import { initialItems } from "./initial-items";
import { useState } from "react";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { useDesktopDnd } from "./dnd/desktop-dnd";
import DraggableItem from "./dnd/draggable-item";
import { useClientOnly } from "@/app/hooks/use-client-only";

export default function Desktop() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const isClient = useClientOnly();

    const { sensors, handleDragStart, handleDragEnd } = useDesktopDnd({
        items,
        onItemsChange: setItems,
        onSelect: setSelectedId,
    });

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={pointerWithin}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <div className="relative w-full h-full">
                {isClient &&
                    items.map((item) => (
                        <DraggableItem key={item.id} id={item.id} position={item.position}>
                            <DesktopItem
                                id={item.id}
                                name={item.name}
                                icon={item.icon}
                                isSelected={item.id === selectedId}
                                setSelected={(selected) => setSelectedId(selected ? item.id : null)}
                            />
                        </DraggableItem>
                    ))}
            </div>
        </DndContext>
    );
}
