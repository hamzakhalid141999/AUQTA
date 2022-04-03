import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import {Link} from 'react-scroll'

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.search_bar_container}>
        <div className={classes.search_bar_content}>
          <input placeholder="Enter your email address" className={classes.search_bar} />
          <div className={classes.search_btn}><p>SUBSCRIBE</p></div>
        </div>
      </div>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <Image src={logo} className={classes.logo} alt="logo" />
          </div>
        </div>
        <div className={classes.col_2}>
          <h1>EXPLORE</h1>
          <p><Link to="mission" spy={true} smooth={true}>ABOUT US</Link></p>
          <p><Link to="home" spy={true} smooth={true}>HOME</Link></p>
          <p><Link to="buy" spy={true} smooth={true}>FEATURES</Link></p>
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
          <p>aliasghar@auqta.com</p>
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
