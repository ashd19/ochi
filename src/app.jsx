import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Marquee from "./components/marquee";
import AboutUs from "./components/AboutUs";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full" data-scroll-container>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AboutUs />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
