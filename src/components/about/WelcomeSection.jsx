import React from "react";
import Cylinder from "../../assets/images/cylinder couple.svg";
import { FaHeart, FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import call from "../../assets/images/call.svg";
import mailss from "../../assets/images/mailss.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const WelcomeSection = () => {
  return (
    <>
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:flex lg:flex-row p-10 items-center justify-center relative w-full">
        {/* Floating messages */}
        <div className="z-10 opacity-90 absolute top-40 right-10 w-80 h-28 p-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl shadow-lg flex items-center justify-center text-white text-base font-['Poppins'] text-center">
          Dear Bride-to-be! Excited for your day! Let’s celebrate love! 💖
        </div>
        <div className="absolute bottom-40 left-[40vw] z-10 w-80 h-28 p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl shadow-lg flex items-center justify-center text-white text-base font-['Poppins'] text-center">
          Hey, my friend! Excited to celebrate your big day and make unforgettable memories!
        </div>

        <div className="flex w-full items-center justify-between z-0">
          {/* Left content */}
          <div className="flex-1 text-left px-4 max-w-[45%]">
            <h1 className="text-[3vw] font-medium leading-tight text-black font-raleway">
              <span>Welcome To </span>
              <span className="text-[4vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] capitalize bg-clip-text text-transparent font-rosarivo">
                Shadimuhurath
              </span>
            </h1>

            <p className="text-black/70 text-[1.1vw] mt-4 leading-8">
            Join ShadiMuhurath today and take the first step toward a beautiful life ahead. With easy-to-use features, advanced search options, and a dedicated support team, we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime of love and happiness.        

            </p>

            <p className="text-[1.6vw] font-normal cursor-pointer mt-4 flex items-center">
              <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent font-ramaraja">
                Click Here To
              </span>
              <span className="text-black/70 text-[1.2vw] ml-2">
                Start Your Matrimony Service Now.
              </span>
            </p>

            <p className="text-black/70 text-[1.1vw] mt-4 leading-8">
            At ShadiMuhurath, we believe that every love story is unique, and so is every match. Our platform is designed to connect you with your perfect life partner, combining tradition with the convenience of modern technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3 text-pink-600 font-medium">
                {/* <FaPhoneSquareAlt className="text-[2.5rem] text-[#ED1C24]" /> */}
                <img
                                  src={call}
                                  alt="Get Support"
                                  className="w-10 h-10 object-contain"
                                />
                <div className="flex flex-col">
                  <span className="text-[1.8vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">Enquiry</span>
                  <span className="text-base mt-1 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">+91 966-544-3999</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-red-500 font-medium">
                {/* <FaEnvelope className="text-[2.5rem] text-[#ED1C24]" /> */}
                <img
                                  src={mailss}
                                  alt="Get Support"
                                  className="w-10 h-10 object-contain"
                                />
                <div className="flex flex-col">
                  <span className="text-[1.8vw] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">Get Support</span>
                  <span className="text-base mt-1 text-black">Shadimuhurath@Gmail.Com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
            <div className="w-[90%] max-w-[1000px] p-4 border-[2px] border-red-600/20 rounded-[30vw] shadow-lg">
              <img src={Cylinder} alt="Bride and Groom" className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== TABLET ===================== */}
      <div className="hidden sm:flex md:hidden flex-col items-center text-center p-6">
        <div className="w-[90%] max-w-[500px] mb-6 rounded-[30vw] border-[2px] border-red-600/20 shadow-lg">
          <img src={Cylinder} alt="Bride and Groom" className="w-full h-auto rounded-md" />
        </div>

        <div className="z-10 w-72 h-28 p-4 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-3xl shadow-lg mb-4">
          <p className="text-white text-sm font-['Poppins'] text-center">
            Dear Bride-to-be! Excited for your day! Let’s celebrate love! 💖
          </p>
        </div>

        <div className="z-10 w-72 h-28 p-4 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-3xl shadow-lg mb-6">
          <p className="text-white text-sm font-['Poppins'] text-center">
            Hey, my friend! Excited to celebrate your big day and make unforgettable memories!
          </p>
        </div>

        <h1 className="text-3xl font-medium text-black font-raleway">
          Welcome To <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent font-rosarivo">Shadimuhurath</span>
        </h1>
        <p className="text-black/70 mt-4 leading-6 text-base px-4">
        Join ShadiMuhurath today and take the first step toward a beautiful life ahead. With easy-to-use features, advanced search options, and a dedicated support team, we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime of love and happiness.        
        </p>
        <p className="text-pink-700 text-lg font-semibold mt-4">
          Click Here To <span className="text-black/70 ml-1">Start Your Matrimony Service Now.</span>
        </p>
        <p className="text-black/70 mt-4 leading-6 text-base px-4">
        At ShadiMuhurath, we believe that every love story is unique, and so is every match. Our platform is designed to connect you with your perfect life partner, combining tradition with the convenience of modern technology.
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-center gap-3 text-pink-600">
            <FaPhoneSquareAlt className="text-2xl text-[#ED1C24]" />
            <div>
              <p className="text-lg font-semibold">Enquiry</p>
              <p className="text-sm">+91 966-544-3999</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-red-500">
            <FaEnvelope className="text-2xl text-[#ED1C24]" />
            <div>
              <p className="text-lg font-semibold">Get Support</p>
              <p className="text-sm text-black">Shadimuhurath@Gmail.Com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="sm:hidden flex flex-col items-center text-center p-4">
        <div className="w-full mb-4">
          <img src={Cylinder} alt="Bride and Groom" className="w-full h-auto rounded-xl shadow-lg" />
        </div>

        <div className="w-full p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-md mb-3">
          <p className="text-white text-sm font-['Poppins']">
            Dear Bride-to-be! Excited for your day! Let’s celebrate love! 💖
          </p>
        </div>

        <div className="w-full p-4 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl shadow-md mb-5">
          <p className="text-white text-sm font-['Poppins']">
            Hey, my friend! Excited to celebrate your big day and make unforgettable memories!
          </p>
        </div>

        <h1 className="text-2xl font-medium text-black font-raleway">
          Welcome To <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent font-rosarivo">Shadimuhurath</span>
        </h1>

        <p className="text-black/70 mt-4 text-sm leading-6">
        Join ShadiMuhurath today and take the first step toward a beautiful life ahead. With easy-to-use features, advanced search options, and a dedicated support team, we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime of love and happiness.        </p>
        <p className="text-pink-700 text-base font-semibold mt-3">
          Click Here To <span className="text-black/70 ml-1">Start Your Matrimony Service Now.</span>
        </p>
        <p className="text-black/70 mt-3 text-sm leading-6">
        At ShadiMuhurath, we believe that every love story is unique, and so is every match. Our platform is designed to connect you with your perfect life partner, combining tradition with the convenience of modern technology.
        </p>

        <div className="space-y-4 mt-5">
          <div className="flex items-center justify-center gap-3">
            <IoIosArrowRoundBack  className="text-xl text-[#ED1C24]" />
            <div>
              <p className="text-base font-semibold">Enquiry</p>
              <p className="text-sm text-pink-600">+91 966-544-3999</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <IoIosArrowRoundForward className="text-xl text-[#ED1C24]" />
            <div>
              <p className="text-base font-semibold">Get Support</p>
              <p className="text-sm text-black">Shadimuhurath@Gmail.Com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
