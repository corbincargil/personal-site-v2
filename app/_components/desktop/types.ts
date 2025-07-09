import { WindowType } from "../windows/types";

export interface Position {
    x: number;
    y: number;
}

export interface DesktopIconProps {
    name: string;
    icon: string;
    isSelected?: boolean;
    isLink?: boolean;
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
    url?: string;
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
    isLink?: boolean;
    isSelected?: boolean;
    setSelected?: (selected: boolean) => void;
    isDragging?: boolean;
    onDoubleClick?: () => void;
}
