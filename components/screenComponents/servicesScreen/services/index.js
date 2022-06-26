import React from "react";
import classes from "./services.module.css";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import service1 from "../../../../public/assets/service_1_icon.png";
import service2 from "../../../../public/assets/service_2_icon.png";
import service3 from "../../../../public/assets/service_3_icon.png";
import service4 from "../../../../public/assets/service_4_icon.png";
import logo1 from "../../../../public/assets/service_1_heading_icon.png";
import logo2 from "../../../../public/assets/service_2_heading_icon.png";
import logo3 from "../../../../public/assets/service_3_heading_icon.png";
import logo4 from "../../../../public/assets/service_4_heading_icon.png";

function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.description_container}>
          <h3>
            Experience Architecture Digitalisation at Auqta and bring your
            vision to life
          </h3>
          {/* <div className={classes.btn}>
            <p>READ MORE</p>
          </div> */}
        </div>

        <div className={classes.heading_mobile}>
          <div className={classes.icon_container_mobile}>
            <Image className={classes.img} src={logo1} />
          </div>
          <p>ARCHITECTURAL VISUALISATION</p>
        </div>
        <div
          style={{ flexDirection: "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            <Image src={service1} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo1} />
              </div>
              <div className={classes.title_container}>
                <p>ARCHITECTURAL VISUALISATION</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                Architectural visualisation is the art of crafting a
                three-dimensional structure or space through cutting edge
                technology. This can enable people to visualise structures that
                haven’t been built or view existing structures from anywhere
                across the globe. The services include:
              </p>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    ARCHITECTURAL RENDERINGS
                  </p>
                </div>
                <p>Photorealistic depiction of your architectural design</p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>DYNAMIC VIRTUAL TOUR</p>
                </div>
                <p>
                  Complete walkthrough of your exterior and interior through
                  specific pinpoints.
                </p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>LOCALITY TOUR</p>
                </div>
                <p>
                  Complete walkthrough of the real-time surrounding location of
                  the architecture
                </p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>CINEMATIC VIRTUAL VIDEO</p>
                </div>
                <p>
                  Experience your project in a cinematic video tour showcasing
                  its exterior, interior and surrounding
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.heading_mobile}>
          <div className={classes.icon_container_mobile}>
            <Image className={classes.img} src={logo2} />
          </div>
          <p>AUGMENTED STRUCTURES</p>
        </div>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            <Image src={service2} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo2} />
              </div>
              <div className={classes.title_container}>
                <p>AUGMENTED STRUCTURES</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                Augmented reality superimposes a digital layer upon physical
                content which allows the user to interact with a structure in a
                physical environment. This is an innovative marketing solution
                for realtors who can showcase their future projects with the tip
                of their smartphones/tablets. Services include:
              </p>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>INTERACTIVE FLOOR PLAN</p>
                </div>
                <p>
                  Project your architectural structure through your floor plan.
                </p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>3D ON CONSTRUCTION SITE</p>
                </div>
                <p>
                  Visualise your future project on the actual construction site.
                </p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>INTERACTIVE BROUCHERS</p>
                </div>
                <p>
                  Elevate your client’s experience through our immersive
                  brochures which contain interactive floor plans of your
                  structure and creative content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
