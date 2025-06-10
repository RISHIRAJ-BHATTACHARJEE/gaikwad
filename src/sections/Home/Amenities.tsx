import { useState } from "react";

const images = [
  "/swimming-pool.png",
  "/live-project-mobile.png",
  "/image-1.png",
  "/completed-projects-1.png",
];

const Amenities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the left arrow click (previous image)
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the right arrow click (next image)
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Mobile & Tablets */}
      <div className="lg:hidden px-6 flex flex-col gap-6 md:gap-10 py-12">
        <h2 className="capitalize text-center font-semibold text-xl md:text-3xl">
          Check out our
          <br /> top class{" "}
          <span className="uppercase text-red-500">Amenities</span>
        </h2>
        <p className="text-sm md:text-xl leading-7 text-center font-medium">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec
        </p>
        <div className="flex items-center justify-between md:px-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-nowrap text-zinc-500 md:text-2xl">
              Years of Experience
            </h2>
            <h2 className="font-medium text-3xl md:text-5xl">7239</h2>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-zinc-500 md:text-2xl">States</h2>
            <h2 className="font-medium text-3xl md:text-5xl">
              79<span className="text-zinc-400">+</span>
            </h2>
          </div>
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-zinc-500 md:text-2xl">States</h2>
            <h2 className="font-medium text-3xl md:text-5xl">
              79<span className="text-zinc-400">+</span>
            </h2>
          </div>
        </div>
        {/* Amenities */}
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Carousel container with overflow hidden to show only the current image and part of the next */}
          <div className="relative w-[340px] md:w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 280}px)`,
              }}
            >
              {images.map((image, index) => (
                 <img loading="lazy"
                   
                  key={index}
                  src={image}
                  alt={`carousel-image-${index}`}
                  className="w-[280px] h-[207px] md:w-[480px] md:h-[327px] object-cover rounded-3xl flex-shrink-0 mr-4"
                />
              ))}
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-slate-50 pointer-events-none w-10 md:w-32" />
          </div>
          <h2 className="font-semibold text-lg md:text-3xl">
            01 Swimming Pool
          </h2>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {/* Left arrow button */}
             <img loading="lazy"
               
              src="/icons/comp-proj-left-arrow.png"
              alt="Previous"
              className="invert w-16 md:w-20 cursor-pointer"
              onClick={handlePrevClick}
            />
            {/* Right arrow button */}
             <img loading="lazy"
               
              src="/icons/comp-proj-right-arrow.png"
              alt="Next"
              className="invert w-16 md:w-20 cursor-pointer"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>

      {/* Web */}
      <div className="hidden relative lg:flex flex-col items-center justify-center gap-12 mt-8 px-12 py-24 h-screen w-full">
         <img loading="lazy"
          src="/white-bg-pattern.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
        {/* Texts and Headings */}
        <div className="flex px-32 items-start justify-center gap-24 w-full">
          {/* Headings */}
          <div className="w-1/2">
            <h2 className="capitalize text-3xl font-semibold float-right">
              Check out our <br />
              top class{" "}
              <span className="uppercase text-[#E64237]">amenities</span>
            </h2>
          </div>
          {/* Paragraph's */}
          <div className="w-full">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing
            </p>
            {/* Badges */}
            <div className="flex justify-between mt-6">
              <div className="flex flex-col items-center">
                <p className="text-xl">Years of experience</p>
                <h2 className="font-medium text-3xl">7239</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl">States</p>
                <h2 className="font-medium text-3xl">9+</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl">States</p>
                <h2 className="font-medium text-3xl">9+</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="z-10 bg-[url('/swimming-pool.png')] bg-cover bg-no-repeat bg-center aspect-video size-3/4 rounded-3xl mx-auto flex flex-col justify-end gap-7 pl-10 pb-8">
          <div className="flex items-center justify-between">
            {/* h2 & p div */}
            <div className="flex flex-col gap-7 w-4/5 ">
              <h2 className="text-4xl font-base text-white leading-12 w-fit">
                Swimming <br /> Pool
              </h2>
              <p className="text-white pr-8">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in{" "}
              </p>
            </div>
            {/* Image Carousel */}
            <div className="flex items-center justify-between gap-4 mr-37.5">
               <img loading="lazy"
                 
                src="/basketball.png"
                alt=""
                className="w-[10vw]"
              />
               <img loading="lazy"   src="/gym.png" alt="" className="w-[10vw]" />
               <img loading="lazy"
                 
                src="/tennis.png"
                alt=""
                className="w-[10vw]"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-3 pr-10">
            <div className="flex gap-3">
               <img loading="lazy"
                 
                src="/icons/comp-proj-left-arrow.png"
                alt=""
                className="w-1/6"
              />
               <img loading="lazy"
                 
                src="/icons/comp-proj-right-arrow.png"
                alt=""
                className="w-1/6"
              />
            </div>
            <h2 className="text-3xl text-white font-medium">01</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
