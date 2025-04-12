import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { LogoItem, FinderItem, MenuItems } from "./menu-items";

export default function TopBar() {
    return (
        <div className="flex flex-row items-center h-6 w-full bg-foreground/60">
            <Menubar className="flex-row flex gap-2 text-background p-0">
                <MenubarMenu>
                    <MenubarTrigger className="focus:bg-inherit focus:text-inherit">
                        <Image
                            src="/initials_black_cropped.png"
                            className="mx-1 aspect-square object-contain"
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
        </div>
    );
}
