"use client";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { LogoMenu, FinderMenu, OtherMenus } from "./menu-items";
import DateTime from "./_components/date-time";
import { CircleUserRound } from "lucide-react";
import Battery from "./_components/battery";
import { useWindows } from "../windows/use-windows";
import { MenuItem } from "./menu-items";
import { ComponentWindowData } from "../windows/types";

export default function TopBar() {
    const { openComponentWindow } = useWindows();

    const handleMenuItemClick = (item: MenuItem) => {
        switch (item.windowType) {
            case "component":
                openComponentWindow(item.window as ComponentWindowData);
                break;
        }
    };

    return (
        <div className="px-2 flex flex-row justify-between items-center h-6 w-full bg-foreground/60">
            <Menubar className="flex-row flex gap-2 text-background p-0">
                <MenubarMenu>
                    <MenubarTrigger className="focus:bg-inherit focus:text-inherit">
                        <Image
                            src="/initials_black_cropped.png"
                            className="w-5 h-5 aspect-square"
                            alt="corbin cargil logo white"
                            width={22}
                            height={22}
                            draggable={false}
                        />
                    </MenubarTrigger>
                    <MenubarContent>
                        {LogoMenu.items.map((item) => (
                            <MenubarItem
                                key={item.label}
                                onClick={() => handleMenuItemClick(item)}
                                disabled={!item.window}>
                                {item.label}
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="font-bold mx-1 h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                        {FinderMenu.title}
                    </MenubarTrigger>
                    <MenubarContent>
                        {FinderMenu.items.map((item) => (
                            <MenubarItem
                                key={item.label}
                                onClick={() => handleMenuItemClick(item)}
                                disabled={!item.window}>
                                {item.label}
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                {OtherMenus.map((item) => (
                    <MenubarMenu key={item.title}>
                        <MenubarTrigger className="h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                            {item.title}
                        </MenubarTrigger>
                        <MenubarContent>
                            {item.items.map((item) => (
                                <MenubarItem
                                    key={item.label}
                                    onClick={() => handleMenuItemClick(item)}
                                    disabled={!item.window}>
                                    {item.label}
                                </MenubarItem>
                            ))}
                        </MenubarContent>
                    </MenubarMenu>
                ))}
            </Menubar>
            <div className="flex flex-row items-center gap-3">
                <CircleUserRound className="w-4 h-4 text-background" />
                <Battery />
                <DateTime />
            </div>
        </div>
    );
}
