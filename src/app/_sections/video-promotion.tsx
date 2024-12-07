"use client"
import YouTube from "react-youtube";

export default function VideoPromotion() {
    const opts = {
        height: "390",
        width: "640",
    }
    return (
        <div className="container mx-auto z-10">
            <h1 className="font-bold text-5xl mb-20 text-[#3A0018] text-center">Video Promotion</h1>
            <div className="grid place-items-center w-full">

                <YouTube videoId="GmZhi-BkwR0" opts={opts} />
            </div>
        </div>
    )
}