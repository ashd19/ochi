import React from "react";

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
        {/* <div className="masker">
          <h1 className="uppercase text-8xl font-semibold leading-[3.5vw]  tracking-tighter font-[FoundersGrotesk]">
            Eye-opening
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-8xl font-semibold leading-none  tracking-tighter font-[FoundersGrotesk]">
            presentations
          </h1>
        </div> */}
      </div>
    </div>
  );
}

export default landingPage;
