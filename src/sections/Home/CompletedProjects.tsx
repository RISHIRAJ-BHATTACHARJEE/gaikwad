const CompletedProjects = () => {
  return (
    <div className="relative bg-gradient-to-l from-[#17262A] to-[#24343BCC] text-white py-10 lg:py-24">
       <img loading="lazy"
        src="/uniqo-pattern.png" // Replace with your image path
        alt="Overlay Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h2 className="uppercase text-center text-2xl md:text-3xl font-semibold tracking-wide pb-10">
        Completed Projects
      </h2>
      {/* Glassmorphism Card */}
      <div className="flex flex-col gap-8 p-6 md:p-10 2xl:px-24 mx-6 md:mx-24 2xl:mx-64 rounded-2xl border border-white/20 backdrop-blur-lg shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        <div className="flex flex-col gap-8 lg:flex-row w-full">
          <div className="rounded-lg flex flex-col items-center justify-between lg:w-full gap-3 pt-24 pb-4 bg-[linear-gradient(to_bottom,_#17262AB3,_#24343BB3),url('/completed-projects-1.png')] bg-cover bg-no-repeat bg-center md:h-[40vh]">
            <h2 className="text-lg md:text-3xl md:font-semibold md:tracking-wider">
              Nirvanas
            </h2>
            <div className="flex items-center justify-between gap-5 font-extralight">
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/double-bed.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/bath-tub.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/floorplan.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">3960 sqft</p>
              </div>
            </div>
            <button className="primary text-xs! md:text-xl! py-2!">
              View Details
            </button>
          </div>
          <div className="rounded-lg flex flex-col items-center justify-between lg:w-full gap-3 pt-24 pb-4 bg-[linear-gradient(to_bottom,_#17262AB3,_#24343BB3),url('/completed-projects-1.png')] bg-cover bg-no-repeat bg-center md:h-[40vh]">
            <h2 className="text-lg md:text-3xl md:font-semibold md:tracking-wider">
              Nirvanas
            </h2>
            <div className="flex items-center justify-between gap-5 font-extralight">
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/double-bed.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/bath-tub.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">6BA</p>
              </div>
              <div className="flex items-center gap-2">
                 <img loading="lazy"
                  src="/icons/floorplan.png"
                  alt="icon-1"
                  className="size-5 md:size-10"
                />
                <p className="md:text-2xl">3960 sqft</p>
              </div>
            </div>
            <button className="primary text-xs! md:text-xl! py-2!">
              View Details
            </button>
          </div>
          <div className="hidden lg:flex flex-col gap-3 items-center justify-center">
            <div className="size-4 rounded-full border flex items-center justify-center">
              <div className="size-1.5 bg-white rounded-full border border-gray-300 shadow-md" />
            </div>
            <div className="size-4 rounded-full border flex items-center justify-center">
              <div className="size-1.5 bg-white rounded-full border border-gray-300 shadow-md" />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-center gap-3">
           <img loading="lazy" src="icons/comp-proj-left-arrow.png" alt="" className="w-18" />
           <img loading="lazy" src="icons/comp-proj-right-arrow.png" alt="" className="w-18" />
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
