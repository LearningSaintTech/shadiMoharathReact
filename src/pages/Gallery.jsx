import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Engagement from "../assets/images/Engagement.svg";
import Background from "../assets/images/Background.svg";
import Couple1 from "../assets/images/Couple1.svg";
import Couple2 from "../assets/images/Couple 2.svg";
import Couple3 from "../assets/images/Couple3.svg";
import Couple4 from "../assets/images/Couple4.svg";
import Couple5 from "../assets/images/Couple 5.svg";
import Couple6 from "../assets/images/Couple 6.svg";
import Couple7 from "../assets/images/Couple 7.svg";
import Couple8 from "../assets/images/Couple 8.svg";
import Couple9 from "../assets/images/Couple 9.svg";
import Couple10 from "../assets/images/Couple 10.svg";
import Couple11 from "../assets/images/Couple 11.svg";
import Couple12 from "../assets/images/Couple 12.svg";
import Couple13 from "../assets/images/Couple-13.svg";
import Couple14 from "../assets/images/Couple-14.svg";
import Couple15 from "../assets/images/Couple 15.svg";
import Couple16 from "../assets/images/Couple16.svg";

const Gallery = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}

      <div className="relative w-full h-[50vw] md:h-[21.875vw]">
        <img
          src={Engagement}
          alt="Engagement"
          className=" w-full h-auto object-cover"
        />
        <div className="absolute  top-[10vw] md:top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[5vw] md:text-[6vw]"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Gallery
          </h1>
          <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-[#FCECEC] min-h-screen flex flex-col justify-center items-center p-10 relative">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Featured Couples */}
        <div className="flex flex-col-3 items-end gap-5  max-w-[90vw]">
          <div className="hidden md:block">
            <img
              src={Couple11}
              alt="Couple Left"
              className=""
            />
          </div>
          <div className="border border-[#ED1C24]/50 rounded-t-[50%] border-b-0 border-l-4 border-r-4">
            <img
              src={Couple3}
              alt="Couple Left"
              className="px-4 pt-4 rounded-t-[50%]"
            />
          </div>
          <div className="hidden md:block">
            <img
              src={Couple16}
              alt="Couple Left"
              className=""
            />
          </div>
        </div>

        {/* Center Image with Arch */}

        {/* Right Image */}

        {/* Wedding Gallery Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 mt-10 max-w-[90vw] z-10">
          <div className="bg-gray-200 border-white row-span-1">
            <img
              src={Couple10}
              className="w-[85.75vw] md:w-[32.167vw] h-[44.5vw] md:h-[14.844vw] object-cover "
            />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img
              src={Couple9}
              className=" w-[87.75vw] md:w-[30vw]  h-[78vw] md:h-[43vw] object-cover  "
            />
          </div>
          <div className="bg-gray-200 border-white row-span-1">
            <img
              src={Couple8}
              className=" w-[85.75vw] md:w-[32.167vw] h-[44.75vw] md:h-[14.844vw] object-cover "
            />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple7} className=" w-[85.75vw] h-[108vw] md:w-[30vw] md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple5} className="w-[85.75vw] h-[131.5vw] md:w-[30vw] md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple6} className="w-[131.5vw] md:w-[30vw] h-[87vw]md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple13} className=" w-[80.75vw]  h-[87vw] md:w-[30vw] md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple4} className=" md:w-[87.65vw] md:w-[30vw]h-[86vw] md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple1} className=" w-[87.65vw]  h-[87vw] md:w-[30vw] md:h-[42vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple3} className=" w-[87vw] md:w-[30vw]  h-[87vw] md:h-[44vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-3">
            <img src={Couple2} className=" w-[87vw] h-[87vw] md:w-[30vw] md:h-[44vw] object-cover " />
          </div>
          <div className="bg-gray-200 border-white row-span-1">
            <img
              src={Couple14}
              className=" w-[87vw] hmd:w-[29.167vw] h-[44vw] md:h-[15.8vw] object-cover "
            />
          </div>
        </div> 
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;

<div className="flex justify-center items-end mt-16 w-[1720px] max-w-full mx-auto gap-x-9 p-2 z-20 relative">
  {/* Left Image */}
  <div className="flex flex-col justify-end items-center">
    <img
      src={Couple11}
      alt="Couple Left"
      className="w-48 h-48 rounded-t-full object-cover shadow-md"
    />
  </div>

  {/* Center Image with Arch */}
  <div className="flex justify-center items-center border-2 rounded-b-none rounded-t-[180px] border-[#ED1C24]/50">
    {/* <div className="relative w-80 h-96 overflow-hidden rounded-t-[180px] rounded-b-none mt-2 mr-2 ml-2">
<img
src={Couple3}
alt="Couple"
className="w-full h-auto object-cover rounded-t-[180px] rounded-b-none"
/>
</div> */}
    <div className="flex justify-center items-center">
      <div className="relative w-72 h-96 md:w-80 md:h-[30rem] border-2 border-[#ED1C24]/50 p-1 rounded-full md:rounded-[180px] md:rounded-b-none overflow-hidden">
        <img
          src={Couple3}
          alt="Couple"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  {/* Right Image */}
  <div className="flex flex-col justify-end items-center">
    <img
      src={Couple16}
      alt="Couple Right"
      className="w-48 h-48 rounded-t-full object-cover shadow-md"
    />
  </div>
</div>;
