import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import facebook from "../../public/assets/facebook.png";
import twitter from "../../public/assets/twitter.png";
import instagram from "../../public/assets/instagram.png";
import linkedin from "../../public/assets/linkedin.png";
import youtube from "../../public/assets/youtube.png";
import call from "../../public/assets/call.png";
import email from "../../public/assets/email.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.search_bar_container}>
        <div className={classes.search_bar_content}>
          <input
            placeholder="Enter your Email address"
            className={classes.search_bar}
          />
          <div className={classes.search_btn}>
            <p>SUBSCRIBE</p>
          </div>
        </div>
      </div>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <Image src={logo} className={classes.logo} alt="logo" />
          </div>
          <p>
            Auqta is the World’s First Immersive Real Estate Portal, where users
            can visualise properties digitally. The integration of immersive
            technologies such as Augmented Reality and Virtual Reality takes a
            new leap in the real estate industry.{" "}
          </p>
        </div>
        <div className={classes.col_2}>
          <h1>About</h1>
          <div className={classes.row}><div className={classes.bullet}/><p>Our Story</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Our Vision</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Mission Statement</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Our Values</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>What makes AUQTA unique</p></div>
        </div>
        <div className={classes.col_2}>
          <h1>Services</h1>
          <div className={classes.row}><div className={classes.bullet}/><p>Architectural Visualisation</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Augmented Structures</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Virtual Reality</p></div>
          <div className={classes.row}><div className={classes.bullet}/><p>Additional Services</p></div>
        </div>
        <div className={classes.col_2}>
          <h1>Contact</h1>
          <div className={classes.row}><img style={{height: "15px"}} src={email.src} className={classes.social_media_icon} /><p>aliasghar@auqta.com</p></div>
          <div className={classes.row}><img style={{height: "15px"}} src={call.src} className={classes.social_media_icon} /><p>+92 331 5008852</p></div>
          <div className={classes.row}><img style={{height: "15px"}} src={facebook.src} className={classes.social_media_icon} /><p>
            Raj Heights, River View Commercial, Phase 7. Bahria Town, Islamabad
          </p>
          </div>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.lower_content_container}>
        <div className={classes.lower_content}>
          <div className={classes.left_content}>
            <p>AUQTA. 2022 ALL RIGHTS RESERVED</p>
            <p>TERMS</p>
            <p>PRIVACY</p>
            <p>COOKIE POLICY</p>
          </div>
        </div>
        <div className={classes.social_media_icons}>
          Follow us 
          <img src={facebook.src} className={classes.social_media_icon} />
          <img src={instagram.src} className={classes.social_media_icon} />
          <img src={twitter.src} className={classes.social_media_icon} />
          <img src={youtube.src} className={classes.social_media_icon} />
          <img src={linkedin.src} className={classes.social_media_icon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
