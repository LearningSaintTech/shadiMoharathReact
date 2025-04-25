import React from "react";
import bgVideo from "../../assets/images/video.mp4";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="relative w-full   h-[159vw] md:h-[45.156vw] sm:h-[55vw] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-white text-center pt-[420px] pb-[134px] sm:pt-0 sm:pb-0">
        {/* Heading */}
        <h1
          className="  text-[9vw] sm:text-[14.25vw] md:text-[7.25vw] font-normal leading-none"
          style={{
            fontFamily: "Rosarivo, serif",
          }}
        >
          Shadi Muharath
        </h1>

        {/* Subheading */}
        <p className=" text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1vw]  font-extralight  ">
          Experience the joy of life and create happiness together with Shadi
          Muhurat
        </p>

        {/* Search form */}
        <form className="mt-6  flex flex-col  sm:flex-row  items-center gap-4">
          <input
            type="text"
            placeholder="Search here..."
            className=" hidden sm:block pr-[9vw] pl-[1vw] py-[0.5vw] rounded-full text-gray-400 bg-white outline-none text-sm sm:text-base placeholder-transparent sm:placeholder-gray-400"
          />
          <Link to="/Authentication">
          <button
            type="submit"
            className="  px-[35vw]   py-[2.5vw] sm:px-[2.5vw] sm:py-[0.5vw]   bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white rounded-full text-center text-sm sm:text-base transition "
          >
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
