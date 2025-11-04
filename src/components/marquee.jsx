import React from "react";

function Marquee() {
  return (
    <div className="uppercase w-full rounded-3xl  py-10 bg-[#004D43]">
      <div className="text-white text-9xl  border border-white/50 flex font-bold   whitespace-nowrap">
        <h1 className="text-[20vw] leading-none font-[FoundersGrotesk]">
          We are Ochi
        </h1>
        <h1 className="text-[20vw] leading-none font-[FoundersGrotesk] ">
          We are Ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
