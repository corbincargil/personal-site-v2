import { WindowData } from "../windows/types";
import AppInfo from "./_components/menu-items/logo/app-info";

export interface MenuItem {
    label: string;
    windowType?: "component";
    window?: WindowData;
}

interface Menu {
    title: string;
    items: MenuItem[];
}

const LogoMenu: Menu = {
    title: "Logo",
    items: [
        {
            label: "App info",
            windowType: "component",
            window: {
                id: "app-info",
                title: "App info",
                position: { x: 150, y: 150 },
                size: { width: 260, height: 440 },
                zIndex: 1000,
                isFocused: false,
                type: "component",
                content: <AppInfo />,
                resizable: false,
                className: "bg-card/85 backdrop-blur-lg",
                header: "ghost",
            },
        },
    ],
};

const FinderMenu: Menu = {
    title: "Finder",
    items: [
        {
            label: "New Tab",
        },
        { label: "New Window" },
        { label: "Share" },
        { label: "Print" },
    ],
};

const OtherMenus: Menu[] = [
    {
        title: "File",
        items: [
            { label: "New Tab" },
            { label: "New Window" },
            { label: "Share" },
            { label: "Print" },
        ],
    },
    {
        title: "Edit",
        items: [
            { label: "Undo" },
            { label: "Redo" },
            { label: "Cut" },
            { label: "Copy" },
            { label: "Paste" },
        ],
    },
    {
        title: "View",
        items: [{ label: "Show Sidebar" }, { label: "Show Status Bar" }, { label: "Show Tab Bar" }],
    },
    {
        title: "Go",
        items: [{ label: "Go to Folder" }, { label: "Go to File" }, { label: "Go to Symbol" }],
    },
    {
        title: "Window",
        items: [{ label: "Minimize" }, { label: "Zoom" }, { label: "Close" }],
    },
    {
        title: "Help",
        items: [
            { label: "Check for Updates" },
            { label: "Learn More" },
            { label: "Contact Support" },
        ],
    },
];

export { LogoMenu, FinderMenu, OtherMenus };
