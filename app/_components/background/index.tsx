import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute bg-black inset-0 -z-10">
            <Image
                src="/background.jpg"
                className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1000px]"
                alt="background"
                width={1000}
                height={1000}
                priority
                quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />
        </div>
    );
}
