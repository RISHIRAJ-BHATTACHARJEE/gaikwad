const Description = () => {
  return (
    <div className="montserrat-regular p-[20px]">
      {/* Description Container */}
      <div className="flex flex-col gap-6">
        <h2 className="text-center uppercase text-xl font-medium">Description</h2>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Quis
          a lacus molestie praesent suspendisse ac tellus. Auctor tristique
          ultrices magna purus.
        </p>
        {/* Configuration */}
        <h2 className="text-lg font-semibold">Configuration</h2>
        <div className="grid grid-cols-2 gap-4">
            {/* Tile-1 */}
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">3BHK OPTIMAX</h2>
                <p className="text-xs">Carpet area: 500sqft</p>
                <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">Download Brochure</button>
            </div>
            {/* Tile-2 */}
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">3BHK OPTIMAX</h2>
                <p className="text-xs">Carpet area: 500sqft</p>
                <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">Download Brochure</button>
            </div>
            {/* Tile-3 */}
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">3BHK OPTIMAX</h2>
                <p className="text-xs">Carpet area: 500sqft</p>
                <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">Download Brochure</button>
            </div>
            {/* Tile-4 */}
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">3BHK OPTIMAX</h2>
                <p className="text-xs">Carpet area: 500sqft</p>
                <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2">Download Brochure</button>                
            </div>
        </div>
        <button className="bg-[#E74238] text-white text-sm rounded-full px-3 py-2 w-full uppercase my-3">Get in touch</button>
      </div>

      {/* Image Container */}
      <div className="p-[20px]">
        <img src="/uniqo-building.png" alt="" />
      </div>
    </div>
  );
};

export default Description;
