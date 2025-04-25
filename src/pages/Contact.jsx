import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Engagement from "../assets/images/Engagement.svg";
import Locate from "../assets/images/Locate.svg";
import email from "../assets/images/email.svg";
import chit from "../assets/images/chit.svg";

const ContactSection = () => {
  return (
    <div className="bg-[#FFF4EE] flex flex-col">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full object-cover max-h-[300px] sm:max-h-[400px]"
        />
        <div className="absolute top-1/2 left-[4vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-serif px-7"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Contact Us
          </h1>
          <p className="text-[1vw] mt-[0.8vw] font-poppins leading-snug px-6">
            Now find your life partner easy and fast.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[90vw] mx-auto py-[8vw] grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
        {/* Left Info Column */}
        <div className="space-y-[2vw] px-[2vw]">
          <h2
            className=": text-[4vw] font-medium text-black leading-[4vw]"
            style={{ fontFamily: "Raleway" }}
          >
            Support When You Need It Most
          </h2>
          <p className=" text-[2vw] sm:text-[1.1vw] text-gray-600 max-w-[40vw]">
            Integer sodales auctor nibh, ultricies auctor massa rhoncus sed.
          </p>

          {/* Contact Info Items */}
          <div className="flex items-start space-x-[1vw]">
            {/* Outer White Box */}
            <div className="rounded-[1.46vw] flex items-center justify-center ">
              {/* Inner Pink Box */}
              <div className=" w-[14.5vw] h-[14.5vw] sm:w-[5.5vw] sm:h-[5.5vw] rounded-[1.1vw] flex items-center justify-center">
                <img src={Locate} alt="Locate Us" className=" w-full h-full" />
              </div>
            </div>
            <div className="">
              <h4
                className=" text-[4vw] sm:text-[2vw] font-Raleway font-medium text-black"
                style={{ fontFamily: "Raleway" }}
              >
                Locate Us
              </h4>
              <p className=" text-[3vw] sm:text-[1.3vw] text-gray-600 font-normal font-poppins">
                2922 Michigan Ave, Santa Monica, CA<br/> 90404, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-[1vw]">
            {/* Outer White Box */}
            <div className="rounded-[1.46vw] flex items-center justify-center ">
              {/* Inner Pink Box */}
              <div className=" w-[14.5vw] h-[14.5vw] sm:w-[5.5vw] sm:h-[5.5vw] rounded-[1.1vw] flex items-center justify-center">
                <img
                  src={email}
                  alt="Mail Us Anytime"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="">
              <h4
                className=" text-[4vw] sm:text-[2vw] font-Raleway font-medium text-black"
                style={{ fontFamily: "Raleway" }}
              >
                Mail Us Anytime
              </h4>
              <p className=" text-[3vw] sm:text-[1vw] text-gray-600 font-poppins">
                support@nihul.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-[1vw]">
            {/* Outer White Box */}
            <div className="rounded-[1.46vw] flex items-center justify-center ">
              {/* Inner Pink Box */}
              <div className=" w-[14.5vw] h-[14.5vw] sm:w-[5.5vw] sm:h-[5.5vw] rounded-[1.1vw] flex items-center justify-center">
                <img src={chit} alt="Chat With Us" className="w-full h-full" />
              </div>
            </div>
            <div className="">
              <h4
                className=" text-[4vw] sm:text-[2vw] font-Raleway font-medium text-black"
                style={{ fontFamily: "Raleway" }}
              >
                Chat With Us
              </h4>
              <p className=" text-[3vw] sm:text-[1vw] text-gray-600 font-normal font-poppins">
                Nam mollis tortor a quam aliquet <br/> condimentum pretium.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="  sm:mx-auto bg-white rounded-2xl shadow-xl px-[2.5vw]  py-[6vw] sm:py-[2vw] flex flex-col  w-[94vw] sm:w-[36.458vw]">
          <h3
            className=" text-[7.75vw] sm:text-[4vw] font-medium text-black mb-[1.5vw] text-center"
            style={{ fontFamily: "Raleway" }}
          >
            Say, Hello!
          </h3>
          <form className="space-y-[1.5vw]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-black focus:outline-none focus:border-[#FF6B6B] py-[0.8vw]  text-[3vw] sm:text-[1vw] placeholder-black font-poppins"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-black focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[3vw] sm:text-[1vw] placeholder-black font-poppins"
            />
            <input
              type="text"
              placeholder="Type of Service Required"
              className="w-full border-b border-black focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[3vw] sm:text-[1vw] placeholder-black font-poppins"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-black focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[3vw] sm:text-[1vw] placeholder-black font-poppins"
            />
             {/* <p className="text-black">&nbsp;</p> */}
             
             <input
              type="email"
              placeholder=""
              className="w-full border-b border-black focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[3vw] sm:text-[1vw] placeholder-black font-poppins"
            />

            <div className="flex justify-center mt-[1vw]">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white py-[10px] sm:py-[12px]  px-[22px] sm:px-[24px] rounded-full justify-center hover:bg-red-500 transition mt-[2vw]  text-[3.5vw] sm:text-[1vw] font-poppins"
                
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;
