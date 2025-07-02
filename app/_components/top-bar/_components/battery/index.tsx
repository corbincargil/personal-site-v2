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
import { useWindows } from "@/app/_components/windows/use-windows";
import BatteryModal from "./battery-modal";

const BATTERY_MONITORING_OPTED_OUT_KEY = "battery-monitoring-opted-out";

export interface BatteryData {
    charging: boolean;
    level: number;
}

const placeholderBatteryData: BatteryData = {
    charging: false,
    level: 100,
};

export default function Battery() {
    const [batteryData, setBatteryData] = useState<BatteryData | null>(null);
    const [isOptedOut, setIsOptedOut] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem(BATTERY_MONITORING_OPTED_OUT_KEY) === "true";
        }
        return false;
    });
    const { openComponentWindow, closeWindow } = useWindows();

    useEffect(() => {
        if (isOptedOut) {
            setBatteryData(placeholderBatteryData);
            return;
        }

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
    }, [isOptedOut]);

    const handleOpenBatteryWindow = () => {
        openComponentWindow({
            id: "battery",
            title: "Battery",
            position: { x: 150, y: 150 },
            content: (
                <BatteryModal
                    batteryData={batteryData || undefined}
                    isOptedOut={isOptedOut}
                    onOptOut={() => {
                        setIsOptedOut(true);
                        localStorage.setItem(BATTERY_MONITORING_OPTED_OUT_KEY, "true");
                        closeWindow("battery");
                    }}
                    onOptIn={() => {
                        setIsOptedOut(false);
                        localStorage.removeItem(BATTERY_MONITORING_OPTED_OUT_KEY);
                        closeWindow("battery");
                    }}
                />
            ),
            resizable: false,
            size: { width: 400, height: 300 },
        });
    };

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
                        <span>
                            Power source: {batteryData.charging ? "Power Adapter" : "Battery"}
                        </span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-2 my-2" />
                    <MenubarItem className="text-sm opacity-50" inert>
                        <span>No apps using significant energy</span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-2 my-2" />
                    <MenubarItem className="text-sm" onClick={handleOpenBatteryWindow}>
                        <span className="">Manage battery monitoring preferences...</span>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
