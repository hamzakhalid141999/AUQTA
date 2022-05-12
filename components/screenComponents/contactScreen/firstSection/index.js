import React, {useState, useEffect} from 'react';
import classes from "./firstSection.module.css";
import Image from 'next/image';
import banner_img from "../../../../public/assets/contact_us_banner_img.png";
import Contact_Form from './form';

function FirstSection() {

  return (
  <div className={classes.main_container}>

    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        {/* <div className={classes.overlay} /> */}
        <Image
          src={banner_img}
          className={classes.banner_img}
          alt="hero_banner_img"
          layout="fill"
        />
      </div>
    </div>

    <div className={classes.dashboard_container}>
      <Contact_Form/>
    </div>

  </div>
  )
}

export default FirstSection;