/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

function Marquee() {
  const items = ["We are Ochi", "We are Ochi", "We are Ochi"];

  return (
    <div className="uppercase w-full rounded-t-2xl overflow-hidden py-10 bg-[#004D43]">
      <motion.div
        className="flex gap-16 whitespace-nowrap items-center text-white font-bold"
        initial={{ x: 0 }}
        animate={{ x: "-300%" }} // slide the whole row
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
      >
        {items.concat(items).map((text, i) => (
          <h1
            key={i}
            className="text-[18vw] leading-none tracking-tighter font-[FoundersGrotesk] pr-4"
          >
            {text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
