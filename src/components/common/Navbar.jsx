import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";
import { ChevronDown } from "lucide-react";
import Couple3 from "../../assets/images/Couple3.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full mt-12">
      {/* 🔴 Top Red Bar */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white w-full h-full py-2 px-8 justify-between items-center text-sm">
        <div className="flex space-x-4">
          <NavLink to="/faq" className="font-[400]">FAQs</NavLink>
          <span>|</span>
          <NavLink to="/contact" className="font-[400]">Help & Support</NavLink>
        </div>
        <div className="flex space-x-3 items-center">
          <span className="font-[400]">+91 986-544-3399 |</span>
          <span className="font-[400]">Shadhimuharath@Gmail.com</span>
          <a href="https://www.facebook.com/profile.php?id=61567493432082&mibextid=LQQJ4d" className="hover:text-pink-300"><IoLogoFacebook /></a>
          <a href="https://youtube.com/@shadhimuharath?si=Tx5-BLzU0pKjz7D4" className="hover:text-pink-300"><FaYoutube /></a>
          <a href="https://www.linkedin.com/in/shadhi-muharath-4a9305338" className="hover:text-pink-300"><FaLinkedin /></a>
          <a href="https://www.instagram.com/shadi_muharath_?igsh=MWoxNmk4MzE1OG5lcg==" className="hover:text-pink-300"><FaInstagram /></a>
        </div>
      </div>

      {/* 🔵 Main Navigation Bar */}
      <div className="bg-orange-50 w-full h-auto py-4 flex justify-between items-center px-4 sm:px-10 relative">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="ShadiMuhrat Logo" className="h-10" />
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-red-700 text-2xl z-50"
          onClick={() => {
          if (isMobile) setMenuOpen(true);
          }
        }
        >
          <FaBars />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-red-400 font-[600]">
          <NavLink to="/" className="hover:text-[#C1645C]">Home</NavLink>
          <NavLink to="/about" className="hover:text-[#C1645C]">About</NavLink>
          <NavLink to="/gallery" className="hover:text-[#C1645C]">Gallery</NavLink>
          <NavLink to="/blog" className="hover:text-[#C1645C]">Blog</NavLink>
          <NavLink to="/pricing" className="hover:text-[#C1645C]">Pricing</NavLink>
        </div>

        {/* Right - Login Button */}
        <NavLink to="/Authentication">
          <button
            type="button"
            className="w-[6.8vw] h-[2.76vw] hidden sm:flex items-center justify-center gap-[0.6vw] px-[1.25vw] py-[0.52vw] bg-gradient-to-r from-[#F15BB5] to-[#F72C25] hover:opacity-90 text-white rounded-full text-[0.83vw] transition"
          >
            Login
            <ChevronDown size="1vw" />
          </button>
        </NavLink>
      </div>

      {/* Sidebar (Mobile Drawer) */}
      {menuOpen &&  window.innerWidth < 768 &&  (
        <div className=" fixed top-0 left-0 w-[80vw] sm:w-[60vw] h-full bg-white shadow-xl p-6 z-50 rounded-r-3xl overflow-y-auto transition-all duration-300 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <img
              src={Couple3}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            
            <FaTimes
              className=" text-xl cursor-pointer text-red-600 bg-clip-text"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          {/* <div className="border-t border-[#F5BEBE] "></div> */}

          {/* Nav Links */}
          <ul className="space-y-4 text-[#70302B] font-medium font-Roboto mb-6">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</NavLink></li>
          </ul>

          {/* Logo */}
          <div className="text-center mb-6" >
            <img src={Logo} alt="Logo" className=" h-[17vw] sm:h-12 mx-auto " />
          </div>

          {/* Login Form */}
          
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-red-500 text-white  px-4 py-2 rounded-full"
            >
              Login
            </button>
          

          {/* Version Info */}
          <p className="text-xs text-center mt-6 text-[#D36366]">App version 1.0.0.1</p>
        </div>
      )}
    </div>
  );
}
