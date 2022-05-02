import React from "react";
import classes from "./projectContentSection.module.css";
import Image from "next/image";
import img1 from "../../../../public/assets/project_overview_img.png";
import img2 from "../../../../public/assets/project_virtual_view.png";
import FindSectionCards from "../../homeScreen/findSection/components";
import icon1 from "../../../../public/assets/project_card_construction_site_icon.png";
import icon2 from "../../../../public/assets/project_card_interactive_broucher_icon.png";
import icon3 from "../../../../public/assets/project_card_3d_plan_icon.png";

function ProjectConentSection() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div
          style={{ flexDirection: "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            <Image src={img1} className={classes.img} />
          </div>
          <div className={classes.description}>
            <h1>OVERVIEW OF THE PROJECT</h1>
            <div className={classes.service_description_container}>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    INTERIOR/EXTERIOR RENDERINGS
                  </p>
                </div>
                <p>Photorealistic depiction of your architectural design</p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    DYNAMIC VIRTUAL TOUR (INTERIOR)
                  </p>
                </div>
                <p>
                  Complete walkthrough of your interior through specific
                  pinpoints
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
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            <Image src={img2} className={classes.img} />
          </div>
          <div className={classes.description}>
            <h1>VIRTUAL VIEW OF THE LOCATION</h1>
            <div className={classes.service_description_container}>
              <p>
                Augmented reality superimposes a digital layer upon physical
                content which allows user to interact with a structure in a
                physical environment. This is an innovative marketing solution
                for realtors who can showcase their future projects with the tip
                of their smartphones/tablets.
              </p>
              <p>
                So, Contact Us! and elevate your immersive experience with your
                future property.
              </p>
              <p>Our augmented reality services include:</p>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>INTERACTIVE FLOOR PLAN</p>
                </div>
                <p>
                  Project your architectural structure through your floor plan
                </p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>3D ON CONSTRUCTION SITE</p>
                </div>
                <p>
                  Visualise your future project on the actual construction site
                </p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>INTERACTIVE BROUCHERS</p>
                </div>
                <p>
                  Elevate your client{"'"}s experience through our immersive
                  brouchers which contain interact floor plans of your structure
                  and creative content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.video_container}>
          <video
            src="https://farbe9d3fb46190ad4564938d20f57a5ad372133227-test.s3.eu-central-1.amazonaws.com/public/compressed/first_section_banner_video.mp4"
            className={classes.video}
            alt="hero_banner_img"
            loop
            autoPlay
            muted
            playsInline={true}
          />
        </div>
        <div className={classes.augmented_reality_section}>
          <h1>AUGMENTED REALITY</h1>
          <div className={classes.cards_container}>
            <FindSectionCards
              imgWidth={"50%"}
              imgHeight={"40%"}
              maxWidth={"350px"}
              minWidth={"320px"}
              icon={icon1}
              titleColor={"black"}
              title={"3D on Construction Site"}
            />
            <FindSectionCards
              imgWidth={"50%"}
              imgHeight={"40%"}
              maxWidth={"350px"}
              minWidth={"320px"}
              icon={icon2}
              titleColor={"black"}
              title={"Interactive Broucher"}
            />
            <FindSectionCards
              imgWidth={"50%"}
              imgHeight={"40%"}
              maxWidth={"350px"}
              minWidth={"320px"}
              icon={icon3}
              titleColor={"black"}
              title={"3D on Plan"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectConentSection;
