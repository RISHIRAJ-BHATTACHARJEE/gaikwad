import { MenuIcon } from "lucide-react";
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
        <div className="flex items-center justify-between w-full">
          <img src="/navbar-logo.png" alt="logo" className="w-34" />
          <MenuIcon className="text-white" onClick={togglePanel} />
        </div>
        <h2 className="text-2xl text-white font-semibold text-center uppercase mt-12">
          our blogs
        </h2>
        <div className="bg-white mt-12 flex flex-col justify-center items-center gap-4 p-6 rounded-[40px]">
          <img src="/blogs-1.png" alt="blog-1" className="" />
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="self-start text-sm text-zinc-500">12 Jun, 2025</p>
        </div>
        <hr className="text-white my-12 " />
        <div>
          <h2 className="text-2xl text-white font-semibold text-center uppercase mb-6">
            Read All Articles
          </h2>
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-4 rounded-lg mb-4"
            >
              <img src={article.image} alt="" className="w-32" />
              <div className="flex flex-col justify-between gap-4">
                <p className="text-white font-medium text-sm">{article.text}</p>
                <p className="text-white/70 text-xs">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
