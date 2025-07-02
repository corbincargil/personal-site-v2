"use client";

import { useState, useEffect } from "react";

export default function EtchASketchComponent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <div>
            <etch-a-sketch />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
