const MeetTheTeam = () => {
  return (
    <div className="relative py-8">
       <img loading="lazy"
        src="/white-bg-pattern.png" // Replace with your image path
        alt="Overlay Image"
        className="absolute inset-0 w-full h-full object-cover z-1"
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-center uppercase">
        Meet The Team
      </h2>
      <div className="lg:flex lg:gap-5 items-center grid grid-cols-2 gap-5 md:gap-10 p-8 md:mx-16 2xl:justify-center">
         <img loading="lazy"
          src="/icons/chevron-left.png"
          alt="arrows"
          className="hidden lg:block size-12"
        />
        {/* Card-1 */}
        <div className="z-10 rounded-2xl lg:rounded-lg bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] h-[40vh] lg:h-[50vh] 2xl:h-[52vh] 2xl:w-1/6 bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name and Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">
                Jasmine Jasmine
              </h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
             <img loading="lazy"
              src="/icons/linkedin.png"
              alt="linkedin"
              className="size-3 md:size-6"
            />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-2 */}
        <div className="z-10 rounded-2xl lg:rounded-lg bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/meet-the-team-2.png')] h-[40vh] lg:h-[50vh] 2xl:h-[52vh] 2xl:w-1/6 bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">
                Jasmine Jasmine
              </h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
             <img loading="lazy"
              src="/icons/linkedin.png"
              alt="linkedin"
              className="size-3 md:size-6"
            />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-3 */}
        <div className="z-10 rounded-2xl lg:rounded-lg bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/meet-the-team-3.png')] h-[40vh] lg:h-[50vh] 2xl:h-[52vh] 2xl:w-1/6 bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">
                Jasmine Jasmine
              </h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
             <img loading="lazy"
              src="/icons/linkedin.png"
              alt="linkedin"
              className="size-3 md:size-6"
            />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-4 */}
        <div className="z-10 rounded-2xl lg:rounded-lg bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/meet-the-team-4.png')] h-[40vh] lg:h-[50vh] 2xl:h-[52vh] 2xl:w-1/6 bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">
                Jasmine Jasmine
              </h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
             <img loading="lazy"
              src="/icons/linkedin.png"
              alt="linkedin"
              className="size-3 md:size-6"
            />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>
         <img loading="lazy"
          src="/icons/chevron-right.png"
          alt="arrows"
          className="hidden lg:block size-12"
        />
      </div>
      <div className="lg:hidden flex justify-between px-8">
        <div className="flex pt-4">
          <div className="h-1 w-20 bg-zinc-900 rounded-l-full"></div>
          <div className="h-1 w-20 bg-zinc-400 rounded-r-full"></div>
        </div>
        <div className="flex">
           <img loading="lazy" src="/icons/chevron-left.png" alt="arrows" className="size-12" />
           <img loading="lazy"
            src="/icons/chevron-right.png"
            alt="arrows"
            className="size-12"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
