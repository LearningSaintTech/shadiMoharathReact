import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Couple3 from "../../assets/images/Couple3.svg";
import couple22 from "../../assets/images/Couple22.svg";
import couple23 from "../../assets/images/Couple23.svg";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "At Shadi Muharath, we take pride in helping couples create the wedding of their dreams. But don’t just take our word for it – hear what our happy couples have to say! We believe in making every celebration unique, and it's our joy to be part of such a special moment in your lives.",
      name: "Dipak Hilal Patil",
      email: "dipakpatil2@gmail.com",
      image: Couple3,
    },
    {
      text: "The team at Shadi Muharath made our wedding day unforgettable with their personalized service. Highly recommend them for anyone looking for a dream wedding!",
      name: "Priya Sharma",
      email: "priyasharma@gmail.com",
      image: couple22,
    },
    {
      text: "Amazing experience! Shadi Muharath turned our vision into reality with such creativity and care. Thank you for the beautiful memories!",
      name: "Rohan Mehta",
      email: "rohanmehta@gmail.com",
      image: couple23,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-10 py-20 bg-[#FFF4F2]">
      <div className="text-center w-full max-w-7xl">
        <h1
          className="text-4xl sm:text-[3vw] font-medium text-black mb-2"
          style={{ fontFamily: "Raleway" }}
        >
          What They Say About Us
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-10">
          Trusted by thousands, loved by many.
        </p>

        <div className="relative py-5 mx-[8.802vw]  w-full flex justify-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
             autoplay={{ delay: 5000, disableOnInteraction: false }}
            
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className=" relative flex flex-col items-center">
                  {/* Card */}
                  <div className="bg-white p-6 sm:p-10   rounded-2xl shadow-lg flex flex-col sm:flex-row items-start gap-6 text-left relative overflow-visible w-full">
                    {/* Text */}
                    <div className="flex-1 w-full z-10">
                      <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                      <p className="text-gray-700 text-sm sm:text-xl  leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="hidden sm:block absolute right-[2.5rem] top-10/12 transform -translate-y-1/2 w-48 h-auto rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={testimonial.image}
                        alt="Couple"
                        className="w-[391px] h-auto object-cover"
                      />
                    </div>
                  </div>


                 
                  {/* Arrows */}
          <div className="flex  w-[40vw] justify-end">
          <div className="absolute -bottom-0 left-1/8 transform -translate-x-1/2 flex gap-3 z-10">
          {/* <div className="w-10 h-10 bg-red-500 border-4 border-red-500 rounded-full flex items-center justify-center"> */}
            {/* <IoArrowForwardCircleOutline className="text-white bg-red-500 p-0 rounded-full text-3xl" /> */}
            <span className="text-3xl cursor-pointer bg-white rounded-full text-black p-2 custom-swiper-button-next">

            <IoIosArrowRoundBack/>
            </span>
            {/* </div> */}
            <span className="text-3xl cursor-pointer bg-[#ED1C24] rounded-full text-white p-2 custom-swiper-button-next">

              <IoIosArrowRoundForward />
            </span>
          </div>
          <div className="mt-6 text-left ">
                    <p className="font-semibold text-[1.719vw] ">{testimonial.name},</p>
                    <p className="text-[0.833vw] text-gray-500 pl-19" >{testimonial.email}</p>
                  </div>
          </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
