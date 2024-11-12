import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="-0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="UX/UI-design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="SCSS" x="-38vw" y="-4vw" />
        <Skill name="Vue.js" x="-11vw" y="18vw" />
        <Skill name="TypeScript" x="32vw" y="18vw" />
        <Skill name="Bootstrap" x="10vw" y="-26vw" />
        <Skill name="Node.js" x="10vw" y="25vw" />
        <Skill name="C#" x="25vw" y="0vw" />
        <Skill name="Photoshop" x="36vw" y="-15vw" />
        <Skill name="Hotjar" x="-25vw" y="-20vw" />
        <Skill name="Express" x="-10vw" y="-25vw" />
        <Skill name="Illustrator" x="-10vw" y="25vw" />
        <Skill name="Midjourney" x="-28vw" y="20vw" />
        <Skill name="SQL" x="-30vw" y="10vw" />
        <Skill name="After effects" x="30vw" y="10vw" />
        <Skill name="Github" x="14vw" y="17vw" />
        <Skill name="Scrum" x="23vw" y="22vw" />
      </div>
    </>
  );
};

export default Skills;
