import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import Background from '../assets/images/Background.svg';
import Engagement from '../assets/images/Engagement.svg';
import tworing from "../assets/images/two ring.svg";
import coat from "../assets/images/coat.svg";
import quotes from "../assets/images/quotes.svg";
import Quotes1 from "../assets/images/Quotes1.svg";

import couple1 from "../assets/images/Couple1.svg";
import Couple2 from "../assets/images/Couple 2.svg";
import couple8 from "../assets/images/Couple 8.svg";
import couple9 from "../assets/images/Couple 9.svg";
import couple13 from "../assets/images/Couple-13.svg";
import couple14 from "../assets/images/Couple-14.svg";
import blog from "../assets/images/Blog1.svg";
import Pinktick from "../assets/images/Pink tick.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-[5vw] transform -translate-y-1/2 text-white">
          <h1 className="text-[6vw] md:text-[3.5vw] font-serif font-Rosarivo lowercase" style={{ fontVariant: "small-caps" }}>
            Blog Details
          </h1>
          <p className="text-[3.5vw] md:text-lg mt-2 font-poppins leading-snug">
            Now Find your life partner Easy and fast.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-[5vw] md:px-[3.125vw] py-[10vw] md:py-[5vw] w-full relative">
        <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 bg-white z-10">
          {/* Left Column - Blog Content */}
          <div className="w-full md:w-3/4 pr-0 md:pr-6">
            <div className="mb-8">
              {/* Blog Image */}
              <div className="relative">
                <img src={tworing} alt="Suspension Ring" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="absolute bottom-0 left-0 bg-red-400 text-grey text-xs font-medium px-2 py-1 rounded-full ">Aug 12 2024</div>
              </div>

              {/* Title and Description */}
              <h2 className="text-lg font-bold mt-3 text-black">
              Quisque a sem risus. Suspendisse risus augue, rhoncus in gravida vel, interdum ac enim.
              </h2>
              <p className="text-gray-600 text-sm mt-2">
              Quisque a sem risus. Suspendisse risus augue, rhoncus in gravida vel, interdum ac enim. Fusce sed sagittis massa. Etiam velit mi, luctus et semper eget, tempus a dolor. Vivamus ipsum metus, ultrices et felis vitae, pretium consequat dolor. Etiam fermentum, massa non dictum lobortis, lacus diam semper dui, eu euismod odio ipsum eget nibh. Aliquam erat volutpat. Aliquam ullamcorper tempor justo non cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ornare turpis viverra sapien ultrices congue. Etiam eu maximus mauris, in dignissim dui. Donec id ultricies justo.

Nunc sit amet mi finibus ex sagittis porttitor in porta sem. In pretium eros ac orci vulputate placerat. Donec quis condimentum nisl, tempor tincidunt est. Etiam ante ex, viverra eget risus et, consequat facilisis est. In eget diam eu lorem eleifend efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in aliquam purus. Vestibulum cursus nunc vel tristique placerat. Quisque elementum felis erat, eu iaculis nibh congue non. Etiam nisi ante, suscipit in pulvinar faucibus, feugiat nec mi. Donec dapibus eros dui, interdum rutrum metus accumsan in.
              </p>

              {/* Bullet Points */}
              <div className="mt-4 bg-pink-50 flex flex-row p-4 gap-2 rounded-lg">
                <img src={coat} alt="Coat" className="w-[450px] h-[325px] mb-2" />
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs">Morbi vitae sapien vel metus ultrices finibus. Nullam euismod magna.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs">Sed at risus vel magna tempor egestas nec vel ipsum.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs">Nullam euismod magna at eros finibus volutpat.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 mt-1 mr-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sapien.</span>
                  </li>
                </ul>
              </div>

              {/* Quote */}
              <div className="mt-6 bg-white p-4 rounded-lg border-l-4 flex flex-row border-amber-400">
                <img src={Quotes1} alt="Quote" className="w-[8.4vw] h-[8.4vw] mb-2" />
                <p className="text-xs  p-2 mt-4 font-Raleway font-medium">
                  “Proin nec aliquam turpis, ac faucibus nunc. Fusce vitae nunc justo. Fusce eget est justo. Pellentesque tempus ante eget faucibus tempor. Aliquam venenatis interdum est ac sollicitudin. Suspendisse ut fringilla sapien. Phas”
                </p>
                <p className="text-xs font-bold mt-10 ">Easton Farley,</p>
              </div>

              {/* Additional Content */}
              <div className="mt-6">
                
                 {/* <img src={couple9} alt="Collection" className="w-[460px] h-[301px] object-cover rounded-lg mb-4" />  */}
                <h3 className="text-md font-semibold mb-2">Tempor tincidunt est. Etiam ante ex</h3>

                <p className="text-sm text-gray-700 mb-4">
                Quisque a sem risus. Suspendisse risus augue, rhoncus in gravida vel, interdum ac enim. Fusce sed sagittis massa. Etiam velit mi, luctus et semper eget, tempus a dolor. Vivamus ipsum metus, ultrices et felis vitae, pretium consequat dolor.

