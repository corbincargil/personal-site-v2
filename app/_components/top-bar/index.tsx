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
            <Menubar className="flex-row flex gap-2 text-background">
                <MenubarMenu>
                    <MenubarTrigger>
                        <Image
                            src="/initials_black_cropped.png"
                            className="mx-4 aspect-square object-contain"
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
                    <MenubarTrigger>
                        <p className="font-bold mx-1">{FinderItem.label}</p>
                    </MenubarTrigger>
                    <MenubarContent>
                        {FinderItem.items.map((item) => (
                            <MenubarItem key={item}>{item}</MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                {MenuItems.map((item) => (
                    <MenubarMenu key={item.label}>
                        <MenubarTrigger>{item.label}</MenubarTrigger>
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
