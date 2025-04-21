import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.svg";
import Login from "../../assets/images/Frame 29.svg";
import { ChevronDown} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full  mt-12">
      {/* 🔴 Top Red Bar - Hidden on Mobile */}
      <div className="hidden sm:flex bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white w-full h-full py-2 px-8 justify-between items-center text-sm">
        {/* Left Side - FAQ & Support */}
        <div className="flex space-x-4">
          <Link  to="/faq" className="font-[400]">FAQs</Link>
          <span>|</span>
          <Link to="/contact" className="font-[400]" >Help & Support</Link>
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

      {/* 🔵 Main Navigation Bar - Visible on All Screens */}
      <div className="bg-orange-50 w-full h-[4.01vw] flex justify-between items-center px-4 sm:px-10 relative">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="ShadiMuhrat Logo" className="h-10" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-500 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center - Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-pink-100 md:bg-transparent md:flex 
                        flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-red-400 
                        font-[600] text-center md:text-left transition-all duration-300 
                        ${menuOpen ? "block" : "hidden md:flex"}`}>
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About</Link>
          <Link to="/gallery" className="hover:text-red-600">Gallery</Link>
          <Link to="/blog" className="hover:text-red-600">Blog</Link>
          <Link to="/pricing" className="hover:text-red-600">Pricing</Link>
          
        </div>

        {/* Right Side - Login Button */}
       
          <Link to="/Authentication">


<button
  type="submit"
  className=" w-[6.8vw] h-[2.76vw] hidden sm:flex items-center justify-center  gap-[0.6vw] px-[1.25vw] py-[0.52vw] bg-gradient-to-r from-[#F15BB5] to-[#F72C25] hover:opacity-90 text-white rounded-full text-[0.83vw] transition"
>
  Login
  <ChevronDown size="1vw" />
</button>

    </Link>
      </div>
    </div>
  );
}
