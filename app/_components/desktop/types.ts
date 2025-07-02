import { WindowType } from "../windows/types";

export interface Position {
    x: number;
    y: number;
}

export interface DesktopIconProps {
    name: string;
    icon: string;
    isSelected?: boolean;
}

export interface DesktopItemType {
    id: string;
    name: string;
    icon: string;
    position: Position;
    type: "file" | "folder";
    contents?: DesktopItemType[];
    windowType?: WindowType;
    componentId?: string;
    windowData?: {
        content?: string;
        fileName?: string;
        menuItems?: Array<{
            id: string;
            label: string;
            action?: () => void;
        }>;
    };
}

export interface DesktopItemProps {
    id: string;
    name: string;
    icon: string;
    position?: Position;
    isSelected?: boolean;
    setSelected?: (selected: boolean) => void;
    isDragging?: boolean;
    onDoubleClick?: () => void;
}
