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
import Pinktick from "../assets/images/Pink tick.svg";
import Correct from "../assets/images/Correct.svg";
import pandal from "../assets/images/Pandal.svg";
import Christian from "../assets/images/Christian.svg";
import Blog1 from "../assets/images/Blog1.svg";
import garden from "../assets/images/garden.svg";
import shadow from "../assets/images/Shadow.svg";
import gold from "../assets/images/gold.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF4EE]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vw] md:h-[21.875vw]">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-[4vw] md:left-[7.5vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-[5vw] md:text-[6vw]"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Blog Details
          </h1>
          <p className="text-[3vw] md:text-[1.2vw]  font-normal leading-snug font-poppins">
          Most Trusted and premium Matrimony Service in the World.

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

        <div className="flex flex-col md:flex-row w-full  mx-auto p-9  z-10">
          {/* Left Column - Blog Content */}
          <div className="w-full md:w-3/4 pr-0 md:pr-8">
            <div className="mb-8">
              {/* Blog Image */}
              <div className="relative px-2 ">
                <img
                  src={tworing}
                  alt="Suspension Ring"
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="absolute bottom-3 left-6 bg-[#00000066]/[0.7] text-white text-[0.8vw] font-medium px-2 py-1 rounded-full  font-poppins">
                  Aug 12, 2024
                </div>
              </div>

              {/* Title and Description */}
              <h2
                className="sm:text-[1.2vw] font-medium mt-3 text-black"
                style={{ fontFamily: "Raleway" }}
              >
                Quisque A Sem Risus. Suspendisse Risus Augue, Rhoncus In Gravida
                Vel, Interdum Ac Enim.
              </h2>
              <p className="text-gray-600 text-[0.833vw] mt-2 font-poppins gap-8">
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
              <p className="text-gray-600 text-[0.833vw] mt-6 font-poppins gap-8">
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
              <div className="mt-4  flex flex-row p-4 gap-2 rounded-lg">
                <img
                  src={coat}
                  alt="Coat"
                  className="w-[450px] h-[325px] mb-2"
                />
                <ul className="space-y-2">
                  <li
                    className="flex items-start font-medium"
                    style={{ fontFamily: "Raleway" }}
                  >
                    <h1 className="px-5">Nullam sodales laoreet sapien a vehicula</h1>
                  </li>
                  {/* <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div> */}
                  <li className="flex item-start">
                    <img src={Correct} className="px-5 " />

                    <span className="text-[0.68vw] font-poppins">
                      Cras facilisis augue hendrerit neque ultrices, tempor
                      mollis neque gravida.
                    </span>
                  </li>
                  <li className="flex items-start">
                    {/* <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div> */}
                    <img src={Correct} className="px-5" />

                    <span className="text-[0.68vw] font-poppins">
                      Integer sit amet quam sapien. Proin nec aliquam turaus
                      nunc.
                    </span>
                  </li>
                  <li className="flex items-start ">
                    {/* <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div> */}
                    <img src={Correct} className="px-5" />

                    <span className="text-[0.68vw] font-poppins">
                      Fusce vitae nunc justo. Fusce eget est justo. Pellentesque
                      tempus ante eget
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Correct} className="px-5" />
                    <span className="text-[0.68vw] font-poppins">
                      Aliquam venenatis interdum est ac sollicitudin.
                      Suspendisse ut
                    </span>
                  </li>
                  <li className="flex items-start">
                    {/* <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div> */}
                    <img src={Correct} className="px-5" />

                    <span className="text-[0.68vw] font-poppins">
                      Fringilla sapien. Phasellus nec justo ac erat tempus
                      mattis.
                    </span>
                  </li>
                  <li className="flex items-start">
                    {/* <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div> */}
                    <img src={Correct} className="px-5" />

                    <span className="text-[0.68vw] font-poppins">
                      Proin nec aliquam turpis, ac faucibus nunc. Fusce vitae
                      nunc justo
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quote */}
              <div className=" mt-6 bg-white p-6  rounded-lg shadow-md flex items-start gap-4 max-w-full">
                <img
                  src={Quotes1}
                  alt="Quote Icon"
                  className="w-[8.4vw] h-[8.4vw]  object-cover "
                />
                <div>
                  <p
                    className="text-[1.3vw] text-black font-medium mt-6"
                    style={{ fontFamily: "Raleway" }}
                  >
                    “Proin Nec Aliquam Turpis, Ac Faucibus Nunc. Fusce Vitae
                    Nunc Justo. Fusce Eget Est Justo. Pellentesque Tempus Ante
                    Eget Faucibus Tempor. Aliquam Venenatis Interdum Est Ac
                    Sollicitudin. Suspendisse Ut Fringilla Sapien. Phas”
                  </p>
                  <p className="text-[2.031vw] font-medium mt-4 text-black text-right">
                    Easton Farley,{" "}
                    <span className="font-normal text-gray-500">
                      Los Angeles
                    </span>
                  </p>
                </div>
              </div>

              {/* Additional Content */}
              {/* <div className="mt-6">
                {/* <img src={couple9} alt="Collection" className="w-[460px] h-[301px] object-cover rounded-lg mb-4" />  */}

              {/* Tags + Social */}

              {/* </div> */}
              <div className="flex flex-col lg:flex-row-reverse gap-6 items-start mt-6 ">
                {/* Image */}
                <img
                  src={Couple9}
                  alt="Collection"
                  className="w-full h-[17vw] object-cover rounded-lg"
                />

                {/* Text Content */}
                <div>
                  <h3
                    className="text-[1.25vw] font-medium mb-2"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Tempor Tincidunt Est. Etiam Ante Ex
                  </h3>

                  <p className="text-[0.833vw] text-gray-700 mb-4">
                    Quisque a sem risus. Suspendisse risus augue, rhoncus in
                    gravida vel, interdum ac enim. Fusce sed sagittis massa.
                    Etiam velit mi, luctus et semper eget, tempus a dolor.
                    Vivamus ipsum metus, ultrices et felis vitae, pretium
                    consequat dolor.
                  </p>

                  <p className="text-gray-600 text-[0.833vw] mt-6 font-poppins">
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
              <div>
                <h3
                  className="text-[1.25vw] font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Quisque A Sem Risus. Suspendisse Risus Augue, Rhoncus In
                </h3>

                <p className="text-[0.833vw] text-gray-700 mb-4 font-poppins">
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

                <p className="text-gray-600 text-[0.833vw] mt-6 font-poppins">
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
              <div className="flex items-center ">
                <span
                  className="text-sm font-medium mr-3 hidden sm:block"
                  style={{ fontFamily: "Raleway" }}
                >
                  Tags:
                </span>
                <div className=" gap-4 hidden sm:block">
                  {/* Connection Tag — white background, gradient text */}
                  <span className="bg-white rounded-full ">
                    <span className="bg-white bg-clip-text text-transparent text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2426]/[0.15]">
                      Connection
                    </span>
                  </span>

                  {/* Match Made Tag — white background, gradient text */}
                  <span className="bg-white rounded-full">
                    <span className="bg-white bg-clip-text text-transparent text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2426]/[0.15]">
                      Match Made
                    </span>
                  </span>

                  {/* Love Tag — white background, gradient text */}
                  <span className="bg-white rounded-full">
                    <span className="bg-white bg-clip-text text-transparent text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] border border-[#ED1C2426]/[0.15]">
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

          {/* Right Column - Sidebar */}
          {/* <div className="w-full md:w-1/4 mt-8 md:mt-0 bg-white p-4"> */}
          {/* Recent Posts */}

          {/* Tags */}
          {/* <div className="mb-8">
 
</div> */}
          <div className="w-full lg:w-80 space-y-6 ">
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-6">
              <div className="relative w-full">
                <span className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full">
                  <IoSearchSharp color="white" size={20} />
                </span>
                <input
                  type="text"
                  placeholder="Search keyword..."
                  className="w-full bg-[#FFF4EE] border border-gray-300 rounded-full p-2 pr-10 text-sm sm:text-base"
                />
              </div>

              <div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Recent Posts
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <img
                      src={garden}
                      alt="Post 1"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-sm sm:text-base"
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
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-sm sm:text-base"
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
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-sm sm:text-base"
                        style={{ fontFamily: "Raleway" }}
                      >
                        Quisque a sem risus Suspendisse risus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Tags
                </h3>
                {/* <div className="flex flex-wrap gap-1">
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
                      className="bg-white  font-medium border border-[#ED1C2426]/[0.15] px-2 py-1 rounded-full text-xs sm:text-[0.781vw] font-poppins"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                <div className="flex flex-wrap gap-1">
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
                      className="bg-white font-medium border border-[#ED1C2426]/[0.15] px-2 py-1 rounded-full text-xs sm:text-[0.781vw] font-poppins"
                    >
                      <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent">
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-2">
                <h2
                  className="font-medium text-lg mb-4"
                  style={{ fontFamily: "Raleway" }}
                >
                  Instagram
                </h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-2">
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
                      className="w-full h-auto rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-square ">
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

            <div className="hidden lg:block">
              <div className="relative w-full aspect-w-16 aspect-h-9">
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
