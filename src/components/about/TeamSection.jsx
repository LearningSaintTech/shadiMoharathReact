import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Kailash from "../../assets/images/Kailash.svg";
import Jain from "../../assets/images/jain.svg";
import Goyal from "../../assets/images/Goyal.svg";
import Navjot from "../../assets/images/Navjot.svg";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const TEAM_MEMBERS = [
  { name: "Shalini Jain", location: "Varanasi", image: Jain },
  { name: "Kailash Chaurasia", location: "Varanasi", image: Kailash },
  { name: "Bhavna Goyal", location: "Varanasi", image: Goyal },
  { name: "Navjot Kaur", location: "Varanasi", image: Navjot },
  { name: "Shalini Jain", location: "Varanasi", image: Jain },
  { name: "Kailash Chaurasia", location: "Varanasi", image: Kailash },
  { name: "Bhavna Goyal", location: "Varanasi", image: Goyal },
  { name: "Navjot Kaur", location: "Varanasi", image: Navjot },
];

const TeamSection = () => {
  return (
    <section className="bg-[#FFF4EE] py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 text-center">
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5vw] font-medium text-gray-800 mb-2"
          style={{ fontFamily: "Raleway" }}
        >
          Our Team
        </h2>
        <p className="text-black/70 text-sm sm:text-base md:text-lg font-normal font-['Poppins'] leading-normal w-full sm:w-[80%] md:w-[60%] lg:w-[38vw] text-[0.8vw] min-[320px]:text-[2.5vw] sm:text-[1.5vw] md:text-[1vw]">
          Personalized matchmaking services designed to connect you with your ideal life partner, based on compatibility, values, and aspirations.
        </p>
      </div>
      <div className="relative w-full max-w-[85vw] mx-auto mt-6 sm:mt-8 overflow-visible">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          spaceBetween={10}
          slidesPerView={1.2}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev-arrow absolute -left-4 sm:-left-6 md:-left-10 lg:-left-20 top-1/2 -translate-y-1/2 bg-[#FCE2C5] rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg cursor-pointer z-60 hover:bg-gray-100 transition">
          <IoChevronBack className="text-[#C1645C] text-lg sm:text-xl md:text-2xl" />
        </button>
        <button className="next-arrow absolute -right-4 sm:-right-6 md:-right-10 lg:-right-20 top-1/2 -translate-y-1/2 bg-[#FCE2C5] rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg cursor-pointer z-60 hover:bg-gray-100 transition">
          <IoChevronForward className="text-[#C1645C] text-lg sm:text-xl md:text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;