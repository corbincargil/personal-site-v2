import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { LogoItem, FinderItem, MenuItems } from "./menu-items";
import DateTime from "./_components/date-time";
import { CircleUserRound } from "lucide-react";
import Battery from "./_components/battery";

export default function TopBar() {
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
                        {LogoItem.items.map((item) => (
                            <MenubarItem key={item}>{item}</MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="font-bold mx-1 h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                        {FinderItem.label}
                    </MenubarTrigger>
                    <MenubarContent>
                        {FinderItem.items.map((item) => (
                            <MenubarItem key={item}>{item}</MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                {MenuItems.map((item) => (
                    <MenubarMenu key={item.label}>
                        <MenubarTrigger className="h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                            {item.label}
                        </MenubarTrigger>
                        <MenubarContent>
                            {item.items.map((item) => (
                                <MenubarItem key={item}>{item}</MenubarItem>
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
