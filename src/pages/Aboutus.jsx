import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Background from "../assets/images/Background.svg";
import Engagement from "../assets/images/Engagement.svg";
import Cylinder from "../assets/images/cylinder couple.svg";
import Icon from "../assets/images/Icon.svg";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import couple3 from "../assets/images/Couple3.svg";

import User from "../assets/images/Usercontainer.svg";
import men from "../assets/images/mens.svg";
import women from "../assets/images/womens.svg";
import Pair from "../assets/images/Pair.svg";
import Goyal from "../assets/images/Goyal.svg";
import Jain from "../assets/images/jain.svg";
import Kailash from "../assets/images/Kailash.svg";
import Navjot from "../assets/images/Navjot.svg";
import Male from "../assets/images/Male.svg";
import Coup from "../assets/images/Coup.svg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

// import Pair from "../assets/images/Pair.svg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[11vw] md:text-[120px]  font-light" 
            style={{ fontFamily: "Rosarivo" }}
          >
            About us
          </h1>
          <p className="text-[3vw] md:text-[20px] mt-[1vw] font-light leading-snug">
          Most Trusted and premium Matrimony Service in the World.

          </p>
        </div>
      </div>

      {/* Background Section */}
      <div className="relative flex flex-col items-center min-h-screen p-4 md:p-6">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />

        {/* Features Section */}
        <div
          className="bg-[#FFF6F4] flex justify-center gap-[6vw] md:gap-[4vw] lg:gap-[2vw] my-[10vw] md:my-[6vw] lg:my-[4vw]"
          style={{ fontFamily: "Ramaraja" }}
        >
          <div className="grid grid-cols-1 gap-[10vw] md:gap-[6vw] lg:gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="flex justify-center">
              <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
                <img
                  src={Icon}
                  alt="Genuine Profiles"
                  className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24] mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
                />
                <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
                  Genuine Profiles
                </h3>
                <p
                  className="text-black text-[5.1vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
                  style={{ fontFamily: "Raleway" }}
                >
                  Contact Genuine Profiles With 100% Verified Mobile
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center">
              <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
                <img
                  src={Icon}
                  alt="Most Trusted"
                  className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24] mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
                />
                <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
                  Most Trusted
                </h3>
                <p
                  className="text-black text-[5.5vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
                  style={{ fontFamily: "Raleway" }}
                >
                  The Most Trusted Wedding Matrimony Brand Lorem
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex justify-center">
              <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
                <img
                  src={Icon}
                  alt="2000+ Weddings"
                  className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24] mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
                />
                <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
                  2000+ Weddings
                </h3>
                <p
                  className="text-black text-[5vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
                  style={{ fontFamily: "Raleway" }}
                >
                  Lakhs Of Peoples Have Found Their Life Partner
                </p>
              </div>
            </div>
          </div>
        </div>

        
    <div className="relative  w-full p-6 md:p-10 lg:p-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Floating Message Top Right */}
      <div className="absolute top-30 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-xl shadow-lg text-sm max-w-[320px] flex items-center gap-2 z-10">
        <span>
          Dear Bride-to-be! Excited for your day! Let’s celebrate love!
        
        <FaHeart color="red" />
        </span>
      </div>

      {/* Floating Message Bottom Left */}
      
      <div className="absolute bottom-30 right-95 bg-gradient-to-r from-pink-600 to-red-500 text-white p-3 rounded-xl shadow-lg text-[1.2vw] max-w-[300px] flex items-center gap-2 z-10">
  <span>
  Hey, my friend! Excited to celebrate your big day and make unforgettable memories!
  </span>
</div>

      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-4 max-w-xl z-0">
        
        <h1
  className="text-[3.594vw] font-medium text-black"
  style={{ fontFamily: "Raleway" }}
>
  Welcome To
  <br />
  <span
    className="text-[3.594vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent block"
  >
    Shadimuhurath
  </span>
