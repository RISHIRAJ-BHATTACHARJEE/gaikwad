import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/careers-hero.png')] h-screen bg-cover bg-center p-6 flex flex-col items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 pb-12">
        <h2 className="text-3xl font-bold">Work With Us</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        <button className="primary py-2! font-[500]!">View Jobs</button>
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
          <a href="/" className="border-b border-zinc-500 pb-3">Home</a>
          <a href="/about" className="border-b border-zinc-500 pb-3">About Us</a>
          <a href="/career" className="border-b border-zinc-500 pb-3">Career</a>
          <a href="/projects" className="border-b border-zinc-500 pb-3">Projects</a>
          <a href="#" className="border-b border-zinc-500 pb-3">3d Tour</a>
          <a href="/blogs" className="border-b border-zinc-500 pb-3">Blogs</a>
          <a href="/" className="border-b border-zinc-500 pb-3">Newsletter</a>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
