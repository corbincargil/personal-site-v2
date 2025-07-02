import { BatteryData } from ".";

export default function BatteryModal({
    batteryData,
    isOptedOut,
    onOptOut,
    onOptIn,
}: {
    batteryData?: BatteryData;
    isOptedOut: boolean;
    onOptOut: () => void;
    onOptIn: () => void;
}) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <span className="font-semibold">Battery Level</span>
                <span className="text-2xl font-bold">{Math.round(batteryData?.level || 0)}%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="font-semibold">Power Source</span>
                <span className="opacity-75">
                    {batteryData?.charging ? "Power Adapter" : "Battery"}
                </span>
            </div>
            <div className="w-full bg-stone-700 rounded-full h-4">
                <div
                    className="bg-green-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${batteryData?.level || 0}%` }}
                />
            </div>
            <div className="text-sm opacity-50">
                {batteryData?.charging ? "Charging..." : "Not charging"}
            </div>
            <div className="h-[1px] bg-stone-700" />
            {isOptedOut ? (
                <div className="flex items-center justify-between">
                    <span className="text-sm opacity-50">Battery monitoring is disabled</span>
                    <button
                        className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                        onClick={onOptIn}>
                        Enable monitoring
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <span className="text-sm opacity-50">
                        Click here to opt out of battery monitoring
                    </span>
                    <button
                        className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                        onClick={onOptOut}>
                        Opt out
                    </button>
                </div>
            )}
        </div>
    );
}
