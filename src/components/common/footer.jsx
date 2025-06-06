import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";
import visa from "../../assets/images/visa.svg";
import Paypal from "../../assets/images/paypal.svg";
import Mastercard from "../../assets/images/Mastercard.svg";
import apple from "../../assets/images/apple pay.svg";
import Amex from "../../assets/images/AMEX.svg";
import skrill from "../../assets/images/Skrill.svg";
import Pink from "../../assets/images/Pink fb.svg";
import Yt from "../../assets/images/YT.svg";
import Linked from "../../assets/images/linkedin.svg";
import insta from "../../assets/images/insta.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Telegram from "../../assets/images/Telegram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white px-[4vw] pt-10 pb-4 flex-col space-y-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10">
        {/* Left */}
        <div className="md:w-1/2 space-y-6 flex md:flex-col flex-col-reverse">
          <div className="text-[40px] md:text-[50px] font-medium  leading-tight text-center md:text-left mb-4  mt-6 md:mb-0" 
          style={{fontFamily:"Raleway"}}>
            Are You In For <br /> The Gossips?
          </div>

          <div className="text-center md:text-left space-y-4">
            <img src={Logo} alt="Logo" className="w-40 mx-auto md:mx-0" />
            <p className="text-gray-600 text-sm max-w-md mx-auto md:mx-0 px-4 md:px-0">
              Mauris mattis lacinia turpis sit amet convallis. Aliquam congue
              vehicula cursus. Aenean eget lacus in metus malesuada lacinia ac
              vitae velit. Fusce elementum fringilla mattis. Donec quis dolor orci.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 space-y-6">
          {/* Email + Button */}
          <div className="flex flex-col md:flex-row md:items-center gap-0  gap-y-4 md:gap-4  w-full">
            <input
              type="email"
              placeholder="enter Your email address"
              className="border-b border-gray-400 py-2 w-full md:w-full focus:outline-none"
            />
            <Link to="/forms">
             <button
            type="submit"
             className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]   text-white px-6 py-2 rounded-full whitespace-nowrap  hover:scale-105 transition-transform"
            >
              Register Now
            </button> 
            </Link>
            
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl text-red-400 justify-center md:justify-start">
          <a href="https://www.facebook.com/profile.php?id=61567493432082&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <img src={Pink} alt="Facebook" className="h-auto" />
          </a>
          <a href="https://youtube.com/@shadhimuharath?si=Tx5-BLzU0pKjz7D4" target="_blank" rel="noopener noreferrer">

          <img src={Yt} alt="Amex" className="h-[25px]" />
          </a>
          
          <a href="https://www.linkedin.com/in/shadhi-muharath-4a9305338" target="_blank" rel="noopener noreferrer">

          <img src={Linked} alt="Apple Pay" className="h-[25px]" />
          </a>
          <a href="https://www.instagram.com/shadi_muharath_?igsh=MWoxNmk4MzE1OG5lcg" target="_blank" rel="noopener noreferrer">

          <img src={insta} alt="Skrill" className="h-[25px]" />
          </a>
          <a href="https://t.me/shadimuharath" target="_blank" rel="noopener noreferrer">

          <img src={Telegram} alt="telegram" className="h-[25px"/>
          </a>
          <a href="@shadimuhar0899" target="_blank" rel="noopener noreferrer">

          <img src={Twitter} alt="telegram" className="h-[25px"/>
          </a>

          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-8 mt-4 items-center text-center md:items-start md:text-left">
            {/* Community */}
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Guidelines</li>
                <li>Success Stories</li>
                <li>Plenty of Interests</li>
                <li>Plenty of Cities</li>
                <li>The Blog</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Support</li>
                <li>Security</li>
                <li>Safety Tips</li>
                <li>Impressum</li>
              </ul>
            </div>

            {/* Legal & Privacy */}
            <div>
              <h3 className="font-semibold mb-2">Legal & Privacy</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Consumer Health Data Policy</li>
                <li>Cookie Policy</li>
                <li>Intellectual Property</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="mt-10 border-gray-200" />
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 pt-4">
        <p className="text-sm text-gray-500">
          ©Shadi Muharath all rights Reserved
        </p>
        <div className="flex gap-3 flex-wrap justify-center items-center">
          <img src={visa} alt="Visa" className="h-[25px]" />
          <img src={Amex} alt="Amex" className="h-[25px]" />
          <img src={apple} alt="Apple Pay" className="h-[25px]" />
          <img src={skrill} alt="Skrill" className="h-[25px]" />
          <img src={Mastercard} alt="Mastercard" className="h-[25px]" />
          <img src={Paypal} alt="PayPal" className="h-[25px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
