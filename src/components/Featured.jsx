import { motion } from "framer-motion";
import Box from "./Box.jsx";

function Featured() {
  motion;
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b pb-20">
        <h1 className="text-7xl font-['NeueMontreal'] tracking-tight">
          Featured Projects:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full mt-10 flex gap-10">
          <div className="cardcontainer w-1/2 relative h-[80vh]">
            <p className="mb-2 font-['NeueMontreal'] text-lg ml-6">FYDE</p>

            <div className="relative w-full h-full">
              {/* Positioned to overflow into the gap on the RIGHT */}
              <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-['NeueMontreal'] font-semibold text-9xl z-9  pointer-events-none whitespace-nowrap leading-none">
                {"FYDE".split("").map((item, index) => (
                  <span key={index}> {item}</span>
                ))}
              </h1>

              <div
                className="card w-full h-full rounded-xl overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png')",
                }}
                aria-hidden="true"
              />
            </div>

            <div className="mt-3 flex gap-5">
              <Box text={"BRAND IDENTITY"} />
              <Box text={"pitch deck"} />
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <p className="mb-2 uppercase font-['NeueMontreal'] text-lg ml-6">
              Meddalia Experience
            </p>

            <div className="relative w-full h-full">
              {/* Positioned to overflow into the gap on the LEFT */}
              <h1 className="absolute flex  top-1/2 right-full translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-['NeueMontreal'] font-bold text-7xl z-9 pointer-events-none whitespace-nowrap leading-none">
                {"Meddalia Experience".split("").map((item, index) => (
                  <motion.span
                    initial={{}}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <div
                className="card w-full h-full rounded-xl overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png')",
                }}
                aria-hidden="true"
              />
            </div>

            <div className="mt-3 flex gap-5">
              <Box text={"brand identity"} />
              <Box text={"Executive keynote"} />
              <Box text={"product launch"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
