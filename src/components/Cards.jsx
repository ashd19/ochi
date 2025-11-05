import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex mt-10 items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card rounded-xl w-full h-full bg-[#004D43]"></div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-full bg-[#004D43]"></div>
      <div className="cardcontainer flex gap-5 w-1/2 h-full bg-[#004D43]"></div>
    </div>
  );
}

export default Cards;
