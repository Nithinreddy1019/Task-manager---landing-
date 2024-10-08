import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#470008_34%,#8c0015_65%,#c4011e_82%)] py-[72px]">
            <div className="container">
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex items-center gap-3 border py-1 px-2 rounded-lg border-white/30">
                        <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text] font-medium">Version 2.0 is here</span>
                        <span className="inline-flex items-center gap-1">
                            <span>Read more</span>
                            <ArrowRight className="size-4"/>
                        </span>
                    </a>
                </div>
                <h1>One Task at a Time</h1>
                <p>
                    Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
                </p>
                <button>
                    Get for free
                </button>
            </div>
        </div>  
    )
}