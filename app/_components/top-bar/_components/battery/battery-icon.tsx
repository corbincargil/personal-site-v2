import { BatteryFull, BatteryMedium, BatteryLow, BatteryCharging, Battery } from "lucide-react";
import { BatteryData } from "./index";

export default function BatteryIcon({ batteryData }: { batteryData: BatteryData }) {
    const { level, charging } = batteryData;

    if (charging) return <BatteryCharging className="w-5 h-5 aspect-square text-background" />;

    if (level >= 80) return <BatteryFull className="w-5 h-5 aspect-square text-background" />;

    if (level >= 40) return <BatteryMedium className="w-5 h-5 aspect-square text-background" />;

    if (level >= 20) return <BatteryLow className="w-5 h-5 aspect-square text-background" />;

    if (level <= 10) return <Battery className="w-5 h-5 aspect-square text-background" />;
}
