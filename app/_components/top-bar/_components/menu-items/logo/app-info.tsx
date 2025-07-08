import Image from "next/image";

export default function AppInfo() {
    const details = [
        {
            label: "Experience",
            value: "3+ years",
        },
        {
            label: "Role",
            value: "Full-stack + PM",
        },
        {
            label: "Frontend",
            value: "React, Next.js",
        },
        {
            label: "Backend",
            value: "Node.js",
        },
        // {
        //     label: "Leadership",
        //     value: "Team lead, BA",
        // },
    ];
    return (
        <div className="w-full overflow-hidden">
            {/* Hero image */}
            <div className="py-8">
                <Image
                    src="/portrait copy.png"
                    alt="Corbin portrait"
                    width={120}
                    height={120}
                    className="mx-auto"
                    quality={100}
                    draggable={false}
                />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <div className="text-center">
                    <h1 className="text-xl font-bold">Corbin</h1>
                    <p className="text-[.6rem] text-stone-500">Software Engineer</p>
                </div>
                {/* System Information */}
                <div className="">
                    {details.map((detail) => (
                        <div key={detail.label} className="grid grid-cols-2 gap-3 py-[1px]">
                            <span className="text-[.65rem] text-stone-200 text-right">
                                {detail.label}
                            </span>
                            <span className="text-[.65rem] text-stone-400">{detail.value}</span>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="pt-2">
                    <p className="text-[.65rem] text-stone-500 text-center">
                        © 2025 Personal Site. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
