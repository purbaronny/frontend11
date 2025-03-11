export default function Footer() {
    return (
        <div className="w-full bg-[#0B0C0E] text-white py-10 px-20 flex flex-col gap-10">
            {/* Footer Middle Section */}
            <div className="relative flex justify-between items-center h-[160px] px-20">
                {/* Left Section */}
                <div className="flex flex-col gap-4">
                    <p className="text-[60px] font-medium" style={{ fontFamily: "Neue Montreal" }}>
                        Have something in mind?
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="/avatar-footer.png"
                            alt="Avatar"
                            className="w-[80px] h-[80px] rounded-full"
                        />
                        <p className="text-[60px] font-medium" style={{ fontFamily: "Neue Montreal" }}>
                            let’s build it together.
                        </p>
                    </div>
                </div>
                {/* Right Section */}
                <a href="#contact" className="bg-[#F4F7FA] text-[#0B0C0E] 
                    rounded-full px-12 py-6 text-[18px] font-medium" 
                    style={{ fontFamily: "Neue Montreal" }}>
                    Get in touch
                </a>
            </div>

            {/* Spacer untuk menjaga keseimbangan layout */}
            <div className="h-10"></div>
            
            {/* Footer Bottom Section */}
            <div className="flex justify-between text-[#C7D0D9] text-[18px]" style={{ fontFamily: "Neue Montreal" }}>
                {/* Left Text */}
                <p>Build with 💖 by Brightscout & Ayush</p>
                {/* Right Links */}
                <ul className="flex gap-6">
                    <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                    <li><a href="#twitter" className="hover:underline">Twitter</a></li>
                    <li><a href="#instagram" className="hover:underline">Instagram</a></li>
                    <li><a href="#webflow" className="hover:underline">Webflow</a></li>
                </ul>
            </div>
        </div>
    );
}
