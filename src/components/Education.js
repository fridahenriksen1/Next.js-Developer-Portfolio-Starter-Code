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
          <Details
            position="Sales assistant"
            company="Guldfynd"
            companyLink="https://www.guldfynd.se/?utm_source=google&utm_medium=cpc&utm_campaign=DD%20%7C%20SE%20%7C%20S%20%7C%20Brand&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPtjOI5uKCJbSuZmzbFOJ9rhr9U1ihmWaguZOnymLmFv9Or1huCpPMoaApQrEALw_wcB"
            time="05.2022-07.2022"
            city="Varberg, Halland"
            work="Sales Associate at Guldfynd, specializing in assisting customers with jewelry selection and providing personalized service. Responsible for maintaining an organized store environment, ensuring appealing product displays, and supporting customers with inquiries. Managed sales transactions, offered guidance on product care and quality, and handled jewelry sent to the workshop for repairs or customization."
          />
          <Details
            position="Cashier"
            company="Ica Hajen Lågpris"
            companyLink="https://www.ica.se/butiker/kvantum/varberg/ica-hajen-lagpris-1003542/?gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPsl-uhKh8NOn58ce5C_vUPziATF6-cGp5CPbX7luZLI-s103eALcd8aAs3LEALw_wcB"
            time="03.2017-06.2022"
            city="Varberg, Halland"
            work="Cashier at ICA Hajen Lågpris, primarily assisting customers at the register and self-checkout, ensuring smooth transactions and excellent service. Also worked across various departments, including grocery, dairy, bakery, and online orders, supporting customers and maintaining stocked shelves. Additional responsibilities included managing the bulk candy section, ensuring hygiene standards, restocking, and placing orders."
          />
          <Details
            position="Front of House"
            company="Sal's Authentic New York Pizza"
            companyLink="https://www.sals.co.nz/"
            time="02.2020-03.2020"
            city="Queenstown, New Zealand"
            work="Front of House at Sal's Authentic New York Pizza, responsible for taking customer orders, serving food, and ensuring an exceptional dining experience. Duties included managing dine-in and takeout orders, maintaining a clean and welcoming environment, and delivering friendly, attentive service."
          />
          <Details
            position="Pearl Sales Associate"
            company="La Perle"
            companyLink="https://www.queenstownnz.co.nz/listing/la-perle-nz-pearl-trading-co/1435/"
            time="01.2020-02.2020"
            city="Queenstown, New Zealand"
            work="Sales Associate specializing in pearl jewelry, assisting customers with the selection and care of pearl collections, and ensuring an exceptional shopping experience."
          />
          <Details
            position="Cook (Fast Food)"
            company="McDonald's"
            companyLink="https://www.mcdonalds.com/se/sv-se.html"
            time="01.2017-03.2017"
            city="Queenstown, New Zealand"
            work="Kitchen Crew Member at McDonald's, primarily responsible for preparing hamburgers and other menu items in a fast-paced environment. Ensured food quality, adhered to hygiene standards, and supported the team with maintaining an efficient workflow."
          />
          <Details
            position="Cashier"
            company="Gekås Ullared"
            companyLink="https://www.gekas.se/"
            time="01.2020-02.2020"
            city="Queenstown, New Zealand"
            work="Cashier at Gekås Ullared, responsible for handling transactions efficiently and providing excellent customer service. Assisted on the shop floor as needed, including helping customers locate products and maintaining a tidy shopping environment."
          />
          <Details
            position="Croupier"
            company="Cherry Casino"
            companyLink="https://"
            time="03.2015-10.2015 | 06.2016-10.2016"
            city="Varberg, halland"
            work="Blackjack Dealer responsible for managing and dealing blackjack games in a professional and engaging manner, ensuring adherence to gaming regulations and providing excellent customer service to players."
          />

          {/* Lägg till fler Details-komponenter här om behövs */}
        </ul>
      </div>
    </div>
  );
};

export default Education;
