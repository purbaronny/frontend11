import { ArrowRight } from "lucide-react";

export default function Body() {
  return (
    <div className="bg-[#F4F7FA] min-h-screen flex flex-col items-center py-20 px-10">
      <div className="max-w-6xl w-full grid gap-16">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-10">
            <h2 className="ml-20 text-[40px] font-medium leading-[100%] tracking-[0%] font-['Neue Montreal'] md:w-1/3">
              {section.title}
            </h2>

            {/* Handling Recent Work */}
            {section.title === "Recent Work" ? (
              <div className="md:w-2/3 flex flex-col gap-8">
                {recentWork.map((work, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-300 pb-4">
                    {/* Bagian Kiri */}
                    <div className="flex flex-col gap-5">
                      <span className="text-[60px] font-normal leading-[100%] font-['Inter']">
                        {work.name}
                      </span>
                      <span className="text-[18px] font-normal leading-[160%] text-[#3C3D3E] font-['Neue Montreal']">
                        Brand Design - Webflow Development - Web Design
                      </span>
                    </div>

                    {/* Bagian Kanan (Tombol Link) */}
                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                      <div className="w-[85px] h-[85px] flex items-center justify-center border border-[#3C3D3E] rounded-full p-5 opacity-80 transition-all hover:bg-[#0B0C0E] hover:border-[#0B0C0E] group">
                        <ArrowRight
                          size={40}
                          className="text-black transition-all transform -rotate-45 group-hover:text-white"
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ) : section.title === "Testimonials" ? (
              <div className="md:w-2/3 flex flex-col gap-12">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    {/* Div Atas */}
                    <p className="text-[27px] font-normal leading-[140%] text-[#0B0C0E] font-['Neue Montreal']">
                      {testimonial.quote}
                    </p>

                    {/* Div Bawah */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-[50px]"
                      />
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
            ) : (
              <p className="text-[27px] font-normal leading-[140%] tracking-[0%] font-['Neue Montreal'] md:w-2/3">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  { title: "About", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Recent Work", content: "" },
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
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Ayush Raj",
    position: "VP of Marketing @ Webflow",
    image: "testi1.jpg" // Ganti dengan URL gambar asli
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Alex Cattoni",
    position: "Founder @ CopyPossy",
    image: "testi2.jpg" // Ganti dengan URL gambar asli
  }
];
