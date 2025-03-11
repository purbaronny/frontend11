"use client";

import Image from "next/image";
import React, { useState } from "react"; // ✅ Tambahkan ini

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="relative w-full flex flex-col min-h-[690px]">
            {/* Header Content */}
            <div className="flex justify-between items-center w-full bg-[#C7D0D9] py-2 px-20 relative z-10">
                <label className="text-[18px] font-normal leading-[160%] tracking-normal" style={{ fontFamily: "Neue Montreal" }}>
                    @Ayush Barnwal
                </label>
                <ul className="flex gap-4 text-[18px] font-normal leading-[100%] tracking-normal items-center" style={{ fontFamily: "Neue Montreal" }}>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>

            {/* Background Image */}
            <div className="absolute top-10 left-0 w-full bg-[#C7D0D9] h-[655px] -z-10">
                <Image
                    src="/hero.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Button di kanan */}
            <button
                className={`absolute bg-[#0B0C0E] text-white transition-all duration-300 flex items-center justify-center gap-2
                    ${isClicked ? "w-[211px]" : "w-auto px-4"} 
                    h-[48px] top-[298px] right-[0px]
                    rounded-tl-[64.29px] rounded-bl-[64.29px]`}
                style={{
                    fontFamily: "Neue Montreal",
                    fontWeight: 500,
                    fontSize: "25px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                }}
                onClick={() => setIsClicked(!isClicked)}
            >
                {isClicked ? (
                    <>
                        <span>👋</span>
                        Hi I’m Ayush
                    </>
                ) : (
                    <span>👋</span>
                )}
            </button>

            <div className="absolute w-full overflow-hidden top-[400px]">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(2)].map((_, i) => (
                        <span key={i} className="text-[150.38px] font-medium text-[#F4F7FA] mx-10" style={{ fontFamily: "Neue Montreal" }}>
                            Webflow Developer - UI/UX Designer - Web Designer - 
                        </span>
                    ))}
                </div>
            </div>

            {/* CSS Animasi */}
            <style jsx>{`
                @keyframes marquee {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(100%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 10s linear infinite;
                }
            `}</style>
        </div>
    );
}
