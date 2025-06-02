import { ChevronRight, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import Footer from "../components/Footer";

const awards = [
  {
    bgColor: "bg-gradient-to-r from-[#17262A] to-[#24343B]",
    bgImage: "/award-1.png",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    bgColor: "bg-white text-black",
    bgImage: "/award-2.png",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    bgColor: "bg-gradient-to-r from-[#A71E22] to-[#E64237]",
    bgImage: "/award-3.png",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    bgColor: "bg-gradient-to-r from-[#17262A] to-[#24343B]",
    bgImage: "/award-1.png",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Lorem ipsum dolor sit amet consectetur.",
  },
];

const Awards = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A] montserrat-regular text-white">
      <div className="flex items-center justify-between w-full p-2 md:p-6">
        <img src="/navbar-logo.png" alt="logo" className="w-34 md:w-48" />
        <MenuIcon className="text-white md:size-10" onClick={togglePanel} />
      </div>
      <h2 className="text-xl md:text-3xl font-semibold text-center">Awards</h2>
      <p className="p-6 text-center text-sm md:text-lg md:mx-18">
        Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
      </p>
      {/* Awards Container */}
      <div className="mx-10 md:mx-18 flex flex-col gap-8 pb-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`${award.bgColor} p-6 md:p-10 rounded-2xl flex flex-col gap-4 md:gap-8`}
          >
            <img src={award.bgImage} alt="" className="rounded-lg" />
            <p className="text-sm md:text-lg">{award.paragraph}</p>
            <div className="flex items-center ">
              <p className={`text-zinc-500 md:text-lg`}>Read More</p>
              <ChevronRight size={20} className="text-zinc-500" />
            </div>
          </div>
        ))}
      </div>
      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-[24rem] bg-black text-white transition-transform duration-300 ease-in-out z-10 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon
            className="cursor-pointer m-4 size-8 md:size-12"
            strokeWidth={1}
            onClick={togglePanel}
          />
        </div>
        <ul className="mx-6 mt-6 flex flex-col gap-6 md:gap-8 text-xl md:text-2xl">
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
            Home
          </a>
          <a href="/about" className="border-b border-zinc-500 pb-3 md:pb-5">
            About Us
          </a>
          <a href="/career" className="border-b border-zinc-500 pb-3 md:pb-5">
            Career
          </a>
          <a href="/projects" className="border-b border-zinc-500 pb-3 md:pb-5">
            Projects
          </a>
          <a href="#" className="border-b border-zinc-500 pb-3 md:pb-5">
            3d Tour
          </a>
          <a href="/blogs" className="border-b border-zinc-500 pb-3 md:pb-5">
            Blogs
          </a>
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
            Newsletter
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Awards;
