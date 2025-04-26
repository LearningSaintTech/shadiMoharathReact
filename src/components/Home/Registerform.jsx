import React from "react";
import Logo from "../../assets/images/Logo.svg";
import rangoli from "../../assets/images/Rangoli.png";
import { FaAngleDown } from "react-icons/fa6";

export default function ShadiSection() {
  return (
    <section className="relative bg-[#FFF4EE] px-[7vw] flex flex-col lg:flex-row justify-between items-start">
      {/* Rangoli Decorations */}
      <img
        src={rangoli}
        alt="Top Left Rangoli"
        className="absolute top-0 left-0 w-[43vw] h-[26vw] z-0 opacity-[70%]"
      />
      <img
        src={rangoli}
        alt="Bottom Right Rangoli"
        className="absolute bottom-0 right-0 w-[43vw] h-[26vw] z-0 opacity-[70%] rotate-180"
      />

      {/* Left Content */}
      <div className="pt-10 pb-6 lg:pt-[8.646vw] lg:pb-[19.063vw] z-10 max-w-full lg:max-w-[53vw] text-center lg:text-left">
        <img src={Logo} alt="Shadi Muharath" className="w-[40vw] h-auto mx-auto lg:mx-0 lg:w-[9.6vw] lg:h-[5.1vw]" />
        <p className="text-black opacity-60 text-sm leading-relaxed mt-4 px-2 lg:px-0 lg:text-[1.3vw] lg:leading-[1.8vw]" style={{ fontFamily: "Poppins" }}
        >
          Join ShadiMuharath today and take the first step toward a beautiful life ahead.
          With easy-to-use features, advanced search options, and a dedicated support team,
          we are here to guide you every step of the way. Let’s create a timeless bond for a lifetime
          of love and happiness.
        </p>
      </div>

      {/* Right Form */}
      <div className="relative  mt-10 mb-[2vw] lg:absolute lg:w-[33.063vw] lg:h-[39.115vw] lg:p-[2.93vw] z-10 lg:top-[-12vw] lg:right-10">
        <div className="rounded-xl lg:rounded-[2vw] shadow-lg lg:shadow-[0_0_2vw_rgba(0,0,0,0.15)] bg-[#E3CBBE] px-6 py-8 lg:p-[2vw] border border-[#c59d87]">
          <h3
            className="text-[6vw] lg:text-[2.917vw] font-bold text-center text-[#C1645C]"
            style={{ fontFamily: "Times New Roman" }}
          >
            Register Now
          </h3>
          <p className="text-center text-[#C1645C] text-sm lg:text-[0.833vw] mt-2">
            Join Shadi Muhurath today and take the first step <br className="hidden lg:block" />
            toward a beautiful life ahead.
          </p>
          <form className="w-full mt-6  space-y-6 lg:space-y-8">
            {/* Looking For */}
            <div className="relative">
              <select className="appearance-none w-full py-4 px-5 text-base lg:text-[1.1vw] text-[#C1645C] bg-white rounded-full focus:outline-none">
                <option>I am Looking For</option>
                <option>Bride</option>
                <option>Groom</option>
              </select>
              <FaAngleDown className="absolute w-4 h-4 right-6 top-1/2 -translate-y-1/2 text-[#C1645C] pointer-events-none" />
            </div>

            {/* Religion */}
            <div className="relative">
              <select className="appearance-none w-full py-4 px-5 text-base lg:text-[1.1vw] text-[#C1645C] bg-white rounded-full focus:outline-none">
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
              </select>
              <FaAngleDown className="absolute w-4 h-4 right-6 top-1/2 -translate-y-1/2 text-[#C1645C] pointer-events-none" />
            </div>

            {/* Age */}
            {/* Age */}
            <input
              type="number"
              placeholder="Age"
              className="w-full py-4 px-5 text-base lg:text-[1.1vw] text-[#C1645C] placeholder-[#C1645C] bg-white rounded-full focus:outline-none"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="+91 123-456-1234"
              className="w-full py-4 px-5 text-base lg:text-[1.1vw] text-[#C1645C] placeholder-[#C1645C] bg-white rounded-full focus:outline-none"
            />


            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white text-base font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Register For Free
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
