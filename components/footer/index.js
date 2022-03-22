import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.search_bar_container}>
        <div className={classes.search_bar_content}>
          <input placeholder="ENTER YOUR EMAIL ADDRESS" className={classes.search_bar} />
          <div className={classes.search_btn}><p>SUBSCRIBE</p></div>
        </div>
      </div>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <Image src={logo} className={classes.logo} alt="logo" />
          </div>
          <p>
            LOREM IPSUM IS SIMPLY A DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY. IT HAS SURVIVED NOT ONLY THE FIVE CENTURIES
          </p>
        </div>
        <div className={classes.col_2}>
          <h1>EXPLORE</h1>
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>FEATURES</p>
          <p>WORK</p>
          <p>BLOG</p>
        </div>
        <div className={classes.col_2}>
          <h1>SERVICES</h1>
          <p>FAQ</p>
          <p>TESTIMONIAL</p>
          <p>CONTACT US</p>
          <p>PRICING</p>
          <p>HELP</p>
        </div>
        <div className={classes.col_2}>
          <h1>CONTACT</h1>
          <p>info@abcemail.com</p>
          <p>+92 3333 5555</p>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.lower_content_container}>
        <div className={classes.lower_content}>
          <div className={classes.left_content}>
            <p>AUQTA. 2022 ALL RIGHTS RESERVED</p>
            <p>TERMS</p>
            <p>PRIVACY</p>
            <p>IMPRINT</p>
            <p>COOKIE POLICY</p>
            <p>SITEMAP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
