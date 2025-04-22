import React from "react";
import bow from "../../assets/images/bow.svg";
import church from "../../assets/images/church.svg";
import christ from "../../assets/images/christ.svg";
import muff from "../../assets/images/muff.svg";
import pink from "../../assets/images/pink.svg";
import Korean from "../../assets/images/Korean.svg";
import Hands from "../../assets/images/Hands.svg";
import Profile from "../../assets/images/Prof.svg";
import heart from "../../assets/images/heart.svg";
import { LuUsersRound } from "react-icons/lu";
import Pair from "../../assets/images/Pair.svg";
import People from "../../assets/images/People.svg";
import Male from "../../assets/images/Male.svg";
import Coup from "../../assets/images/Coup.svg";
import User from "../../assets/images/Usercontainer.svg";

const Together = () => {
  return (
    <div className="
    sm:bg-white bg-auto mx-[3.125vw] rounded-xl overflow-hidden">
      {/* Scrolling Banner */}
      <div className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-2xl py-4 sm:py-6 relative overflow-hidden hidden sm:block">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Registered Users */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2.5vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" color="white" />
            </div>
            <span className="text-[6vw] sm:text-[3vw] mr-1">
              4677<span className="-mt-[1vw] sm:-mt-[0.5vw]">+</span>
            </span>
            <span className="text-[5vw] sm:text-[2.5vw]">Registered Users</span>
          </div>

          {/* Mens */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2.5vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" color="white" />
            </div>
            <span className="text-[6vw] sm:text-[3vw] mr-1">
              2935<span className="-mt-[1vw] sm:-mt-[0.5vw]">+</span>
            </span>
            <span className="text-[5vw] sm:text-[2.5vw]">Mens</span>
          </div>

          {/* Womens */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2.5vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" color="white" />
            </div>
            <span className="text-[6vw] sm:text-[3vw] mr-1">
              1742<span className="-mt-[1vw] sm:-mt-[0.5vw]">+</span>
            </span>
            <span className="text-[5vw] sm:text-[2.5vw]">Womens</span>
          </div>

          {/* Couples Paired */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2.5vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" color="white" />
            </div>
            <span className="text-[6vw] sm:text-[3vw] mr-1">
              547<span className="-mt-[1vw] sm:-mt-[0.5vw]">+</span>
            </span>
            <span className="text-[5vw] sm:text-[2.5vw]">Couples Paired</span>
          </div>

          {/* Weddings */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2.5vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" color="white" />
            </div>
            <span className="text-[6vw] sm:text-[4vw] mr-1">
              2000<span className="-mt-[1vw] sm:-mt-[0.5vw]">+</span>
            </span>
            <span className="text-[5vw] sm:text-[2.5vw]">Weddings</span>
          </div>

          {/* Genuine Profiles */}
          <div
            className="flex items-center text-white font-normal text-[5vw] sm:text-[2vw] mx-[3vw]"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="border border-white rounded-full p-[2vw] sm:p-[1vw] flex items-center justify-center mr-[1vw] w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw]">
              <LuUsersRound size="5vw" sm:size="2.5vw" className="text-white" />
            </div>
            <span className="text-[5vw] sm:text-[2.5vw]">Genuine Profiles</span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4 px-4 sm:px-10 py-6 sm:py-10">
        {/* Main Banner Text Block */}
        <div className="col-span-2 sm:col-span-3 sm:row-span-4 bg-[#FFF4EE] sm:bg-white m-2 rounded-lg transition-shadow duration-300 ease-in-out flex flex-col justify-start items-center sm:items-start">
          <p className="text-[3vw] sm:text-[1vw] text-[#ED1C24] hidden sm:block font-semibold mt-[3.438vw]">
            SHADI MUHARATH
          </p>
          <h1
            className="text-[8vw] sm:text-[3.7vw] font-medium mb-0 text-center sm:text-left"
            style={{ fontFamily: "Raleway" }}
          >
            Together We Stand,
          </h1>
          <h2
            className="text-[8vw] sm:text-[3.7vw] -mt-[2vw] sm:-mt-[1vw] font-medium text-center sm:text-left"
            style={{ fontFamily: "Raleway" }}
          >
            Hand In Hand.
          </h2>
          <p className="text-[3.5vw] sm:text-[1vw] text-center sm:text-start text-gray-500 mt-[2vw] sm:mt-[1vw] w-[80vw] sm:w-[30vw]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] px-[10vw] sm:px-[1.6vw] rounded-[8vw] sm:rounded-[2vw] py-[2vw] sm:py-[0.6vw] text-white text-[4vw] sm:text-[1vw] mt-[4vw] sm:mt-[3vw]">
            Register Now
          </button>
        </div>

        {/* Grid Images - Hidden on mobile */}
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg w-1/2 sm:w-full">
          <img src={bow} alt="bow" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg w-1/2 sm:w-full">
          <img src={pink} alt="pink" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg">
          <img src={heart} alt="heart" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg">
          <img src={muff} alt="muff" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg">
          <img src={church} alt="church" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 sm:col-span-1 row-span-2 bg-white m-2 hidden sm:block rounded-lg">
          <img src={christ} alt="christ" className="w-full h-full object-cover" />
        </div>

        {/* Info Card - Registered Users */}
        <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-3 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
          <img
            src={User}
            alt="Registered Users"
            className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1"
          />
          <div
            className="text-[5vw] sm:text-[3.2vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
            style={{ fontFamily: "Raleway" }}
          >
            4677<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
          </div>
          <div
            className="text-[3vw] sm:text-[1.2vw] text-black font-medium mt-1"
            style={{ fontFamily: "Raleway" }}
          >
            Registered Users
          </div>
        </div>

        {/* Info Card - Mens */}
        <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-3 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
          <img
            src={Male}
            alt="Mens"
            className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1"
          />
          <div
            className="text-[5vw] sm:text-[3.5vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent"
            style={{ fontFamily: "Raleway" }}
          >
            2935<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
          </div>
          <div
            className="text-[3.5vw] sm:text-[1vw] text-black font-medium mt-1"
            style={{ fontFamily: "Raleway" }}
          >
            Mens
          </div>
        </div>

        {/* Info Card - Womens */}
        <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-3 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
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

     <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl px-3 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
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
            className="text-[3.5vw] sm:text-[1.2vw] text-black"
            style={{ fontFamily: "Raleway" }}
          >
            Couples Paired
          </div>
        </div>
        <div className="bg-white m-2 hidden sm:block rounded-lg">
          <img src={Korean} alt="Korean" className="w-full h-[13vw]" />
        </div>

        {/* Last Visual Block */}
        <div className="bg-white m-2 rounded-lg hidden sm:block">
          <img src={Hands} alt="Hands" className="w-full h-[13vw]" />
        </div>
      </div>
    </div>
  );
};

export default Together;