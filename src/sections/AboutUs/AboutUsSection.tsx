const AboutUs = () => {
  return (
    <div className="text-white py-14 bg-gradient-to-l from-[#CE3631] to-[#E64237E5] ">
      {/* Glassmorphism Card */}
      <div className="flex flex-col gap-8 p-6 mx-8 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
        <h2 className="text-center uppercase tracking-wide font-semibold text-xl">
          About Us
        </h2>
        <p className="text-sm leading-7">
          Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id turpis
          porttitor sed cras donec. Id ac molestie purus tincidunt in cras. Quis
          a lacus molestie praesent suspendisse ac tellus. Auctor tristique
          ultrices magna purus. Tortor in pharetra enim ornare id porttitor.
          Purus nibh porta curabitur id ullamcorper. Pellentesque nulla varius
          netus tristique felis aliquet phasellus at. Platea ultricies convallis
          dictum amet id lacinia. Risus erat egestas amet arcu ultrices amet
          ullamcorper eu. Facilisis mattis blandit fusce a amet eleifend ut
          purus. Risus in tellus mattis nunc nulla quam pellentesque dis.
        </p>
        <hr />
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2>Homes for rent</h2>
              <p className="text-3xl">7239</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2>State</h2>
              <p className="text-3xl">79+</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2>Homes to buy</h2>
              <p className="text-3xl">1082</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2>Agents</h2>
              <p className="text-3xl">219+</p>
            </div>
          </div>
        </div>
        <hr />
        <img src="house-1.png" alt="house-1" className=""/>
      </div>
    </div>
  );
};

export default AboutUs;
