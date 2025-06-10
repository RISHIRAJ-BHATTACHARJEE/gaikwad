import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const articles = [
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
];

const Blogs = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-6 montserrat-regular">
        <div className="flex items-center justify-between lg:justify-evenly lg:gap-8 w-full p-2 lg:p-8">
           <img loading="lazy" src="/navbar-logo.png" alt="logo" className="w-34 md:w-48 " />
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
          <button className="hidden lg:flex items-center gap-2 bg-[#17262A] px-4 py-3 rounded-2xl text-white text-sm cursor-pointer">
             <img loading="lazy" src="/icons/call.png" alt="" className="w-4" />
            Contact Us
          </button>
        </div>
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mt-12">
          our blogs
        </h2>
        {/* Mobile Card */}
        <div className="lg:hidden bg-white mt-12 flex flex-col justify-center items-center gap-4 p-6 md:p-8 md:mx-18 rounded-[40px] md:rounded-[50px]">
           <img loading="lazy" src="/blogs-1.png" alt="blog-1" className="" />
          <p className="font-semibold md:w-full md:text-xl">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="self-start text-sm md:text-lg text-zinc-500">
            12 Jun, 2025
          </p>
        </div>

        {/* Web Card */}
        <div className="hidden lg:flex bg-white rounded-3xl mx-18 mt-12">
          <div className="p-12 flex flex-col gap-10 w-fit">
            <h2 className="text-xl font-semibold w-1/2">
              Lorem Ipsum is simply dummy text of the printing
            </h2>
            <p>12 jun, 2025</p>
            <p className="w-2/3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="w-fit bg-[#17262A] text-white px-8 py-2 rounded-lg">
              Read More
            </button>
          </div>
          {/* image */}
          <div className="flex relative overflow-hidden">
             <img loading="lazy"
              src="/blogs-ellipse.png"
              alt=""
              className="w-4/7 absolute z-10"
            />
             <img loading="lazy"
              src="/blogs-1-copy.png"
              alt=""
              className="w-5/6 translate-x-20.5 rounded-3xl  "
            />
          </div>
        </div>

        <hr className="text-white my-12 lg:hidden" />
        <div className="md:px-18">
          <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mb-6 lg:mt-18">
            Read All Articles
          </h2>
          <div className="lg:hidden">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-4 rounded-lg mb-4 lg:grid grid-cols-3"
              >
                 <img loading="lazy" src={article.image} alt="" className="w-32 md:w-42" />
                <div className="flex flex-col justify-between gap-4">
                  <p className="text-white font-medium text-sm md:text-xl">
                    {article.text}
                  </p>
                  <p className="text-white/70 text-xs md:text-lg">
                    {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-6 my-12">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-4 rounded-[40px] mb-4 hover:bg-[#A71E22]/50"
              >
                <div>
                   <img loading="lazy" src={article.image} alt="" className="" />
                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-white font-medium text-sm md:text-xl mt-4">
                      {article.text}
                    </p>
                    <p className="text-white/70 text-xs md:text-lg">
                      {article.date}
                    </p>
                  </div>
                  <p className="flex gap-3 text-white mt-8">Read More <ArrowRight/></p>
                </div>
              </div>
            ))}
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

export default Blogs;
