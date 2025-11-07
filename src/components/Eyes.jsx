import { useEffect, useState } from "react";
function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX);
      const degree = angle * (180 / Math.PI);
      setRotate(degree - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-5 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[18vw] md:w-[15vw] h-[18vw] md:h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-[#212121]">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="line w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[18vw] md:w-[15vw] h-[18vw] md:h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 relative rounded-full  bg-[#212121]">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="line w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
