import React, {useEffect} from "react";
import classes from "./ourMission.module.css";
import Image from "next/image";
import our_mission from "../../../../public/assets/our_mission.png";
import icon1 from "../../../../public/assets/our_mission_1.png";
import icon2 from "../../../../public/assets/our_mission_2.png";
import icon3 from "../../../../public/assets/our_mission_3.png";
import icon4 from "../../../../public/assets/our_mission_4.png";
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
    <div className={classes.mission_section_wrapper}>
      <div id="mission" className={classes.mission_section_section}>
        <h1 data-aos="fade-up">WHY CHOOSE US?</h1>
        <p className={classes.subheading} data-aos="fade-up">
          Introducing AUQTA, the world{"'"}s first immersive real-estate trading portal. Immersive technologies include Augmented Reality and Virtual Reality, which will indulge the user in a digital environment around the world. The property trading experience will become seamless and convivial, as the user will now visualise digitally created physical spaces before deciding to go forward
        </p>
        <div className={classes.content_container}>
          <div className={classes.image_container}>
            <Image
            data-aos="fade-left"
              src={our_mission}
              alt="pic"
              layout="responsive"
              className={classes.img}
            />
          </div>
          <div className={classes.values_container}>
            <div data-aos="fade-up" className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon1} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>DIGITAL EXPERIENCES</h1>
                <p>
                  Embrace yourself in the world of immersive technologies where every physical space is captured in a digital environment. Auqta provides digital visualisation of every property space from anywhere around the world.{" "}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon2} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>CONVINIENT VIEWING</h1>
                <p>
                  Have the convenience of viewing and analysing properties/projects and their respected locations from your doorsteps. We at Auqta understand the daunting process of viewing and thus, want to provide absolute convenience to our user base.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon3} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>SMART INVESTING</h1>
                <p>
                  Analyst investment options in terms of locaiton and the project itself requires a lot of time and resources. Make these decisions at home before even meeting with an agent. Auqta believes in smart investing so let technology guide you in your investment journey.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon4} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>INTEGRITY</h1>
                <p>
                  We always prioritise righteousness and choose to operate
                  professionally and ethically.
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
