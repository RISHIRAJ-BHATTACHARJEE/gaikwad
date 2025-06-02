import { MenuIcon, XIcon } from "lucide-react";
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
        <div className="flex items-center justify-between w-full p-2 md:p-6">
          <img src="/navbar-logo.png" alt="logo" className="w-34 md:w-48" />
          <MenuIcon className="text-white md:size-10" onClick={togglePanel} />
        </div>
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mt-12">
          our blogs
        </h2>
        <div className="bg-white mt-12 flex flex-col justify-center items-center gap-4 p-6 md:p-8 md:mx-18 rounded-[40px] md:rounded-[50px]">
          <img src="/blogs-1.png" alt="blog-1" className="" />
          <p className="font-semibold md:w-full md:text-xl">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="self-start text-sm md:text-lg text-zinc-500">12 Jun, 2025</p>
        </div>
        <hr className="text-white my-12 " />
        <div className="md:px-18">
          <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mb-6">
            Read All Articles
          </h2>
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-4 rounded-lg mb-4"
            >
              <img src={article.image} alt="" className="w-32 md:w-42" />
              <div className="flex flex-col justify-between gap-4">
                <p className="text-white font-medium text-sm md:text-xl">{article.text}</p>
                <p className="text-white/70 text-xs md:text-lg">{article.date}</p>
              </div>
            </div>
          ))}
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
