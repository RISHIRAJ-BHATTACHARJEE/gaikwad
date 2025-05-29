import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import ImageController from "../components/ImageController";
import Footer from "../components/Footer";

const images = [
  "live-project-1.png",
  "/live-project.jpg",
  "/image-2.png",
  "/image-1.png",
  "/live-project.jpg",
  "/image-2.png",
];

const Projects = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A] montserrat-regular">
      <div className="flex items-center justify-between w-full p-6">
        <img src="/navbar-logo.png" alt="logo" className="w-34" />
        <MenuIcon className="text-white" onClick={togglePanel} />
      </div>
      <h2 className="text-xl text-white font-semibold text-center my-6">
        Live Projects
      </h2>
      {/* Live Project Card */}
      <div className="text-white flex flex-col gap-6 p-6 mx-6 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        <img
          src={images[current]}
          alt="main"
          className="w-full h-[220px] object-cover rounded-xl"
        />
        <ImageController
          current={current}
          setCurrent={setCurrent}
          images={images}
        />
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">ABC</h2>
          <h2 className="font-extralight">RERA No: XXXX XXXX XX</h2>
        </div>
        {/* Amenities & Features */}
        <div className="flex items-center justify-between font-extralight">
          <div className="flex items-center gap-2">
            <img src="/icons/double-bed.png" alt="icon-1" className="size-6" />
            <p>6BA</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/bath-tub.png" alt="icon-1" className="size-6" />
            <p>6BA</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/floorplan.png" alt="icon-1" className="size-6" />
            <p>3960 sqft</p>
          </div>
        </div>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        {/* Building & Booking Details */}
        <div className="flex items-center -mx-6">
          {/* Floors */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg">Floors</h2>
            <h2 className="text-lg">12</h2>
          </div>
          {/* Units */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg">Units</h2>
            <h2 className="text-lg">80</h2>
          </div>
          {/* Booked */}
          <div className="text-center w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg">Booked</h2>
            <h2 className="text-lg">80</h2>
          </div>
        </div>
        {/* Project Location */}
        <div className="flex items-center justify-between">
          <button className="primary rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs">
            <img
              src="/icons/google-maps.png"
              alt="google-map"
              className="w-3"
            />
            Google Maps
          </button>
          <button className="primary text-xs text-nowrap rounded-lg!">
            Explore Now
          </button>
        </div>
      </div>
      <h2 className="text-xl text-white font-semibold text-center my-8">
        Completed Projects
      </h2>
      {/* Completed Projects Cards */}
      <div className="flex flex-col gap-6 pb-8">
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <ProjectCard
              key={index}
              current={current}
              setCurrent={setCurrent}
            />
          );
        })}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <XIcon
            className="cursor-pointer m-4 size-8"
            strokeWidth={1}
            onClick={togglePanel}
          />
        </div>
        <ul className="mx-6 mt-6 flex flex-col gap-6 text-xl">
          <a href="/" className="border-b border-zinc-500 pb-3">
            Home
          </a>
          <a href="/about" className="border-b border-zinc-500 pb-3">
            About Us
          </a>
          <a href="/career" className="border-b border-zinc-500 pb-3">
            Career
          </a>
          <a href="/projects" className="border-b border-zinc-500 pb-3">
            Projects
          </a>
          <a href="#" className="border-b border-zinc-500 pb-3">
            3d Tour
          </a>
          <a href="/blogs" className="border-b border-zinc-500 pb-3">
            Blogs
          </a>
          <a href="/" className="border-b border-zinc-500 pb-3">
            Newsletter
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

const ProjectCard = ({
  current,
  setCurrent,
}: {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="text-white flex flex-col gap-6 p-6 mx-6 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
      <img
        src={images[current]}
        alt="main"
        className="w-full h-[220px] object-cover rounded-xl"
      />
      <ImageController
        current={current}
        setCurrent={setCurrent}
        images={images}
      />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">ABC</h2>
        <h2 className="font-extralight">RERA No: XXXX XXXX XX</h2>
      </div>
      {/* Amenities & Features */}
      <div className="flex items-center justify-between font-extralight">
        <div className="flex items-center gap-2">
          <img src="/icons/double-bed.png" alt="icon-1" className="size-6" />
          <p>6BA</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/icons/bath-tub.png" alt="icon-1" className="size-6" />
          <p>6BA</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/icons/floorplan.png" alt="icon-1" className="size-6" />
          <p>3960 sqft</p>
        </div>
      </div>
      <p className="font-extralight">
        Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
      </p>
      {/* Building & Booking Details */}
      <div className="flex items-center -mx-6">
        {/* Floors */}
        <div className="text-center border-r-1 w-full flex flex-col gap-2">
          <h2 className="font-extralight tracking-wider text-lg">Floors</h2>
          <h2 className="text-lg">12</h2>
        </div>
        {/* Units */}
        <div className="text-center border-r-1 w-full flex flex-col gap-2">
          <h2 className="font-extralight tracking-wider text-lg">Units</h2>
          <h2 className="text-lg">80</h2>
        </div>
        {/* Booked */}
        <div className="text-center w-full flex flex-col gap-2">
          <h2 className="font-extralight tracking-wider text-lg">Booked</h2>
          <h2 className="text-lg">80</h2>
        </div>
      </div>
      {/* Project Location */}
      <div className="flex items-center flex-col gap-6 justify-between">
        <div className="flex items-center justify-between w-full">
          <h2>Project reviews</h2>
          <button className="primary rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs">
            <img
              src="/icons/google.png"
              alt="google-map"
              className="w-18"
            />
            <img
              src="/icons/solar_arrow-up-linear.png"
              alt="google-map"
              className="w-5"
            />
          </button>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2>Project Location</h2>
          <button className="primary rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs">
            <img
              src="/icons/google-maps.png"
              alt="google-map"
              className="w-3"
            />
            Google Maps
          </button>
        </div>
      </div>
    </div>
  );
};
