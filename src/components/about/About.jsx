import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import HeroSection from "./HeroSection";
import BackgroundSection from "./BackgroundSection";
import StatsSection from "./StatsSection";
import TestimonialSection from "./TestimonialSection";
import TeamSection from "./TeamSection";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BackgroundSection />
      <StatsSection />
      <TestimonialSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AboutUs;