import React from "react";
import Cylinder from "../../assets/images/cylinder couple.svg";
import { FaHeart } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className="relative w-full p-6 md:p-10 lg:p-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Floating Message Top Right */}
      <div className="absolute top-30 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-xl shadow-lg text-sm max-w-[320px] flex items-center gap-2 z-10">
        <span>
          Dear Bride-to-be! Excited for your day! Let’s celebrate love! <FaHeart color="red" />
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
        <h1 className="text-[3.594vw] font-medium text-black" style={{ fontFamily: "Raleway" }}>
          Welcome To
          <br />
          <span className="text-[3.594vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent block">
            Shadimuhurath
          </span>
        </h1>
        <p className="text-[#4D4947]">
          Join ShadiMuhurath today and take the first step toward a beautiful life ahead. With easy-to-use features, advanced search options, and a dedicated support team, we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime of love and happiness.
        </p>
        <p className="text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent font-normal cursor-pointer" style={{ fontFamily: "Ramaraja" }}>
          Click Here To<span className="text-[#4D4947] text-[1.146vw] font-medium"> Start Your Matrimony Service Now.</span>
        </p>
        <p className="text-[#4D4947]">
          At ShadiMuhurath, we believe that every love story is unique, and so is every match. Our platform is designed to connect you with your perfect life partner, combining tradition with the convenience of modern technology.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-2 text-pink-600 font-medium">
            <FaPhoneSquareAlt className="text-2xl mt-1" size={40} />
            <div className="flex flex-col">
              <span className="text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">Enquiry</span>
              <span className="text-sm mt-0.5 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">+91&nbsp;966‑544‑3999</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-red-500 font-medium">
            <FaEnvelope size={40} />
            <div className="flex flex-col">
              <span className="text-[1.667vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">Get Support</span>
              <span className="text-sm text-black">Shadimuhurath@Gmail.Com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-8 lg:mt-0 z-0">
        <div className="w-[90%] max-w-md rounded-full overflow-hidden border-4 border-pink-200 shadow-xl">
          <img src={Cylinder} alt="Bride and Groom" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;