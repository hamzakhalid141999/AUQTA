import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import facebook from "../../public/assets/facebook.png";
import twitter from "../../public/assets/twitter.png";
import instagram from "../../public/assets/instagram.png";
import {Link} from 'react-scroll'

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.search_bar_container}>
        <div className={classes.search_bar_content}>
          <input placeholder="Enter your Email address" className={classes.search_bar} />
          <div className={classes.search_btn}><p>SUBSCRIBE</p></div>
        </div>
      </div>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <Image src={logo} className={classes.logo} alt="logo" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis tincidunt urna, at efficitur orci suscipit non. Morbi pellentesque arcu vel accumsan aliquet. Curabitur sit amet ex felis. Duis lacinia porta convallis. Mauris orci lorem, interdum a faucibus sed, elementum in odio. Mauris sollicitudin viverra iaculis.</p>

        </div>
        <div className={classes.col_2}>
          <h1>ABOUT</h1>
          <p>OUR STORY</p>
          <p>OUR VISION</p>
          <p>MISSION STATEMENT</p>
          <p>OUR VALUES</p>
          <p>WHAT MAKES AUQTA UNIQUE</p>
          <p>MISSION STATEMENT</p>
        </div>
        <div className={classes.col_2}>
          <h1>SERVICES</h1>
          <p>ARCHITECTURAL VISUALISATION</p>
          <p>AUGMENTED STRUCTURES</p>
          <p>VIRTUAL REALITY</p>
          <p>ADDITIONAL SERVICES</p>
        </div>
        <div className={classes.col_2}>
          <h1>CONTACT</h1>
          <p>aliasghar@auqta.com</p>
          <p>+92 331 5008852</p>
          <p>Raj Heights, River View Commercial, Phase 7. Bahria Town, Islamabad</p>
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
        <div className={classes.social_media_icons}>
          <img src={facebook.src} className={classes.social_media_icon}/>
          <img src={instagram.src} className={classes.social_media_icon}/>
          <img src={twitter.src} className={classes.social_media_icon}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
