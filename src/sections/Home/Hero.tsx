import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="bg-[url('/bg-1-mobile.png')] bg-cover bg-no-repeat flex flex-col pt-7 md:pt-10">
      <div className="bg-[#0C1C20] mx-4 md:mx-10 p-6 flex flex-col text-white items-center">
        <div className="flex items-center justify-between w-full p-2">
          <img src="/navbar-logo.png" alt="logo" className="w-34 md:w-48" />
          <MenuIcon className="text-white md:size-10" onClick={togglePanel}/>
        </div>
        <h2 className="uppercase font-semibold text-3xl md:text-7xl pt-16 tracking-wider">
          dream estate
        </h2>
        <div className="relative">
          <img src="1.png" alt="" className="md:-translate-y-9"/>
          <div className="absolute -right-8 md:-right-36 top-7 md:top-8">
            {/* Avatars */}
            <div className="flex space-x-[-5px] md:translate-x-7">
              <img
                src="avatar-1.png"
                alt="avatar-1"
                className="size-6 md:size-10 rounded-full"
              />
              <img
                src="avatar-2.png"
                alt="avatar-1"
                className="size-6 md:size-10 rounded-full"
              />
              <img
                src="avatar-1.png"
                alt="avatar-1"
                className="size-6 md:size-10 rounded-full"
              />
              <span className="size-6 md:size-10 rounded-full bg-white text-black text-[8px] md:text-xl text-center pt-1.5">
                +5
              </span>
            </div>
            <p className="text-[5px] md:text-[15px] w-2/3 md:w-[60%] text-center pt-2">People successfully got their dream property</p>
          </div>
        </div>
        <p className="text-center font-light text-xs md:text-lg px-4 leading-5 md:leading-7 py-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text
        </p>
        <button className="primary text-sm md:text-lg md:mb-4">Discover More</button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-[24rem] bg-black text-white transition-transform duration-300 ease-in-out z-10 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon className="cursor-pointer m-4 size-8 md:size-12" strokeWidth={1} onClick={togglePanel} />
        </div>
        <ul className="mx-6 mt-6 flex flex-col gap-6 md:gap-8 text-xl md:text-2xl">
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">Home</a>
          <a href="/about" className="border-b border-zinc-500 pb-3 md:pb-5">About Us</a>
          <a href="/career" className="border-b border-zinc-500 pb-3 md:pb-5">Career</a>
          <a href="/projects" className="border-b border-zinc-500 pb-3 md:pb-5">Projects</a>
          <a href="#" className="border-b border-zinc-500 pb-3 md:pb-5">3d Tour</a>
          <a href="/blogs" className="border-b border-zinc-500 pb-3 md:pb-5">Blogs</a>
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">Newsletter</a>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
