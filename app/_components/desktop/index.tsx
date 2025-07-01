"use client";

import DesktopItem from "./_components/desktop-item";
import { initialItems } from "./initial-items";
import { useState } from "react";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { useDesktopDnd } from "./dnd/desktop-dnd";
import DraggableItem from "./dnd/draggable-item";
import { useClientOnly } from "@/app/hooks/use-client-only";
import { DesktopItemType } from "./types";
import { useWindows } from "../windows/use-windows";

export default function Desktop() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const isClient = useClientOnly();
    const { openFolderWindow, openTextFileWindow } = useWindows();

    const { sensors, handleDragStart, handleDragEnd } = useDesktopDnd({
        items,
        onItemsChange: setItems,
        onSelect: setSelectedId,
    });

    const handleDoubleClick = (item: DesktopItemType) => {
        if (item.windowType === "folder" && item.contents) {
            openFolderWindow({
                id: item.id,
                title: item.name,
                position: { x: 150, y: 150 },
                contents: item.contents,
            });
        } else if (item.windowType === "text-file" && item.windowData) {
            openTextFileWindow({
                id: item.id,
                title: item.windowData.fileName || item.name,
                position: { x: 150, y: 150 },
                content: item.windowData.content || "",
                fileName: item.windowData.fileName || item.name,
            });
        }
    };

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
                                onDoubleClick={() => handleDoubleClick(item)}
                            />
                        </DraggableItem>
                    ))}
            </div>
        </DndContext>
    );
}
