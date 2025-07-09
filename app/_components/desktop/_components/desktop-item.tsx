import { DesktopIcon } from "./desktop-icon";
import { DesktopItemProps } from "../types";
import { CSSProperties, useCallback, useRef } from "react";

/** The base Desktop Item. Can be passed a postion or be wrapped in a DraggableItem. */
export default function DesktopItem({
    name,
    icon,
    position,
    isSelected,
    setSelected,
    onDoubleClick,
    isLink,
}: DesktopItemProps) {
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const clickCountRef = useRef(0);

    const styles: CSSProperties = position
        ? {
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
          }
        : {};

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            setSelected?.(true);

            clickCountRef.current += 1;

            if (clickCountRef.current === 1) {
                clickTimeoutRef.current = setTimeout(() => {
                    clickCountRef.current = 0;
                }, 300);
            } else if (clickCountRef.current === 2) {
                if (clickTimeoutRef.current) {
                    clearTimeout(clickTimeoutRef.current);
                }
                clickCountRef.current = 0;
                onDoubleClick?.();
            }
        },
        [setSelected, onDoubleClick]
    );

    return (
        <div
            className="w-18 h-26"
            style={styles}
            onClick={handleClick}
            onBlur={() => setSelected?.(false)}
            tabIndex={0}>
            <DesktopIcon name={name} icon={icon} isSelected={isSelected} isLink={isLink} />
        </div>
    );
}
