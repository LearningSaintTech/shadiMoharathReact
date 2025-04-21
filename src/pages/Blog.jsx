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
import { IoSearchCircle } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="bg-[#FCECEC] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={Engagement}
          alt="Engagement"
          className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover"
        />
        <div className="absolute top-1/2 left-4 sm:left-8 md:left-[4vw] transform -translate-y-1/2 text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-serif px-2"
            style={{ fontFamily: "Rosarivo, serif" }}
          >
            Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.5vw] mt-2 font-light leading-tight px-2">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Blog Cards Section */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={twoRing}
                  alt="6 Things You Need To Prepare For Your Wedding Day"
                  className="w-full h-full object-cover bg-[#FFF4EE]"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-9">
                <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-2">
                  6 Things You Need To Prepare For Your Wedding Day
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-[1.01vw] leading-relaxed">
                  Planning your wedding day means creating a timeline, finalizing
                  your guest list, and choosing trustworthy vendors like
                  photographers and florists. Remember to prepare your attire and
                  have a backup plan for surprises, so you can relax and enjoy
                  your special day.
                </p>
                <a
                  href="#"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={ice}
                  alt="Key Steps To Get Ready For Your Big Day"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-9">
                <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-2">
                  Key Steps To Get Ready For Your Big Day
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-[1.01vw] leading-relaxed">
                  Prepare for your big day by creating a timeline, finalizing your
                  guest list, and choosing trusted vendors like photographers and
                  florists. Ensure your attire is ready and have a backup plan for
                  surprises, so you can relax and enjoy your celebration.
                </p>
                <a
                  href="#"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={Mrs}
                  alt="How To Choose The Perfect Wedding Dress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-9">
                <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-2">
                  How To Choose The Perfect Wedding Dress
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-[1.01vw] leading-relaxed">
                  Prepare for your big day by creating a timeline, finalizing your
                  guest list, and choosing trusted vendors like photographers and
                  florists. Ensure your attire is ready and have a backup plan for
                  surprises, so you can relax and enjoy your celebration.
                </p>
                <a
                  href="#"
                  className="text-[#EF3B59] font-medium underline text-sm sm:text-base"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                className="w-8 h-8 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-full text-white"
                aria-label="Page 1"
              >
                1
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300"
                aria-label="Page 2"
              >
                2
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300"
                aria-label="Page 3"
              >
                3
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full border border-gray-300"
                aria-label="Page 4"
              >
                4
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-6">
              <div className="relative w-full">
                <span className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2">
                  <IoSearchCircle color="pink" size={32} />
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
                      src={twoRing}
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
                      src={ice}
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
                      src={Mrs}
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
                <div className="flex flex-wrap gap-2">
                  {[
                    "Connection",
                    "Match Making",
                    "Love",
                    "Soulmate search",
                    "Perfect Pairing",
                    "Romance",
                    "Date Your way",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-[#EF3B59] font-medium border border-[#ED1C2426]/[0.15] px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h2 className="font-bold text-lg mb-4">Instagram</h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[
                    Couple13,
                    pandal,
                    Couple2,
                    Couple14,
                    Christian,
                    Couple9,
                  ].map((img, index) => (
                    <div key={index} className="relative w-full aspect-w-1 aspect-h-1">
                      <img
                        src={img}
                        alt={`Instagram ${index + 1}`}
                        className="w-full h-full rounded-xl border-2 border-[#ED1C2426]/[0.15] object-cover"
                      />
                    </div>
                  ))}
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;