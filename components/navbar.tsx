import logoImage from  "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import { ArrowBigRight } from "lucide-react"

import Image from "next/image";



export const Navbar = () => {
    return (
        <div className="bg-black">
            <div className=" px-4">
                <div className="py-4 flex items-center justify-between">
                    <div className="relative">
                        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                        <Image 
                            src={logoImage}
                            alt="Logo"
                            className="size-12 relative"
                        />
                    </div>
                    <div className="border border-white/30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
                        <MenuIcon className="text-white"/>
                    </div>
                    <nav className="sm:flex items-center gap-6 hidden">
                        <a href="#" className="text-white/60 hover:text-white transition">About</a>
                        <a href="#" className="text-white/60 hover:text-white transition">Features</a>
                        <a href="#" className="text-white/60 hover:text-white transition">Updates</a>
                        <a href="#" className="text-white/60 hover:text-white transition">Help</a>
                        <a href="#" className="text-white/60 hover:text-white transition">Customers</a>
                        <button className="bg-white py-2 px-4 rounded-lg hover:bg-gray-100 transition">Get for free
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}