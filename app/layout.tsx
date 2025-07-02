import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Corbin Cargil",
    description: "Corbin Cargil's portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <script src="https://unpkg.com/@corbincargil/etch-a-sketch"></script>
            </head>
            <body className={`${roboto.variable} font-roboto`}>{children}</body>
        </html>
    );
}
