const articles = [
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
  {
    image: "/all-articles-1.png",
    text: "Lorem Ipsum is simply dummy text of the",
    date: "12 jun, 2025",
  },
];

const BlogPostHome = () => {
  return (
    <>
      {/* Mobile & Tablets */}
      <div className="lg:hidden bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-6 md:px-20 montserrat-regular">
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center uppercase mt-6">
          our blogs
        </h2>
        <div className="bg-white mt-12 flex flex-col justify-center items-center gap-4 p-6 md:p-10 rounded-[40px] md:rounded-[70px]">
           <img loading="lazy"   src="/blogs-1.png" alt="blog-1" className="" />
          <p className="font-semibold self-start md:text-xl">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="self-start text-sm md:text-lg text-zinc-500">
            12 Jun, 2025
          </p>
        </div>
        <hr className="text-white my-12 " />
        <div>
          <h2 className="text-2xl text-white font-semibold text-center uppercase mb-6">
            Read All Articles
          </h2>
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-4 rounded-lg mb-4"
            >
               <img loading="lazy"
                 
                src={article.image}
                alt=""
                className="w-32 md:w-42"
              />
              <div className="flex flex-col justify-between gap-4">
                <p className="text-white font-medium text-sm md:text-lg">
                  {article.text}
                </p>
                <p className="text-white/70 text-xs md:text-lg">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Web */}
      <div className="hidden relative lg:flex flex-col gap-12 bg-gradient-to-b from-[#CE3631] to-[#E64237E5] p-20 montserrat-regular">
        <h2 className="text-center text-4xl text-white font-semibold">
          Our Blogs
        </h2>
         <img loading="lazy"
           
          src="/uniqo-pattern.png" // Replace with your image path
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover z-1"
        />

        {/* Container-1 */}
        <div className="hidden lg:flex bg-white rounded-3xl mx-18 mt-12">
          <div className="p-12 flex flex-col gap-10 w-fit">
            <h2 className="text-xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing
            </h2>
            <p>12 jun, 2025</p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="w-fit bg-[#17262A] text-white px-8 py-2 rounded-lg">
              Read More
            </button>
          </div>
          {/* image */}
          <div className="flex relative overflow-hidden rounded-3xl">
             <img loading="lazy"
               
              src="/blogs-ellipse.png"
              alt=""
              className="w-4/7 absolute z-10"
            />
             <img loading="lazy"
               
              src="/blogs-1-copy.png"
              alt=""
              className=" translate-x-20.5 rounded-3xl"
            />
          </div>
        </div>

        {/* Container-2 */}
        <div className="bg-white rounded-3xl flex flex-col gap-8 mx-18 p-12">
          <h2 className="text-3xl font-semibold">Latest Posts</h2>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
               <img loading="lazy"
                 
                src="/latest-posts-1.png"
                alt=""
                className=""
              />
              <p className="font-medium">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="flex flex-col gap-4">
               <img loading="lazy"
                 
                src="/latest-posts-2.png"
                alt=""
                className=""
              />
              <p className="font-medium">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="flex flex-col gap-4">
               <img loading="lazy"
                 
                src="/latest-posts-3.png"
                alt=""
                className=""
              />
              <p className="font-medium">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
            <div className="flex flex-col gap-4">
               <img loading="lazy"
                 
                src="/latest-posts-4.png"
                alt=""
                className=""
              />
              <p className="font-medium">
                Lorem Ipsum is simply dummy text of the
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostHome;
