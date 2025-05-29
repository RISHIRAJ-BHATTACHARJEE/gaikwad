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
    <div className="bg-gradient-to-l from-[#17262A] to-[#24343BCC] text-white montserrat-regular">
      <div className="flex items-center justify-between w-full p-6">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      <h2 className="font-semibold text-2xl text-center">Lorem Ipsum</h2>
      <p className="text-center text-sm px-6 py-4">
        Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
      </p>
      <div className="flex flex-col items-center justify-center gap-1.5">
        <p className="text-xs text-zinc-400">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md py-1 bg-white w-2/3 text-teal-950 font-medium flex items-center justify-between px-4">
            {selectedOption}
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuItem onClick={() => handleOptionSelect("Guides (20)")}>
              Guides (20)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleOptionSelect("Portal")}>
              Portal
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
                className="aspect-square flex flex-col justify-between items-end border-2 border-[#E64237] rounded-3xl h-[184px] bg-[#CCCCCC]"
              >
                <img
                  src="/icons/download.png"
                  alt="Download icon"
                  className="w-8 m-5"
                />
                <div className="flex items-center gap-2 bg-white w-full self-center rounded-b-3xl pl-6 py-2">
                  <img
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
        <div className="px-8 py-6">
          <div className="relative">
            <textarea
              className="w-full h-[200px] p-4 rounded-md bg-white text-black"
              placeholder="Whats on your mind?"
            ></textarea>
            <div className="absolute bottom-1 w-full flex items-center justify-between m-4">
              <div className="flex items-center gap-3">
                <button>
                  <img src="/icons/image.png" alt="" className="w-6"/>
                </button>
                <button>
                  <img src="/icons/video.png" alt="" className="w-6"/>
                </button>
                <button>
                  <img src="/icons/doc.png" alt="" className="w-6"/>
                </button>
                <button>
                  <img src="/icons/attach.png" alt="" className="w-6"/>
                </button>
              </div>
              <button className="bg-[#E74238] p-[10px] rounded-[14px] text-xs mr-8">Post</button>
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
                className="aspect-square flex flex-col justify-between items-end border-2 border-[#E64237] rounded-3xl h-[184px] bg-[#CCCCCC]"
              >
                <img
                  src="/icons/download.png"
                  alt="Download icon"
                  className="w-8 m-5"
                />
                <div className="flex items-center gap-2 bg-white w-full self-center rounded-b-3xl pl-6 py-2">
                  <img
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
      {/* Side Panel */}
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
      <Footer />
    </div>
  );
};

export default Dashboard;
