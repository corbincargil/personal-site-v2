import { DesktopItemType } from "../desktop/types";

const STORAGE_KEYS = {
    DESKTOP_ITEMS: "desktop-items",
} as const;

const safeGetItem = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.warn(`Failed to get item from localStorage: ${key}`, error);
        return null;
    }
};

const safeSetItem = (key: string, value: string): boolean => {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.warn(`Failed to set item in localStorage: ${key}`, error);
        return false;
    }
};

export const saveDesktopItems = (items: DesktopItemType[]): boolean => {
    return safeSetItem(STORAGE_KEYS.DESKTOP_ITEMS, JSON.stringify(items));
};

export const loadDesktopItems = (): DesktopItemType[] | null => {
    const stored = safeGetItem(STORAGE_KEYS.DESKTOP_ITEMS);
    if (!stored) return null;

    try {
        const parsed = JSON.parse(stored);
        if (
            Array.isArray(parsed) &&
            parsed.every((item) => item.id && item.name && item.position && item.type)
        ) {
            return parsed;
        }
        console.warn("Invalid desktop items data in localStorage");
        return null;
    } catch (error) {
        console.warn("Failed to parse desktop items from localStorage", error);
        return null;
    }
};

export const resetAllStorage = (): boolean => {
    try {
        Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
        return true;
    } catch (error) {
        console.warn("Failed to reset all storage", error);
        return false;
    }
};
