import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute inset-0 -z-10">
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
    );
}
