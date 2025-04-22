import React from 'react';
import mobileee from "../../assets/images/mobileeee.svg";
import Ellipse from "../../assets/images/Ellipse.svg";
import applelogo from "../../assets/images/Apple (1).svg";
import store from "../../assets/images/Playstore (1).svg";

const AppDownloadBanner = () => {
  return (
    <div className="mx-auto relative w-[90vw] sm:w-[77.24vw] h-auto sm:h-[39.479vw] flex flex-col sm:flex-row items-center sm:items-start">
      {/* Left side */}
      <div className="w-full sm:w-6/12 text-center sm:text-left mt-[8vw] sm:mt-[10.677vw]">
        <div className="w-[90%] mx-auto sm:w-4/6">
          <h2 className="text-[5vw] sm:text-[2.5vw] font-bold">
            DOWNLOAD APP & <br className="hidden sm:block" />
            GET THE VOUCHER!
          </h2>
          <p className="mt-[4vw] sm:mt-[2.135vw] text-gray-600 mb-6 text-[3.5vw] sm:text-[1.25vw]">
            Get 30% off for first transaction using <br className="hidden sm:block" />
            Rondovision mobile app for now.
          </p>

          {/* Store buttons */}
       {/* Store buttons */}
<div className="mt-[5vw] sm:mt-[3.385vw] flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
  {/* Apple Store Button */}
  <a
    href="#"
    className="bg-black text-white flex items-center px-4 py-2 rounded-xl"
  >
    <img
      src={applelogo}
      alt="Apple logo"
      className="w-[5vw] sm:w-[3vw] md:w-[2.5vw] lg:w-[2.2vw] h-auto mr-3"
    />
    <div className="leading-tight text-left">
      <p className="text-[2.5vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.75vw]">Download on the</p>
      <p className="text-[3.5vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.25vw] font-semibold">App Store</p>
    </div>
  </a>

  {/* Google Play Button */}
  <a
    href="#"
    className="bg-black text-white flex items-center px-4 py-2 rounded-xl"
  >
    <img
      src={store}
      alt="Google Play logo"
      className="w-[5vw] sm:w-[3vw] md:w-[2.5vw] lg:w-[2.2vw] h-auto mr-3"
    />
    <div className="leading-tight text-left">
      <p className="text-[2.5vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.75vw]">GET IT ON</p>
      <p className="text-[3.5vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.25vw] font-semibold">Google Play</p>
    </div>
  </a>
</div>

        </div>
      </div>

      {/* Right side - hidden on small screens */}
      <div className="w-6/12 relative hidden sm:flex items-center justify-center">
        <img
          src={Ellipse}
          className="w-[34.948vw] h-[34.948vw] pt-[3.333vw] pb-[1.615vw]"
          alt="Ellipse background"
        />
        <img
          src={mobileee}
          alt="Mobile"
          className="absolute h-[36.979vw]"
        />
      </div>
    </div>
  );
};

export default AppDownloadBanner;
