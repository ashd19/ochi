function AboutUs() {
  return (
    <div className="w-full   bg-[#CDEA68] rounded-t-3xl">
      <div className=" p-20">
        <h1 className="font-[NeueMontreal] text-[3vw] leading-none tracking-tight font-light">
          We craft category-defining presentations, brand identities, and
          digital experiences that drive funding, sales, and market leadership.
        </h1>
      </div>
      <div className="border  mt-5 w-full p-10 flex justify-between">
        <div>
          <p className=" font-[NeueMontreal] text-[1.5vw]">
            What can you expect
          </p>
        </div>
        <div className="flex flex-col text-[1.5vw]  gap-5">
          <p className=" font-[NeueMontreal]">
            We don't just make slides. We shape <br />
            strategy, storytelling, design scalable <br />
            brand systems, and build presentations <br />
            that make people say: "I want in!"
          </p>
          <div>
            <p className=" font-[NeueMontreal]">
              Our clients make the world go round -<br /> from deep tech,
              aerospace and robotics
              <br /> to music festivals and Michelin-starred
              <br /> restaurants.
            </p>
          </div>
          <div>
            <p className=" font-[NeueMontreal]">
              Since 2019, we've been the go-to partner
              <br /> for Yahoo, Medallia, Uber, Lexus
              <br /> Salience Labs, Trawa and AllThingsGo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 mr-30">
          <div className="mt-70">
            <p className=" text-[1.5vw] font-[NeueMontreal]">
              S: <br />
              <a href="" className="hover:underline">
                Instagram
              </a>
              <br />
              <a href="" className="hover:underline">
                Linkedin
              </a>
              <br />
              <a href="" className="hover:underline">
                Behance
              </a>
              <br />
              <a href="" className="hover:underline">
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* How can we help  */}
      <div className="flex border-t-2 p-10  border-white/50 justify-between">
        <div>
          <div className="">
            <h1 className="text-[4vw] font-[NeueMontreal] tracking-tight">
              How can we help :
            </h1>
          </div>
          <a href="/">
            <div className="bg-black text-white uppercase rounded-4xl p-4 w-[200px] text-center font-[NeueMontreal]">
              Read more
            </div>
          </a>
        </div>
        {/* pic  */}
        <div>
          <img
            className="w-[600px] h-[450px]"
            src="src/assets/pic.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
