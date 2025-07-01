"use client";

import DesktopItem from "./_components/desktop-item";
import DesktopFolderWindow from "./_components/desktop-folder-window";
import { initialItems } from "./initial-items";
import { useState } from "react";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { useDesktopDnd } from "./dnd/desktop-dnd";
import DraggableItem from "./dnd/draggable-item";
import { useClientOnly } from "@/app/hooks/use-client-only";
import { DesktopItemType } from "./types";

export default function Desktop() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [openFolders, setOpenFolders] = useState<DesktopItemType[]>([]);
    const isClient = useClientOnly();

    const { sensors, handleDragStart, handleDragEnd } = useDesktopDnd({
        items,
        onItemsChange: setItems,
        onSelect: setSelectedId,
    });

    const openFolder = (folder: DesktopItemType) => {
        if (folder.type === "folder" && !openFolders.find((f) => f.id === folder.id)) {
            setOpenFolders((prev) => [...prev, folder]);
        }
    };

    const closeFolder = (folderId: string) => {
        setOpenFolders((prev) => prev.filter((f) => f.id !== folderId));
    };

    return (
        <>
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
                                    setSelected={(selected) =>
                                        setSelectedId(selected ? item.id : null)
                                    }
                                    onDoubleClick={() => openFolder(item)}
                                />
                            </DraggableItem>
                        ))}
                </div>
            </DndContext>

            {openFolders.map((folder, index) => (
                <DesktopFolderWindow
                    key={folder.id}
                    folder={folder}
                    onClose={() => closeFolder(folder.id)}
                    initialPosition={{ x: 150 + index * 50, y: 150 + index * 50 }}
                />
            ))}
        </>
    );
}
