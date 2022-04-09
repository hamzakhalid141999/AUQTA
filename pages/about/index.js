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
      <VisionSection/>
      <UniqueSection/>
    </div>
    // <div className={classes.first_section_wrapper}>
    //   <div id="home" className={classes.first_section_body}>
    //     <div className={classes.banner_img_container}>
    //       <div className={classes.overlay} />
    //       <Image
    //         src={banner_img}
    //         className={classes.banner_img}
    //         alt="hero_banner_img"
    //         layout="fill"
    //       />
    //     </div>
    //     <div className={classes.first_section_content_section}>
    //       <h1>LOREM IPSUM IS JUST A DUMMY TEXT</h1>
    //       <p>Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default about;
