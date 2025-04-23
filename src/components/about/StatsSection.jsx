import React from "react";
import User from "../../assets/images/Usercontainer.svg";
import Male from "../../assets/images/Male.svg";
import Pair from "../../assets/images/Pair.svg";
import Coup from "../../assets/images/Coup.svg";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-5 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
        <img src={User} alt="Registered Users" className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1" />
        <div className="text-[5vw] mf sm:text-[3.2vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent" style={{ fontFamily: "Raleway" }}>
          4677<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
        </div>
        <div className="text-[3vw] sm:text-[1.2vw] text-black font-medium mt-1" style={{ fontFamily: "Raleway" }}>
          Registered Users
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-5 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
        <img src={Male} alt="Mens" className="w-[8vw] sm:w-[3.333vw] h-[8vw] sm:h-[3.333vw] mb-1" />
        <div className="text-[5vw] sm:text-[3.5vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent" style={{ fontFamily: "Raleway" }}>
          2935<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
        </div>
        <div className="text-[3.5vw] sm:text-[1vw] text-black font-medium mt-1" style={{ fontFamily: "Raleway" }}>
          Mens
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl flex flex-col justify-start px-6 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
        <img src={Pair} alt="Womens" className="w-[6vw] sm:w-[3.3vw] h-[6vw] sm:h-[3.3vw] mb-1" />
        <div className="text-[5vw] sm:text-[3.5vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent" style={{ fontFamily: "Raleway" }}>
          1742<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
        </div>
        <div className="text-[3.5vw] sm:text-[1vw] text-black font-medium mt-1" style={{ fontFamily: "Raleway" }}>
          Womens
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-2 bg-[#FFF4EE] m-2 rounded-2xl px-7 py-4 h-[28vw] lg:h-[12.8vw] border border-[rgba(237,28,36,0.15)] sm:bg-white">
        <img src={Coup} alt="Couples Paired" className="w-[6vw] sm:w-[3.3vw] h-[6vw] sm:h-[3.3vw] mb-1" />
        <div className="text-[5vw] sm:text-[3.833vw] flex font-medium bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent" style={{ fontFamily: "Raleway" }}>
          547<span className="-mt-[1vw] sm:-mt-[0.2vw] font-extralight" style={{ fontFamily: "Raleway" }}>+</span>
        </div>
        <div className="text-[3vw] sm:text-[1.2vw] text-black" style={{ fontFamily: "Raleway" }}>
          Couples Paired
        </div>
      </div>
    </div>
  );
};

export default StatsSection;