Etiam fermentum, massa non dictum lobortis, lacus diam semper dui, eu euismod odio ipsum eget nibh. Aliquam erat volutpat. Aliquam ullamcorper tempor justo non cursus. Pellentesque habitant morbi.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec bibendum lectus velit, sed scelerisque ligula ullamcorper non. Nunc vel feugiat enim. Pellentesque congue risus libero, in fringilla sem rhoncus a.
                </p>
                <img src={couple9} alt="Collection" className="w-[460px] h-[301px] object-cover rounded-lg mb-4" /> 


                <h3 className="text-md font-semibold mb-2">Quisque a sem risus. Suspendisse risus augue, rhoncus in</h3>
                <p className="text-sm text-gray-700">
                Quisque a sem risus. Suspendisse risus augue, rhoncus in gravida vel, interdum ac enim. Fusce sed sagittis massa. Etiam velit mi, luctus et semper eget, tempus a dolor. Vivamus ipsum metus, ultrices et felis vitae, pretium consequat dolor. Etiam fermentum, massa non dictum lobortis, lacus diam semper dui, eu euismod odio ipsum eget nibh. Aliquam erat volutpat. Aliquam ullamcorper tempor justo non cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ornare turpis viverra sapien ultrices congue. Etiam eu maximus mauris, in dignissim dui. Donec id ultricies justo.

Nunc sit amet mi finibus ex sagittis porttitor in porta sem. In pretium eros ac orci vulputate placerat. Donec quis condimentum nisl, tempor tincidunt est. Etiam ante ex, viverra eget risus et, consequat facilisis est. In eget diam eu lorem eleifend efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in aliquam purus. Vestibulum cursus nunc vel tristique placerat. Quisque elementum felis erat, eu iaculis nibh congue non. Etiam nisi ante, suscipit in pulvinar faucibus, feugiat nec mi. Donec dapibus eros dui, interdum rutrum metus accumsan in.
                </p>

                {/* Tags + Social */}
                <div className="relative w-full bg-pink-50 px-4 py-3 mt-4 flex justify-between items-center z-10">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-3">Tags:</span>
                    <div className="flex gap-2">
                      <span className="bg-white text-pink-500 border border-pink-300 text-xs px-3 py-1 rounded-full">Connection</span>
                      <span className="bg-white text-pink-500 border border-pink-300 text-xs px-3 py-1 rounded-full">Match Made</span>
                      <span className="bg-white text-pink-500 border border-pink-300 text-xs px-3 py-1 rounded-full">Love</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-red-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">FB</div>
                    <div className="bg-red-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">IN</div>
                    <div className="bg-red-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">PI</div>
                    <div className="bg-red-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold">YT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0">
            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {/* Post 1 */}
                <div className="flex items-start">
                  <img src={couple1} alt="Post 1" className="w-16 h-16 object-cover rounded-md mr-2" />
                  <div>
                    <h4 className="text-xs font-medium">Lorem ipsum dolor sit amet</h4>
                    <p className="text-xs text-gray-500 mt-1">February 10, 2025</p>
                  </div>
                </div>
                {/* Post 2 */}
                <div className="flex items-start">
                  <img src={couple9} alt="Post 2" className="w-16 h-16 object-cover rounded-md mr-2" />
                  <div>
                    <h4 className="text-xs font-medium">Lorem ipsum dolor sit amet</h4>
                    <p className="text-xs text-gray-500 mt-1">February 10, 2025</p>
                  </div>
                </div>
                {/* Post 3 */}
                <div className="flex items-start">
                  <img src={couple8} alt="Post 3" className="w-16 h-16 object-cover rounded-md mr-2" />
                  <div>
                    <h4 className="text-xs font-medium">Lorem ipsum dolor sit amet</h4>
                    <p className="text-xs text-gray-500 mt-1">February 10, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Jewelry</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Rings</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Gold</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Silver</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Gemstones</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Fashion</span>
              </div>
            </div>

            {/* Instagram Grid */}
            <div>
              <h3 className="text-lg font-medium mb-4">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                <img src={couple1} alt="Instagram 1" className="w-full h-16 object-cover rounded-lg" />
                <img src={Couple2} alt="Instagram 2" className="w-full h-16 object-cover rounded-lg" />
                <img src={couple8} alt="Instagram 3" className="w-full h-16 object-cover rounded-lg" />
                <img src={couple9} alt="Instagram 4" className="w-full h-16 object-cover rounded-lg" />
                <img src={couple13} alt="Instagram 5" className="w-full h-16 object-cover rounded-lg" />
                <img src={couple14} alt="Instagram 6" className="w-full h-16 object-cover rounded-lg" />
              </div>
              <img src={blog} alt="Extra Instagram" className="w-full h-auto mt-5 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
