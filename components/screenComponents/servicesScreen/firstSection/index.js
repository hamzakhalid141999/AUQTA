import React from 'react';
import classes from "./servicesScreen.module.css";
import Image from 'next/image';
import banner_img from "../../../../public/assets/services_banner_img.png";

function FirstSection() {
  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Image
          src={banner_img}
          className={classes.banner_img}
          alt="hero_banner_img"
          layout="fill"
        />
      </div>
      <div className={classes.first_section_content_section}>
        <h1 data-aos="fade-right">SERVICES</h1>
      </div>
    </div>
  )
}

export default FirstSection