"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { WindowContextType, WindowData } from "./types";
import { Position } from "../desktop/types";

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function WindowProvider({ children }: { children: React.ReactNode }) {
    const [windows, setWindows] = useState<Map<string, WindowData>>(new Map());
    const [nextZIndex, setNextZIndex] = useState(1000);

    const getNextZIndex = useCallback(() => {
        const current = nextZIndex;
        setNextZIndex((prev) => prev + 1);
        return current;
    }, [nextZIndex]);

    const openWindow = useCallback(
        (windowData: WindowData) => {
            setWindows((prev) => {
                const newWindows = new Map(prev);

                const offset = 20;
                let newPosition = windowData.position;

                const existingWindows = Array.from(newWindows.values());
                let attempts = 0;
                const maxAttempts = 10;

                while (attempts < maxAttempts) {
                    const isOverlapping = existingWindows.some(
                        (window) =>
                            Math.abs(window.position.x - newPosition.x) < 10 &&
                            Math.abs(window.position.y - newPosition.y) < 10
                    );

                    if (!isOverlapping) {
                        break;
                    }

                    newPosition = {
                        x: newPosition.x + offset,
                        y: newPosition.y + offset,
                    };
                    attempts++;
                }

                const updatedWindowData = {
                    ...windowData,
                    position: newPosition,
                    zIndex: getNextZIndex(),
                    isFocused: true,
                };

                newWindows.forEach((window, id) => {
                    if (id !== windowData.id) {
                        newWindows.set(id, { ...window, isFocused: false });
                    }
                });

                newWindows.set(windowData.id, updatedWindowData);
                return newWindows;
            });
        },
        [getNextZIndex]
    );

    const closeWindow = useCallback((windowId: string) => {
        setWindows((prev) => {
            const newWindows = new Map(prev);
            newWindows.delete(windowId);
            return newWindows;
        });
    }, []);

    const updateWindowPosition = useCallback((windowId: string, position: Position) => {
        setWindows((prev) => {
            const newWindows = new Map(prev);
            const window = newWindows.get(windowId);
            if (window) {
                newWindows.set(windowId, { ...window, position });
            }
            return newWindows;
        });
    }, []);

    const focusWindow = useCallback(
        (windowId: string) => {
            setWindows((prev) => {
                const newWindows = new Map(prev);
                const targetWindow = newWindows.get(windowId);

                if (targetWindow) {
                    newWindows.forEach((window, id) => {
                        newWindows.set(id, { ...window, isFocused: false });
                    });

                    newWindows.set(windowId, {
                        ...targetWindow,
                        isFocused: true,
                        zIndex: getNextZIndex(),
                    });
                }

                return newWindows;
            });
        },
        [getNextZIndex]
    );

    const getFocusedWindow = useCallback(() => {
        for (const window of windows.values()) {
            if (window.isFocused) {
                return window;
            }
        }
        return undefined;
    }, [windows]);

    const contextValue = useMemo<WindowContextType>(
        () => ({
            windows,
            openWindow,
            closeWindow,
            updateWindowPosition,
            focusWindow,
            getFocusedWindow,
            getNextZIndex,
        }),
        [
            windows,
            openWindow,
            closeWindow,
            updateWindowPosition,
            focusWindow,
            getFocusedWindow,
            getNextZIndex,
        ]
    );

    return <WindowContext.Provider value={contextValue}>{children}</WindowContext.Provider>;
}

export function useWindowContext() {
    const context = useContext(WindowContext);
    if (!context) {
        throw new Error("useWindowContext must be used within a WindowProvider");
    }
    return context;
}
