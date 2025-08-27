import { DesktopItemType } from "./types";

export const initialItems: DesktopItemType[] = [
    {
        id: "bio",
        name: "Bio.txt",
        icon: "/text-icon.png",
        position: { x: 20, y: 20 },
        type: "file",
        windowType: "text-file",
        windowData: {
            content:
                "Hi there, my name is Corbin and I'm a full stack developer based in Texas. I'm passionate about creating high grade web apps that allow users to focus less on software and more on getting stuff done.\n\n Click the logo in the top-left to learn more. ",
            fileName: "Bio.txt",
        },
    },
    {
        id: "projects",
        name: "Featured Projects",
        icon: "/folder-icon.png",
        position: { x: 100, y: 20 },
        type: "folder",
        windowType: "folder",
        contents: [
            {
                id: "kosmos",
                name: "Kosmos",
                icon: "/github-mark-white.png",
                position: { x: 16, y: 36 },
                type: "file",
                windowType: "web-link",
                url: "https://github.com/corbincargil/kosmos",
            },
            {
                id: "honk",
                name: "Honk",
                icon: "/honk-logo2.png",
                position: { x: 96, y: 36 },
                type: "file",
                windowType: "web-link",
                url: "https://honk.corbincargil.com",
            },
            {
                id: "bop",
                name: "Bop",
                icon: "/github-mark-white.png",
                position: { x: 180, y: 36 },
                type: "file",
                windowType: "web-link",
                url: "https://github.com/corbincargil/bop",
            },
        ],
    },
    {
        id: "socials",
        name: "Socials",
        icon: "/folder-icon.png",
        position: { x: 180, y: 20 },
        type: "folder",
        windowType: "folder",
        contents: [
            {
                id: "github",
                name: "Github",
                icon: "/github-mark-white.png",
                position: { x: 16, y: 36 },
                type: "file",
                windowType: "web-link",
                url: "https://github.com/corbincargil",
            },
            {
                id: "linkedin",
                name: "LinkedIn",
                icon: "/linkedin-logo.png",
                position: { x: 96, y: 36 },
                type: "file",
                windowType: "web-link",
                url: "https://linkedin.com/in/corbin-cargil-65b4271b5",
            },
            //todo: add blog site
        ],
    },
    // {
    //     id: "resume",
    //     name: "Resume.pdf",
    //     icon: "/text-icon.png",
    //     position: { x: 340, y: 20 },
    //     type: "file",
    //     windowType: "text-file",
    //     windowData: {
    //         content: "Professional experience...",
    //         fileName: "Resume.pdf",
    //     },
    // },
    // {
    //     id: "long-name",
    //     name: "Something with a really long name to see what the text looks like im going to keep going until something happens that  i don't want to happen",
    //     icon: "/text-icon.png",
    //     position: { x: 260, y: 20 },
    //     type: "file",
    //     windowType: "text-file",
    //     windowData: {
    //         content: "This is a file with a very long name...",
    //         fileName:
    //             "Something with a really long name to see what the text looks like im going to keep going until something happens that  i don't want to happen",
    //     },
    // },
    {
        id: "etch-a-sketch",
        name: "Etch A Sketch",
        icon: "/etch-a-sketch.png",
        position: { x: 20, y: 450 },
        type: "file",
        windowType: "component",
        componentId: "etch-a-sketch",
    },
];
