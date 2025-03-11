"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Body() {
  return (
    <div className="bg-[#F4F7FA] min-h-screen flex flex-col items-center py-20 px-10">
      <div className="max-w-6xl w-full grid gap-16">
        {/* Sections 1: About & Recent Work */}
        {sections1.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-10">
            <h2 className="ml-20 text-[40px] font-medium leading-[100%] tracking-[0%] font-['Neue Montreal'] md:w-1/3">
              {section.title}
            </h2>

            {section.title === "Recent Work" ? (
              <div className="md:w-2/3 flex flex-col gap-8">
                {recentWork.map((work, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-300 pb-4">
                    <div className="flex flex-col gap-5">
                      <span className="text-[60px] font-normal leading-[100%] font-['Inter']">
                        {work.name}
                      </span>
                      <span className="text-[18px] font-normal leading-[160%] text-[#3C3D3E] font-['Neue Montreal']">
                        Brand Design - Webflow Development - Web Design
                      </span>
                    </div>
                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                      <div className="w-[85px] h-[85px] flex items-center justify-center border border-[#3C3D3E] rounded-full p-5 opacity-80 transition-all hover:bg-[#0B0C0E] hover:border-[#0B0C0E] group">
                        <ArrowRight size={40} className="text-black transition-all transform -rotate-45 group-hover:text-white" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[27px] font-normal leading-[140%] tracking-[0%] font-['Neue Montreal'] md:w-2/3">
                {section.content}
              </p>
            )}
          </div>
        ))}

        {/* Image List */}
        <div className="flex flex-col gap-10 mt-10 overflow-hidden">
          {[imageList1, imageList2].map((imageList, listIndex) => (
            <motion.div
              key={listIndex}
              className="flex gap-10 w-full"
              initial={{ x: "100%" }} // Mulai dari luar layar kanan
              animate={{ x: "100%" }} // Geser ke kiri sampai habis
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Ulangi tanpa batasan
            >
              {[...imageList].map((image, i) => ( // Gandakan list untuk looping seamless
                <div
                  key={i}
                  className="w-[444px] h-[306px] flex items-center justify-center bg-[#C7D0D9] relative overflow-hidden"
                >
                  <div className="relative w-[348px] h-[194px]">
                    <Image
                      src={image}
                      alt={`Image ${listIndex}-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Section 2: Testimonials */}
        {sections2.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-10">
            <h2 className="ml-20 text-[40px] font-medium leading-[100%] tracking-[0%] font-['Neue Montreal'] md:w-1/3">
              {section.title}
            </h2>
            <div className="md:w-2/3 flex flex-col gap-12">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <p className="text-[27px] font-normal leading-[140%] text-[#0B0C0E] font-['Neue Montreal']">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-[18px] font-medium leading-[160%] font-['Neue Montreal']">
                        {testimonial.name}
                      </span>
                      <span className="text-[14px] font-normal leading-[160%] font-['Neue Montreal']">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections1 = [
  { title: "About", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { title: "Recent Work", content: "" }
];

const sections2 = [
  { title: "Testimonials", content: "" }
];

const recentWork = [
  { name: "Decodable.co", url: "https://decodable.co" },
  { name: "Gofirefly.io", url: "https://gofirefly.io" },
  { name: "Blinkops.com", url: "https://blinkops.com" },
  { name: "Withkanvas.com", url: "https://withkanvas.com" }
];

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Ayush Raj",
    position: "VP of Marketing @ Webflow",
    image: "/testi1.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Alex Cattoni",
    position: "Founder @ CopyPossy",
    image: "/testi2.jpg"
  }
];

const imageList1 = ["/up1.png", "/up2.png", "/up3.png", "/up4.png"];
const imageList2 = ["/bottom1.png", "/bottom2.png", "/bottom3.png", "/bottom4.png"];