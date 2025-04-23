import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Engagement from "../assets/images/Engagement.svg";
import twoRing from "../assets/images/two ring.svg";
import ice from "../assets/images/ice.svg";
import Mrs from "../assets/images/Mrs.svg";
import Blog1 from "../assets/images/Blog1.svg";
import Couple13 from "../assets/images/Couple-13.svg";
import Couple2 from "../assets/images/Couple 2.svg";
import Couple14 from "../assets/images/Couple-14.svg";
import pandal from "../assets/images/Pandal.svg";
import Christian from "../assets/images/Christian.svg";
import Couple9 from "../assets/images/Couple 9.svg";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import garden from "../assets/images/garden.svg";
import shadow from "../assets/images/shadow.svg";
import gold from "../assets/images/gold.svg";

const Blog = () => {
  return (
    <div className="bg-[#FCECEC] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-[20vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] object-cover"
        />
        <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-10 xl:left-[4%] transform -translate-y-1/2 text-white px-4 sm:px-6">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Blog
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 font-normal leading-tight py-2 sm:py-3 font-poppins">
            Most Trusted and premium Matrimony Service in the World.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
          {/* Blog Cards Section */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-[2.2/1]">
                <img
                  src={twoRing}
                  alt="6 Things You Need To Prepare For Your Wedding Day"
                  className="w-full h-full object-cover bg-[#FFF4EE]"
                />
                <div className="absolute bottom-2 left-4 bg-[#000000]/[0.7] text-white text-xs sm:text-sm px-2 py-1 rounded-full font-poppins">
                  Aug 12, 2024
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-7 lg:p-8">
                <h2
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  6 Things You Need To Prepare For Your Wedding Day
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg font-poppins leading-relaxed font-normal">
                  Planning your wedding day means creating a timeline,
                  finalizing your guest list, and choosing trustworthy vendors
                  like photographers and florists. Remember to prepare your
                  attire and have a backup plan for surprises, so you can relax
                  and enjoy your special day.
                </p>
                <Link
                  to="/blog/1"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base md:text-lg"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-[2.2/1]">
                <img
                  src={ice}
                  alt="Key Steps To Get Ready For Your Big Day"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-4 bg-[#000000]/[0.7] text-white text-xs sm:text-sm px-2 py-1 rounded-full font-poppins">
                  Aug 12, 2024
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-7 lg:p-8">
                <h2
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Key Steps To Get Ready For Your Big Day
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg font-poppins leading-relaxed font-normal">
                  Prepare for your big day by creating a timeline, finalizing
                  your guest list, and choosing trusted vendors like
                  photographers and florists. Ensure your attire is ready and
                  have a backup plan for surprises, so you can relax and enjoy
                  your celebration.
                </p>
                <Link
                  to="/blog/1"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base md:text-lg"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-[2.2/1]">
                <img
                  src={Mrs}
                  alt="How To Choose The Perfect Wedding Dress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-4 bg-[#000000]/[0.7] text-white text-xs sm:text-sm px-2 py-1 rounded-full font-poppins">
                  Aug 12, 2024
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-7 lg:p-8">
                <h2
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  How To Choose The Perfect Wedding Dress
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg font-poppins leading-relaxed font-normal">
                  Prepare for your big day by creating a timeline, finalizing
                  your guest list, and choosing trusted vendors like
                  photographers and florists. Ensure your attire is ready and
                  have a backup plan for surprises, so you can relax and enjoy
                  your celebration.
                </p>
                <Link
                  to="/blog/1"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base md:text-lg"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                className="w-8 h-8 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full text-white text-sm"
                aria-label="Page 1"
              >
                1
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300 text-sm"
                aria-label="Page 2"
              >
                2
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300 text-sm"
                aria-label="Page 3"
              >
                3
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300 text-sm"
                aria-label="Page 4"
              >
                4
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300 text-sm"
                aria-label="Page 5"
              >
                5
              </button>
            </div>
          </div>

          {/* Sidebar */}
          {/* <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6 p-0 lg:p-2">
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 lg:p-6 space-y-8">
              <div className="relative w-full">
                <span className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full p-1">
                  <IoSearchSharp color="white" size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Search keyword..."
                  className="w-full bg-[#FFF4EE] border border-gray-300 rounded-full p-2 pr-10 text-sm sm:text-base"
                />
              </div>

              <div>
                <h3
                  className="text-base sm:text-lg lg:text-lg font-medium mb-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Recent Posts
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <img
                      src={garden}
                      alt="Post 1"
                      className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm lg:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-xl sm:text-sm lg:text-xl"
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
                      className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm lg:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-xl sm:text-sm lg:text-xl"
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
                      className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-xl"
                    />
                    <div>
                      <p className="text-xs sm:text-sm lg:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]">
                        26th September, 2024
                      </p>
                      <p
                        className="text-black font-medium text-xl sm:text-sm lg:text-xl"
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
                  className="text-base sm:text-lg lg:text-lg font-medium mb-2"
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

              <div className="p-1">
                <h2
                  className="font-medium text-base sm:text-lg lg:text-lg mb-4"
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

            <div className="hidden lg:block">
              <div className="relative w-full aspect-[5/9]">
                <img
                  src={Blog1}
                  alt="Blog Sidebar Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div> */}
          <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6 p-0 sm:p-2 lg:p-3">
  <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 lg:p-6 space-y-6 sm:space-y-8">
    {/* Search Bar */}
    <div className="relative w-full">
      <span className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full p-1">
        <IoSearchSharp color="white" size={16} />
      </span>
      <input
        type="text"
        placeholder="Search keyword..."
        className="w-full bg-[#FFF4EE] border border-gray-300 rounded-full p-2 pr-10 text-sm sm:text-base"
      />
    </div>

    {/* Recent Posts */}
    <div>
      <h3
        className="text-base sm:text-lg lg:text-lg font-medium mb-2"
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
        className="text-base sm:text-lg lg:text-lg font-medium mb-2"
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
        className="font-medium text-base sm:text-lg lg:text-lg mb-4"
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
  <div className="hidden lg:block">
    <div className="relative w-full aspect-[5/9]">
      <img
        src={Blog1}
        alt="Blog Sidebar Image"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </div>
</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;