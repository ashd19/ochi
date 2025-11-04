import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Marquee from "./components/marquee";
import AboutUs from "./components/AboutUs";
import Eyes from "./components/Eyes";

function App() {
  return (
    <div className="w-full h-screen  ">
      <Navbar />
      <LandingPage />

      <Marquee />
      <AboutUs />
      <Eyes/> 
    </div>
  );
}

export default App;
