import React, { useState } from "react";
import Background from "../../assets/images/Background.svg";
import Tick from "../../assets/images/Tick.svg";
import Cross from "../../assets/images/Cross.svg";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingPlans = [
    {
      title: "Basic",
      price: "$25",
      duration: "/ Month",
      features: [
        { text: "Rate up to 50 profiles per day", available: true },
        { text: "Explore limited profiles", available: true },
        { text: "0 Credit / Month", available: true },
        { text: "Rewinds", available: true },
        { text: "Browse Privately", available: false },
        { text: "See who’s viewed your profile", available: false },
      ],
      buttonText: "Get Started Now",
      bgGradient: "from-[#F05A8E] to-[#ED1C24]",
      isHighlighted: false,
    },
    {
      title: "Free",
      price: "Free",
      duration: "/ Month",
      features: [
        { text: "Rate up to 50 profiles per day", available: true },
        { text: "Explore limited profiles", available: true },
        { text: "0 Credit / Month", available: true },
        { text: "Rewinds", available: false },
        { text: "Browse Privately", available: false },
        { text: "See who’s viewed your profile", available: false },
      ],
      buttonText: "Get Started Now",
      bgGradient: "from-[#F05A8E] to-[#ED1C24]",
      
      isHighlighted: false,
    },
    {
      title: "Premium",
      price: "$75",
      duration: "/ Month",
      features: [
        { text: "Rate up to 50 profiles per day", available: true },
        { text: "Explore limited profiles", available: true },
        { text: "0 Credit / Month", available: true },
        { text: "Rewinds", available: true },
        { text: "Browse Privately", available: true },
        { text: "See who’s viewed your profile", available: true },
      ],
      buttonText: "Get Started Now",
      bgGradient: "from-[#F05A8E] to-[#ED1C24]",
      isHighlighted: false,
    },
  ];

  return (
    <div className=" flex flex-col">
      

      {/* Pricing Section */}
      <div className="relative flex flex-col items-center p-[3vw] overflow-hidden min-h-screen">
        <img
          src={Background}
          alt="Background"
          className="absolute w-full h-full object-cover z-0"
        />
        <h1 className="text-[9vw] md:text-[3.5vw] mt-[2vw] font-Raleway font-small text-center mb-[2vw] z-10">
          Choose The Perfect Plan
        </h1>

        {/* Toggle Switch */}
         <div className="z-10 flex items-center rounded-full  justify-center mb-[2vw]">
          <div className="flex bg-[#F9C58B40] rounded-full md:p-[0.5vw] p-[1vw] w-[60vw] md:w-[18vw] shadow-md">
            <button
              className={` w-1/2 md:w-1/2 py-[1vw] text-[3.5vw] md:text-[1vw] font-medium font-poppins rounded-full transition-all duration-300 ${
                isMonthly ? "bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white shadow" : "text-[#C1645C]"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={` w-1/2 md:w-1/2 py-[1vw] text-[3.5vw] md:text-[1vw] font-medium font-poppins rounded-full transition-all duration-300 ${
                !isMonthly ? "bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white shadow" : "text-[#C1645C]"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Special Plans
            </button>
          </div>
        </div> 

        {/* Pricing Cards */}
        <div className="relative z-10 w-[90vw] mx-auto flex flex-col md:flex-row justify-center md:items-center md:gap-[3vw] gap-[15vw] md:mt-[0vw] mt-[10vw] mb-[4vw]">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`w-full md:w-[24vw] h-auto md:h-[34vw] md:rounded-[1.5vw] rounded-[5.5vw] pt-[6vw] md:pt-[3.5vw] pb-[6vw] md:pb-[3.5vw] px-[5vw] md:px-[2vw] flex flex-col shadow-lg transition-all duration-300 ${
                plan.isHighlighted
                  ? `bg-gradient-to-b ${plan.bgGradient} text-white hover:from-[#ED1C24] hover:to-[#F05A8E]`
                  : `bg-white text-black hover:bg-gradient-to-b hover:from-[#F05A8E] hover:to-[#ED1C24] hover:text-white`
              }`}
            >
              <h2
                className="text-[6vw] md:text-[1.8vw] font-semibold"
                style={{ fontFamily: "Raleway, serif" }}
              >
                {plan.price}{" "}
                <span className="text-[3vw] md:text-[1vw]">
                  {plan.duration}
                </span>
              </h2>
              <h3 className="text-[4vw] md:text-[1.2vw] mt-[2vw] md:mt-[1vw] font-medium">
                Features
              </h3>
              <ul className="mt-[2vw] md:mt-[1vw] space-y-[4vw] md:space-y-[0.5vw]">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-[2vw] md:gap-[0.5vw] font-poppins text-[3.5vw] md:text-[1vw] leading-[5vw] md:leading-[2.2vw]"
                  >
                    <img
                      src={feature.available ? Tick : Cross}
                      className="w-[3vw] md:w-[0.8vw]"
                      alt={feature.available ? "Tick" : "Cross"}
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={`md:mt-[2svw] mt-[5vw] rounded-full font-bold py-[2.5vw] md:py-[1vw] px-[4vw] md:px-[2vw] text-[3vw] md:text-[1vw] transition-all duration-300 ${
                  plan.isHighlighted
                    ? "bg-white text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white"
                    : `bg-gradient-to-b ${plan.bgGradient} text-white hover:bg-white hover:text-[#ED1C24]`
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Pricing;
