import React from "react";
import Engagement from "../../assets/images/Engagement.svg";

const HeroSection = () => {
  return (
     <div className="relative w-full h-[50vw] md:h-[21.875vw] ">
            <img
              src={Engagement}
              alt="Engagement"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
              <h1
                className="text-[11vw] md:text-[6vw]"
                style={{ fontFamily: "Rosarivo, serif" }}
              >
                About Us
              </h1>
              <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
                Most Trusted and premium Matrimony Services in the World.
              </p>
            </div>
          </div>
  );
};

export default HeroSection;