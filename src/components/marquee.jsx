/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="uppercase w-full rounded-t-2xl overflow-hidden py-10 bg-[#004D43]">
      <div
        className="text-white  gap-3 notpx-4 flex  border-2 overflow-hidden border-white/50  font-semibold
         whitespace-nowrap"
      >
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[25vw] leading-none tracking-tighter font-[FoundersGrotesk] "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[25vw] leading-none tracking-tighter font-[FoundersGrotesk]"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[25vw] leading-none  tracking-tighter font-[FoundersGrotesk]"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
