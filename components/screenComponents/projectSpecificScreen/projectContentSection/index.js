import React, { useState } from "react";
import classes from "./projectContentSection.module.css";
import Image from "next/image";
import img1 from "../../../../public/assets/project_overview_img.png";
import img2 from "../../../../public/assets/project_virtual_view.png";
import FindSectionCards from "../../homeScreen/findSection/components";
import icon1 from "../../../../public/assets/project_card_construction_site_icon.png";
import icon2 from "../../../../public/assets/project_card_interactive_broucher_icon.png";
import icon3 from "../../../../public/assets/project_card_3d_plan_icon.png";
import { useWindowSize } from "../../../../utils";

function ProjectConentSection() {
  const { width } = useWindowSize();
  const [showMore, setShowMore] = useState(false);
  const [isVideo, setIsVideo] = useState(true);
  const [isLocationVideo, setIsLocationVideo] = useState(true);

  const showContent = () => {
    setShowMore(!showMore);
  };

  const toggleLocationVideo = () => {
    setIsLocationVideo(!isLocationVideo);
  };

  const toggleVideo = () => {
    setIsVideo(!isVideo);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div
          style={{ flexDirection: width < 1000 ? "column" : "row-reverse" }}
          className={classes.services_container}
        >
          <div onClick={toggleVideo} className={classes.image_container}>
            {isVideo ? (
              <video
                playsInline
                className={classes.video_card}
                loop
                muted
                autoPlay
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/media/For+Transition.mp4"
              />
            ) : (
              <iframe
                style={{ borderRadius: "40px" }}
                allowFullScreen
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/vr/Business_District_Bahria_Town_VR.html"
                height="100%"
                width="100%"
              />
            )}
          </div>
          <div className={classes.description}>
            <h1>OVERVIEW OF THE PROJECT</h1>
            <div className={classes.service_description_container}>
              <p>
                Budapest Sign Hotel redefines the hotel industry in Pakistan.
                Experience five-star services from our team of highly trained
                hotel management individuals.
              </p>
              <div className={classes.bullet_points_container}>
                <p className={classes.bullet_text}>Main Features</p>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    Experience the stunning view of central business district
                    which is the next business hub of Islamabad.
                  </p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    Introducing the concept of smart hotel living in Pakistan.
                  </p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    Strategically located near the Islamabad International
                    Airport for a comfortable and quick journey via our
                    five-star concierge services.{" "}
                  </p>
                </div>
                <p className={classes.see_more_btn} onClick={showContent}>
                  {showMore ? "See less" : "See more"}
                </p>
              </div>

              <div
                style={{ display: showMore ? "flex" : "none" }}
                className={classes.bullet_points_container}
              >
                <p className={classes.bullet_text}>Amenities</p>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Security Surveillance</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Infinity Pool </p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Movie Theatre</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Business Centre</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Shopping Mall</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Golf Course</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Sports Club</p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>Library</p>
                </div>
              </div>

              <div
                style={{ display: showMore ? "flex" : "none" }}
                className={classes.bullet_points_container}
              >
                <p className={classes.bullet_text}>Address</p>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    Centra Business District, Phase-8. Bahria Town. Islamabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.services_container}>
          <div
            onClick={toggleLocationVideo}
            className={classes.image_container}
          >
            {isLocationVideo ? (
              <video
                playsInline
                className={classes.video_card}
                loop
                muted
                autoPlay
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/media/Location+Recording.mp4"
              />
            ) : (
              <iframe
                style={{ borderRadius: "40px" }}
                allowFullScreen
                src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/vr/Business_District_Bahria_Town_VR.html"
                height="100%"
                width="100%"
              />
            )}
          </div>
          <div className={classes.description}>
            <h1>VIRTUAL VIEW OF THE LOCATION</h1>
            <div className={classes.service_description_container}>
              <p>
                Experience a realistic digital view of the surrounding location
                of Budapest Sign Hotel. Simply interact with the card on your
                left or click the full screen tab for an even better experience.
                Through the virtual tour you will get an idea of what the actual
                surrounding location looks like and view any immediate
                surrounding amenities.
              </p>
              <div className={classes.bullet_points_container}>
                <p className={classes.bullet_text}>Main Features</p>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    The business district region has access to nearby schools,
                    hospitals, shopping malls and grocery stores.
                  </p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    Located near the upcoming Ring Road for swift access to
                    Islamabad International Airport and Expressway.{" "}
                  </p>
                </div>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} />
                  <p>
                    The area has fluid access of water, electricity, and gas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.video_container}>
          <video
            src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/media/Cinematic+Video.mp4"
            className={classes.video}
            alt="hero_banner_img"
            muted
            controls
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
