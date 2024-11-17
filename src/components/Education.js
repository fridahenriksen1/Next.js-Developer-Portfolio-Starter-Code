import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Liicon reference={ref} />
      <motion.div //This does the details animates like the content is pushing up
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null); // Skapa referens för scroll-taget
  const { scrollYProgress } = useScroll({
    target: ref, // Target är vår referens
    offset: ["start center", "end center"], // Offset för att styra animationen
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Motion Div som reagerar på scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }} // Animera skalan baserat på scrollYProgress
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top mt-2"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Higher Vocational Education in Front-End Development"
            time="2024-2026"
            place="IT-Högskolan, Gothenburg"
            info="During my education, I have gained experience in developing user-friendly web applications with a focus on JavaScript, CSS, and frameworks such as React and Vue.js. The program has also provided me with insights into backend development and agile work using Scrum, enabling me to create responsive and intuitive solutions."
          />
          <Details
            type="Higher Vocational Education in Digital Design"
            time="2022-2024"
            place="Brobygrafiska, Sunne"
            info="During the program, I gained knowledge in visual communication, usability, and web development. This included creating user-friendly designs, implementing web technologies, and developing responsive websites. The curriculum also focused on understanding user needs and designing intuitive interfaces to enhance the overall user experience."
          />
          <Details
            type="Higher Vocational Education in Front-End Development"
            time="2024-2026"
            place="Gothenburg, Västra Götaland"
            info="During my education, I have gained experience in developing user-friendly web applications with a focus on JavaScript, CSS, and frameworks such as React and Vue.js. The program has also provided me with insights into backend development and agile work using Scrum, enabling me to create responsive and intuitive solutions."
          />
          <Details
            type="Higher Vocational Education in Front-End Development"
            time="2024-2026"
            place="Gothenburg, Västra Götaland"
            info="During my education, I have gained experience in developing user-friendly web applications with a focus on JavaScript, CSS, and frameworks such as React and Vue.js. The program has also provided me with insights into backend development and agile work using Scrum, enabling me to create responsive and intuitive solutions."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
