import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
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

const projects = [
  {
    name: "Shivtirth",
    reraNo: "XXXX XXXX XX",
    beds: "6BA",
    baths: "6BA",
    sqft: "3960 sqft",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    name: "Nirvanas",
    reraNo: "XXXX XXXX XX",
    beds: "6BA",
    baths: "6BA",
    sqft: "3960 sqft",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    name: "Icon Towers",
    reraNo: "XXXX XXXX XX",
    beds: "6BA",
    baths: "6BA",
    sqft: "3960 sqft",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  },
  {
    name: "Gaikwad Miro",
    reraNo: "XXXX XXXX XX",
    beds: "6BA",
    baths: "6BA",
    sqft: "3960 sqft",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis porttitor sed cras donec. Id ac molestie purus tincidunt in cras.",
  }
];

const Projects = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#24343BCC] to-[#17262A] montserrat-regular">
      <div className="flex items-center justify-between lg:justify-evenly lg:gap-8 w-full p-6 lg:p-8">
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
      <h2 className="text-xl md:text-3xl text-white font-semibold text-center my-6 md:mb-10">
        Live Projects
      </h2>
      {/* Live Project Card */}
      <div className="text-white flex flex-col lg:flex-row gap-6 p-6 md:p-8 mx-6 md:mx-28 lg:mx-28 2xl:mx-[16rem] 2xl:px-16 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        <div className="lg:flex lg:gap-0">
          <div className="flex flex-col lg:pt-4 gap-6 lg:gap-3 lg:items-center 2xl:items-end 2xl:mr-10">
            <img
              loading="lazy"
              src={images[current]}
              alt="main"
              className="aspect-video w-full lg:w-5/6 lg:h-[55%] 2xl:w-[94%] h-[220px] 2xl:h-[312px] object-cover rounded-xl"
            />
            <ImageController
              current={current}
              setCurrent={setCurrent}
              images={images}
            />
            <button className="hidden relative bg-[#E64237] text-white lg:py-3 rounded-full font-medium lg:text-lg lg:mt-4 2xl:mt-0 lg:w-[85%] 2xl:w-[95%] uppercase lg:flex items-center justify-center lg:gap-4">
              Explore in 3d
              <ArrowRight />
              <img
                src="/explore-3d.png"
                alt=""
                className="absolute lg:w-1/7 right-0"
              />
            </button>
          </div>
          <div className="lg:flex lg:flex-col lg:justify-between 2xl:mr-24">
            <div className="lg:flex lg:flex-col lg:w-full lg:gap-2 md:gap-12">
              <div className="flex items-center justify-between my-6 md:my-8 lg:my-2">
                <h2 className="text-xl md:text-2xl font-semibold">ABC</h2>
                <h2 className="font-extralight md:text-xl">
                  RERA No: XXXX XXXX XX
                </h2>
              </div>
              {/* Amenities & Features */}
              <div className="flex items-center justify-between font-extralight my-6 md:my-8 lg:m-0 lg:gap-3">
                <div className="flex items-center gap-2">
                  <img
                    loading="lazy"
                    src="/icons/double-bed.png"
                    alt="icon-1"
                    className="size-6 md:size-10 lg:size-7"
                  />
                  <p className="md:text-xl">6BA</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    loading="lazy"
                    src="/icons/bath-tub.png"
                    alt="icon-1"
                    className="size-6 md:size-10 lg:size-7"
                  />
                  <p className="md:text-xl">6BA</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    loading="lazy"
                    src="/icons/floorplan.png"
                    alt="icon-1"
                    className="size-6 md:size-10 lg:size-7"
                  />
                  <p className="md:text-xl">3960 sqft</p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:flex-col lg:items-start  lg:justify-between lg:mb-12 my-6 md:my-8 lg:m-0">
              <p className="font-extralight md:text-xl my-6 md:my-8 lg:my-5 lg:gap-3 italic">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in cras.
              </p>
              {/* Building & Booking Details */}
              <div className="flex items-center -mx-6 lg:m-0">
                {/* Floors */}
                <div className="text-center border-r-1 w-full flex flex-col gap-2 lg:px-3">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                    Floors
                  </h2>
                  <h2 className="text-lg md:text-3xl lg:text-2xl">12</h2>
                </div>
                {/* Units */}
                <div className="text-center border-r-1 w-full flex flex-col gap-2 lg:px-3">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                    Units
                  </h2>
                  <h2 className="text-lg md:text-3xl lg:text-2xl">80</h2>
                </div>
                {/* Booked */}
                <div className="text-center w-full flex flex-col gap-2 lg:px-3">
                  <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                    Booked
                  </h2>
                  <h2 className="text-lg md:text-3xl lg:text-2xl">80</h2>
                </div>
              </div>
            </div>

            {/* Project Location */}
            <div className="flex items-center justify-between lg:mb-7 lg:gap-3 gap-3">
              <button className="primary lg:pr-8! rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs md:text-xl lg:text-base">
                <img
                  loading="lazy"
                  src="/icons/google-maps.png"
                  alt="google-map"
                  className="w-3 md:w-7 lg:w-5"
                />
                Google Maps
              </button>
              <button className="primary text-xs md:text-xl lg:text-base md:py-5! lg:py-3.5! md:px-7! text-nowrap rounded-lg!">
                Download Brochure
              </button>
            </div>
            <button className="bg-[#E64237] text-white w-full py-2 mt-3 lg:py-3 rounded-full font-medium lg:text-lg lg:mt-4">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl md:text-3xl text-white font-semibold text-center my-8 md:my-12">
        Completed Projects
      </h2>
      {/* Completed Projects Cards */}
      <div className="flex flex-col gap-6 md:gap-12 lg:gap-18 pb-8 lg:relative">
        {projects.map((item, index) => {
          return (
            <ProjectCard
              projectName={item.name}
              key={index}
              current={current}
              setCurrent={setCurrent}
            />
          );
        })}
        {/* 3d images */}
        <img
          loading="lazy"
          src="/3d-house-1.png"
          alt=""
          className="hidden lg:block absolute w-2/10 right-0 -top-53"
        />
        <img
          loading="lazy"
          src="/3d-house-2.png"
          alt=""
          className="hidden lg:block absolute w-2/11 left-0 top-102"
        />
        <img
          loading="lazy"
          src="/3d-house-3.png"
          alt=""
          className="hidden lg:block absolute w-2/11 right-0 bottom-266"
        />
        <img
          loading="lazy"
          src="/3d-house-4.png"
          alt=""
          className="hidden lg:block absolute w-2/11 left-0 bottom-116"
        />
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
  projectName = "ABC",
}: {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  projectName?: string;
}) => {
  return (
    <div className="text-white flex flex-col lg:flex-row gap-6 lg:gap-0 2xl:gap-8 p-6 md:p-8 lg:py-14 mx-6 md:mx-28 2xl:mx-[16rem] 2xl:px-16 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
      <div className="lg:flex lg:flex-col gap-5 lg:items-center">
        <img
          loading="lazy"
          src={images[current]}
          alt="main"
          className="aspect-video w-full lg:w-5/6 lg:h-[60%] 2xl:w-[94%] h-[220px] 2xl:h-[312px] object-cover rounded-xl"
        />
        <ImageController
          current={current}
          setCurrent={setCurrent}
          images={images}
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-between 2xl:mr-24">
        <div className="lg:flex lg:flex-col lg:w-full lg:gap-2 md:gap-12">
          <div className="flex items-center justify-between my-6 md:my-8 lg:my-2">
            <h2 className="text-xl md:text-2xl font-semibold">{projectName}</h2>
            <h2 className="font-extralight md:text-xl">
              RERA No: XXXX XXXX XX
            </h2>
          </div>
          {/* Amenities & Features */}
          <div className="flex items-center justify-between font-extralight my-6 md:my-8 lg:m-0 lg:gap-3">
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/double-bed.png"
                alt="icon-1"
                className="size-6 md:size-10 lg:size-7"
              />
              <p className="md:text-xl">6BA</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/bath-tub.png"
                alt="icon-1"
                className="size-6 md:size-10 lg:size-7"
              />
              <p className="md:text-xl">6BA</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/floorplan.png"
                alt="icon-1"
                className="size-6 md:size-10 lg:size-7"
              />
              <p className="md:text-xl">3960 sqft</p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:items-start lg:justify-between lg:mb-12 my-6 md:my-8 lg:m-0">
          <p className="font-extralight md:text-xl my-6 md:my-8 lg:my-5 lg:gap-3 italic">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
            cras.
          </p>
          {/* Building & Booking Details */}
          <div className="flex items-center -mx-6 lg:m-0">
            {/* Floors */}
            <div className="text-center border-r-1 w-full flex flex-col gap-2 lg:px-3">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                Floors
              </h2>
              <h2 className="text-lg md:text-3xl lg:text-2xl">12</h2>
            </div>
            {/* Units */}
            <div className="text-center border-r-1 w-full flex flex-col gap-2 lg:px-3">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                Units
              </h2>
              <h2 className="text-lg md:text-3xl lg:text-2xl">80</h2>
            </div>
            {/* Booked */}
            <div className="text-center w-full flex flex-col gap-2 lg:px-3">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl lg:text-xl">
                Booked
              </h2>
              <h2 className="text-lg md:text-3xl lg:text-2xl">80</h2>
            </div>
          </div>
        </div>

        {/* Project Location */}
        <div className="flex items-center justify-between lg:justify-start lg:gap-6 2xl:-translate-y-6">
          <div className="flex flex-col gap-3">
            <h2 className="lg:text-xl">Project Reviews</h2>
            <button className="bg-white flex lg:w-fit items-center py-2 lg:pr-2 rounded-full">
              <img src="/icons/google.png" alt="Google icon" className="w-24" />
              <img
                src="/icons/solar_arrow-up-linear.png"
                alt="Arrow up icon"
                className="w-6"
              />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="lg:text-xl">Project Location</h2>
            <button className="flex items-center lg:w-fit gap-2 bg-white text-black px-4 py-2.5 rounded-full">
              <img src="/icons/google-maps.png" alt="" className="w-4" />
              <h2 className="text-nowrap text-sm font-medium">Google Maps</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
