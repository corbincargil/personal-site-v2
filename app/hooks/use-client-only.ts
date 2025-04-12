import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Returns true if the code is running in the browser. */
export function useClientOnly() {
    const [isClient, setIsClient] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
