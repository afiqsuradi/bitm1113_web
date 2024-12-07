import Image from "next/image";
import InterviewImage from "../../../public/people-interview.svg"
export default function About() {
    return (
        <div className="container py-20 mx-auto max-lg:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <div>
                    <Image src={InterviewImage} alt="People interviewing" width={600} />
                </div>
                <div className="text-[#3A0018] py-10">
                    <h1 className="font-bold text-5xl mb-6">About</h1>
                    <p className="max-w-xl tracking-wide">
                        Crimson Cry Studio is a place where darkness and light converge.
                        We embrace the duality of human nature, exploring the depths of emotion and the heights of creativity.
                        Our work is a reflection of this philosophy, blending artistry with technology to create unique and thought-provoking content.
                        We invite you to join us on this journey and experience the magic of Crimson Cry.
                    </p>
                </div>
            </div>
        </div>
    )
}