"use client";

import { useState, useEffect } from "react";

const formatDateTime = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${formattedHours}:${formattedMinutes} ${ampm}`;
};

export default function DateTime() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-background text-nowrap">{formatDateTime(currentDate)}</p>
        </div>
    );
}
