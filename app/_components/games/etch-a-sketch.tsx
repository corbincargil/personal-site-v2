"use client";

import { useState, useEffect } from "react";

export default function EtchASketchComponent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <div className="flex flex-col items-center justify-center h-screen">
            <etch-a-sketch />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
