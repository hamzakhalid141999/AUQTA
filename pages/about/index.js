import React from "react";
import classes from "./about.module.css";
import banner_img from "../../public/assets/about_page_banner_bg.png";
import Image from "next/image";
import FirstSection from "../../components/screenComponents/aboutScreen/firstSection";
import OurMission from "../../components/screenComponents/aboutScreen/ourMissionSection";
import VisionSection from "../../components/screenComponents/aboutScreen/visionSection";
import UniqueSection from "../../components/screenComponents/aboutScreen/uniqueSection";

function about() {
  return (
    <div className={classes.about_section}>
      <FirstSection />
      <OurMission />
      <VisionSection />
      <UniqueSection />
    </div>
  );
}

export default about;
