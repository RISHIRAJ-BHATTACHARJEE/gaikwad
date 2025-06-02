import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const BlogPost = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#24343B] to-[#17262A] text-white p-6 montserrat-regular">
        <div className="flex items-center justify-between w-full p-2 md:p-6">
          <img src="/navbar-logo.png" alt="logo" className="w-34 md:w-48" />
          <MenuIcon className="text-white md:size-10" onClick={togglePanel} />
        </div>
        <img src="/blogs-1.png" alt="single-blog-1" className="my-12 md:w-[80%] md:mx-auto" />
        <div className="flex flex-col gap-5 md:mx-18">
          <h1 className="font-semibold text-lg md:text-2xl">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <p className="text-sm md:text-lg text-zinc-400">12 Jun, 2025</p>
          <div className="flex flex-col gap-7 font-light text-sm md:text-lg">
            <p className="leading-6.5 md:leading-7.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
            <p className="leading-6.5 md:leading-7.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <h2 className="text-center font-semibold text-xl md:text-3xl my-12">Lorem Ipsum</h2>
        <div className="flex flex-col gap-7 font-light text-sm md:text-lg md:mx-18">
          <p className="leading-6.5 md:leading-7.5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <img
            src="individual-blog-1.png"
            alt="individual-blog-1"
            className="my-10"
          />
          <p className="leading-6.5 md:leading-7.5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
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
            <a
              href="/projects"
              className="border-b border-zinc-500 pb-3 md:pb-5"
            >
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
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
