import Image from "next/image";


import appScreen from "@/assets/images/app-screen.png";


export const ProductShowcase = () => {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-xl text-center text-white/70 mt-5">
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>
                <Image 
                    src={appScreen} 
                    alt="Product screenshot"  
                    className="mt-14 mx-auto"
                />
            </div>
        </div>
    )
}