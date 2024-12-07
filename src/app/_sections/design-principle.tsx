
import ContrastIcon from "../../../public/icons/contrast.svg"
import EmphasisIcon from "../../../public/icons/emphasis.svg"
import UnityIcon from "../../../public/icons/unity.svg"
import Card from "@/components/card";

export function DesignPrinciple() {
    return (
        <div className="container mx-auto z-10">
            <h1 className="font-bold text-5xl mb-20 text-[#3A0018] text-center">Design Principle</h1>
            <div className="grid auto-rows-auto max-lg:gap-12 lg:grid-cols-3 place-items-center p-6">
                <Card icon={ContrastIcon} iconAlt="Contrast icon" title="Contrast">
                    The contrast between the light skin tone and the dark red teardrop mirrors the duality of human nature,
                    symbolizing the interplay between light and darkness, joy and sorrow.
                </Card>
                <Card icon={EmphasisIcon} iconAlt="Emphasis icon" title="Emphasis">
                    The teardrop, as the focal point of the logo, draws the viewer&apos;s attention and highlights the emotional intensity of the character.
                </Card>
                <Card icon={UnityIcon} iconAlt="Unity icon" title="Unity">
                    The overall design is unified by the use of a consistent color palette and a simple, clean aesthetic.
                </Card>
            </div>
        </div>
    )
}