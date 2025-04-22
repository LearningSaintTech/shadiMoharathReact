import React from "react";
import { Link } from "react-router-dom";
import couple22 from "../../assets/images/Couple22.svg";
import couple23 from "../../assets/images/Couple23.svg";
import couple24 from "../../assets/images/Couple24.svg";
import couple25 from "../../assets/images/Couple25.svg";
import couple26 from "../../assets/images/Couple26.svg";
import couple27 from "../../assets/images/Couple27.svg";
import couple28 from "../../assets/images/Couple28.svg";
import couple29 from "../../assets/images/Couple29.svg";
import { IoIosArrowForward } from "react-icons/io";

const Anjali = () => {
  return (
    <div className="px-4 lg:mx-16 md:mx-5"> {/* Base padding for all screens, larger margin on lg screens */}
      {/* Header Section */}
      <div className="text-center mb-6">
        <p className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[1.5vw] hidden sm:block md:text-[3vw] lg:text-[0.8vw] font-medium mb-0 md:mb-[0.5vw] lg:mb-[0.3vw]">
          Share Your Love With
        </p>
        <h2 className="text-[7vw] lg:text-[3vw] font-medium text-gray-900" style={{ fontFamily: "Raleway" }}>
          Our Gallery
        </h2>
      </div>

      {/* Mobile Layout - 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        <div className="rounded-lg overflow-hidden aspect-square">
          <img src={couple22} alt="Wedding photo 1" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden aspect-square">
          <img src={couple23} alt="Wedding photo 2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden aspect-square">
          <img src={couple27} alt="Wedding photo 3" className="w-full h-full object-cover" />
        </div>
        <Link
          to="/gallery"
          className="rounded-lg bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] flex items-center justify-center aspect-square"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-white text-sm">See All</p>
            <IoIosArrowForward color="white" />
          </div>
        </Link>
      </div>

      {/* Desktop Layout - 3 Column */}
      <div className="hidden sm:flex justify-between gap-4">
        {/* Left Grid */}
        <div className="grid grid-cols-2 gap-4 w-1/3">
          <div className="rounded-2xl overflow-hidden">
            <img src={couple22} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={couple23} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={couple27} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={couple28} alt="Wedding" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Center Image */}
        <div className="w-1/3 rounded-lg overflow-hidden">
          <img src={couple29} alt="Featured wedding" className="w-full h-full object-cover" />
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-4 w-1/3">
          <div className="rounded-lg overflow-hidden">
            <img src={couple25} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <Link
            to="/gallery"
            className="rounded-2xl bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] flex items-center justify-center"
          >
            <div className="flex items-center justify-center gap-2">
              <p className="text-white text-sm">See All</p>
              <IoIosArrowForward color="white" />
            </div>
          </Link>
          <div className="rounded-lg overflow-hidden">
            <img src={couple26} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={couple24} alt="Wedding" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anjali;
