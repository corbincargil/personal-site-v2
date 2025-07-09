import Image from "next/image";
import { DesktopIconProps } from "../types";
import { ExternalLink } from "lucide-react";

/** Handles rendering the Desktop Item icon and name. */
export function DesktopIcon({ name, icon, isSelected, isLink }: DesktopIconProps) {
    return (
        <div className="h-full w-full flex flex-col justify-between gap-1">
            <div
                className={`flex-1 flex items-center justify-center p-1 rounded-[2px] relative ${isSelected ? "bg-gray-400/30 outline-2 outline-gray-300/30" : ""}`}>
                <Image
                    src={icon}
                    alt={name}
                    width={56}
                    height={56}
                    className="select-none pointer-events-none rounded-lg"
                    draggable={false}
                />
                {isLink && (
                    <div className="absolute top-0 right-0 p-1">
                        <ExternalLink className="w-3 h-3 text-gray-200" />
                    </div>
                )}
            </div>
            <p
                className={`text-xs font-semibold text-center px-1 rounded line-clamp-2 h-8
                ${isSelected ? "bg-blue-700 text-white" : "text-primary"}`}>
                {name}
            </p>
        </div>
    );
}
