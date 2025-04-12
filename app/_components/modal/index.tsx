import * as React from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    description?: string;
    className?: string;
}

export function Modal({ children, title, description, className }: ModalProps) {
    return (
        <>
            <DialogContent
                className={cn(
                    "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-stone-800/90 backdrop-blur-md outline outline-stone-700",
                    "[&>button]:hidden",
                    className
                )}>
                <div className="absolute left-2 top-2 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500 cursor-pointer" />
                    <div className="h-3 w-3 rounded-full bg-stone-500 cursor-pointer" />
                    <div className="h-3 w-3 rounded-full bg-stone-500 cursor-pointer" />
                </div>

                <div className="pt-8">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                    {children}
                </div>
            </DialogContent>
        </>
    );
}
