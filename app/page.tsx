import TopBar from "./_components/top-bar";
import Desktop from "./_components/desktop";
import Background from "./_components/background";
import { WindowProvider } from "./_components/windows/window-context";
import WindowManager from "./_components/windows/window-manager";

export default function Home() {
    return (
        <WindowProvider>
            <div className="h-screen w-screen relative overflow-hidden">
                <TopBar />
                <Desktop />
                <Background />
                <WindowManager />
            </div>
        </WindowProvider>
    );
}
