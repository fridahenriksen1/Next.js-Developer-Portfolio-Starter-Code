import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, city, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {city}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null); // Skapa referens för scroll-taget
  const { scrollYProgress } = useScroll({
    target: ref, // Target är vår referens
    offset: ["start end", "center start"], // Offset för att styra animationen
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Motion Div som reagerar på scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }} // Animera skalan baserat på scrollYProgress
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Digital Designer (internship)"
            company="Grassfish"
            companyLink="https://grassfish.com/"
            time="01.2024-04.2024"
            city="Varberg, Halland"
            work="Digital Designer (Internship) at Grassfish, where I collaborated with HR, marketing, and Johan, CTO at Vertiseit, to create a digital culture handbook following Vertiseit’s graphic profile. I also redesigned demo templates for the Dise program, which were used at an event in Barcelona. I conducted UX research for a Max restaurant, highlighting a specific product, and designed tax-free templates for Birka Gotland cruise ships in Figma, aligning with their brand and requirements. I assisted with migration tasks and led a redesign of a music control interface for Efterklang's service. Additionally, I developed a presentation showcasing Grassfish's key USPs for the sales team at a Miami event for cruise ships, and created sketch proposals for a touchscreen solution for spare parts ordering at Mekonomen and Autoexperten stores."
          />
          <Details
            position="Lifeguard and Café Attendant"
            company="Medley"
            companyLink="https://www.medley.se/"
            time="07.2023-08.2023"
            city="Varberg, Halland"
            work="Lifeguard and Café Attendant (Summer Job) at Medley, where I worked as a lifeguard at two swimming facilities in Varberg—one larger indoor complex with multiple pools and one smaller outdoor facility. I worked in a team to ensure safety in the water and also assisted at the café and check-in areas, serving customers and providing excellent service. My role required collaboration, attentiveness, and the ability to manage both safety and hospitality responsibilities effectively."
          />
          <Details
            position="Front End Developer (Internship)"
            company="Kazoku IT"
            companyLink="https://www.kazoku.se/"
            time="04.2023-06.2023"
            city="Karlstad, Värmland"
            work="Front End Developer (Internship) at Kazoku IT, where I collaborated with a classmate to design a dashboard for tracking office and remote work schedules, as well as upcoming events. During the coding phase, another colleague from Kazoku joined the project. We worked closely with the entire office team, having regular meetings and receiving valuable input and support from everyone. The development was done using Visual Studio and Blazor, following Scrum methodology. We worked in sprints, participated in reviews and retrospectives, and continuously improved our tasks to meet project goals."
          />
          {/* Lägg till fler Details-komponenter här om behövs */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
