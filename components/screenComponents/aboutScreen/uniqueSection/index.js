import React, { useEffect } from "react";
import classes from "./uniqueSection.module.css";
import Image from "next/image";
import img from "../../../../public/assets/unique_section_img.png";
import icon1 from "../../../../public/assets/unique_icon_1.png";
import icon2 from "../../../../public/assets/unique_icon_2.png";
import icon3 from "../../../../public/assets/unique_icon_3.png";
import icon4 from "../../../../public/assets/unique_icon_4.png";
import AOS from "aos";
import "aos/dist/aos.css";

function UniqueSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={classes.unique_section}>
      <div className={classes.content_container}>
        <h1 data-aos="fade-up">WHAT MAKES US UNIQUE</h1>
        <p data-aos="fade-up">
          Digital property portals exist everywhere where the user filters out
          interested properties based upon location, size, price preferences
          etc. The use of pictorial architecture in the form of photos and
          videos does not provide enough information to the end user, especially
          who are living out of the city or in a foreign country. The
          integration of immersive technologies together with our unique
          interface makes the business model of Auqta one of a kind.
        </p>
        <div className={classes.media_container}>
          <div className={classes.bullets_container}>
            <div data-aos="fade-up" className={classes.single_tab}>
              <div className={classes.icon_holder}>
                <div className={classes.icon_container}>
                  <Image src={icon1} className={classes.tab_icon} alt="icon" />
                </div>
              </div>
              <div className={classes.description_container}>
                <h1>NEXT GENERATION UI</h1>
                <p>
                  A unique user interface designed by a team of world class
                  software developers.{" "}
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
                <h1>BESPOKE SERVICES</h1>
                <p>
                  Bespoke architectural services for bringing your vision to
                  life.{" "}
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
                <h1>API INTEGRATION</h1>
                <p>
                  Mass scale integration of augmented reality and virtual
                  reality APIs.{" "}
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
                <h1>UNIQUE EXPERIENCE</h1>
                <p>
                  An elevated property trading experience like never before.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={classes.image_container}>
            <Image layout="fill" data-aos="fade-left" className={classes.img} src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueSection;
