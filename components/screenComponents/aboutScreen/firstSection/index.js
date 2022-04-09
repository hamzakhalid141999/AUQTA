import React, {useEffect} from 'react';
import classes from "./firstSection.module.css";
import Image from 'next/image';
import banner_img from "../../../../public/assets/about_page_banner_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";


function FirstSection() {

  
  useEffect(()=>{
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  },[])

  return (
    <div id="home" className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Image
          src={banner_img}
          className={classes.banner_img}
          alt="hero_banner_img"
          layout="fill"
        />
      </div>
      <div className={classes.first_section_content_section}>
        <h1 data-aos="fade-right">LOREM IPSUM IS JUST A DUMMY TEXT</h1>
        <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p>
      </div>
    </div>
  )
}

export default FirstSection