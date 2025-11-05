import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex mt-10 px-20    items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card rounded-xl  flex items-center justify-center w-full h-full bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card flex gap-5 w-1/2 h-full bg-[#004D43]"></div>
        <div className="card flex gap-5 w-1/2 h-full bg-[#004D43]"></div>
      </div>
    </div>
  );
}

export default Cards;