</h1>
        <p className="text-[#4D4947]">
          Join ShadiMuhurath today and take the first step toward a beautiful life ahead. With easy-to-use features, advanced search options, and a dedicated support team, we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime of love and happiness.
        </p>
        <p className=" text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent 
  font-normal cursor-pointer"
   style={{fontFamily:"Ramaraja"}}>
          Click Here To<span className="text-[#4D4947] text-[1.146vw] font-medium"> Start Your Matrimony Service Now.</span>
        </p>
        <p className="text-[#4D4947]">
          At ShadiMuhurath, we believe that every love story is unique, and so is every match. Our platform is designed to connect you with your perfect life partner, combining tradition with the convenience of modern technology.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-2 text-pink-600 font-medium">
            
            <FaPhoneSquareAlt  className="text-2xl mt-1" size={40}/>
            <div className="flex flex-col">
      <span className="text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent ">Enquiry</span>
      <span className="text-sm mt-0.5 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent ">+91 966‑544‑3999</span>
    </div>
          </div>
          <div className="flex items-center gap-2 text-red-500 font-medium">
            <FaEnvelope  size={40}/> 
            <div className="flex flex-col">
      <span className="text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent ">Get Support</span>
      <span className="text-sm text-black ">Shadimuhurath@Gmail.Com</span>
    </div>

          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-8 lg:mt-0 z-0">
        <div className="w-[90%] max-w-md rounded-full overflow-hidden border-4 border-pink-200 shadow-xl">
          <img
            src={Cylinder} // Replace with your actual image path
            alt="Bride and Groom"
            className="object-cover w-full h-full"
          />
         
        </div>
      </div>
    </div>
    
  

        {/* Image Grid */}
      
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-5 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
          <img
            src={User}
            alt="Registered Users"
            className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1"
          />
          <div
            className="text-[5vw] sm:text-[3.2vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
            style={{ fontFamily: "Raleway" }}
          >
            4677
            <span
              className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight"
              style={{ fontFamily: "Raleway" }}
            >
              +
            </span>
          </div>
          <div
            className="text-[3vw] sm:text-[1.2vw] text-black font-medium mt-1"
            style={{ fontFamily: "Raleway" }}
          >
            Registered Users
          </div>
          </div>
          <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-5 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
            <img
              src={Male}
              alt="Mens"
              className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1"
            />
            <div
              className="text-[5vw] sm:text-[3.5vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
              style={{ fontFamily: "Raleway" }}
            >
              2935
              <span
                className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight"
                style={{ fontFamily: "Raleway" }}
              >
                +
              </span>
            </div>
            <div
              className="text-[3.5vw] sm:text-[1vw] text-black font-medium mt-1"
              style={{ fontFamily: "Raleway" }}
            >
              Mens
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-6 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
                    <img
                      src={Pair}
                      alt="Womens"
                      className="w-[6vw] sm:w-[3.3vw] h-[6vw] sm:h-[3.3vw] mb-1"
                    />
                    <div
                      className="text-[5vw] sm:text-[3.5vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
                      style={{ fontFamily: "Raleway" }}
                    >
                      1742<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
                    </div>
                    <div
                      className="text-[3.5vw] sm:text-[1vw] text-black font-medium mt-1"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Womens
                    </div>
                  </div>
          <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl px-7 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
                    <img
                      src={Coup}
                      alt="Couples Paired"
                      className="w-[6vw] sm:w-[3.3vw] h-[6vw] sm:h-[3.3vw] mb-1"
                    />
                    <div
                      className="text-[5vw] sm:text-[3.833vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
                      style={{ fontFamily: "Raleway" }}
                    >
                      547<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
                    </div>
                    <div
                      className="text-[3vw] sm:text-[1.2vw] text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Couples Paired
                    </div>
                  </div>
          
          </div>
          <div className=" py-12 px-4 md:px-16 text-center relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
        What They Say About Us
      </h2>
      <p className="text-gray-500 text-sm mb-10">Trusted by thousands, loved by many.</p>

      {/* Arrows */}
     

      {/* Testimonial Card */}
      <div className=" relative bg-white rounded-xl shadow-md p-6 md:p-16 flex flex-col md:flex-row items-center gap-6 max-w-full mx-auto">
        {/* Text Content */}
        {/* <div className="relative bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 w-[85%] mx-auto"></div> */}
        <div className="flex-1 text-left">
          <div className="flex gap-1 text-yellow-500 mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-gray-700 text-sm  text-left leading-relaxed">
            At Shadi Muhurat, we take pride in helping couples create the wedding of their dreams.
            But don’t just take our word for it — hear what our happy couples have to say! We
            believe in making every celebration unique, and it’s our joy to be part of such a
            special moment in your lives.
          </p>
        </div>

        {/* Image */}
        <div className=" absolute -right-6  top-1/2 -translate-y-1/2 w-[220px] hidden md:block">
          <img
            src={couple3}
            alt="testimonial"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="mt-6 flex items-start justify-start gap-4">
        <button className="bg-white p-2 rounded-full  s">
          <FaArrowLeft className="text-black" />
        </button>
        <button className="bg-white shadow-md p-2 rounded-full hover:bg-pink-100 transition">
          <FaArrowRight className="text-pink-600" />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col items-center gap-1">
        <span className="font-semibold text-gray-800">Dipak Hilal Patil</span>
        <span className="text-sm text-gray-500">dipakpatil7@gmail.com</span>
      </div>
    </div>
  


        

        {/* Our Team */}
        {/* <section className="bg-transparent py-6 md:py-12 px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-3xl font-Raleway text-gray-800">
            Our Team
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
            Personalized matchmaking services designed to connect you with your
            ideal life partner.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8 max-w-5xl mx-auto">
            <img
              src={Jain}
              alt="Goyal"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src={Kailash}
              alt="Jain"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src={Goyal}
              alt="Kailash"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src={Navjot}
              alt="Navjot"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section> */}
        <section className="bg-[#FFF4EE] py-6 md:py-1 px-4 md:px-6 text-center">
  <h2 className="text-xl md:text-[3.8vw] font-medium font-Raleway text-gray-800">Our Team</h2>
  <p className="text-gray-600 text-sm md:text-[0.6vw] max-w-2xl mx-auto mt-2 hidden sm:block">
    Personalized matchmaking services designed to connect you with your ideal life partner, based on compatibility, values, and aspirations.
  </p>

  <div className="relative max-w-6xl mx-auto px-2 sm:px-0 mt-6 overflow-visible">
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      }}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <div className="rounded-lg overflow-hidden shadow">
          <img src={Kailash} alt="Team Member 1" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="rounded-lg overflow-hidden shadow">
          <img src={Jain} alt="Team Member 2" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="rounded-lg overflow-hidden shadow">
          <img src={Goyal} alt="Team Member 3" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="rounded-lg overflow-hidden shadow">
          <img src={ Navjot} alt="Team Member 4" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Arrows */}
    <button className="prev-arrow absolute -left-12  top-1/2 -translate-y-1/2 bg-[#FCE2C5] rounded-full p-3 shadow cursor-pointer z-60 ">
      <IoChevronBack className="text-[#C1645C]" />
    </button>
    <button className="next-arrow absolute -right-12 top-1/2 -translate-y-1/2 bg-[#FCE2C5] rounded-full p-3 shadow cursor-pointer z-60 ">
      <IoChevronForward className="text-[#C1645C]" />
    </button>
    
      </div>
      </section>
</div>
      <Footer />
    </div>
  );
};

export default AboutUs;
