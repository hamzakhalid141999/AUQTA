import React from "react";
import classes from "./servicesScreen.module.css";
import Image from "next/image";
import banner_img from "../../../../public/assets/services_banner_img.png";
import service_1 from "../../../../public/assets/services_1.png";
import service_2 from "../../../../public/assets/services_2.png";
import service_3 from "../../../../public/assets/services_3.png";
import service_4 from "../../../../public/assets/services_4.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function FirstSection() {
  const slideImages = [
    "/assets/services_banner.png",
    "/assets/services_2.png",
    "/assets/services_3.png",
    "/assets/services_4.png",
  ];

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <h1
        // data-aos="fade-right"
        >
          SERVICES
        </h1>
      </div>
    </div>
  );
}

export default FirstSection;
