import Footer from "../components/Footer"
import Hero from "../sections/Career/Hero"
import OpenPositions from "../sections/Career/OpenPositions"
import AboutWorkingHere from "../sections/Career/AboutWorkingHere"

const Career = () => {

  return (
    <div className="montserrat-regular">
      <Hero />
      <AboutWorkingHere/>
      <img src="/career-image.png" alt="career-image"/>
      <OpenPositions />
      <Footer/>
    </div>
  )
}

export default Career
