import React, { useEffect, useState } from "react";
import classes from "./ourMission.module.css";
import Image from "next/image";
import our_mission from "../../../../public/assets/our_mission.png";
import icon1 from "../../../../public/assets/our_mission_1.png";
import icon2 from "../../../../public/assets/our_mission_2.png";
import icon3 from "../../../../public/assets/our_mission_3.png";
import icon4 from "../../../../public/assets/our_mission_4.png";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

function OurMission() {
  const [isVideo, setIsVideo] = useState(true);

  const toggleVideo = () => {
    setIsVideo(!isVideo);
  };

  useEffect(() => {
    // AOS.init({
    //   startEvent: "load",
    //   disableMutationObserver: false,
    //   duration: 500,
    // });
    // AOS.refresh();
  }, []);

  return (
    <div className={classes.mission_section_wrapper}>
      <div id="mission" className={classes.mission_section_section}>
        <div
          // data-aos="fade-up"
          className={classes.typewriter_container}
        >
          <br />
          <div className={classes.typewriter_row}>
            <p className={classes.experience}>Experience </p>
            <Typewriter
              words={[
                "Augmented",
                "integrated",
                "Quantum",
                "Technological",
                "Architecture",
                "AUQTA",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        <h1
          className={classes.heading}
          style={{ textTransform: "uppercase" }}
          // data-aos="fade-up"
        >
          World{"’"}s First Immersive Real Estate Portal
        </h1>
        <p
          className={classes.subheading}
          // data-aos="fade-up"
        >
          Introducing Auqta the world’s first immersive real-estate trading
          portal. Immersive technologies include Augmented Reality and Virtual
          Reality, allowing the user to experience physical spaces in a digital
          environment. The property trading experience will become seamless as
          the user will have the convenience to visualise existing and
          investment architecture from anywhere around the world.{" "}
        </p>
        <div className={classes.content_container}>
          <div onClick={toggleVideo} className={classes.image_container}>
            {isVideo ? (
              <video
                playsInline
                className={classes.video_card}
                loop
                muted
                autoPlay
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/media/card_video_2.mp4"
              />
            ) : (
              <iframe
                className={classes.video_card}
                style={{ borderRadius: "40px", objectFit: "initial" }}
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/vr/Business_District_Bahria_Town_VR.html"
                // height="500px"
                // width="100%"
              />
            )}{" "}
          </div>
          <div className={classes.values_container}>
            <div
              // data-aos="fade-up"
              className={classes.single_tab}
            >
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon1} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>DIGITAL IMMERSION</h1>
                <p>
                  Auqta provides digital visualisation of every property space
                  from anywhere around the world.{" "}
                </p>
              </div>
            </div>
            <div
              // data-aos="fade-up"
              className={classes.single_tab}
            >
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon2} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>CONVENIENT VIEWING</h1>
                <p>
                  Have the convenience of viewing and analysing
                  projects/properties and their respected locations from your
                  doorsteps.{" "}
                </p>
              </div>
            </div>
            <div
              // data-aos="fade-up"
              className={classes.single_tab}
            >
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon3} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>SMART INVESTING</h1>
                <p>
                  Analysing investment options in terms of location and the
                  project itself requires a lot of time and resources. Make
                  these decisions at home before even meeting with an agent.{" "}
                </p>
              </div>
            </div>
            <div
              // data-aos="fade-up"
              className={classes.single_tab}
            >
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon4} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>ELEVATED MARKETING</h1>
                <p>
                  Enhance the marketing prospects of your project/property. The
                  integration of immersive technologies will genuinely enhance
                  the architectural viewing experience of the user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
