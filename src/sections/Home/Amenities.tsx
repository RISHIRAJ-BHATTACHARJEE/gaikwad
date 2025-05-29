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
    <div className="px-6 flex flex-col gap-6 md:gap-10 py-12">
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
          <h2 className="text-nowrap text-zinc-500 md:text-2xl">Years of Experience</h2>
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
              <img
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
        <h2 className="font-semibold text-lg md:text-3xl">01 Swimming Pool</h2>
        <p className="text-sm md:text-xl">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {/* Left arrow button */}
          <img
            src="/icons/comp-proj-left-arrow.png"
            alt="Previous"
            className="invert w-16 md:w-20 cursor-pointer"
            onClick={handlePrevClick}
          />
          {/* Right arrow button */}
          <img
            src="/icons/comp-proj-right-arrow.png"
            alt="Next"
            className="invert w-16 md:w-20 cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
