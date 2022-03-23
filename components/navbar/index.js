import React from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className={classes.navbar_body}>
      <div className={classes.left_panel}>
        <div className={classes.logo}>
          <Image src={logo} alt="logo" />
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
