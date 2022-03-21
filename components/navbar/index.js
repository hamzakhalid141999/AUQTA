import React from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

function Navbar() {
  return (
    <div className={classes.navbar_body}>
      <div className={classes.left_panel}>
        <div className={classes.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={classes.right_panel}>
        <p>ABOUT</p>
        <p>SERVICES</p>
        <p>BUY</p>
        <p>SELL</p>
        <p>RENT</p>
        <p>INVEST</p>
        <p>LOGIN</p>
      </div>
    </div>
  );
}

export default Navbar;
