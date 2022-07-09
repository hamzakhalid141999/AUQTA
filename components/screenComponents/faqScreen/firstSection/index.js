/* eslint-disable */

import React from "react";
import classes from "./firstScreen.module.css";
import Image from "next/image";
import banner_img from "../../../../public/assets/services_banner_img.png";
import service_1 from "../../../../public/assets/services_1.png";
import service_2 from "../../../../public/assets/services_2.png";
import service_3 from "../../../../public/assets/services_3.png";
import service_4 from "../../../../public/assets/services_4.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function FirstSection() {
  const slideImages = ["/assets/faq_banner.jpeg"];

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <h1
        // data-aos="fade-right"
        >
          FAQ
        </h1>
        <p>
          Here you can find Frequently Asked Questions, we're here to answer
          you!
        </p>
      </div>
    </div>
  );
}

export default FirstSection;
