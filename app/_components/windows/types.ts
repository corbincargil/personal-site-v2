import { Position } from "../desktop/types";

export type WindowType = "folder" | "text-file";

export interface BaseWindowData {
    id: string;
    type: WindowType;
    position: Position;
    zIndex: number;
    isFocused: boolean;
    title: string;
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

export type WindowData = FolderWindowData | TextFileWindowData;

export const isFolderWindow = (window: WindowData): window is FolderWindowData => {
    return window.type === "folder";
};

export const isTextFileWindow = (window: WindowData): window is TextFileWindowData => {
    return window.type === "text-file";
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
