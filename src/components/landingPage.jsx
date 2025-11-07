import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

function LandingPage() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed="-.8"
      data-scroll-section
      className="  w-full h-screen pt-1 "
    >
      <div className="flex justify-between ">
        <div className="textstructure mt-20 md:mt-40 ml-4 md:ml-20 ">
          {["we create", "Eye-opening", "presentations"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex gap-3 ">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "12vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="h-[7vw] overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://i.icanvas.com/ic3/horizontal-image/DLH71.jpg?fit=crop&width=435&height=300"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="mr-[1vw] uppercase text-4xl md:text-8xl font-semibold leading-tight md:leading-[6.5vw] tracking-tighter font-[FoundersGrotesk]">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="siteoftheday">
          <div className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-50">
            <div className="bg-red-500 w-10 md:w-14 h-28 md:h-36 flex items-center justify-center">
              <h1 className="text-white font-bold rotate-270 text-xs leading-none">
                Site of the day
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="borderline border-t border-gray-400 mt-20 md:mt-32  ">
        <div className="px-2 md:px-5 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="font-[NeueMontreal] text-sm md:text-lg">
              {item}
            </p>
          ))}

          {/* start project div */}
          <div className="flex gap-2">
            <div className="start-project">
              <div className="px-4 py-2 border-2 rounded-full  border-gray-500">
                Start the project
              </div>
            </div>
            <div>
              <MoveUpRight className="arrow h-10  w-10 rounded-full border mt-1 border-gray-600 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
