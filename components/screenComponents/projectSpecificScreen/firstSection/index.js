import React from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import location_pointer from "../../../../public/assets/pin-locator-white.png";
import Link from "next/link";

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
        <div className={classes.property_info}>
          <div className={classes.property_stats}>
            <h1 className={classes.propert_name}>Budapest Sign Hotel</h1>
            <div className={classes.divider} />
            <p className={classes.pkr}>PKR</p>
            <h1 className={classes.price}> 65 lac - 2.75 cr</h1>
          </div>
          <div className={classes.row}>
            <img src={location_pointer.src} style={{ height: "30px" }} />
            <p className={classes.property_location}>Bahria Town, Islamabad</p>
          </div>
        </div>
        {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
        <div className={classes.btns_container}>
        <div className={classes.banner_btn}>
          <p>Logo</p>
        </div>
        <div className={classes.banner_btn}>
          <p>Developer Name<span>{">"}</span></p>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default FirstSection;
