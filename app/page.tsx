import TopBar from "./_components/top-bar";
import Desktop from "./_components/desktop";
import Background from "./_components/background";

export default function Home() {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <TopBar />
            <Desktop />
            <Background />
        </div>
    );
}
