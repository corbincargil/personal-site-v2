import {
    MenubarContent,
    Menubar,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarSeparator,
} from "@/components/ui/menubar";
import { BatteryWarning } from "lucide-react";

export default function BatteryError() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                    <BatteryWarning className="w-5 h-5 aspect-square text-background" />
                </MenubarTrigger>
                <MenubarContent className="-left-65 w-75">
                    <MenubarItem className="justify-between" inert>
                        <span className="font-semibold">Battery</span>
                        <span className="opacity-50">--%</span>
                    </MenubarItem>
                    <MenubarItem className="text-sm opacity-50" inert>
                        <span className="">Power source: Unknown</span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-2 my-2" />
                    <MenubarItem className="text-sm opacity-50" inert>
                        <span className="">Battery unavailable</span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-2 my-2" />
                    <MenubarItem className="text-sm">
                        <span className="">Manage battery monitoring preferences...</span>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
