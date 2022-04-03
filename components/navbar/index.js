import React, {useEffect, useState} from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import logo_black from "../../public/assets/logo_black.png";
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  const [categorySelected, setCategorySelected] = useState("buy");
  const [backgroundColor, setBackgroundColor] = useState("transparent")
  let listener = null;

  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  }

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
      <div className={backgroundColor === "opaque" ? classes.filter_panel : classes.filter_panel_hidden}>
        <div className={classes.filter_panel_content}>
          <div className={classes.btns_container}>
            <div onClick={()=>{
              handleCategorySelected("buy");
            }} className={classes.filter_panel_btn}>
              <p className={categorySelected === "buy" ? classes.filter_panel_btn_label_selected : classes.filter_panel_btn_label_unselected}>BUY</p>
            </div>
            <div className={classes.divider}/>
            <div onClick={()=>{
              handleCategorySelected("rent");
            }} className={classes.filter_panel_btn}>
              <p className={categorySelected === "rent" ? classes.filter_panel_btn_label_selected : classes.filter_panel_btn_label_unselected}>RENT</p>
            </div>
            <div className={classes.divider}/>
            <div onClick={()=>{
              handleCategorySelected("invest");
            }} className={classes.filter_panel_btn}>
              <p className={categorySelected === "invest" ? classes.filter_panel_btn_label_selected : classes.filter_panel_btn_label_unselected}>INVEST</p>
            </div>
          </div>
          <div className={classes.search_bar}>
              <div className={classes.search_category}>
                <p>CITY</p>
                <h3>BALAKAN MOUNTAINS</h3>
              </div>
              <div className={classes.divider2} />
              <div className={classes.search_category}>
                <p>LOCATION</p>
                <h3>SOUTH EASTERN EUROPE</h3>
              </div>
              <div className={classes.divider2} />
              <div className={classes.search_category}>
                <p>PROPERTY TYPE</p>
                <h3>PRIVATE HOUSE</h3>
              </div>
              <div className={classes.divider2} />
              <div className={classes.search_category}>
                <p>PRICE RANGE</p>
                <h3>$40000 - $60000</h3>
              </div>
              <div className={classes.search_icon}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faSearch}
                  size={"1x"}
                />
              </div>
            </div>
        </div>
      </div>
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
