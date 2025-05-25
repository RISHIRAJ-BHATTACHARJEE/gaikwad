import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Projects from "./pages/Projects"
import Career from "./pages/Career"
import Blogs from "./pages/Blogs"
import Testimonials from "./pages/Testimonials"
import Awards from "./pages/Awards"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import BlogPost from "./pages/BlogPost"

const App = () => {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogpost" element={<BlogPost/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
