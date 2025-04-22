import React from "react";
import { ChevronRight } from "lucide-react"; // Icon for navigation

import Strongnew from "../../assets/images/Strongnew.svg";
import Trade from "../../assets/images/Trade.svg";
import Lamp from "../../assets/images/Lamp.svg";
import stairs from "../../assets/images/stairs.svg";

const StatsData = [
  {
    imgSrc: Strongnew,
    title: "Strong bonds are built in the toughest times",
    description:
      "Every marriage has challenges. But overcoming them strengthens the bond. This blog shares expert tips and inspiring success stories.",
  },
  {
    imgSrc: Trade,
    title: "Traditions Evolve, But Love Remains Timeless",
    description:
      "As society evolves, so do relationships. This article dives into how modern couples balance love, careers, and traditions while redefining the essence of marriage.",
  },
  {
    imgSrc: Lamp,
    title: "A World Of Love, One Shared Promise",
    description:
      "Marriage is more than a ceremony. It's a lifelong commitment. Explore heartwarming stories of couples who stood by their promises, through thick and thin.",
  },
  {
    imgSrc: stairs,
    title: "Two Hearts, One Journey, Infinite Love",
    description:
      "Love is a journey, not a destination. This blog shares insights on how couples navigate through different phases of life, growing together in love.",
  },
];

const Stats = () => {
  return (
    <section className=" max-md:py-5 py-12 px-35 max-md:px-10 flex flex-col ">
      <div className="flex flex-col items-center text-center">
      <h2 className="text-[3.5vw]   max-sm:text-[10vw] max-md:text-[7vw] font-normal font-Raleway text-black">
        Our Services
      </h2>
      <p className="text-gray-600 md:max-w-[38vw] m-[4vw]  md:text-[2vw] lg:text-[0.9vw]  max-sm:text-[5vw] opacity-80 font-normal mt-2">
        Personalized matchmaking services designed to connect you with your
        ideal life partner, based on compatibility, values, and aspirations.
      </p>
      </div>
      <div className="grid max-sm:grid-cols-1 md:p-0 max-sm:p-[10vw] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-7 gap-[30vw] mt-8">
        {StatsData.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg rounded-2xl md:overflow-hidden max-sm:overflow-visible"
          >
            {/* Arrow Icon */}
            <div className="absolute opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-hover:top-2 right-2 bg-white p-2 rounded-full shadow-md transition-all duration-300">
              <ChevronRight className="h-8 w-8 text-[#ED1C24]" />
            </div>
            {/* Image */}
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full max-sm:w-[60vw]  md:h-[27.8vw] max-sm:h-[60vw] object-cover"
            />

            {/* Hover Content */}
            <div className="absolute md:bottom-5 md:left-[1.25vw] md:right-[1.25vw] max-sm:bottom-[-20vw] max-sm:left-2 md:w-auto max-sm:w-[65vw] bg-[#F9E9E1]  md:p-[0.833vw] max-sm:p-[2vw] rounded-2xl md:h-[5.115vw] max-sm:h-[45vw] md:group-hover:h-48 md:overflow-hidden overflow-visible flex flex-col justify-items-start items-start md:transition-all md:duration-500 md:ease-in-out">
              {/* Title */}
              <p className="bg-gradient-to-r ml-[0.5vw] from-[#ED1C24] to-[#F05A8E] font-semibold bg-clip-text text-transparent md:text-[1.3vw] max-sm:text-[4vw]">
                {service.title}
              </p>

              {/* Description */}
              <p className="text-[#777777] ml-[0.5vw] md:text-[0.8vw] max-sm:text-[3.5vw] font-medium md:opacity-0 md:group-hover:opacity-70 md:transition-opacity md:duration-300 ">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;