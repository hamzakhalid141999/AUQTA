import React, {useEffect} from "react";
import classes from "./ourMission.module.css";
import Image from "next/image";
import our_story from "../../../../public/assets/about_our_story_img.png";
import vision from "../../../../public/assets/vision_icon.png";
import mission from "../../../../public/assets/mission_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

function OurMission() {

  useEffect(()=>{
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  },[])

  return (
    <div className={classes.main_container}>
      <div className={classes.content_content}>
        <div data-aos="fade-right" className={classes.image_container}>
          <Image
            data-aos="fade-left"
            src={our_story}
            alt="pic"
            layout="responsive"
            className={classes.img}
          />
        </div>
        <div data-aos="fade-left" className={classes.description_container}>
          <h1>OUR STORY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            efficitur orci, eu auctor mauris. Donec scelerisque urna at odio
            porttitor aliquam. Nam efficitur turpis vitae urna semper, sed
            lobortis mauris accumsan. Mauris eu rutrum magna. Nunc pellentesque
            diam vel finibus convallis
          </p>
          <div className={classes.read_more_btn}>
            <p>READ MORE</p>
          </div>
        </div>
      </div>
      <div className={classes.cards_container}>
        <div className={classes.vision_mission_content}>
          <div data-aos="fade-right" className={classes.our_vision_card}>
            <h1>OUR VISION</h1>
            <div className={classes.icon_container}>
              <Image src={vision} className={classes.icon}/>
            </div>
            <p>Having a core belief that technological innovation is the way forward, our vision is to recreate Pakistan{"'"}s property trading experience</p>
          </div>
          <div data-aos="fade-left" className={classes.our_mission_card}>
          <h1>MISSION STATEMENT</h1>
            <div className={classes.icon_container}>
              <Image src={mission} className={classes.icon}/>
            </div>
            <p>Delivering digital convenience to buyers, sellers, investors, and realtors</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurMission;
