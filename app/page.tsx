import TopBar from "./_components/top-bar";
import DesktopIcons from "./_components/desktop-items/desktop-grid";
import Background from "./_components/background";

export default function Home() {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <TopBar />
            <DesktopIcons />
            <Background />
        </div>
    );
}
