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
      <div className="flex items-center justify-between w-full p-6">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      {/* GRID */}
      <div className="grid grid-cols-5 grid-rows-2 mt-8">
        <div className="col-start-1 row-start-2 -translate-y-10 -translate-x-1">
          <img src="/testimonial-image1.png" alt="" className="w-13" />
        </div>
        <div className="col-start-2 row-start-1 -translate-y-2 -translate-x-3.5">
          <img src="/testimonial-image2.png" alt="" />
        </div>
        <div className="col-start-3 row-start-2 -translate-y-10">
          <img src="/testimonial-image3.png" alt="" />
        </div>
        <div className="col-start-4 row-start-1 -translate-y-2 translate-x-3.5">
          <img src="/testimonial-image4.png" alt="" />
        </div>
        <div className="col-start-5 row-start-2 -translate-y-10 translate-x-6.5">
          <img src="/testimonial-image5.jpg" alt="" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold text-center">
          Love From Our Clients
        </h2>
        <p className="text-sm text-center  px-6">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        <div className="pt-12">
          <TestimonialCard />
        </div>
        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-3 pb-6">
          <img src="/icons/comp-proj-left-arrow.png" alt="" className="w-12"/>
          <img src="/icons/comp-proj-right-arrow.png" alt="" className="w-12"/>
        </div>
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

export default Testimonials;

const TestimonialCard = () => {
  return (
    <div className="p-6 mx-12 flex flex-col gap-4 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
      <div className="flex items-center gap-2">
        <img src="/review-avatar.png" alt="review-avatar" className="w-10" />
        <h2 className="text-md">Ricardo</h2>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur. Semper ultrices commodo sed
        dolor bibendum.
      </p>
      <img src="/testimonials-bg-1.png" alt="review-bg-1" className="" />
    </div>
  );
};
