"use client";


import helixImage from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export const CallToAction = () => {
    
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <div 
            ref={containerRef} 
            className="bg-black text-white text-center py-[72px] sm:py-24"
        >
            <div className="container max-w-xl relative">
                <motion.div
                    style={{
                        translateY: translateY
                    }}
                >
                    <Image 
                        src={helixImage}
                        alt="Helix logo"
                        className="absolute top-6 left-[calc(100%-4px)] hidden xl:block"
                    />
                </motion.div>
                <motion.div
                    style={{
                        translateY: translateY
                    }}
                >
                    <Image 
                        src={emojiStar}
                        alt="styar logo"
                        className="absolute -top-[120px] right-[calc(100%+24px)] hidden: md:block"
                    />
                </motion.div>
                <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get instant access</h2>
                <p className="text-xl mt-5 text-white/70">
                    Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
                </p>
                <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
                    <input
                        className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button
                        className="bg-white text-black h-12 rounded-lg px-5"
                    >
                        Get access
                    </button>
                </form>
            </div>
        </div>
    )
}