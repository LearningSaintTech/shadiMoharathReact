import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Patel from "../../assets/images/Patel.svg";
import Nadani from "../../assets/images/Nadani.svg";
import Chaudhary from "../../assets/images/Chaudhary.svg";
import Mouse from "../../assets/images/Mouse.svg";
import JAINN from "../../assets/images/JAINN.svg";
import Goyola from "../../assets/images/Goyola.svg";
import Lucknow from "../../assets/images/Lucknow.svg";
import Bhopal from "../../assets/images/Bhopal.svg";
import Guptaji from "../../assets/images/Guptaji.svg";

// Couples Data
const couples = [
  { name: "Ramesh Gupta", city: "Delhi", img: Guptaji },
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
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const totalSlides = couples.length;
  const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

  // Create cloned slides for infinite looping
  const clonedCouples = [
    ...couples.slice(-slidesPerView), // Prepend last slides
    ...couples, // Original slides
    ...couples.slice(0, slidesPerView), // Append first slides
  ];

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
      setCurrentIndex(0); // Reset to start on resize
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = totalSlides - 1;

  // Auto-play logic with infinite loop
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          // When reaching the last original slide
          setTimeout(() => {
            setIsTransitioning(false); // Disable transition for instant reset
            setCurrentIndex(0); // Reset to first original slide
            setTimeout(() => setIsTransitioning(true), 0); // Re-enable transition
          }, 300); // Match transition duration
          return prev + 1; // Move to first cloned slide
        }
        return prev + 1;
      });
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex]);

  // Handle user interaction (pause auto-play)
  const handleUserInteraction = () => {
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000); // Resume after 5 seconds
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(maxIndex);
          setTimeout(() => setIsTransitioning(true), 0);
        }, 300);
        return prev - 1;
      }
      return prev - 1;
    });
    handleUserInteraction();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 0);
        }, 300);
        return prev + 1;
      }
      return prev + 1;
    });
    handleUserInteraction();
  };

  return (
    <div className="relative my-[4vw] mx-[2vw] rounded-lg overflow-visible">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] px-[3vw] mb-8">
        <div className="flex flex-col sm:justify-start sm:items-start justify-center items-center bg-white px-[4vw] py-[3vw] rounded-3xl border border-[#ED1C2426]">
          <h2
            className="text-2x1 font-medium lg:text-[49px] leading-none  "
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
            className=" text-2x1 font-medium lg:text-[49px] leading-none"
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
            ref={carouselRef}
            className="flex"
            style={{
              transform: `translateX(-${((currentIndex + slidesPerView) * 100) / slidesPerView}%)`,
              transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
            }}
          >
            {clonedCouples.map((couple, idx) => (
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