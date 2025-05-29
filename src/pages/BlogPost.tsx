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
        <div className="flex items-center justify-between w-full">
          <img src="/navbar-logo.png" alt="logo" className="w-34" />
          <MenuIcon className="text-white" onClick={togglePanel} />
        </div>
        <img src="/blogs-1.png" alt="single-blog-1" className="my-12" />
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-lg">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <p className="text-sm text-zinc-400">12 Jun, 2025</p>
          <div className="flex flex-col gap-7 font-light text-sm">
            <p className="leading-6.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
            <p className="leading-6.5">
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
        <h2 className="text-center font-semibold text-xl my-12">Lorem Ipsum</h2>
        <div className="flex flex-col gap-7 font-light text-sm">
          <p className="leading-6.5">
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
          <p className="leading-6.5">
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
      </div>
      <Footer/>
    </>
  );
};

export default BlogPost;
