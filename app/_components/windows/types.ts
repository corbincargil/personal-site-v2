import { Position } from "../desktop/types";

export type WindowType = "folder" | "text-file" | "component";

export interface BaseWindowData {
    id: string;
    type: WindowType;
    position: Position;
    zIndex: number;
    isFocused: boolean;
    title: string;
    header?: "ghost" | "default";
}

export interface FolderWindowData extends BaseWindowData {
    type: "folder";
    contents: Array<{
        id: string;
        name: string;
        icon: string;
        position: Position;
        type: "file" | "folder";
        contents?: Array<{
            id: string;
            name: string;
            icon: string;
            position: Position;
            type: "file" | "folder";
        }>;
    }>;
}

export interface TextFileWindowData extends BaseWindowData {
    type: "text-file";
    content: string;
    fileName: string;
}

export interface ComponentWindowData extends BaseWindowData {
    type: "component";
    content: React.ReactNode;
    size?: { width: number; height: number };
    resizable?: boolean;
    className?: string;
}

export type WindowData = FolderWindowData | TextFileWindowData | ComponentWindowData;

export const isFolderWindow = (window: WindowData): window is FolderWindowData => {
    return window.type === "folder";
};

export const isTextFileWindow = (window: WindowData): window is TextFileWindowData => {
    return window.type === "text-file";
};

export const isComponentWindow = (window: WindowData): window is ComponentWindowData => {
    return window.type === "component";
};

export interface WindowContextType {
    windows: Map<string, WindowData>;
    openWindow: (windowData: WindowData) => void;
    closeWindow: (windowId: string) => void;
    updateWindowPosition: (windowId: string, position: Position) => void;
    focusWindow: (windowId: string) => void;
    getFocusedWindow: () => WindowData | undefined;
    getNextZIndex: () => number;
}
