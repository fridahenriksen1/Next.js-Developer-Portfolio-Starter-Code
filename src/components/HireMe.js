import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"}></CircularText>

        <Link
          href="mailto:fridahenriksen1@gmail.com"
          className="flex items-center justify-center absolute bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
