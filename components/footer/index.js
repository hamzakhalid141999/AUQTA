import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/auqta-white.png";
import Image from "next/image";
import facebook from "../../public/assets/facebook.png";
import twitter from "../../public/assets/twitter.png";
import instagram from "../../public/assets/instagram.png";
import linkedin from "../../public/assets/linkedin.png";
import youtube from "../../public/assets/youtube.png";
import call from "../../public/assets/call.png";
import email from "../../public/assets/email.png";
import msg_icon from "../../public/assets/message_icon.png";
import pin_white from "../../public/assets/pin-locator-white.png";
import { useWindowSize } from "../../utils";
import Link from "next/link";

function Footer() {
  const { width } = useWindowSize();
  return (
    <div className={classes.footer_body}>
      <div className={classes.search_bar_container}>
        <div className={classes.search_bar_content}>
          <input
            placeholder="Enter your Email address"
            className={classes.search_bar}
          />
          <div className={classes.search_btn}>
            {width < 1000 ? (
              <img
                src={msg_icon.src}
                style={{ height: "20px", width: "20px" }}
              />
            ) : (
              <p>SUBSCRIBE</p>
            )}
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
          <Link href={"/about"}>
            <h1>About</h1>
          </Link>

          <Link href={"/services"}>
            <h1>Services</h1>
          </Link>
        </div>
        <div className={classes.col_2}>
          <Link href={"/all_developers"}>
            {/* <div className={classes.row}>
              <div className={classes.bullet} /> */}
            <h1>Developers</h1>
            {/* </div> */}
          </Link>

          <Link href={"/all_agents"}>
            <h1>Agents</h1>
          </Link>
        </div>
        <div className={classes.col_2}>
          <Link href={"/contact"}>
            <h1>Contact</h1>
          </Link>
          <Link href={"/FAQ"}>
            <h1>FAQ</h1>
          </Link>
        </div>
      </div>
      <div className={classes.footer_content_mobile}>
        <div className={classes.logo_container_mobile}>
          <Image src={logo} className={classes.logo_mobile} alt="logo" />
        </div>
        <h2>World{"'"}s First Immersive Real-Estate Portal</h2>
        <p>CONTACT US</p>
        <div className={classes.contact_us_mobile_section}>
          <div className={classes.contact_tab}>
            <img src={email.src} style={{ width: "23px" }} />
            <p>info@auqta.com</p>
          </div>
          <div className={classes.contact_tab}>
            <img src={call.src} style={{ width: "23px" }} />
            <p>+92 331 5008852</p>
          </div>
        </div>
        <div className={classes.socials_container_mobile}>
          <a
            href={"https://www.facebook.com/auqta.platforms/"}
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img src={facebook.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.instagram.com/auqta.platforms/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://twitter.com/auqta_platforms"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.youtube.com/channel/UC0qSh7p3S4jo57LsnAk2KQQ"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.linkedin.com/company/auqta/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin.src} className={classes.social_media_icon} />
          </a>
        </div>
      </div>
      <Link href={"terms_and_conditions"}>
        <p className={classes.mobile_terms_conditions}>
          TERMS - PRIVACY - COOKIE POLICY
        </p>
      </Link>

      <div className={classes.divider} />
      <div className={classes.lower_content_container}>
        <div className={classes.lower_content}>
          <div className={classes.left_content}>
            <p>AUQTA. 2022 ALL RIGHTS RESERVED</p>
            <Link href="/terms_and_conditions">
              <p>TERMS</p>
            </Link>
            <Link href="/terms_and_conditions">
              <p>PRIVACY</p>
            </Link>
            <Link href="/terms_and_conditions">
              <p>COOKIE POLICY</p>
            </Link>
          </div>
        </div>
        <div className={classes.social_media_icons}>
          Follow us
          <a
            href={"https://www.facebook.com/auqta.platforms/"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={facebook.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.instagram.com/auqta.platforms/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://twitter.com/auqta_platforms"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.youtube.com/channel/UC0qSh7p3S4jo57LsnAk2KQQ"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube.src} className={classes.social_media_icon} />
          </a>
          <a
            href={"https://www.linkedin.com/company/auqta/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin.src} className={classes.social_media_icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
