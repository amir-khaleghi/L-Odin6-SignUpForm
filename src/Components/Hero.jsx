import React from "react";
import heroImage from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="flex justify-center  md:content-end">
      <img
        src={heroImage}
        alt="Hero"
        className="object-cover w-2/3 w-3/4  h-25 heroImage md:"
      />
    </div>
  );
};

export default Hero;
