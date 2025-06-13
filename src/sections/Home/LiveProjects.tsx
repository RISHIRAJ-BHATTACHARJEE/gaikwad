import { useState } from "react";
import ImageController from "../../components/ImageController";

const images = [
  "live-project-1.png",
  "/live-project.jpg",
  "/image-2.png",
  "/image-1.png",
  "/live-project.jpg",
  "/image-2.png",
];

const LiveProjects = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="text-white bg-[linear-gradient(to_bottom,_#17262AB3,_#24343BB3),url('/live-project-mobile.png')] bg-cover bg-no-repeat bg-center py-10 lg:py-20">
      <h2 className="uppercase text-center text-2xl md:text-4xl font-semibold tracking-wide pb-10">
        live projects
      </h2>
      {/* Glassmorphism Card */}

      <div className="text-white flex flex-col lg:flex-row gap-6 lg:gap-0 p-6 md:p-8 mx-6 md:mx-38 lg:mx-30 2xl:mx-[16rem] 2xl:px-16 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        {/* Image Slider */}
        <div className="flex flex-col gap-6 2xl:items-end 2xl:mr-10">
          <img
            loading="lazy"
            src={images[current]}
            alt="main"
            className="aspect-video w-full lg:w-5/6 2xl:w-[94%] h-[220px] 2xl:h-[312px] object-cover rounded-xl"
          />
          <ImageController
            current={current}
            setCurrent={setCurrent}
            images={images}
          />
        </div>
        {/* Other Texts */}
        <div className="flex flex-col gap-6 2xl:justify-start">
          <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-18">
            <h2 className="text-xl md:text-3xl font-semibold">ABC</h2>
            <h2 className="font-extralight md:text-xl">
              RERA No: XXXX XXXX XX
            </h2>
          </div>
          {/* Amenities & Features */}
          <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-18 font-extralight">
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/double-bed.png"
                alt="icon-1"
                className="size-6 md:size-8"
              />
              <p className="md:text-xl md:font-medium">6BA</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/bath-tub.png"
                alt="icon-1"
                className="size-6 md:size-8"
              />
              <p className="md:text-xl md:font-medium">6BA</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="/icons/floorplan.png"
                alt="icon-1"
                className="size-6 md:size-8"
              />
              <p className="md:text-xl md:font-medium">3960 sqft</p>
            </div>
          </div>
          <p className="font-extralight md:text-lg italic 2xl:tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
            cras. Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec.
            <button className="hidden 2xl:block bg-white text-black font-medium px-5 py-2 rounded-xl mt-3 text-sm">Read More</button>
          </p>
          {/* Building & Booking Details */}
          <div className="flex items-center -mx-6 2xl:mx-0 2xl:w-fit 2xl:gap-12">
            {/* Floors */}
            <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                Floors
              </h2>
              <h2 className="text-lg md:text-2xl">12</h2>
            </div>
            {/* Units */}
            <div className="text-center border-r-1 w-full flex flex-col gap-2 2xl:px-6">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                Units
              </h2>
              <h2 className="text-lg md:text-2xl">80</h2>
            </div>
            {/* Booked */}
            <div className="text-center w-full flex flex-col gap-2 2xl:px-6">
              <h2 className="font-extralight tracking-wider text-lg md:text-2xl">
                Booked
              </h2>
              <h2 className="text-lg md:text-2xl">80</h2>
            </div>
          </div>
          {/* Project Location */}
          <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-18">
            <button className="primary rounded-lg! flex items-center gap-2 font-extralight text-nowrap text-xs md:text-lg">
              <img
                loading="lazy"
                src="/icons/google-maps.png"
                alt="google-map"
                className="w-3 md:w-5"
              />
              Google Maps
            </button>
            <button className="primary text-xs md:text-lg text-nowrap rounded-lg!">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
