import Image from "next/image";
import TopBar from "./_components/top-bar";
import DesktopIcons from "./_components/desktop-items/desktop-grid";

export default function Home() {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.jpg"
                    className="object-cover w-full h-full"
                    alt="background"
                    fill
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />
            </div>            
            <div className="relative z-[2] h-full flex flex-col">
                <TopBar />
                <main className="flex-1">
                    <DesktopIcons />
                </main>
            </div>
        </div>
    );
}
