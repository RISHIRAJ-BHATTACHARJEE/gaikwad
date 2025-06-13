import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="relative bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/uniqo-hero-mobile.png')] bg-cover bg-no-repeat bg-center h-screen montserrat-regular flex flex-col">
      {/* Navbar */}
      <div className="flex items-center justify-between lg:justify-evenly lg:gap-8 w-full p-8 lg:pt-12">
        <img
          loading="lazy"
          src="/navbar-logo.png"
          alt="logo"
          className="w-34 md:w-48 "
        />
        <MenuIcon
          className="lg:hidden text-white md:size-10 self-end -translate-y-3"
          onClick={togglePanel}
        />
        <ul className="hidden lg:flex space-x-7 text-sm md:text-lg font-light">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="#">3d Tour</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
        <button className="hidden lg:flex items-center gap-2 bg-[#CE3631] px-4 py-3 rounded-2xl text-white text-sm cursor-pointer">
          <img loading="lazy" src="/icons/call.png" alt="" className="w-4" />
          Contact Us
        </button>
      </div>

      {/* Spacer to push the contents ti the bottom */}
      <div className="flex-grow" />

      {/* Hero Texts */}
      <div className="flex flex-col items-center justify-end pb-12">
        {/* Heading */}
        <h2 className="text-4xl text-white uppercase font-medium">
          lorem ipsum
        </h2>
        {/* Paragraph */}
        <p className="text-sm leading-7 text-center text-white px-4">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        {/* RERA No. & Certificate */}
        <div className="flex items-center gap-3">
          {/* Rera No */}
          <div className="flex flex-col leading-2">
            <h2 className="text-white font-semibold text-xl">
              RERA No. XXXX XXXX XX
            </h2>
            <p className="text-xs flex items-center text-white">
              View RERA Certificate{" "}
              <img src="/icons/maki_arrow.png" alt="" className="size-4" />
            </p>
          </div>
          {/* QR Code */}
          <img src="/icons/qr-code.png" className="size-8" />
        </div>
      </div>

      {/* Icons */}
      <div className="absolute flex flex-col gap-3 bottom-6 right-2">
        <img src="/icons/uniqo-hero-call.png" alt="" className="w-8"/>
        <img src="/icons/uniqo-whatsapp.png" alt="" className="w-8"/>
      </div>

      {/* Mobile Menu Panel */}
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
        <ul className="mx-6 -mt-2 flex flex-col gap-6 md:gap-8 text-xl md:text-2xl">
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
          <a href="/blogs" className="border-b border-zinc-500 pb-3 md:pb-5">
            Enquire Now
          </a>
          <a href="/" className="border-b border-zinc-500 pb-3 md:pb-5">
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
