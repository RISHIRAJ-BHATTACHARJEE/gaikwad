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
        <button className="hidden lg:flex items-center gap-2 bg-[#CE3631] px-4 py-3 rounded-2xl text-white text-sm cursor-pointer">
           <img loading="lazy" src="/icons/call.png" alt="" className="w-4" />
          Contact Us
        </button>
      </div>
      <h2 className="text-xl md:text-3xl text-white font-semibold text-center my-6 md:mb-10">
        Live Projects
      </h2>
      {/* Live Project Card */}
      <div className="text-white flex flex-col lg:flex-row gap-6 p-6 md:p-8 mx-6 md:mx-28 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        <div className="lg:flex lg:gap-12">
          <div className="lg:flex lg:flex-col gap-5 lg:items-start lg:w-2/3!">
             <img loading="lazy"
              src={images[current]}
              alt="main"
              className="w-full h-[220px] md:h-[310px] object-cover rounded-xl"
            />
            <ImageController
              current={current}
              setCurrent={setCurrent}
              images={images}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-between">
            <div className="lg:flex lg:flex-col lg:h-full lg:w-full lg:gap-5 md:gap-12">
              <div className="flex items-center justify-between my-6 md:my-8">
                <h2 className="text-xl md:text-2xl font-semibold">ABC</h2>
                <h2 className="font-extralight md:text-xl">
                  RERA No: XXXX XXXX XX
                </h2>
              </div>
              {/* Amenities & Features */}
              <div className="flex items-center justify-between font-extralight my-6 md:my-8">
                <div className="flex items-center gap-2">
                   <img loading="lazy"
                    src="/icons/double-bed.png"
                    alt="icon-1"
                    className="size-6 md:size-10"
                  />
                  <p className="md:text-xl">6BA</p>
                </div>
                <div className="flex items-center gap-2">
                   <img loading="lazy"
                    src="/icons/bath-tub.png"
                    alt="icon-1"
                    className="size-6 md:size-10"
                  />
                  <p className="md:text-xl">6BA</p>
                </div>
                <div className="flex items-center gap-2">
                   <img loading="lazy"
                    src="/icons/floorplan.png"
                    alt="icon-1"
                    className="size-6 md:size-10"
                  />
                  <p className="md:text-xl">3960 sqft</p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:flex-col lg:h-full lg:justify-between lg:mb-12 my-6 md:my-8">
              <p className="font-extralight md:text-xl my-6 md:my-8">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in cras.
              </p>
              {/* Building & Booking Details */}
              <div className="flex items-center -mx-6">
                {/* Floors */}
                <div className="text-center border-r-1 w-full flex flex-col gap-2">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                    Floors
                  </h2>
                  <h2 className="text-lg md:text-3xl">12</h2>
                </div>
                {/* Units */}
                <div className="text-center border-r-1 w-full flex flex-col gap-2">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                    Units
                  </h2>
                  <h2 className="text-lg md:text-3xl">80</h2>
                </div>
                {/* Booked */}
                <div className="text-center w-full flex flex-col gap-2">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                    Booked
                  </h2>
                  <h2 className="text-lg md:text-3xl">80</h2>
                </div>
              </div>
            </div>

            {/* Project Location */}
            <div className="flex items-center justify-between">
              <button className="primary rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs md:text-xl lg:text-base">
                 <img loading="lazy"
                  src="/icons/google-maps.png"
                  alt="google-map"
                  className="w-3 md:w-7 lg:w-5"
                />
                Google Maps
              </button>
              <button className="primary text-xs md:text-xl lg:text-base md:py-5! lg:py-3.5! md:px-7! text-nowrap rounded-lg!">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl md:text-3xl text-white font-semibold text-center my-8 md:my-12">
        Completed Projects
      </h2>
      {/* Completed Projects Cards */}
      <div className="flex flex-col gap-6 md:gap-12 lg:gap-18 pb-8 lg:relative">
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <ProjectCard
              key={index}
              current={current}
              setCurrent={setCurrent}
            />
          );
        })}
        {/* 3d images */}
         <img loading="lazy" src="/3d-house-1.png" alt="" className="hidden lg:block absolute w-2/10 right-0 -top-53"/>
         <img loading="lazy" src="/3d-house-2.png" alt="" className="hidden lg:block absolute w-2/11 left-0 top-102"/>
         <img loading="lazy" src="/3d-house-3.png" alt="" className="hidden lg:block absolute w-2/11 right-0 bottom-266"/>
         <img loading="lazy" src="/3d-house-4.png" alt="" className="hidden lg:block absolute w-2/11 left-0 bottom-116"/>
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

