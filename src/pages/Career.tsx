import Footer from "../components/Footer"
import Hero from "../sections/Career/Hero"
import OpenPositions from "../sections/Career/OpenPositions"
import AboutWorkingHere from "../sections/Career/AboutWorkingHere"

const Career = () => {

  return (
    <div className="montserrat-regular">
      <Hero />
      <AboutWorkingHere/>
      <div className="flex ">
        <img src="/career-image.png" alt="career-image" className="lg:size-1/3"/>
        <img src="/career-image-1.png" alt="career-image" className="hidden lg:block size-1/3"/>
        <img src="/career-image-2.png" alt="career-image" className="hidden lg:block size-1/3"/>
      </div>
      <OpenPositions />
      <Footer/>
    </div>
  )
}

export default Career
