import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Banner from "../assets/images/Banner1.svg";
import Engagement from "../assets/images/Engagement.svg";
import ProfileForms from "../components/Forms/ProfileForms";

const Forms = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative w-full h-[50vw] md:h-[21.875vw]">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[5vw] md:text-[6vw]"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Form
          </h1>
          <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen  ">
        <img
          src={Banner}
          alt="Background"
          className="absolute w-full h-full object-cover z-0 hidden sm:block"
        />
        <div className="absolute inset-0 bg-white/20 z-0" />

        <div className="relative z-10 flex justify-center pt-10"> 
          {/* pt-10 to push it down */}
          <ProfileForms />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forms;
