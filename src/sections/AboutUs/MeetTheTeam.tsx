const MeetTheTeam = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center uppercase">
        Meet The Team
      </h2>
      <div className="grid grid-cols-2 gap-5 md:gap-10 p-8 md:mx-16">
        {/* Card-1 */}
        <div className="rounded-2xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] h-[40vh] bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">Jasmine Jasmine</h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
            <img src="/icons/linkedin.png" alt="linkedin" className="size-3 md:size-6" />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-2 */}
        <div className="rounded-2xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] h-[40vh] bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">Jasmine Jasmine</h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
            <img src="/icons/linkedin.png" alt="linkedin" className="size-3 md:size-6" />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-3 */}
        <div className="rounded-2xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] h-[40vh] bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">Jasmine Jasmine</h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
            <img src="/icons/linkedin.png" alt="linkedin" className="size-3 md:size-6" />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>

        {/* Card-4 */}
        <div className="rounded-2xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/team-1.png')] h-[40vh] bg-cover bg-center flex gap-3 flex-col items-center justify-end text-white pb-4">
          {/* Name, Designation & Linkedin */}
          <div className="flex gap-4">
            {/* Name & Designation */}
            <div className="text-nowrap flex flex-col">
              <h2 className="text-xs md:text-xl font-semibold">Jasmine Jasmine</h2>
              <h2 className="text-xs">Sales Head</h2>
            </div>
            {/* Linkedin */}
            <img src="/icons/linkedin.png" alt="linkedin" className="size-3 md:size-6" />
          </div>
          <p className="text-xs md:text-[16px] md:pl-6 font-light pl-2.5 leading-5">
            Lorem Ipsum is simply dummy text of the{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between px-8">
        <div className="flex pt-4">
          <div className="h-1 w-20 bg-zinc-900 rounded-l-full"></div>
          <div className="h-1 w-20 bg-zinc-400 rounded-r-full"></div>
        </div>
        <div className="flex">
          <img src="/icons/chevron-left.png" alt="arrows" className="size-12"/>
          <img src="/icons/chevron-right.png" alt="arrows" className="size-12"/>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
