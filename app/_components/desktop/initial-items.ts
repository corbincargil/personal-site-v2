import { DesktopItemType } from "./types";

export const initialItems: DesktopItemType[] = [
    {
        id: "bio",
        name: "Bio.txt",
        icon: "/file-text.svg",
        position: { x: 20, y: 20 },
    },
    {
        id: "projects",
        name: "Projects",
        icon: "/folder-code.svg",
        position: { x: 100, y: 20 },
    },
    {
        id: "resume",
        name: "Resume.pdf",
        icon: "/file-text.svg",
        position: { x: 180, y: 20 },
    },
    {
        id: "long-name",
        name: "Something with a really long name to see what the text looks like im going to keep going until something happens that  i don't want to happen",
        icon: "/file-text.svg",
        position: { x: 260, y: 20 },
    },
];
