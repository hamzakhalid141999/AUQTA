import React, { useEffect } from "react";
import classes from "./ourMission.module.css";
import Image from "next/image";
import vision from "../../../../public/assets/vision_icon.png";
import our_story from "../../../../public/assets/about_our_story_img.png";
import mission from "../../../../public/assets/mission_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

function OurMission() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={classes.main_container}>
      <div className={classes.content_content}>
        <div
          //  data-aos="fade-right"
          className={classes.image_container}
        >
          <Image
            // data-aos="fade-left"
            src={our_story}
            alt="pic"
            layout="responsive"
            className={classes.img}
          />
        </div>
        <div
          // data-aos="fade-left"
          className={classes.description_container}
        >
          <h1>OUR STORY</h1>
          <p>
            With a core belief of revolutionising the real estate industry
            through technological innovation, Auqta was founded in 2021. The
            idea behind Auqta was to increase the real estate investment
            potential by allowing overseas Pakistanis to invest seamlessly and
            conveniently. Thus, benefiting Pakistan’s real estate industry.
            Moreover, traditional property portals are creations of the past. We
            simply want to elevate the user’s experience when it comes to
            property trading.
          </p>
          <br />
          <p>
            Being the world’s first immersive property portal, Auqta enables its
            user base to view properties and its surrounding location in a
            digital environment. Thus, visualise everything digitally and find
            the right property for yourself from the comfort of your doorsteps
            anywhere in the world.
          </p>
        </div>
      </div>
      <div className={classes.cards_container}>
        <div className={classes.vision_mission_content}>
          <div
            // data-aos="fade-right"
            className={classes.our_vision_card}
          >
            <h1>OUR VISION</h1>
            <div className={classes.icon_container}>
              <Image src={vision} className={classes.icon} />
            </div>
            <p>
              Having a core belief that technological innovation is the way
              forward, our vision is to recreate Pakistan{"'"}s property trading
              experience
            </p>
          </div>
          <div
            // data-aos="fade-left"
            className={classes.our_mission_card}
          >
            <h1>MISSION STATEMENT</h1>
            <div className={classes.icon_container}>
              <Image src={mission} className={classes.icon} />
            </div>
            <p>
              Delivering digital convenience to buyers, sellers, investors, and
              realtors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
