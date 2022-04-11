import React from "react";
import classes from "./developerSection.module.css";
import Image from "next/image";
import gold from "../../../../public/assets/gold_icon.png"

function DeveloperSection() {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1>DEVELOPER PACKAGE</h1>
        <div className={classes.packages_container}>
        <div className={classes.card_body}>
            <div className={classes.icon_container}>
              <Image
                src={gold}
                layout="fill"
                className={classes.icon}
                alt="icon"
              />
            </div>
            <h1>Silver</h1>
            <p>Interior/Exterior Renderings</p>
            <p>Dynamic Virtual Tour (Interior)</p>
            <p>Dynamic Virtual Tour (Exterior)</p>
            <p>Locality Tour</p>

            <div className={classes.btn}>
                <p>START NOW</p>
            </div>
          </div>

          <div className={classes.card_body}>
            <div className={classes.icon_container}>
              <Image
                src={gold}
                layout="fill"
                className={classes.icon}
                alt="icon"
              />
            </div>
            <h1>Gold</h1>
            <p>Interior/Exterior Renderings</p>
            <p>Dynamic Virtual Tour (Interior)</p>
            <p>Dynamic Virtual Tour (Exterior)</p>
            <p>Locality Tour</p>
            <p>Cinematic Virtual Video</p>

            <div className={classes.btn}>
                <p>START NOW</p>
            </div>
          </div>

          <div className={classes.card_body}>
            <div className={classes.icon_container}>
              <Image
                src={gold}
                layout="fill"
                className={classes.icon}
                alt="icon"
              />
            </div>
            <h1>Platinum</h1>
            <p>Interior/Exterior Renderings</p>
            <p>Dynamic Virtual Tour (Interior)</p>
            <p>Dynamic Virtual Tour (Exterior)</p>
            <p>Locality Tour</p>
            <p>Cinematic Virtual Video</p>
            <p>Interactive Floor Plan</p>
            <p>3D on Construction Site</p>
            <p>Interactive Brochure</p>

            <div className={classes.btn}>
                <p>START NOW</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DeveloperSection;
