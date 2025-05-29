import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/about-us-hero.png')] p-8 bg-cover bg-center h-screen flex flex-col items-center justify-between text-white">
      <div className="flex items-center justify-between w-full p-2">
          <img src="/navbar-logo.png" alt="logo" className="w-34 md:w-48" />
          <MenuIcon className="text-white md:size-10" onClick={togglePanel}/>
        </div>
      <div className="flex flex-col gap-8">
        <h2 className="my-12 text-5xl md:text-6xl font-bold tracking-wide self-start">
          We Build Your Dream House
        </h2>
        <div className="flex mt-8 mb-12 gap-2 self-end">
          <div className="h-1 w-7 bg-white/40 rounded-full"></div>
          <div className="h-1 w-7 bg-white/40 rounded-full"></div>
          <div className="h-1 w-7 bg-white/40 rounded-full"></div>
          <div className="h-1 w-7 bg-white/40 rounded-full"></div>
        </div>
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
