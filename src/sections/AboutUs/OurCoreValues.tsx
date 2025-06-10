const OurCoreValues = () => {
  return (
    <div className="bg-gradient-to-l from-[#17262A] to-[#24343BCC] text-white py-12 md:py-18">
      <h2 className="uppercase text-center text-2xl md:text-3xl font-semibold pb-8">
        Our Core Values
      </h2>
      <div className="lg:flex lg:mx-38 grid grid-cols-2 gap-20 m-12 items-center justify-between text-center">
        {/* Quality */}
        <div className="flex flex-col items-center justify-between gap-2 md:gap-3">
           <img loading="lazy" src="/icons/quality.png" alt="quality" className="w-10 md:w-12"/>
          <h2 className="font-semibold md:text-2xl">Quality</h2>
          <p className="text-xs md:text-base">No Compromise with quality.</p>
        </div>
        {/* Transparency */}
        <div className="flex flex-col items-center justify-between gap-2 md:gap-3">
           <img loading="lazy" src="/icons/transparency.png" alt="Transparency" className="w-10 md:w-12"/>
          <h2 className="font-semibold md:text-2xl">Transparency</h2>
          <p className="text-xs md:text-base">We believe in being an open book</p>
        </div>
        {/* Growth */}
        <div className="flex flex-col items-center justify-between gap-2 md:gap-3">
           <img loading="lazy" src="/icons/growth.png" alt="Growth" className="w-10 md:w-12"/>
          <h2 className="font-semibold md:text-2xl">Growth</h2>
          <p className="text-xs md:text-base text-nowrap">Let us grow collectively</p>
        </div>
        {/* Promise */}
        <div className="flex flex-col items-center justify-between gap-2 md:gap-3">
           <img loading="lazy" src="/icons/promise.png" alt="Promise" className="w-10 md:w-12"/>
          <h2 className="font-semibold md:text-2xl">Promise</h2>
          <p className="text-xs md:text-base">To deliver more than promised</p>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
