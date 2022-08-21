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

function ProjectConentSection({
  features,
  amenities,
  address,
  projectDetails,
}) {
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();
  const [isVideo, setIsVideo] = useState(true);
  const [isVideoLocation, setIsVideoLocation] = useState(true);
  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/6301e2257cd62ffd3a83a286-PT/6301e2257cd62ffd3a83a286-PT.html
  const toursBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  console.log(
    toursBaseUrl +
      projectDetails?._id +
      "-LT/" +
      projectDetails?._id +
      "-LT.html"
  );

  const showContent = () => {
    setShowMore(!showMore);
  };

  const handleVideoToggle = () => {
    if (projectDetails?._id === "6301e2257cd62ffd3a83a286") {
      setIsVideo(!isVideo);
    }
  };

  const handleVideoLocationToggle = () => {
    if (projectDetails?._id === "6301e2257cd62ffd3a83a286") {
      setIsVideoLocation(!isVideoLocation);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div
          style={{ flexDirection: width < 1000 ? "column" : "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            {projectDetails?._id === "6301e2257cd62ffd3a83a286" && !isVideo ? (
              <iframe
                onClick={handleVideoToggle}
                allowFullScreen
                src={
                  "/vr/6301e2257cd62ffd3a83a286-PT/6301e2257cd62ffd3a83a286-PT.html"
                }
                height="100%"
                width="100%"
                style={{ borderRadius: "40px", objectFit: "initial" }}
                className={classes.img}
              />
            ) : (
              isVideo && (
                <Image
                  onClick={handleVideoToggle}
                  src={img1}
                  className={classes.img}
                />
              )
            )}
          </div>
          <div className={classes.description}>
            <h1>OVERVIEW OF THE PROJECT</h1>
            <div className={classes.service_description_container}>
              <p>{projectDetails?.projectDescription}</p>
              <div className={classes.bullet_points_container}>
                <p className={classes.bullet_text}>Main Features</p>
                {features
                  ?.filter((feature, index) => index < features?.length - 1)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature}</p>
                    </div>
                  ))}

                <p className={classes.see_more_btn} onClick={showContent}>
                  {showMore ? "See less" : "See more"}
                </p>
              </div>

              <div
                style={{ display: showMore ? "flex" : "none" }}
                className={classes.bullet_points_container}
              >
                <p className={classes.bullet_text}>Amenities</p>
                <div className={classes.bullet_points_grid}>
                  {amenities?.map((amenity, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{amenity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            {projectDetails?._id === "6301e2257cd62ffd3a83a286" &&
            !isVideoLocation ? (
              <iframe
                onClick={handleVideoLocationToggle}
                style={{ borderRadius: "40px", objectFit: "initial" }}
                allowFullScreen
                src={
                  "/vr/6301e2257cd62ffd3a83a286-LT/6301e2257cd62ffd3a83a286-LT.html"
                }
                height="100%"
                width="100%"
                className={classes.img}
              />
            ) : (
              isVideoLocation && (
                <Image
                  onClick={handleVideoLocationToggle}
                  src={img2}
                  className={classes.img}
                />
              )
            )}
          </div>
          <div
            style={{ maxHeight: "initial", overflowY: "initial" }}
            className={classes.description}
          >
            <h1>VIRTUAL VIEW OF THE LOCATION</h1>
            <div className={classes.service_description_container}>
              <p>{projectDetails?.locationOverview}</p>

              {projectDetails?.locationFeatures
                ?.filter(
                  (feature, index) =>
                    index < projectDetails?.locationFeatures?.length - 1
                )
                ?.map((feature, index) => (
                  <div key={index} className={classes.bullet_point}>
                    <div className={classes.bullets_container}>
                      <div className={classes.bullet} />{" "}
                      <p className={classes.bullet_text}>{feature}</p>
                    </div>
                  </div>
                ))}

              <div className={classes.bullet_points_container}>
                <p className={classes.bullet_text}>Address</p>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet} /> <p>{address}</p>
                </div>
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
