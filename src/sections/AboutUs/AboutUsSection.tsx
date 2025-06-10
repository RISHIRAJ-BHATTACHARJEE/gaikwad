const AboutUs = () => {
  return (
    <>
      {/* Mobile & Tablet */}
      <div className="lg:hidden text-white py-14 bg-gradient-to-l from-[#CE3631] to-[#E64237E5] ">
        {/* Glassmorphism Card */}
        <div className="flex flex-col gap-8 md:gap-12 p-6 md:p-12 mx-8 md:w-[70%] md:mx-auto rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15">
          <h2 className="text-center uppercase tracking-wide font-semibold text-xl md:text-3xl">
            About Us
          </h2>
          <p className="text-sm md:text-lg md:text-center leading-7">
            Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
            turpis porttitor sed cras donec. Id ac molestie purus tincidunt in
            cras. Quis a lacus molestie praesent suspendisse ac tellus. Auctor
            tristique ultrices magna purus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis quos praesentium numquam
            fugiat neque. Inventore nihil placeat officia corporis fuga eaque
            adipisci neque quod assumenda nemo, cum voluptatum ipsum
            impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nisi, natus dignissimos, hic facere at sapiente odio ab explicabo
            doloremque quas perspiciatis magni rerum minima veniam aliquid
            temporibus et voluptate? Reiciendis, dolore maxime? purus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos
            praesentium numquam fugiat neque. Inventore nihil placeat officia
            corporis fuga eaque adipisci neque quod assumenda nemo, cum
            voluptatum ipsum impedit?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nisi, natus dignissimos, hic facere at sapiente
            odio ab explicabo doloremque quas perspiciatis magni rerum minima
            veniam aliquid temporibus et voluptate? Reiciendis, dolore maxime?
          </p>
          <hr />
          <div className="flex flex-col gap-10 md:mx-12">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="md:text-xl">Homes for rent</h2>
                <p className="text-3xl md:text-4xl">7239</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="md:text-xl">State</h2>
                <p className="text-3xl md:text-4xl">79+</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="md:text-xl">Homes to buy</h2>
                <p className="text-3xl md:text-4xl">1082</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="md:text-xl">Agents</h2>
                <p className="text-3xl md:text-4xl">219+</p>
              </div>
            </div>
          </div>
          <hr className="hidden md:block" />
           <img loading="lazy" src="house-1.png" alt="" className="hidden md:block" />
        </div>
      </div>
      {/* Web */}
      <div className="hidden lg:block h-screen relative text-white bg-gradient-to-l from-[#CE3631] to-[#E64237E5] py-18">
         <img loading="lazy"
          src="/uniqo-pattern.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
         <img loading="lazy" src="/1.png" alt="" className="absolute bottom-0 -left-17.5" />
        <div className="z-10 rounded-2xl border border-white/20 backdrop-blur-[50px] shadow-[0_16.54px_33.03px_rgba(0,0,0,0.1)] bg-white/15 mx-44 p-12">
          <div className="flex">
            {/* About & Description */}
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl font-semibold">About Us</h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Ac consequat at nec id
                turpis porttitor sed cras donec. Id ac molestie purus tincidunt
                in cras. Quis a lacus molestie praesent suspendisse ac tellus.
                Auctor tristique ultrices magna purus. Tortor in pharetra enim
                ornare id porttitor. Purus nibh porta curabitur id ullamcorper.
                Pellentesque nulla varius netus tristique felis aliquet
                phasellus at. Platea ultricies convallis dictum amet id lacinia.
                Risus erat egestas amet arcu ultrices amet ullamcorper eu.
                Facilisis mattis blandit fusce a amet eleifend ut purus. Risus
                in tellus mattis nunc nulla quam pellentesque dis.
              </p>
            </div>
            {/* image */}
             <img loading="lazy" src="/house-1.png" alt="house-img" className=" w-2/4" />
          </div>
          {/* Badges */}
          <div className="flex items-center justify-between gap-10 w-full border-y border-zinc-400 py-5">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="">Homes for rent</h2>
              <p className="text-4xl">7239</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="">State</h2>
              <p className="text-4xl">79+</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="">Homes to buy</h2>
              <p className="text-4xl">1082</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="">Agents</h2>
              <p className="text-4xl">219+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
