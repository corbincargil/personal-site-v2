"use client";

import { useEffect, useState } from "react";
import {
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarSeparator,
} from "@/components/ui/menubar";
import { Menubar } from "@radix-ui/react-menubar";
import BatteryIcon from "./battery-icon";

export interface BatteryData {
    charging: boolean;
    level: number;
}

export default function Battery() {
    const [batteryData, setBatteryData] = useState<BatteryData | null>(null);

    useEffect(() => {
        const getBatteryInfo = async () => {
            try {
                if ("getBattery" in navigator) {
                    const battery = await (navigator as any).getBattery();
                    setBatteryData({
                        charging: battery.charging,
                        level: battery.level * 100,
                    });

                    battery.addEventListener("chargingchange", () => {
                        setBatteryData((prev) => ({
                            ...prev!,
                            charging: battery.charging,
                        }));
                    });

                    battery.addEventListener("levelchange", () => {
                        setBatteryData((prev) => ({
                            ...prev!,
                            level: battery.level * 100,
                        }));
                    });
                }
            } catch (error) {
                console.error("Battery API not supported:", error);
                setBatteryData(null);
            }
        };

        getBatteryInfo();
    }, []);

    if (!batteryData) return null;

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="h-full py-1 rounded-sm focus:bg-inherit focus:text-inherit">
                    <BatteryIcon batteryData={batteryData} />
                </MenubarTrigger>
                <MenubarContent className="-left-65 w-75">
                    <MenubarItem className="justify-between" inert>
                        <span className="font-semibold">Battery</span>
                        <span className="opacity-50">{Math.round(batteryData.level)}%</span>
                    </MenubarItem>
                    <MenubarItem className="text-sm opacity-50" inert>
                        <span className="">
                            Power source: {batteryData.charging ? "Power Adapter" : "Battery"}
                        </span>
                        <span className="opacity-50">
                            {batteryData.charging ? " (Charging)" : ""}
                        </span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-2 my-2" />
                    <MenubarItem className="text-sm opacity-50" inert>
                        <span className="">No apps using significant energy</span>
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
