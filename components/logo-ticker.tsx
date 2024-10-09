"use client"

import Image from "next/image";

import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";

const images = [
    { src: acmeLogo, alt: "acmeLogo" },
    { src: quantumLogo, alt: "quantumLogo" },
    { src: echoLogo, alt: "echoLogo" },
    { src: celestialLogo, alt: "celestialLogo" },
    { src: pulseLogo, alt: "pulseLogo" },
    { src: apexLogo, alt: "apexLogo" }
];

export const LogoTicker = () => {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>
                <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative  before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
                    <div className="flex justify-center gap-16">
                        {images.map(({src, alt}) => (
                            <Image 
                                src={src}
                                alt={alt}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}