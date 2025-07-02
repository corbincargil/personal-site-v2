"use client";

import { useWindows } from "./use-windows";
import { isFolderWindow, isTextFileWindow, isComponentWindow } from "./types";
import FolderWindow from "./_components/folder-window";
import TextFileWindow from "./_components/text-file-window";
import ComponentWindow from "./_components/component-window";

export default function WindowManager() {
    const { windows } = useWindows();

    return (
        <>
            {windows.map((window) => {
                if (isFolderWindow(window)) {
                    return <FolderWindow key={window.id} windowData={window} />;
                }
                if (isTextFileWindow(window)) {
                    return <TextFileWindow key={window.id} windowData={window} />;
                }
                if (isComponentWindow(window)) {
                    return <ComponentWindow key={window.id} windowData={window} />;
                }
                return null;
            })}
        </>
    );
}
