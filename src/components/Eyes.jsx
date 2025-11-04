function Eyes() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('src/assets/bg.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-[#212121]">
              <div className="w-1/4 h-1/4 rounded-full bg-[#ffffff]"></div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-[#212121]">
              <div className="w-1/4 h-1/4 rounded-full bg-[#ffffff]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
