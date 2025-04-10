import Image from "next/image";
import TopBar from "./_components/top-bar";
export default function Home() {
    return (
        <div className="h-screen w-screen bg-background">
            <TopBar />
            <Image
                src="/logo_white.png"
                className="object-contain select-none pointer-events-none max-w-[1250px] m-auto"
                alt="corbin logo white"
                fill
                draggable={false}
            />
        </div>
    );
}
