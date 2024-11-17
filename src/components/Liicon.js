import React from "react";
import { motion, useScroll } from "framer-motion";

const Liicon = (reference) => {
  const { scrollYProgress } = useScroll({
    target: reference, // Target är vår referens
    offset: ["start center", "end center"], // Offset för att styra animationen
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light"
        />
        <circle cx="75" cy="50" r="10" className=" stroke-1 fill-primary" />
      </svg>
    </figure>
  );
};

export default Liicon;
