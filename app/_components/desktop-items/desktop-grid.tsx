import DesktopItem from "./desktop-item";
import { initialItems } from "./initial-items";

export default function DesktopGrid() {
    return (
        <div className="p-4 grid grid-cols-[repeat(auto-fill,96px)] gap-2 content-start">
            {initialItems.map((item) => (
                <DesktopItem
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                />
            ))}
        </div>
    );
} 