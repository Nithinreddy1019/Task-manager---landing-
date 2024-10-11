"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import appScreen from "@/assets/images/app-screen.png";
import { useEffect, useRef } from "react";


export const ProductShowcase = () => {


    const appImage = useRef<HTMLImageElement>(null);

    const { scrollYProgress} = useScroll({
        target: appImage,
        offset: [
            "start end",
            "end end"
        ]
    });


    const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-xl text-center text-white/70 mt-5">
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>
                <motion.div
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px"
                    }}
                >
                    <Image 
                        ref={appImage}
                        src={appScreen} 
                        alt="Product screenshot"  
                        className="mt-14 mx-auto"
                    />
                </motion.div>
            </div>
        </div>
    )
}