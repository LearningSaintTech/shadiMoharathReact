import React from "react";
import rectangleBg from "../../assets/images/Rectanglebg.svg";
import peopleBanner from "../../assets/images/peoplebanner.svg";

const PerfectMatch = () => {
  return (
    <section className="relative  lg:mx-[5.5vw] mx-[0vw] lg:my-[7.5vw] my-[0vw] lg:px-0 px-[2vw] overflow-hidden  rounded-3xl  flex justify-center items-center ">
      {/* Background Rectangle */}
      <img
        src={rectangleBg}
        alt="Background"
        className="absolute  w-full h-full object-cover "
      />

      {/* Content on top of background */}
      <div className="relative z-10 text-center text-[#4F1617] ">
        <h2 
        className="lg:text-[3.8vw] text-[7vw] lg:mb-[0.5vw] lg:mt-[3vw] mt-[8vw] mb-[4vw] leading-tight" 
         style={{ fontFamily: "Rosarivo" }}>
          Find your perfect Match now
        </h2>
        <p className="lg:text-[1vw] text-[3vw]  lg:mb-[3vw] mb-[13vw] text-[#4F1617] opacity-60  lg:w-[45vw] w-[75vw]  font-normal leading-snug"
        >
          lacinia viverra lacus. Fusce imperdiet ullamcorper metus eu fringilla.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex lg:flex-row flex-col justify-center mb-[8vw] gap-[1.2vw]">
          <button className="bg-[#4F1617] text-white px-[2.3vw] py-[0.6vw] rounded-full lg:text-[0.9vw] text-[5vw] font-normal hover:bg-[#3e1313] transition">
            Register Now
          </button>
          <button className="border border-[#4F1617] text-[#4F1617] px-[2.3vw] py-[0.6vw] rounded-full lg:text-[0.9vw] text-[5vw] font-medium hover:bg-[#561C1C] hover:text-white transition">
            Help & Support
          </button>
        </div>
      </div>

      {/* Bottom People Image */}
      <img
        src={peopleBanner}
        alt="People Illustration"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </section>
  );
};

export default PerfectMatch;
