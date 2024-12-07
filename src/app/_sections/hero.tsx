import Image from "next/image";
import logo from "../../../public/logo.svg"

export default function Hero() {
    return (
        <div className="container mx-auto py-40 flex flex-row justify-between">
            <div className="flex flex-col gap-2 max-lg:px-6">
                <p className="tracking-wide text-lg text-[#FFCF85]">Beyond the Veil of Reality</p>
                <h1 className="text-7xl font-bold uppercase">Crimson<br /> Cry Studio</h1>
                <p className="max-w-xl text-[#FFF4E6] tracking-wide pt-4">Immerse yourself in a world of captivating visuals and innovative digital solutions.
                    We specialize in crafting stunning videos, captivating images, and cutting-edge web development.</p>
            </div>
            <div className="bg-[#A7001E] rounded-full p-6 w-60 h-60 grid place-items-center max-lg:hidden">
                <Image src={logo} alt="crimson cry logo" className="object-cover" width={100} height={134} />

            </div>
        </div>
    )
}