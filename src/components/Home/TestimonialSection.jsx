import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import couple3 from "../../assets/images/testimonialImage.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dipak Hilal Patil",
      email: "dipakpatil7@gmail.com",
      text: "At Shadi Muharat, we take pride in helping couples create the wedding of their dreams. But don’t just take our word for it — hear what our happy couples have to say! We believe in making every celebration unique, and it’s our joy to be part of such a special moment in your lives.",
      rating: 5,
      image: couple3,
    },
    {
      id: 2,
      name: "Sneha Sharma",
      email: "sneha.sharma@gmail.com",
      text: "At Shadi Muharat, we take pride in helping couples create the wedding of their dreams. But don’t just take our word for it — hear what our happy couples have to say! We believe in making every celebration unique, and it’s our joy to be part of such a special moment in your lives.",
      rating: 5,
      image: couple3,
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@gmail.com",
      text: "At Shadi Muharat, we take pride in helping couples create the wedding of their dreams. But don’t just take our word for it — hear what our happy couples have to say! We believe in making every celebration unique, and it’s our joy to be part of such a special moment in your lives.",
      rating: 4,
      image: couple3,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const startSlider = () => {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    };

    startSlider();

    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <div className="relative bg-[#fff5f5]">
      {/* Mobile View (up to 767px) */}
      <div className="md:hidden block py-12 px-4 text-center">
        <h2 className="text-black text-4xl font-medium mb-4 capitalize" style={{ fontFamily: "Raleway" }}>
          What They Say About Us
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="flex text-xl gap-1 mb-2 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={index < testimonials[currentTestimonial].rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-black text-base leading-loose mb-6" style={{ fontFamily: "Raleway" }}>
            {testimonials[currentTestimonial].text}
          </p>
          <div className="flex flex-col items-center mb-4">
            <span className="font-semibold text-gray-800 text-2xl" style={{ fontFamily: "Raleway" }}>
              {testimonials[currentTestimonial].name},
            </span>
            <span className="text-sm text-gray-500">{testimonials[currentTestimonial].email}</span>
          </div>
          <img
            src={testimonials[currentTestimonial].image}
            alt="testimonial"
            className="rounded-lg w-full max-w-xs"
          />
        </div>
      </div>

      {/* Tablet View (768px to 1023px) */}
      <div className="hidden md:block lg:hidden py-12 px-4 text-center">
        <h2 className="text-black text-4xl font-medium mb-4 capitalize" style={{ fontFamily: "Raleway" }}>
          What They Say About Us
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="flex text-xl gap-1 mb-2 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={index < testimonials[currentTestimonial].rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-black text-base leading-loose mb-6" style={{ fontFamily: "Raleway" }}>
            {testimonials[currentTestimonial].text}
          </p>
          <div className="flex flex-col items-center mb-4">
            <span className="font-semibold text-gray-800 text-2xl" style={{ fontFamily: "Raleway" }}>
              {testimonials[currentTestimonial].name},
            </span>
            <span className="text-sm text-gray-500">{testimonials[currentTestimonial].email}</span>
          </div>
          <img
            src={testimonials[currentTestimonial].image}
            alt="testimonial"
            className="rounded-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Large View (1024px to 1439px) */}
      <div
        className="hidden lg:block xl:hidden py-12 px-6 text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-black text-5xl font-medium mb-6 capitalize" style={{ fontFamily: "Raleway" }}>
          What They Say About Us
        </h2>
        <p className="text-black/70 text-[2vw] font-medium mb-8">
          Trusted by thousands, loved by many.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map(({ id, name, email, text, rating, image }) => (
                <div key={id} className="min-w-full relative">
                  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-left">
                      <div className="flex text-lg gap-1 mb-4 text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FaStar
                            key={index}
                            className={index < rating ? "text-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p
                        className="text-black text-lg font-medium leading-loose"
                        style={{ fontFamily: "Raleway" }}
                      >
                        {text}
                      </p>
                    </div>
                    <img
                      src={image}
                      alt="testimonial"
                      className="rounded-lg w-1/3 max-w-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start mt-6">
          <button
            onClick={handlePrev}
            className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-black" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white shadow-md p-3 rounded-full hover:bg-pink-100 transition ml-4"
          >
            <FaArrowRight className="text-pink-600" />
          </button>
        </div>

        <div className="mt-6">
          <div className="flex flex-col items-center text-center transition-opacity duration-500 ease-in-out" key={currentTestimonial}>
            <span className="font-semibold text-gray-800 text-2xl" style={{ fontFamily: "Raleway" }}>
              {testimonials[currentTestimonial].name},
            </span>
            <span className="text-sm text-gray-500">{testimonials[currentTestimonial].email}</span>
          </div>
        </div>
      </div>

      {/* Desktop View (1440px and above) */}
      <div
        className="hidden xl:block py-12 px-4 md:px-35 text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2
          className="text-black text-[4vw] font-medium mb-[1vw] capitalize"
          style={{ fontFamily: "Raleway" }}
        >
          What They Say About Us
        </h2>
        <p className="text-black/70 text-[1vw] font-medium mb-10">
          Trusted by thousands, loved by many.
        </p>

        <div className="relative">
          <div className="overflow-hidden h-[30vw]">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map(({ id, name, email, text, rating, image }) => (
                <div key={id} className="min-w-full relative">
                  <div className="bg-white rounded-xl shadow-md px-[3vw] py-[3vw] flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-left">
                      <div className="flex text-[1.2vw] gap-1 mt-[2.5vw] text-yellow-500">
                        {Array.from({ length: 5 }, (_, index) => (
                          <FaStar
                            key={index}
                            className={index < rating ? "text-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p
                        className="self-stretch mt-[1vw] justify-start text-black text-xl font-medium w-[50.948vw] capitalize leading-loose"
                        style={{ fontFamily: "Raleway" }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[10px] top-[20vw] -translate-y-1/2 hidden md:block z-10">
                    <img
                      src={image}
                      alt="testimonial"
                      className="rounded-lg h-[20vw] w-[20vw]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start">
          <div className="mt-[-1vw] relative" style={{ left: "0px" }}>
            <button
              onClick={handlePrev}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-black" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#ED1C24] shadow-md p-2 rounded-full hover:bg-pink-100 transition ml-4"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        <div className="mt-[-3vw] relative" style={{ left: "5vw" }}>
          <div className="flex flex-col items-center text-center transition-opacity duration-500 ease-in-out" key={currentTestimonial}>
            <span className="font-semibold text-gray-800 text-3xl" style={{ fontFamily: "Raleway" }}>
              {testimonials[currentTestimonial].name},
            </span>
            <span className="text-sm ml-[5vw] text-gray-500">{testimonials[currentTestimonial].email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;