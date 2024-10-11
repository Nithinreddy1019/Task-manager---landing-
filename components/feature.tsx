"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { useEffect, useRef } from "react";


type Props = {
    title: string,
    description: string
};

export const Feature = ({
    title,
    description
}: Props) => {

    const border = useRef<HTMLDivElement>(null);

    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if(!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);

        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    });

    return (
        <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
            <motion.div
                ref={border}
                style={{ 
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage,
                    
                }} 
                className="absolute inset-0 border-2 border-purple-400 rounded-xl" 
            ></motion.div>
            <div className="inline-flex mx-auto size-14 bg-white text-black items-center justify-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-semibold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    )
}