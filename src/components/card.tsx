import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
type CardProps = {
    children: React.ReactNode,
    icon: string | StaticImport,
    iconAlt: string,
    title: string
}

export default function Card({ children, icon, iconAlt, title }: CardProps) {
    return (
        <div className="bg-white rounded-2xl  drop-shadow-xl max-w-sm text-[#3A0018] flex flex-col items-center overflow-hidden py-12 gap-12">
            <div className="p-6 bg-[#FFEDDE] rounded-full w-fit h-full">
                <Image src={icon} alt={iconAlt} width={80} />
            </div>
            <div className="px-6">
                <h2>
                    {title}
                </h2>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}