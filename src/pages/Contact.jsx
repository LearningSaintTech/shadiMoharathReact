import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Engagement from '../assets/images/Engagement.svg';
import Map from '../assets/images/Map.svg';
import Mail from '../assets/images/Mail.svg';
import Chat from '../assets/images/chat.svg';

const ContactSection = () => {
  return (
    <div className="bg-[#FFF4EE] flex flex-col">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full">
        <img src={Engagement} alt="Engagement" className="w-full object-cover max-h-[300px] sm:max-h-[400px]" />
        <div className="absolute top-1/2 left-[4vw] transform -translate-y-1/2 text-white">
          
            
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-serif px-2"
            style={{ fontFamily: "Rosarivo, serif" }}
          >

            Contact Us
          </h1>
          <p className="text-[1.5vw] mt-[0.8vw] font-poppins leading-snug">
            Now find your life partner easy and fast.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[90vw] mx-auto py-[5vw] grid grid-cols-1 md:grid-cols-2 gap-[4vw]">
        {/* Left Info Column */}
        <div className="space-y-[3vw] px-[2vw]">
          <h2 className="text-[2.2vw] font-Raleway font-medium text-gray-800 leading-[2.8vw]">
            Support When You <br /> Need It Most
          </h2>
          <p className="text-[1.1vw] text-gray-600 max-w-[40vw]">
            Integer sodales auctor nibh, ultricies auctor massa rhoncus sed.
          </p>

          {/* Contact Info Items */}
          {[{
            icon: Map,
            title: "Locate Us",
            text: "2922 Michigan Ave, Santa Monica, CA 90404, United States"
          }, {
            icon: Mail,
            title: "Mail Us",
            text: "support@nihul.com"
          }, {
            icon: Chat,
            title: "Chat With Us",
            text: "Nam mollis tortor a quam aliquet condimentum pretium."
          }].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-[2vw]">
              {/* Outer White Box */}
              <div className="w-[6.1vw] h-[6.1vw] bg-white rounded-[1.46vw] flex items-center justify-center shadow">
                {/* Inner Pink Box */}
                <div className="w-[4.3vw] h-[4.3vw] bg-gradient-to-r from-[#FF6B6B] to-[#ED1C24] rounded-[1.1vw] flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-[2vw] h-[2vw]" />
                </div>
              </div>
              <div className="pt-[1.8vw]">
                <h4 className="text-[1.2vw] font-Raleway font-medium text-black">{item.title}</h4>
                <p className="text-[1vw] text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl px-[3vw] py-[2.5vw] flex flex-col w-full">
          <h3 className="text-[2vw] font-semibold text-gray-800 mb-[1.5vw]">Say, Hello!</h3>
          <form className="space-y-[1.5vw]">
            <input type="text" placeholder="Your Name" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[1vw]" />
            <input type="text" placeholder="Mobile Number" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[1vw]" />
            <input type="text" placeholder="Type of Service Required" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[1vw]" />
            <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 focus:outline-none focus:border-[#FF6B6B] py-[0.8vw] text-[1vw]" />
              
            <div className="flex justify-center mt-[2vw]">
            <button type="submit" className="bg-[#FF6B6B] text-white py-[1vw] px-[2vw] rounded-full justify-center hover:bg-red-500 transition mt-[2vw] text-[1vw]
            style={{
      width: '8.9vw',   // 171px based on ~1920px screen
      height: '2.7vw',  // 52px based on ~1920px screen
    }}">
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;
