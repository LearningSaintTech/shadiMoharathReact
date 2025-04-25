import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Background from "../assets/images/Background.svg";
import Engagement from "../assets/images/Engagement.svg";
import tworing from "../assets/images/two ring.svg";
import coat from "../assets/images/coat.svg";
import quotes from "../assets/images/quotes.svg";
import Quotes1 from "../assets/images/Quotes1.svg";
import { IoSearchSharp } from "react-icons/io5";
import twoRing from "../assets/images/two ring.svg";
import ice from "../assets/images/ice.svg";
import Mrs from "../assets/images/Mrs.svg";
import couple1 from "../assets/images/Couple1.svg";
import Couple2 from "../assets/images/Couple 2.svg";
import couple8 from "../assets/images/Couple 8.svg";
import Couple9 from "../assets/images/Couple 9.svg";
import Couple13 from "../assets/images/Couple-13.svg";
import Couple14 from "../assets/images/Couple-14.svg";
import blog from "../assets/images/Blog1.svg";
import { FaCheckCircle } from "react-icons/fa";

import Correct from "../assets/images/Correct.svg";
import pandal from "../assets/images/Pandal.svg";
import Christian from "../assets/images/Christian.svg";
import Blog1 from "../assets/images/Blog1.svg";
import garden from "../assets/images/garden.svg";
import shadow from "../assets/images/Shadow.svg";
import gold from "../assets/images/gold.svg";
import bgd from "../assets/images/bgd.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF4EE]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vw] md:h-[21.875vw] ">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-[6vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[11vw] md:text-[6vw]"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Blog Details
          </h1>
          <p className="text-[3vw] md:text-[1vw] mt-[1vw] font-light leading-snug">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-[5vw] md:px-[3.125vw] py-[10vw] md:py-[5vw] w-full relative">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="flex flex-col md:flex-row w-full  mx-auto sm:p-2 md:p-14 z-10 gap-7">
          {/* Left Column - Blog Content */}
          <div className="w-full md:w-3/4 pr-0 md:pr-8">
            <div className="mb-8">
              {/* Blog Image */}
              <div className="relative px-2 ">
                <img
                  src={tworing}
                  alt="Suspension Ring"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute bottom-7 left-8 bg-[#000000]/[0.4] text-white text-[0.8vw] font-medium px-2 py-1 rounded-full  font-poppins">
                  Aug 12, 2024
                </div>
              </div>

              {/* Title and Description */}
              <h2
                className=" text-[4.5vw] sm:text-[1.8vw] font-medium mt-7 text-black"
                style={{ fontFamily: "Raleway" }}
              >
                Quisque A Sem Risus. Suspendisse Risus Augue, Rhoncus In Gravida
                Vel, Interdum Ac Enim.
              </h2>
              <p className="text-gray-600  text-[3.5vw] sm:text-lg mt-2 font-poppins gap-8">
                Quisque a sem risus. Suspendisse risus augue, rhoncus in gravida
                vel, interdum ac enim. Fusce sed sagittis massa. Etiam velit mi,
                luctus et semper eget, tempus a dolor. Vivamus ipsum metus,
                ultrices et felis vitae, pretium consequat dolor. Etiam
                fermentum, massa non dictum lobortis, lacus diam semper dui, eu
                euismod odio ipsum eget nibh. Aliquam erat volutpat. Aliquam
                ullamcorper tempor justo non cursus. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Donec ornare turpis viverra sapien ultrices congue.
                Etiam eu maximus mauris, in dignissim dui. Donec id ultricies
                justo.
              </p>
              <p className="text-gray-600  text-[3.5vw] sm:text-lg mt-6 font-poppins gap-8">
                {" "}
                Nunc sit amet mi finibus ex sagittis porttitor in porta sem. In
                pretium eros ac orci vulputate placerat. Donec quis condimentum
                nisl, tempor tincidunt est. Etiam ante ex, viverra eget risus
                et, consequat facilisis est. In eget diam eu lorem eleifend
                efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin in aliquam purus. Vestibulum cursus nunc vel
                tristique placerat. Quisque elementum felis erat, eu iaculis
                nibh congue non. Etiam nisi ante, suscipit in pulvinar faucibus,
                feugiat nec mi. Donec dapibus eros dui, interdum rutrum metus
                accumsan in.
              </p>

              {/* Bullet Points */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-2 rounded-lg w-full">
                {/* Image */}
                <img
                  src={coat}
                  alt="Coat"
                  className="w-full sm:w-5/12 h-auto rounded-xl"
                />

                {/* Text Content */}
                <ul className="w-full sm:w-7/12 flex flex-col justify-start py-4 sm:py-5 px-4 sm:px-0">
                  {/* Title */}
                  <li className="mb-4">
                    <h1
                      className="text-[3vw] sm:text-xs md:text-[1.094vw] font-medium"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Nullam Sodales Laoreet Sapien A Vehicula:
                    </h1>
                  </li>

                  {/* Bullet Items */}
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-center mb-3">
                    <div className="mr-2 mt-1">
                      <FaCheckCircle className="text-[5vw] sm:text-[1vw] text-red-500 flex items-center " />
                    </div>

                    <span className="text-[4vw] sm:text-xs md:text-[0.8vw] font-poppins font-normal items-center">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>

                  {/* Add more <li> as needed */}
                </ul>
              </div>

              {/* Quote */}
              <div className=" mt-6 bg-white px-5 py-3 rounded-xl shadow-md flex  gap-4 items-center  ">
                <img
                  src={Quotes1}
                  alt="Quote Icon"
                  className=" w-[58px] h-[57px] sm:w-[8.4vw] sm:h-[8.4vw]  object-fit  "
                />
                <div>
                  <p
                    className=" text-[3.5vw] sm:text-[1.094vw] text-black font-medium pt-5 "
                    style={{ fontFamily: "Raleway" }}
                  >
                    “Proin Nec Aliquam Turpis, Ac Faucibus Nunc. Fusce Vitae
                    Nunc Justo. Fusce Eget Est Justo. Pellentesque Tempus Ante
                    Eget Faucibus Tempor. Aliquam Venenatis Interdum Est Ac
                    Sollicitudin. Suspendisse Ut Fringilla Sapien. Phas”
                  </p>
                  <p
                    className="text-[2.031vw] font-medium  text-black text-right"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Easton Farley,{" "}
                    <span className="font-poppins text-gray-500 text-[1vw]">
                      Los Angeles
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse lg:gap-6 items-start my-10">
                {/* Image */}
                <div className="w-full lg:w-5/12">
                  <img
                    src={bgd}
                    alt="Collection"
                    className="w-auto h-[250px] overflow-hidden rounded-lg flex items-start"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-7/12   flex flex-col">
                  <h3
                    className="text-[5.25vw] sm:text-[1.25vw] font-medium text-black py-2"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Tempor Tincidunt Est. Etiam Ante Ex
                  </h3>

                  <p className=" text-[4vw] sm:text-[1.07vw] text-gray-700 py-2">
                    Quisque a sem risus. Suspendisse risus augue, rhoncus in
                    gravida vel, interdum ac enim. Fusce sed sagittis massa.
                    Etiam velit mi, luctus et semper eget, tempus a dolor.
                    Vivamus ipsum metus, ultrices et felis vitae, pretium
                    consequat dolor.
                  </p>

                  <p className=" text-[4vw] text-gray-600 sm:text-[1.07vw] font-poppins py-2">
                    Etiam fermentum, massa non dictum lobortis, lacus diam
                    semper dui, eu euismod odio ipsum eget nibh. Aliquam erat
                    volutpat. Aliquam ullamcorper tempor justo non cursus.
                    Pellentesque habitant morbi. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec bibendum lectus velit, sed scelerisque ligula
                    ullamcorper non. Nunc vel feugiat enim. Pellentesque congue
                    risus libero, in fringilla sem rhoncus a.
                  </p>
                </div>
              </div>

              <div className="  flex flex-col gap-0  px-4 sm:px-0">
                <h3
                  className=" text-[3.5vw] sm:text-[1.25vw] font-medium   py-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Quisque A Sem Risus. Suspendisse Risus Augue, Rhoncus In
                </h3>

                <p className=" text-[3vw] sm:text-[1vw] text-[#000000]/[0.7]  font-poppins py-2">
                  Quisque a sem risus. Suspendisse risus augue, rhoncus in
                  gravida vel, interdum ac enim. Fusce sed sagittis massa. Etiam
                  velit mi, luctus et semper eget, tempus a dolor. Vivamus ipsum
                  metus, ultrices et felis vitae, pretium consequat dolor. Etiam
                  fermentum, massa non dictum lobortis, lacus diam semper dui,
                  eu euismod odio ipsum eget nibh. Aliquam erat volutpat.
                  Aliquam ullamcorper tempor justo non cursus. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Donec ornare turpis viverra sapien ultrices
                  congue. Etiam eu maximus mauris, in dignissim dui. Donec id
                  ultricies justo.
                </p>

                <p className="text-gray-700  text-[3vw] sm:text-[1vw]  font-poppins py-2">
                  Nunc sit amet mi finibus ex sagittis porttitor in porta sem.
                  In pretium eros ac orci vulputate placerat. Donec quis
                  condimentum nisl, tempor tincidunt est. Etiam ante ex, viverra
                  eget risus et, consequat facilisis est. In eget diam eu lorem
                  eleifend efficitur. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin in aliquam purus. Vestibulum cursus
                  nunc vel tristique placerat. Quisque elementum felis erat, eu
                  iaculis nibh congue non. Etiam nisi ante, suscipit in pulvinar
                  faucibus, feugiat nec mi. Donec dapibus eros dui, interdum
                  rutrum metus accumsan in.
                </p>
              </div>
            </div>
            <div className="relative w-full  px-4 py-3 mt-4 flex justify-between items-center z-10 ">
              <div className=" hidden lg:flex items-center ">
                <span
                  className="text-sm font-medium mr-3 hidden sm:block"
                  style={{ fontFamily: "Raleway" }}
                >
                  Tags:
                </span>
                <div className="  flex gap-2 hidden sm:flex">
                  {/* Connection Tag — white background, gradient text */}
                  <span className="bg-white rounded-full ">
                    <span className="bg-white bg-clip-text text-transparent text-[0.781vw]   px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2424]/[0.15]">
                      Connection
                    </span>
                  </span>

                  {/* Match Made Tag — white background, gradient text */}
                  <span className="bg-white rounded-full">
                    <span className="bg-white bg-clip-text text-transparent text-[0.781vw] px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2424]/[0.15]">
                      Match Made
                    </span>
                  </span>

                  {/* Love Tag — white background, gradient text */}
                  <span className="bg-white rounded-full">
                    <span className="bg-white bg-clip-text text-transparent text-[0.781vw] px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2424]/[0.15]">
                      Love
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div
                  className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white px-2 py-2 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={{ fontFamily: "Raleway" }}
                >
                  FB
                </div>
                <div
                  className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white px-2 py-2 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={{ fontFamily: "Raleway" }}
                >
                  IN
                </div>
                <div
                  className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white px-2 py-2 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={{ fontFamily: "Raleway" }}
                >
                  PI
                </div>
                <div
                  className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white px-2 py-2 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={{ fontFamily: "Raleway" }}
                >
                  YT
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3  xl:w-[24%] space-y-4 p-2 sm:p-2 lg:pt-0 lg:pb-8 lg:px-0 ">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-5   sm:space-y-9">
              {/* Search Bar */}

              <div className="relative w-full mx-auto mt-5 rounded-full bg-[#FFF4EE] px-5 py-4 flex items-center">
                <input
                  type="text"
                  placeholder="Search Keyword"
                  className="w-full bg-transparent focus:outline-none text-[#444] placeholder-[#444] text-sm sm:text-base"
                  style={{ fontFamily: "Raleway" }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full w-9 h-9 flex items-center justify-center">
                  <IoSearchSharp color="white" size={22} />
                </span>
              </div>

              {/* Recent Posts */}
              <div>
                <h3
                  className="text-base sm:text-lg lg:text-[1.7vw] font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Recent Posts
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <img
                      src={garden}
                      alt="Post 1"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-[4.6vw] sm:text-sm lg:text-base 2xl:text-[1vw]  "
                        style={{ fontFamily: "Raleway" }}
                      >
                        Quisque a sem risus Suspendisse risus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img
                      src={shadow}
                      alt="Post 2"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-[4.6vw] sm:text-sm lg:text-base 2xl:text-[1vw] "
                        style={{ fontFamily: "Raleway" }}
                      >
                        Quisque a sem risus Suspendisse risus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img
                      src={gold}
                      alt="Post 3"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-[4.6vw] sm:text-sm lg:text-base 2xl:text-[1vw] "
                        style={{ fontFamily: "Raleway" }}
                      >
                        Quisque a sem risus Suspendisse risus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3
                  className="text-base sm:text-lg lg:text-[1.7vw] font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Connection",
                    "Match Made",
                    "Love",
                    "Soulmate search",
                    "Perfect Pairing",
                    "Romance",
                    "Date Your way",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-[#EF3B59] font-medium border border-[#ED1C2426]/[0.15] px-2 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instagram */}
              <div className="p-1">
                <h2
                  className="font-medium text-base sm:text-lg lg:text-[1.7vw] mb-4"
                  style={{ fontFamily: "Raleway" }}
                >
                  Instagram
                </h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="relative w-full aspect-square">
                    <img
                      src={Couple13}
                      alt="Instagram 1"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square">
                    <img
                      src={pandal}
                      alt="Instagram 2"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square">
                    <img
                      src={Couple2}
                      alt="Instagram 3"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square">
                    <img
                      src={Couple14}
                      alt="Instagram 4"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square">
                    <img
                      src={Christian}
                      alt="Instagram 5"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square">
                    <img
                      src={Couple9}
                      alt="Instagram 6"
                      className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Image */}
            <div className="hidden lg:block  ">
              <div className="relative w-full aspect-[7/9] mt-10">
                <img
                  src={Blog1}
                  alt="Blog Sidebar Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Instagram Grid */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
