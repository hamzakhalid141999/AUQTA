import React from 'react';
import classes from "./picturesSection.module.css";
import ReactCardCarousel from "react-card-carousel";
import hotel_1 from "../../../../public/assets/hotel_1.png";
import hotel_2 from "../../../../public/assets/hotel_2.png";
import hotel_3 from "../../../../public/assets/hotel_3.png";
import hotel_4 from "../../../../public/assets/hotel_4.png";
import hotel_5 from "../../../../public/assets/hotel_5.png";

function PictureSection() {

    const slideImages = [
        '/assets/hotel_1.png',
        '/assets/hotel_2.png',
        '/assets/hotel_3.png',
        '/assets/hotel_4.png',
        '/assets/hotel_5.png',
        '/assets/hotel_6.png'
      ];


  return (
    <div className={classes.picture_section}>
        <div className={classes.carousel_container}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={{'backgroundImage': `url(${slideImages[0]})`}} className={classes.carousel_card}></div>
          <div style={{'backgroundImage': `url(${slideImages[1]})`}} className={classes.carousel_card}></div>
          <div style={{'backgroundImage': `url(${slideImages[2]})`}} className={classes.carousel_card}></div>
          <div style={{'backgroundImage': `url(${slideImages[3]})`}} className={classes.carousel_card}></div>
          <div style={{'backgroundImage': `url(${slideImages[4]})`}} className={classes.carousel_card}></div>
        </ReactCardCarousel>
        </div>
    </div>
  )
}

export default PictureSection