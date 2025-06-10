import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const Testimonials = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  return (
    <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A] montserrat-regular text-white">
      <div className="flex items-center justify-between lg:justify-evenly lg:gap-8 w-full p-2 lg:p-8">
         <img loading="lazy"   src="/navbar-logo.png" alt="logo" className="w-34 md:w-48 " />
        <MenuIcon
          className="lg:hidden text-white md:size-10 self-end -translate-y-3"
          onClick={togglePanel}
        />
        <ul className="hidden lg:flex space-x-10 text-sm md:text-lg font-light">
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
           <img loading="lazy"   src="/icons/call.png" alt="" className="w-4" />
          Contact Us
        </button>
      </div>
      {/* Mobile GRID */}
      <div className="lg:hidden grid grid-cols-5 grid-rows-2 mt-8">
        <div className="col-start-1 row-start-2 -translate-y-10 -translate-x-1">
           <img loading="lazy"   src="/testimonial-image1.png" alt="" className="w-13 md:w-26" />
        </div>
        <div className="col-start-2 row-start-1 -translate-y-2 -translate-x-3.5 md:-translate-x-8.5">
           <img loading="lazy"   src="/testimonial-image2.png" alt="" />
        </div>
        <div className="col-start-3 row-start-2 -translate-y-10 md:-translate-x-4">
           <img loading="lazy"   src="/testimonial-image3.png" alt="" />
        </div>
        <div className="col-start-4 row-start-1 -translate-y-2 translate-x-3.5">
           <img loading="lazy"   src="/testimonial-image4.png" alt="" />
        </div>
        <div className="col-start-5 row-start-2 -translate-y-10 translate-x-6.5">
           <img loading="lazy"   src="/testimonial-image5.jpg" alt="" className="rounded-3xl" />
        </div>
      </div>

      {/* Web Grids */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mt-8 px-6">
        {/* Grid 1 */}
        <div className="grid grid-cols-2 gap-4">
           <img loading="lazy"   src="/testimonial-web-image1.png" alt="" className="w-32 translate-y-18"/>
           <img loading="lazy"   src="/testimonial-web-image2.png" alt="" className="w-32 -translate-x-12"/>
           <img loading="lazy"   src="/testimonial-web-image3.png" alt="" className="w-32 translate-y-18"/>
           <img loading="lazy"   src="/testimonial-web-image4.png" alt="" className="w-32 -translate-x-12"/>
        </div>

        {/* Grid 2 */}
        <div className="flex gap-8 -translate-x-10">
         <img loading="lazy"   src="/testimonial-web-image1.png" alt="" className="size-42"/>
           <img loading="lazy"   src="/testimonial-web-image2.png" alt="" className="size-42 translate-y-18"/>
           <img loading="lazy"   src="/testimonial-web-image3.png" alt="" className="size-42"/>
        </div>

        {/* Grid 3 */}
        <div className="grid grid-cols-2 gap-4">
         <img loading="lazy"   src="/testimonial-web-image1.png" alt="" className="w-32 translate-x-24"/>
           <img loading="lazy"   src="/testimonial-web-image2.png" alt="" className="w-32 translate-y-18 translate-x-12"/>
           <img loading="lazy"   src="/testimonial-web-image3.png" alt="" className="w-32 translate-x-24"/>
           <img loading="lazy"   src="/testimonial-web-image4.png" alt="" className="w-32 translate-y-18 translate-x-12"/>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl md:text-2xl md:my-4 font-semibold text-center">
          Love From Our Clients
        </h2>
        <p className="text-sm md:text-lg text-center px-6 lg:w-1/2 lg:text-center lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        <div className="pt-12 lg:flex lg:mx-48 gap-10">
          <TestimonialCard />
          <div className="hidden lg:flex gap-10">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-3 pb-6">
           <img loading="lazy"   src="/icons/comp-proj-left-arrow.png" alt="" className="w-12" />
           <img loading="lazy"   src="/icons/comp-proj-right-arrow.png" alt="" className="w-12" />
        </div>
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

export default Testimonials;

const TestimonialCard = () => {
  return (
    <div className="p-6 md:p-8 mx-12 md:mx-32 lg:mx-0 flex flex-col gap-4 md:gap-10 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
      <div className="flex items-center gap-2 md:gap-3">
         <img loading="lazy"   src="/review-avatar.png" alt="review-avatar" className="w-10 md:w-14" />
        <h2 className="md:text-xl">Ricardo</h2>
      </div>
      <p className="text-sm md:text-lg">
        Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed
        dolor bibendum.
      </p>
       <img loading="lazy"   src="/testimonials-bg-1.png" alt="review-bg-1" className="" />
    </div>
  );
};
