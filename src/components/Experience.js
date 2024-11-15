import React from "react";

const Details = ({ position, company, companyLink, time, city, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
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
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Digital Designer (internship)"
            company="Grassfish"
            companyLink="https://grassfish.com/"
            time="01.2024-04.2024"
            city="Varberg, Halland"
            work="   -"
          />
          <Details
            position="Front End Developer (Internship)"
            company="Kazoku IT"
            companyLink="https://www.kazoku.se/"
            time="04.2023-06.2023"
            city="Karlstad, Värmland"
            work="  -"
          />
          <Details
            position="Sales assistant"
            company="Guldfynd"
            companyLink="https://www.guldfynd.se/?utm_source=google&utm_medium=cpc&utm_campaign=DD%20%7C%20SE%20%7C%20S%20%7C%20Brand&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPtjOI5uKCJbSuZmzbFOJ9rhr9U1ihmWaguZOnymLmFv9Or1huCpPMoaApQrEALw_wcB"
            time="05.2022-07.2022"
            city="Varberg, Halland"
            work="   -"
          />
          <Details
            position="Cashier"
            company="Ica Hajen Lågpris"
            companyLink="https://www.ica.se/butiker/kvantum/varberg/ica-hajen-lagpris-1003542/?gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPsl-uhKh8NOn58ce5C_vUPziATF6-cGp5CPbX7luZLI-s103eALcd8aAs3LEALw_wcB"
            time="03.2017-06.2022"
            city="Varberg, Halland"
            work="  -"
          />
          <Details
            position="Front of House"
            company="Sal's Authentic New York Pizza"
            companyLink="https://www.sals.co.nz/"
            time="02.2020-03.2020"
            city="Queenstown, New Zealand"
            work="   -"
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
            work="Sales Associate specializing in pearl jewelry, assisting customers with the selection and care of pearl collections, and ensuring an exceptional shopping experience."
          />
          <Details
            position="Pearl Sales Associate"
            company="La Perle"
            companyLink="https://www.queenstownnz.co.nz/listing/la-perle-nz-pearl-trading-co/1435/"
            time="01.2020-02.2020"
            city="Queenstown, New Zealand"
            work="Sales Associate specializing in pearl jewelry, assisting customers with the selection and care of pearl collections, and ensuring an exceptional shopping experience."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