export default Projects;

const ProjectCard = ({
  current,
  setCurrent,
}: {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="text-white flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 md:p-8 lg:py-14 mx-6 md:mx-28 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
      <div className="lg:flex lg:flex-col gap-5 lg:items-start ">
         <img loading="lazy"
          src={images[current]}
          alt="main"
          className="w-full h-[220px] md:h-[310px] object-cover rounded-xl"
        />
        <ImageController
          current={current}
          setCurrent={setCurrent}
          images={images}
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">ABC</h2>
          <h2 className="font-extralight md:text-xl">RERA No: XXXX XXXX XX</h2>
        </div>
        {/* Amenities & Features */}
        <div className="flex items-center justify-between font-extralight my-5 md:my-8">
          <div className="flex items-center gap-2">
             <img loading="lazy"
              src="/icons/double-bed.png"
              alt="icon-1"
              className="size-6 md:size-10"
            />
            <p className="md:text-xl">6BA</p>
          </div>
          <div className="flex items-center gap-2">
             <img loading="lazy"
              src="/icons/bath-tub.png"
              alt="icon-1"
              className="size-6 md:size-10"
            />
            <p className="md:text-xl">6BA</p>
          </div>
          <div className="flex items-center gap-2">
             <img loading="lazy"
              src="/icons/floorplan.png"
              alt="icon-1"
              className="size-6 md:size-10"
            />
            <p className="md:text-xl">3960 sqft</p>
          </div>
        </div>
        <p className="font-extralight md:text-xl lg:text-lg my-5 md:my-8">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras.
        </p>
        {/* Building & Booking Details */}
        <div className="flex items-center -mx-6 my-5 md:my-8">
          {/* Floors */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
              Floors
            </h2>
            <h2 className="text-lg md:text-3xl">12</h2>
          </div>
          {/* Units */}
          <div className="text-center border-r-1 w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
              Units
            </h2>
            <h2 className="text-lg md:text-3xl">80</h2>
          </div>
          {/* Booked */}
          <div className="text-center w-full flex flex-col gap-2">
            <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
              Booked
            </h2>
            <h2 className="text-lg md:text-3xl">80</h2>
          </div>
        </div>
        {/* Project Location */}
        <div className="flex items-center flex-col lg:flex-row gap-6 justify-between">
          <div className="flex lg:flex-col lg:gap-2 items-center justify-between w-full">
            <h2 className="md:text-2xl lg:text-lg">Project reviews</h2>
            <button className="primary rounded-lg! lg:rounded-full! flex items-center gap-2 font-extralight text-nowrap text-xs">
               <img loading="lazy"
                src="/icons/google.png"
                alt="google-map"
                className="w-18 md:w-28 lg:w-20"
              />
               <img loading="lazy"
                src="/icons/solar_arrow-up-linear.png"
                alt="google-map"
                className="w-5 md:w-8 lg:w-6"
              />
            </button>
          </div>
          <div className="flex lg:flex-col lg:gap-2 items-center justify-between w-full">
            <h2 className="md:text-2xl lg:text-lg">Project Location</h2>
            <button className="primary rounded-lg! lg:rounded-full! flex items-center gap-2 font-extralight text-nowrap text-xs md:text-lg">
               <img loading="lazy"
                src="/icons/google-maps.png"
                alt="google-map"
                className="w-3 md:w-6 lg:w-4"
              />
              Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
