const OurPartners = () => {
  return (
    <div className="bg-gradient-to-r from-[#E64237] to-[#A71E22E8] py-12 px-6">
      <h2 className="text-[#17262A] text-2xl md:text-4xl lg:text-3xl font-semibold uppercase text-center">Our Partners</h2>
      <div className="lg:flex lg:mx-32 grid grid-cols-2 gap-24 lg:gap-12 pt-12">
        {[1,2,3,4].map((_,idx) => (
          <img key={idx} src="kajaria-logo.png" alt="" className="md:w-52 md:mx-auto lg:w-38"/>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
