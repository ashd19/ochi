import React from "react";
import { MoveUpRight } from "lucide-react";

function landingPage() {
  return (
    <div className="w-full h-screen pt-1 ">
      <div className="textstructure mt-40 px-15">
        {["we create", "Eye-opening", "presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <h1 className="uppercase text-8xl font-semibold leading-[5.5vw]  tracking-tighter font-[FoundersGrotesk]">
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="borderline border-t border-gray-400 mt-32  ">
        <div className="px-5 py-3 flex justify-between items-center ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="font-[NeueMontreal] flex text-lg">
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
              <MoveUpRight className="arrow h-10  w-10 rounded-full border mt-1 border-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
