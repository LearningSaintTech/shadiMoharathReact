import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Engagement from "../assets/images/Engagement.svg";
import Background from "../assets/images/Background.svg";
import Google from "../assets/images/Google.svg";
import Facebook from "../assets/images/facebook.svg";
import Apple from "../assets/images/apple.svg";
import { Eye } from "lucide-react"; // Optional, for password icon
import { VscEye } from "react-icons/vsc";

const Authentication = () => {
  return (
    <div className="bg-[#FFF4EE] min-h-screen ">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[50vw] md:h-[21.875vw]">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2   left-[10vw] sm:left-[4vw] md:left-[10.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[11vw] md:text-[6vw]"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Login
          </h1>
          <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Form Section */}

      <div className="  sm:mx-auto my-[7.813vw] bg-white flex flex-col rounded-2xl   gap-8  max-w-full  sm:max-w-[35.885vw] px-[19px] sm:px-[4vw] py-[4vw]">
        <div className="flex flex-col  gap-3">
          <h1 className=" text-[7vw]  md:text-[3vw] lg:text-[2.865vw] text-center  font-medium" style={{fontFamily:"Raleway"}}>Sign In To Account</h1>
          <p className="  text-[3vw] sm:text-xs  lg:text-[12px] font-normal text-center font-poppins">
            Experience the joy of life and create happiness together with Shadi
            Muharat
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 sm:gap-5">
          <div className="">
            <input
              type="name"
              className=" p-3 sm:p-4 border  border-[#F05A8E]/[0.15] rounded-full w-full text-base lg:text-[1.1vw] text-[#C1645CB2]"
              placeholder="Your Mail here"
            />
          </div>
          <div className=" relative w-full">
            <input
              type="password"
              className="  p-3 sm:p-4 border border-[#F05A8E]/[0.15] rounded-full w-full text-base lg:text-[1.1vw] text-[#C1645CB2]"
              placeholder="Password"
              />
              <VscEye className="absolute right-5 top-1/2 transform -translate-y-1/2 text-base lg:text-[1.1vw] text-[#C1645C] w-5 h-5 cursor-pointer" />
              
          </div>
          <div className="w-full flex flex-row sm:flex-row justify-between items-start sm:items-center mt-4 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-full accent-[#FF6B6B]"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-gray-700 hover:underline mt-2 sm:mt-0">
              Forgot Password ?
            </a>
          </div>
          <button className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] w-full py-6 rounded-full text-white text-base font-semibold mt-10 hover:opacity-90 shadow">
            Log In
          </button>
          <div className="text-center mt-5 text-gray-500 text-[3vw]  md:text-[4vw] lg:text-[0.9vw]">
            Or login with
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row gap-3 w-full justify-center mt-7">
            <button className="flex items-center justify-center gap-2 px-6 py-2 border border-[#ED1C24]/[0.15] rounded-full shadow bg-white hover:shadow-md w-full sm:w-auto">
              <img src={Apple} alt="Apple" className="w-5 h-5" />
              <span className="text-sm font-medium">Apple</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-2 border border-[#ED1C24]/[0.15] rounded-full shadow bg-white hover:shadow-md w-full sm:w-auto">
              <img src={Google} alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-2 border border-[#ED1C24]/[0.15] rounded-full shadow bg-white hover:shadow-md w-full sm:w-auto">
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
          <div className="text-center mt-10 text-lg sm:flex sm:items-center sm:justify-center sm:gap-2">
            <span className="text-black font-normal">Don’t have an account ? </span>
            <a href="#" className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]  bg-clip-text text-transparent font-medium hover:underline">
              Create An Account
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authentication;
