import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Select");

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const cards = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: "Maintainence Guide",
  }));

  return (
    <>
      <div className="relative bg-gradient-to-l from-[#17262A] to-[#24343BCC] text-white montserrat-regular md:flex md:flex-col md:gap-6">
        <img
          loading="lazy"
          src="/uniqo-pattern.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="flex items-center justify-between lg:justify-evenly lg:gap-8 w-full p-2 lg:p-8">
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
            <img loading="lazy" src="/icons/call.png" alt="" className="w-4" />
            Contact Us
          </button>
        </div>
        <h2 className="font-semibold text-2xl md:text-3xl text-center">
          Lorem Ipsum
        </h2>
        <p className="text-center text-sm md:text-lg px-6 py-4 lg:w-1/2 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        {/* Mobile Dropdown Select */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-1.5">
          <p className="text-xs md:text-lg text-zinc-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md py-1 md:text-xl md:py-2 bg-white w-2/3 text-teal-950 font-medium flex items-center justify-between px-4">
              {selectedOption}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full md:w-[66.5vw]">
              <DropdownMenuItem
                className="md:text-xl"
                onClick={() => handleOptionSelect("Guides (20)")}
              >
                Guides (20)
              </DropdownMenuItem>
              <DropdownMenuItem
                className="md:text-xl"
                onClick={() => handleOptionSelect("Portal")}
              >
                Portal
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex justify-center px-18">
          <div className="hidden lg:block rounded-2xl bg-white text-black h-[115vh]">
            <button
              onClick={() => handleOptionSelect("Guides (20)")}
              className={`border-b-2 border-zinc-500 w-full px-4 py-4 text-xl rounded-t-2xl ${
                selectedOption === "Guides (20)" ? "bg-gray-200" : "bg-white"
              }`}
            >
              Guides (20)
            </button>
            <button
              onClick={() => handleOptionSelect("Portal")}
              className={`border-b border-zinc-500 w-full px-4 py-4 text-xl ${
                selectedOption === "Portal" ? "bg-gray-200" : "bg-white"
              }`}
            >
              Portal
            </button>
          </div>
          {/* Conditional Rendering */}
          {selectedOption === "Guides (20)" && (
            <div className="overflow-x-auto px-8">
              <div
                className="grid grid-cols-3 gap-4 py-6"
                style={{ minWidth: "584px" }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="aspect-square flex flex-col justify-between items-end border-2 border-[#E64237] rounded-3xl h-[184px] md:h-[220px] bg-[#CCCCCC]"
                  >
                    <img
                      loading="lazy"
                      src="/icons/download.png"
                      alt="Download icon"
                      className="w-8 m-5"
                    />
                    <div className="flex items-center gap-2 bg-white w-full self-center rounded-b-3xl pl-6 py-2">
                      <img
                        loading="lazy"
                        src="/icons/pdf-icon.png"
                        alt="PDF icon"
                        className="w-5"
                      />
                      <h2 className="text-black text-xs font-semibold">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedOption === "Portal" && (
            <div className="px-8 md:px-18 py-6 lg:py-0 lg:w-full">
              <div className="relative">
                <textarea
                  className="w-full h-[200px] md:h-[500px] p-4 rounded-md bg-white text-black"
                  placeholder="Whats on your mind?"
                ></textarea>
                <div className="absolute bottom-1 w-full flex items-center justify-between m-4 md:px-3">
                  <div className="flex items-center gap-3 md:gap-5">
                    <button>
                      <img
                        loading="lazy"
                        src="/icons/image.png"
                        alt=""
                        className="w-6 md:w-10"
                      />
                    </button>
                    <button>
                      <img
                        loading="lazy"
                        src="/icons/video.png"
                        alt=""
                        className="w-6 md:w-10"
                      />
                    </button>
                    <button>
                      <img
                        loading="lazy"
                        src="/icons/doc.png"
                        alt=""
                        className="w-6 md:w-10"
                      />
                    </button>
                    <button>
                      <img
                        loading="lazy"
                        src="/icons/attach.png"
                        alt=""
                        className="w-6 md:w-10"
                      />
                    </button>
                  </div>
                  <button className="bg-[#E74238] p-[10px] rounded-[14px] text-xs md:text-xl md:px-5 mr-8">
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}
          {selectedOption === "Select" && (
            <div className="overflow-x-auto px-8">
              <div
                className="grid grid-cols-3 gap-4 py-6"
                style={{ minWidth: "584px" }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="aspect-square flex flex-col justify-between items-end border-2 border-[#E64237] rounded-3xl h-[184px] md:h-[220px] bg-[#CCCCCC]"
                  >
                    <img
                      loading="lazy"
                      src="/icons/download.png"
                      alt="Download icon"
                      className="w-8 m-5"
                    />
                    <div className="flex items-center gap-2 bg-white w-full self-center rounded-b-3xl pl-6 py-2">
                      <img
                        loading="lazy"
                        src="/icons/pdf-icon.png"
                        alt="PDF icon"
                        className="w-5"
                      />
                      <h2 className="text-black text-xs font-semibold">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

export default Dashboard;
