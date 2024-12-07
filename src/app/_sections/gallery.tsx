import Image from "next/image"
import HoodieMockup from "../../../public/mockups/hoodie.jpg"
import PhoneMockup from "../../../public/mockups/phone.jpg"
import ToteMockup from "../../../public/mockups/tote.jpg"
import MugMockup from "../../../public/mockups/mug.png"
import MaskMockup from "../../../public/mockups/mask.png"
import ShirtMockup from "../../../public/mockups/shirt.png"
import PillowMockup from "../../../public/mockups/pillow.png"
import CupMockup from "../../../public/mockups/cup.png"
import Shirt2Mockup from "../../../public/mockups/shirt-2.png"

export default function Gallery() {
    return (
        <div className="text-white container mx-auto flex flex-col gap-20">
            <h1 className="text-5xl text-center font-bold tracking-wide">Merchandise</h1>
            <div className="flex flex-row gap-2 lg:gap-8 justify-center [&>*]:w-full max-lg:px-6">
                <div className="flex flex-col gap-2 lg:gap-8 [&>*]:w-full [&>*]:rounded-xl [&>*]:overflow-hidden">
                    <Image src={MugMockup} alt="Mug Mockup" />
                    <Image src={HoodieMockup} alt="Hoodie Mockup" />
                    <Image src={MaskMockup} alt="Mask Mockup" />
                </div>
                <div className="flex flex-col gap-2 lg:gap-8 [&>*]:w-full [&>*]:rounded-xl [&>*]:overflow-hidden">

                    <Image src={PhoneMockup} alt="Phone Mockup" />
                    <Image src={ShirtMockup} alt="Shirt Mockup" />
                    <Image src={PillowMockup} alt="Pillow Mockup" />
                </div>
                <div className="flex flex-col gap-2 lg:gap-8 [&>*]:w-full [&>*]:rounded-xl [&>*]:overflow-hidden">

                    <Image src={CupMockup} alt="Cup Mockup" />
                    <Image src={Shirt2Mockup} alt="Shirt Mockup" />
                    <Image src={ToteMockup} alt="Tote Mockup" />
                </div>
            </div>
        </div>
    )
}