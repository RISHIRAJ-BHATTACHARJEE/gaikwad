import { InstagramCarousel } from "@/components/ui/instagram-carousel";

const highlights = [
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "instagram-bg-1.png",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
]

const InstagramHighlights = () => {
  return (
    <div className="relative h-[73vh] md:h-[76vh] lg:h-[80vh] md:overflow-x-hidden">
      <img
          src="/white-bg-pattern.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
      <h2 className="text-[#24343B] text-xl md:text-3xl font-semibold text-center py-6 md:py-10">
        Instagram Highlights
      </h2>
      <InstagramCarousel slides={highlights}/>
      
    </div>
  );
};

export default InstagramHighlights;