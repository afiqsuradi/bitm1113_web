import "./css/card.css"
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
        <div className="bg-white rounded-2xl  drop-shadow-2xl max-w-sm h-full text-white flex flex-col items-center overflow-hidden gap-12">
            <div className="p-6 bg-white rounded-full grid place-items-center mt-12">
                <Image src={icon} alt={iconAlt} width={80} />
            </div>
            <div className="bg-[#3A0018] pb-12 relative h-full">
                <div className="relative">
                    <div className="custom-shape-divider-bottom-1733578414">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <h2 className="px-6 block z-10 text-lg font-semibold mb-6 tracking-wide text-center">
                    {title}
                </h2>
                <p className="px-6 z-10 tracking-wide  text-justify">
                    {children}
                </p>
            </div>
        </div>
    )
}