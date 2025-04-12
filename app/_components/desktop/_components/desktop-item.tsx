import { DesktopIcon } from "./desktop-icon";
import { DesktopItemProps } from "../types";
import { CSSProperties } from "react";

/** The base Desktop Item. Can be passed a postion or be wrapped in a DraggableItem. */
export default function DesktopItem({
    name,
    icon,
    position,
    isSelected,
    setSelected,
}: DesktopItemProps) {
    const styles: CSSProperties = position
        ? {
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
          }
        : {};

    return (
        <div
            className="flex flex-col items-center gap-1 w-16"
            style={styles}
            onClick={(e) => {
                e.stopPropagation();
                setSelected?.(true);
            }}
            onBlur={() => setSelected?.(false)}
            tabIndex={0}>
            <DesktopIcon name={name} icon={icon} isSelected={isSelected} />
        </div>
    );
}
