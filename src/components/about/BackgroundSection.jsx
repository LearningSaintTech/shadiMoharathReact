import React from "react";
import Background from "../../assets/images/Background.svg";
import Icon from "../../assets/images/Icon.svg";
import FeatureCard from "./FeatureCard";
import WelcomeSection from "./WelcomeSection"
const BackgroundSection = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen p-4 md:p-6">
      <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-[-1]" />

      {/* Features Section */}
      <div className="bg-[#FFF6F4] flex justify-center gap-[6vw] md:gap-[4vw] lg:gap-[2vw] my-[10vw] md:my-[6vw] lg:my-[4vw]" style={{ fontFamily: "Ramaraja" }}>
        <div className="grid grid-cols-1 gap-[10vw] md:gap-[6vw] lg:gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Genuine Profiles" description="Contact Genuine Profiles With 100% Verified Mobile" />
          <FeatureCard title="Most Trusted" description="The Most Trusted Wedding Matrimony Brand Lorem" />
          <FeatureCard title="2000+ Weddings" description="Lakhs Of Peoples Have Found Their Life Partner" />
        </div>
      </div>

      {/* Welcome Section */}
      <WelcomeSection />
    </div>
  );
};

export default BackgroundSection;