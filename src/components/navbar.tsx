import Image from "next/image"
import logo from "../../public/logo.svg"
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10 text-white">
            <div className="container mx-auto max-lg:px-6">

                <nav>
                    <ul className="flex flex-row justify-between items-center">
                        <li>
                            <Image src={logo} draggable={false} alt="A logo of crimson cry studio" className="object-cover" width={40} height={40} />
                        </li>
                        <li className="flex flex-row gap-12 uppercase font-semibold text-base ">
                            <a>about</a>
                            <a>merchandise</a>
                            <a>contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}