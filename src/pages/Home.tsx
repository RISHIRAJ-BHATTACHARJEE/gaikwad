import Footer from "../components/Footer"
import AboutUs from "../sections/AboutUs/AboutUsSection"
import MeetTheTeam from "../sections/AboutUs/MeetTheTeam"
import Amenities from "../sections/Home/Amenities"
import CompletedProjects from "../sections/Home/CompletedProjects"
import Hero from "../sections/Home/Hero"
import InstagramHighlights from "../sections/Home/InstagramHighlights"
import LiveProjects from "../sections/Home/LiveProjects"
import Reviews from "../sections/Home/Reviews"
import WhyChooseUs from "../sections/Home/WhyChooseUs"
import BlogPostHome from "@/sections/Home/BlogPostHome"

const Home = () => {
  return (
    <div className="montserrat-regular">
      <Hero/>
      <LiveProjects/>
      <CompletedProjects/>
      <Amenities/>
      <WhyChooseUs/>
      <AboutUs/>
      <MeetTheTeam/>
      <Reviews/>
      <InstagramHighlights/>
      <BlogPostHome/>
      <Footer/>
    </div>
  )
}

export default Home
