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
}

export interface DesktopItemProps {
    id: string;
    name: string;
    icon: string;
    position?: Position;
    isSelected?: boolean;
    setSelected?: (selected: boolean) => void;
    isDragging?: boolean;
}
