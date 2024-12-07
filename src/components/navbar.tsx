"use client"
import Image from "next/image"
import logo from "../../public/logo.svg"
import { useState, useEffect } from "react"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

const LINKS = {
    about: "about",
    video_promotion: "video-promotion",
    merchandise: "merchandise",
    contact: "contact",
};

function scrollIntoSection(id: string) {
    const section = document.getElementById(id);
    console.log(id, section);
    section?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (id: string) => {
        if (isOpen) setIsOpen(false)
        scrollIntoSection(id);
    }

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50 w-full py-4 text-white",
                isScrolled ? "bg-[#3A0018]" : "bg-transparent" // Background color classes
            )}
        >
            <div className="container mx-auto max-lg:px-6">
                <nav className={clsx(isOpen ? "max-lg:absolute max-lg:inset-0 max-lg:w-dvw max-lg:h-dvh max-lg:bg-[#3A0018]" : "")}>

                    <ul className={clsx("flex flex-row justify-between items-center", isOpen ? "max-lg:container max-lg:mx-auto max-sm:px-6" : "")}>
                        <li className="max-lg:p-6">
                            <Image src={logo} draggable={false} alt="A logo of crimson cry studio" className="object-cover" width={40} height={40} />
                        </li>
                        <li className="max-lg:p-6 lg:hidden">
                            <button onClick={() => setIsOpen((prevState) => !prevState)}>
                                <CiMenuBurger className="fill-white hover:fill-[#FFE2C5] transition-all duration-400 w-6 h-6" />
                            </button>
                        </li>
                        <li className={clsx("flex flex-row gap-12 uppercase font-semibold text-base", isOpen ? "max-lg:flex max-lg:absolute max-lg:flex-col max-lg:top-1/2 max-lg:-translate-y-1/2" : "max-lg:hidden")}>
                            <a className="cursor-pointer hover:text-[#FFE2C5] transition-all duration-400" onClick={() => handleLinkClick(LINKS.about)}>
                                about
                            </a>
                            <a className="cursor-pointer hover:text-[#FFE2C5] transition-all duration-400" onClick={() => handleLinkClick(LINKS.video_promotion)}>
                                video promotion
                            </a>
                            <a className="cursor-pointer hover:text-[#FFE2C5] transition-all duration-400" onClick={() => handleLinkClick(LINKS.merchandise)}>
                                merchandise
                            </a>
                            <a className="cursor-pointer hover:text-[#FFE2C5] transition-all duration-400" onClick={() => handleLinkClick(LINKS.contact)}>
                                contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>)
}