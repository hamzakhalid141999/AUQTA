/* eslint-disable */

import React from "react";
import classes from "./firstSection.module.css";
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
          BLOGS
        </h1>
      </div>
    </div>
  );
}

export default FirstSection;
