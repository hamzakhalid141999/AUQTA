import React from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import location_pointer from "../../../../public/assets/pin-locator-white.png";
import Link from "next/link";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import hotel_1 from "../../../../public/assets/hotel_1.png";
import hotel_2 from "../../../../public/assets/hotel_2.png";
import hotel_3 from "../../../../public/assets/hotel_3.png";
import hotel_4 from "../../../../public/assets/hotel_4.png";
import hotel_5 from "../../../../public/assets/hotel_5.png";
import hotel_6 from "../../../../public/assets/hotel_6.png";
import { Slide } from 'react-slideshow-image';


function FirstSection() {

  const slideImages = [
    '/assets/hotel_1.png',
    '/assets/hotel_2.png',
    '/assets/hotel_3.png',
    '/assets/hotel_4.png',
    '/assets/hotel_5.png',
    '/assets/hotel_6.png'
  ];

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{height: '100%'}} easing="ease">
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>
          <div className={classes.each_slide}>
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
            </div>
          </div>
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <div className={classes.property_info}>
          <div className={classes.property_stats}>
            <h1 className={classes.propert_name}>Budapest Sign Hotel</h1>
            <div className={classes.divider} />
            <p className={classes.pkr}>PKR</p>
            <h1 className={classes.price}> 65 lac - 2.75 cr</h1>
          </div>
          <div className={classes.row}>
            <img src={location_pointer.src} className={classes.location_icon} />
            <p className={classes.property_location}>Bahria Town, Islamabad</p>
          </div>
        </div>
        {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
        <div className={classes.btns_container}>
        {/* <div className={classes.banner_btn}>
          <p>Logo</p>
        </div>
        <Link href={"/developer"}>
        <div className={classes.banner_btn}>
          <p>Developer Name<span>{">"}</span></p>
        </div>
        </Link> */}
  
        </div>
        
      </div>
    </div>
  );
}

export default FirstSection;
