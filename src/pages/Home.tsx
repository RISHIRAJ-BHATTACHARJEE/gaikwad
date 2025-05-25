import Footer from "../components/Footer"
import Amenities from "../sections/Home/Amenities"
import CompletedProjects from "../sections/Home/CompletedProjects"
import Hero from "../sections/Home/Hero"
import LiveProjects from "../sections/Home/LiveProjects"

const Home = () => {
  return (
    <div className="montserrat-regular">
      <Hero/>
      <LiveProjects/>
      <CompletedProjects/>
      <Amenities/>
      {/* <WhyChooseUs/> */}
      {/* <AboutUs/> */}
      {/* <MeetTheTeam/> */}
      {/* <Reviews/> */}
      {/* <InstagramHighlights/> */}
      <Footer/>
    </div>
  )
}

export default Home
