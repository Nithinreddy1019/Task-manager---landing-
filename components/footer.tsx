
import InstaIcon from "@/assets/icons/insta.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import XSocial from "@/assets/icons/x-social.svg";

export const Footer = () => {
    return (
        <footer className="bg-black text-white/60 py-5 border-t border-white/20">
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="text-center">
                        © 2024 Your Company, Inc. All rights reserved
                    </div>
                    <ul className="flex justify-center items-center gap-2.5">
                        <li>
                            <InstaIcon />
                        </li>
                        <li>
                            <YoutubeIcon />
                        </li>
                        <li>
                            <XSocial />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}