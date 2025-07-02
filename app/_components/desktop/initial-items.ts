import { DesktopItemType } from "./types";

export const initialItems: DesktopItemType[] = [
    {
        id: "bio",
        name: "Bio.txt",
        icon: "/file-text.svg",
        position: { x: 20, y: 20 },
        type: "file",
        windowType: "text-file",
        windowData: {
            content:
                "Hi there, my name is Corbin and I'm a full stack developer and business analyst based in Texas. I'm passionate about creating high grade web apps that allow users to focus less on software and more on getting stuff done. I enjoy problem solving, reading, and working out.",
            fileName: "Bio.txt",
        },
    },
    {
        id: "projects",
        name: "Projects",
        icon: "/folder-closed.svg",
        position: { x: 100, y: 20 },
        type: "folder",
        windowType: "folder",
        contents: [
            {
                id: "project-1",
                name: "Project 1.txt",
                icon: "/file-text.svg",
                position: { x: 16, y: 36 },
                type: "file",
                windowType: "text-file",
                windowData: {
                    content:
                        "This is a project that I'm working on. It's a web app that allows users to...",
                    fileName: "Project 1.txt",
                },
            },
            {
                id: "project-2",
                name: "Project 2.txt",
                icon: "/file-text.svg",
                position: { x: 96, y: 36 },
                type: "file",
                windowType: "text-file",
                windowData: {
                    content:
                        "This is a project that I'm working on. It's a web app that allows users to...",
                    fileName: "Project 2.txt",
                },
            },
        ],
    },
    {
        id: "resume",
        name: "Resume.pdf",
        icon: "/file-text.svg",
        position: { x: 180, y: 20 },
        type: "file",
        windowType: "text-file",
        windowData: {
            content: "Professional experience...",
            fileName: "Resume.pdf",
        },
    },
    {
        id: "long-name",
        name: "Something with a really long name to see what the text looks like im going to keep going until something happens that  i don't want to happen",
        icon: "/file-text.svg",
        position: { x: 260, y: 20 },
        type: "file",
        windowType: "text-file",
        windowData: {
            content: "This is a file with a very long name...",
            fileName:
                "Something with a really long name to see what the text looks like im going to keep going until something happens that  i don't want to happen",
        },
    },
];
