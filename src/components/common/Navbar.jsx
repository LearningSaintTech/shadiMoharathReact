import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";
import Login from "../../assets/images/Frame 29.svg";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mt-12">
      {/* 🔴 Top Red Bar - Hidden on Mobile */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white w-full h-full py-2 px-8 justify-between items-center text-sm">
        {/* Left Side - FAQ & Support */}
        <div className="flex space-x-4">
          <NavLink to="/faq" className="font-[400]">FAQs</NavLink>
          <span>|</span>
          <NavLink to="/contact" className="font-[400]">Help & Support</NavLink>
        </div>

        {/* Right Side - Contact & Social Media */}
        <div className="flex space-x-3 items-center">
          <span className="font-[400]">+91 986-544-3399 |</span>
          <span className="font-[400]">Shadimuharath@Gmail.com</span>
          <a href="#" className="hover:text-pink-300"><IoLogoFacebook /></a>
          <a href="#" className="hover:text-pink-300"><FaYoutube /></a>
          <a href="#" className="hover:text-pink-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
        </div>
      </div>

      {/* 🔵 Main Navigation Bar */}
      <div className="bg-orange-50 w-full h-[4.01vw] flex justify-between items-center px-4 sm:px-10 relative">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="ShadiMuhrat Logo" className="h-10" />
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-red-500 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center - Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-pink-100 md:bg-transparent md:flex 
                        flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-red-400 
                        font-[600] text-center md:text-left transition-all duration-300 
                        ${menuOpen ? "block" : "hidden md:flex"}`}>

          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/blog", label: "Blog" },
            { to: "/pricing", label: "Pricing" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F05A8E] border-b-2 border-[#F05A8E] pb-1"
                  : "hover:text-[#C1645C]"
              }
            >
              {label}
            </NavLink>
          ))}
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
    </div>
  );
}
