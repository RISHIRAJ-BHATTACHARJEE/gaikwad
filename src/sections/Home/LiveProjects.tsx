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
    <div className="text-white bg-[linear-gradient(to_bottom,_#17262AB3,_#24343BB3),url('/live-project-mobile.png')] bg-cover bg-no-repeat bg-center py-10">
      <h2 className="uppercase text-center text-2xl font-semibold tracking-wide pb-10">
        live projects
      </h2>
      {/* Glassmorphism Card */}
      <div className="flex flex-col gap-8 p-6 mx-6 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
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
          <h2 className="text-lg">Project Location</h2>
          <button className="primary flex items-center gap-4 pr-9! font-extralight text-nowrap text-xs">
            <img src="/icons/google-maps.png" alt="google-map" className="w-5"/>
            Google Maps
          </button>
        </div>
        {/* Download Brochure & Explore Now */}
        <div className="flex items-center justify-between">
          <button className="primary text-xs text-nowrap rounded-lg!">Download Brochure</button>
          <button className="primary text-xs text-nowrap rounded-lg!">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
