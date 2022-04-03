import React, {useEffect, useState} from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import logo_black from "../../public/assets/logo_black.png";
import {Link} from 'react-scroll'

function Navbar() {

  const [backgroundColor, setBackgroundColor] = useState("transparent")
  let listener = null;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 600) {
        if (backgroundColor !== "opaque") {
          setBackgroundColor("opaque");
        }
      } else {
        if (backgroundColor !== "transparent") {
          setBackgroundColor("transparent");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div className={backgroundColor === "opaque" ? classes.navbar_body_opaque : classes.navbar_body}>
      <div className={classes.left_panel}>
        <div className={classes.logo}>
          <Image src={backgroundColor === "transparent" ? logo : logo_black} alt="logo" />
        </div>
      </div>
      <div className={classes.right_panel}>
        <p><Link to="mission" spy={true} smooth={true}>ABOUT</Link></p>
        <p>SERVICES</p>
        <p><Link to="buy" spy={true} smooth={true}>BUY</Link></p>
        <p><Link to="buy" spy={true} smooth={true}>SELL</Link></p>
        <p><Link to="buy" spy={true} smooth={true}>RENT</Link></p>
        <p><Link to="trending" spy={true} smooth={true}>INVEST</Link></p>
        <p>LOGIN</p>
      </div>
    </div>
  );
}

export default Navbar;
