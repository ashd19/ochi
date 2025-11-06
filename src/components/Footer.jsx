function Footer() {
  return (
    <div className="flex justify-between items-center gap-5 w-full h-full border-t-2 ">
      <div className="eyeopening "></div>
      <div className="flex-col leading-none">
        <p className="text-[9vw] tracking-tighter leading-none font-bold font-['FoundersGrotesk']">
          Eye -
        </p>
        <br />
        <p className="text-[9vw] font-bold  tracking-tighter leading-none font-['FoundersGrotesk-Semibold']">
          Opening
        </p>
      </div>
      <div className="presentations">
        <div className="flex-col">
          <p className="text-[9vw] mr-5 font-bold font-['FoundersGrotesk-Semibold']  tracking-tighter leading-none">
            Presentations
          </p>
        </div>

        <div className="socials font-['NeueMontreal-Regular] ">
          <p className="font-['NeueMontreal-Regular'] mb-3">S:</p>

          <p className="font-['NeueMontreal-Regular']">Instagram</p>
          <p className="font-['NeueMontreal-Regular']">LinkedIn</p>
          <p className="font-['NeueMontreal-Regular']">Twitter</p>
          <p className="font-['NeueMontreal-Regular']">Facebook</p>
        </div>
        <br />
        <div className="location text-lg font-light">
          <p className="font-['NeueMontreal-Regular'] mb-3 ">L:</p>
          <a href="" className="hover:underline">
            <p className="font-['NeueMontreal-Regular']">202-1965 W 4th Ave</p>
          </a>
          <a href="" className="hover:underline">
            <p className="font-['NeueMontreal-Regular']">Vancouver,Canada</p>
          </a>
          <br />

          <a href="" className="hover:underline">
            <p className="font-['NeueMontreal-Regular']">30 Chukarina</p>
          </a>
          <a href="" className="hover:underline">
            <p className="font-['NeueMontreal-Regular']">St Lviv, Ukraine</p>
          </a>
        </div>
        <br />
        <div className="location text-lg font-light">
          <p className="font-['NeueMontreal-Regular'] mb-3 ">E:</p>
          <a href="" className="hover:underline">
            <p className="font-['NeueMontreal-Regular']">hello@ochi.design</p>
          </a>
        </div>
        <div>
          <p>© ochi design 2025. Legal Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
