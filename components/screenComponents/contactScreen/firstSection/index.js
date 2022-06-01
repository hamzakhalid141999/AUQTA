import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";
import banner_img from "../../../../public/assets/contact_us_banner_img.png";
import Contact_Form from "./form";

function FirstSection() {
  return (
    <div className={classes.main_container}>
      <div
        style={{
          width: "100%",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        <iframe
          className={classes.iframe_container}
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/marine-gps/">marine gps</a>
        </iframe>
      </div>

      <div className={classes.dashboard_container}>
        <Contact_Form />
      </div>
    </div>
  );
}

export default FirstSection;
