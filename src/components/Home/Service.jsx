import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Patel from "../../assets/images/Patel.svg";
import Nadani from "../../assets/images/Nadani.svg";
import Chaudhary from "../../assets/images/Chaudhary.svg";
import Mouse from "../../assets/images/Mouse.svg";
import JAINN from "../../assets/images/JAINN.svg";
import Goyola from "../../assets/images/Goyola.svg";
import Lucknow from "../../assets/images/Lucknow.svg";
import Bhopal from "../../assets/images/Bhopal.svg";

// Couples Data
const couples = [
  { name: "Vishwas Patel", city: "Delhi", img: Patel },
  { name: "Nandan Raikwar", city: "Varanasi", img: Nadani },
  { name: "Rahul Choudhary", city: "Mumbai", img: Chaudhary },
  { name: "Hillery Moses", city: "Hyderabad", img: Mouse },
  { name: "Shalini Jain", city: "Kolkata", img: JAINN },
  { name: "Mohd Hadi", city: "Lucknow", img: Lucknow },
  { name: "Ramesh Gupta", city: "Bhopal", img: Bhopal },
  { name: "Bhavna Goyal", city: "Surat", img: Goyola },
];

const TrustedCouples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const totalSlides = couples.length;
  const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

  // Calculate slides to show based on breakpoints
  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 3; // Tablets
    return 1; // Phones
  };

  // Update slidesPerView on mount and resize
  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(getSlidesPerView());
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to the first slide
        }
        return prev + 1;
      });
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [isAutoPlay, maxIndex]);

  // Handle user interaction (pause auto-play)
  const handleUserInteraction = () => {
    setIsAutoPlay(false);
    // Optionally resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    handleUserInteraction();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    handleUserInteraction();
  };

  return (
    <div className="relative my-[4vw] mx-[2vw] rounded-lg overflow-visible">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] px-[3vw] mb-8">
        <div className="flex flex-col sm:justify-start sm:items-start justify-center items-center bg-white px-[4vw] py-[3vw] rounded-3xl border border-[#ED1C2426]">
          <h2
            className=" text-[9vw]sm:text-[7vw] leading-tight font-medium text-black"
            style={{ fontFamily: "Raleway" }}
          >
            Trusted By{" "}
            <span
              className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent font-medium inline-flex flex-col"
              style={{ fontFamily: "Playfair Display" }}
            >
              <span className=" text-[6vw] sm:text-[5.5vw]">
                8<span className="text-[3vw] leading-none">+</span>
              </span>
            </span>{" "}
          </h2>
          <span
            className=" text-[3vw] sm:text-[4vw] leading-none font-medium"
            style={{ fontFamily: "Raleway" }}
          >
            Couples
          </span>
          <p className=" sm:text-[0.9vw] sm:items-start items-center sm:text-start text-center text-[2.8vw] sm:w-[30vw] w-[60vw] text-gray-500 mt-[1vw]">
            Our platform helps partners build meaningful connections and lasting
            relationships.
          </p>
          <button className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] px-[1.6vw]  hidden sm:block rounded-[2vw] py-[0.6vw] text-white hover:bg-pink-700 mt-[4vw]">
            Register Now
          </button>
        </div>

        {/* Featured Couple */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={Patel}
            alt="Vishwas Patel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl text-white">
            <h3 className="text-[20px] md:text-[1.5vw] font-medium">
              Vishwas Patel
            </h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center bg-black px-4 py-2 md:px-3 md:py-1 rounded-full text-white text-sm md:text-[1vw]">
                Delhi
                <span className="w-3 h-3 md:w-[0.6vw] md:h-[0.6vw] bg-[#ED1C24] rounded-full ml-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Carousel */}
      <div className="relative overflow-x-hidden">
        <div className="mt-6 relative">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {couples.map((couple, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{
                  width: `${100 / slidesPerView}%`,
                }}
              >
                <div className="px-[1vw]">
                  <div className="relative rounded-[1vw] border-[0.1vw] border-[#ED1C2426] overflow-hidden">
                    <img
                      src={couple.img}
                      alt={couple.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <h3 className="text-[16px] md:text-[1.2vw] font-medium">
                        {couple.name}
                      </h3>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center bg-black px-4 py-2 md:px-3 md:py-1 rounded-full text-white text-sm md:text-[1vw]">
                          {couple.city}
                          <span className="w-3 h-3 md:w-[0.6vw] md:h-[0.6vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full ml-2"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {slidesPerView < totalSlides && (
          <>
            <div className="absolute top-1/2 left-[0vw] transform -translate-y-1/2 z-20">
              <button
                className="bg-[#FCE2C5] text-[#C1645C] p-[0.4vw] rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
              >
                <IoIosArrowBack className="text-[#C1645C] sm:size-[1.5vw] size-[6vw]" />
              </button>
            </div>
            <div className="absolute top-1/2 right-[0vw] transform -translate-y-1/2 z-20">
              <button
                className="bg-[#FCE2C5] text-[#C1645C] rounded-full p-[0.4vw] flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
              >
                <IoIosArrowForward className="text-[#C1645C] sm:size-[1.5vw] size-[6vw]" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrustedCouples;