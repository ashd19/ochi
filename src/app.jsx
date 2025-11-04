import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Marquee from "./components/marquee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/test";

function App() {
  return (
    <div className="w-full h-screen  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/test" element={<Test />} />
          {/* 
        <LandingPage />
        
        <Marquee /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
