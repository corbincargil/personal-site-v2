import { useWindowContext } from "./window-context";
import { FolderWindowData, TextFileWindowData, ComponentWindowData } from "./types";

export function useWindows() {
    const context = useWindowContext();

    const openFolderWindow = (
        folderData: Omit<FolderWindowData, "type" | "zIndex" | "isFocused">
    ) => {
        const windowData: FolderWindowData = {
            ...folderData,
            type: "folder",
            zIndex: context.getNextZIndex(),
            isFocused: true,
        };
        context.openWindow(windowData);
    };

    const openTextFileWindow = (
        textFileData: Omit<TextFileWindowData, "type" | "zIndex" | "isFocused">
    ) => {
        const windowData: TextFileWindowData = {
            ...textFileData,
            type: "text-file",
            zIndex: context.getNextZIndex(),
            isFocused: true,
        };
        context.openWindow(windowData);
    };

    const openComponentWindow = (
        componentData: Omit<ComponentWindowData, "type" | "zIndex" | "isFocused">
    ) => {
        const windowData: ComponentWindowData = {
            ...componentData,
            type: "component",
            zIndex: context.getNextZIndex(),
            isFocused: true,
        };
        context.openWindow(windowData);
    };

    return {
        windows: Array.from(context.windows.values()),
        focusedWindow: context.getFocusedWindow(),

        openWindow: context.openWindow,
        closeWindow: context.closeWindow,
        updateWindowPosition: context.updateWindowPosition,
        focusWindow: context.focusWindow,

        openFolderWindow,
        openTextFileWindow,
        openComponentWindow,

        getWindow: (id: string) => context.windows.get(id),
        hasWindow: (id: string) => context.windows.has(id),
    };
}
