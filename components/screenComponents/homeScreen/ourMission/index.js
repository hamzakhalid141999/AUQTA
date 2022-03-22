import React from "react";
import classes from "./ourMission.module.css";
import Image from "next/image";
import our_mission from "../../../../public/assets/our_mission.png";
import icon1 from "../../../../public/assets/our_mission_1.png";
import icon2 from "../../../../public/assets/our_mission_2.png";
import icon3 from "../../../../public/assets/our_mission_3.png";
import icon4 from "../../../../public/assets/our_mission_4.png";

function OurMission() {
  return (
    <div className={classes.mission_section_wrapper}>
      <div className={classes.mission_section_section}>
        <h1>OUR MISSION</h1>
        <p>
          Delivering digital convenience to buyers, sellers, investors, and
          realtors
        </p>
        <div className={classes.content_container}>
          <div className={classes.image_container}>
            <Image
              src={our_mission}
              alt="pic"
              layout="responsive"
              className={classes.img}
            />
          </div>
          <div className={classes.values_container}>
            <div className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon1} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>CONVENIENCE</h1>
                <p>
                  We always seek to prioritise a user-friendly experience. Thus,
                  convenience forms our prime value on which this platform was
                  built.{" "}
                </p>
              </div>
            </div>
            <div className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon2} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>INNOVATION</h1>
                <p>
                  Innovation is elemental and thus, we embrace it in every
                  culture of our company.
                </p>
              </div>
            </div>
            <div className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon3} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>TEAMWORK</h1>
                <p>
                  We believe a united team is the backbone of every successful
                  organization. Thus, team unity and equality are core standards
                  in our culture.
                </p>
              </div>
            </div>
            <div className={classes.single_tab}>
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
