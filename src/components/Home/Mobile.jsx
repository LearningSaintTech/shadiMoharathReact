import React from 'react';
import mobileee from "../../assets/images/mobileeee.svg";
import Ellipse from "../../assets/images/Ellipse.svg";
import applelogo from "../../assets/images/Apple (1).svg";
import store from "../../assets/images/Playstore (1).svg";

const AppDownloadBanner = () => {
  return (
    <div className="mx-auto relative w-[77.24vw] h-[39.479vw] flex">
      {/* Left side */}
      <div className="w-6/12">
        <div className="mt-[10.677vw] w-4/6">
          <h2 className="text-[2.5vw] w-full font-bold sm:flex flex-col">
            DOWNLOAD APP & <br /> GET THE VOUCHER!
          </h2>
          <p className="mt-[2.135vw] text-gray-600 mb-6 text-[1.25vw]">
            Get 30% off for first transaction using <br />
            Rondovision mobile app for now.
          </p>

          {/* Store buttons - pixel perfect */}
          <div className="mt-[3.385vw] sm: flex flex-row gap-4">
            {/* Apple Store Button */}
            <a
              href="#"
              className="bg-black text-white flex items-center px-4 py-2 rounded-xl"
            >
              <img
                src={applelogo}
                alt="Apple logo"
                className="w-[2.2vw] h-auto mr-3"
              />
              <div className="leading-tight">
                <p className="text-[0.75vw]">Download on the</p>
                <p className="text-[1.25vw] font-semibold">App Store</p>
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
                className="w-[2.2vw] h-auto mr-3"
              />
              <div className="leading-tight">
                <p className="text-[0.75vw]">GET IT ON</p>
                <p className="text-[1.25vw] font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right side with background */}
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
