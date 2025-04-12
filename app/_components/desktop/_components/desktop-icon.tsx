import Image from "next/image";
import { DesktopIconProps } from "../types";

/** Handles rendering the Desktop Item icon and name. */
export function DesktopIcon({ name, icon, isSelected }: DesktopIconProps) {
    return (
        <>
            <div
                className={`p-1 rounded-[2px] ${isSelected ? "bg-gray-400/30 outline-2 outline-gray-300/30" : ""}`}>
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="select-none pointer-events-none"
                    draggable={false}
                />
            </div>
            <p
                className={`text-xs text-center px-1 rounded line-clamp-2
                ${isSelected ? "bg-blue-800 text-white" : "text-primary"}`}>
                {name}
            </p>
        </>
    );
}
