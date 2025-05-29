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
      <div className="flex items-center justify-between w-full p-6">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      <h2 className="text-xl font-semibold text-center">Awards</h2>
      <p className="p-6 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
      </p>
      {/* Awards Container */}
      <div className="mx-10 flex flex-col gap-8 pb-8">
        {awards.map((award, index) => (
          <div key={index} className={`${award.bgColor} p-6 rounded-2xl flex flex-col gap-4`}>
            <img src={award.bgImage} alt="" className="rounded-lg"/>
            <p className="text-sm">{award.paragraph}</p>
            <div className="flex items-center ">
              <p className={`text-zinc-500`}>Read More</p>
              <ChevronRight size={20} className="text-zinc-500"/>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon className="cursor-pointer m-4 size-8" strokeWidth={1} onClick={togglePanel} />
        </div>
        <ul className="mx-6 mt-6 flex flex-col gap-6 text-xl">
          <li className="border-b border-zinc-500 pb-3">Home</li>
          <li className="border-b border-zinc-500 pb-3">About Us</li>
          <li className="border-b border-zinc-500 pb-3">Career</li>
          <li className="border-b border-zinc-500 pb-3">Projects</li>
          <li className="border-b border-zinc-500 pb-3">3d Tour</li>
          <li className="border-b border-zinc-500 pb-3">Blogs</li>
          <li className="border-b border-zinc-500 pb-3">Newsletter</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Awards;
