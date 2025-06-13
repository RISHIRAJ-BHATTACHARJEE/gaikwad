import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// Interfaces
interface Amenity {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface GalleryTab {
  id: string;
  label: string;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface AmenityItemProps {
  title: string;
  image: string;
  alt: string;
}

interface GalleryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Amenities data
const amenitiesData: Amenity[] = [
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    image: "/swimming-pool.png",
    alt: "Swimming pool amenity",
  },
  // Add more amenities as needed
];

// Gallery tabs data
const galleryTabs: GalleryTab[] = [
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "amenities", label: "Amenities" },
  { id: "specifications", label: "Specifications" },
  { id: "designer-edit", label: "The Designer Edit" },
];

// Gallery images data
const galleryImages: GalleryImage[] = [
  { id: "gallery-1", src: "/gallery-image.png", alt: "Gallery view 1" },
  { id: "gallery-2", src: "/interior.png", alt: "Interior view" },
];

// Memoized AmenityItem component
const AmenityItem: React.FC<AmenityItemProps> = React.memo(
  ({ title, image, alt }) => (
    <figure className="flex flex-col items-center justify-center gap-4 w-64 lg:w-[90%] ml-32">
      <figcaption className="text-xl font-bold text-[#24343B] text-center">
        {title}
      </figcaption>
      <img src={image} alt={alt} className="w-full" />
      {/* Controller Arrows */}
      <div className="flex gap-3 justify-center">
        <img
          src="/icons/comp-proj-left-arrow-black.png"
          alt="Previous slide"
          className="w-14 cursor-pointer"
        />
        <img
          src="/icons/comp-proj-right-arrow-black.png"
          alt="Next slide"
          className="w-14 cursor-pointer"
        />
      </div>
    </figure>
  )
);

// Memoized GalleryTab component
const GalleryTab: React.FC<GalleryTabProps> = React.memo(
  ({ label, isActive, onClick }) => (
    <button
      className={`px-3 py-2 ${
        isActive ? "bg-[#24343B] text-white" : "text-[#24343B]"
      } ${label === "Interior" ? "rounded-l-full" : ""} ${
        label === "The Designer Edit" ? "rounded-r-full" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
);

const Amenities: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>(galleryTabs[0].id);

  return (
    <div className="montserrat-regular flex flex-col gap-12 py-8">
      {/* Amenities Section */}
      <div>
        <img
          src="/amenities-designer-headings.png"
          alt="Amenities heading"
          className="mx-auto lg:w-1/2"
        />
        {/* Carousel */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-7xl mx-auto w-full">
          <AmenityItem {...amenitiesData[0]} />
          <figure className="hidden lg:block lg:w-fit mt-4">
            <figcaption className="text-xl font-bold text-[#24343B]">
              Take a Look
            </figcaption>
            {/* Replace with <video> element when ready */}
            <img
              src="/web-amenities.png"
              alt="Amenities overview"
              className="w-[50%]"
            />
          </figure>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col gap-10 py-8">
        <img
          src="/gallery-designer-headings.png"
          alt="Gallery heading"
          className="lg:w-1/2 mx-auto"
        />
        {/* Carousel */}
        <div className="flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto">
          {/* Mobile Select */}
          <div className="lg:hidden flex flex-col items-center justify-center gap-8">
            <Select
              onValueChange={(value: string) => setActiveTab(value)}
              defaultValue={galleryTabs[0].id}
            >
              <SelectTrigger className="w-[240px] border-[#E64237] text-lg text-[#E64237]">
                <SelectValue placeholder="Select a view" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {galleryTabs.map((tab) => (
                    <SelectItem key={tab.id} value={tab.id}>
                      {tab.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-[70%]"
            />
          </div>
          {/* Web Tabs */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-8">
            <div className="border-2 border-[#24343B] flex gap-3 text-lg rounded-full">
              {galleryTabs.map((tab) => (
                <GalleryTab
                  key={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-6">
              {galleryImages.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="w-1/3"
                />
              ))}
            </div>
          </div>
          {/* Controller Arrows */}
          <div className="flex gap-3">
            <img
              src="/icons/comp-proj-left-arrow-black.png"
              alt="Previous slide"
              className="w-14 cursor-pointer"
            />
            <img
              src="/icons/comp-proj-right-arrow-black.png"
              alt="Next slide"
              className="w-14 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;