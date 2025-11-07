function Cards() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row mt-10 px-4 md:px-20 items-center gap-5">
      <div className="cardcontainer h-[50vh] w-full md:w-1/2">
        <div className="card rounded-xl relative w-full h-full bg-[#004D43]">
          <div className="relative w-full h-full">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <div className="absolute bottom-1 left-5">
            <div className="rounded-full text-[#cceb6a] border-[#cceb6a] font-['NeueMontreal'] w-fit h-10 p-2 flex uppercase border-2 text-xs md:text-sm">
              C2019-2025
            </div>
          </div>
        </div>
      </div>

      <div className="cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[70vh] md:h-[50vh]">
        <div className="card rounded-xl relative flex gap-5 w-full  md:w-1/2 h-full bg-[#004D43]">
          <div className="relative w-full h-full">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-1 left-5 ">
            <div className="rounded-full text-[#cceb6a]  border-[#cceb6a] font-['NeueMontreal'] w-fit h-10 p-2 flex uppercase border-2 text-xs md:text-sm">
              RATING 5.0 ON CLUTCH
            </div>
          </div>
        </div>
        <div className="card rounded-xl relative flex gap-5 w-full md:w-1/2 h-full bg-[#004D43]">
          <div className="  top-1/2 left-1/2">
            <img
              className="absolute  w-[100px]  h-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-1 left-5">
            <div className="rounded-full text-[#cceb6a] border-[#cceb6a] font-['NeueMontreal'] w-fit h-10 p-2 flex uppercase border-2 text-xs md:text-sm">
              BUSINESS BOOTCAMP ALUMNI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
