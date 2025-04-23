import React from "react";
import Engagement from "../../assets/images/Engagement.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
      <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
        <h1 className="text-[11vw] md:text-[120px] font-light" style={{ fontFamily: "Rosarivo" }}>
          About us
        </h1>
        <p className="text-[3vw] md:text-[20px] mt-[1vw] font-light leading-snug">
          Most Trusted and premium Matrimony Service in the World.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;