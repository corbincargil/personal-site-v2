import {
    DragEndEvent,
    DragStartEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { DesktopItemType } from "../types";

interface UseDesktopDndProps {
    items: DesktopItemType[];
    onItemsChange: (items: DesktopItemType[]) => void;
    onSelect: (id: string | null) => void;
}

/** Handles drag and drop operations for desktop items */
export function useDesktopDnd({ items, onItemsChange, onSelect }: UseDesktopDndProps) {
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        onSelect(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, delta } = event;

        onItemsChange(
            items.map((item) => {
                if (item.id === active.id) {
                    return {
                        ...item,
                        position: {
                            x: item.position.x + delta.x,
                            y: item.position.y + delta.y,
                        },
                    };
                }
                return item;
            })
        );
    };

    return {
        sensors,
        handleDragStart,
        handleDragEnd,
    };
}
