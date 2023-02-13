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
import bullet from "../../../../public/assets/bullet.png";
import ProjectImagesModal from "../../../modals/projectImagesModal.js";

function ProjectConentSection({
  features,
  amenities,
  address,
  projectDetails,
  arImages,
}) {
  const [showMore, setShowMore] = useState(false);
  const [open, setOpen] = useState();
  const handleModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  const { width } = useWindowSize();
  const [isVideo, setIsVideo] = useState(true);
  const [isVideoLocation, setIsVideoLocation] = useState(true);
  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/6301e2257cd62ffd3a83a286-PT/6301e2257cd62ffd3a83a286-PT.html
  const toursBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

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
      <ProjectImagesModal
        open={open}
        onCloseModal={onCloseModal}
        pictures={arImages}
      />
      <div className={classes.content_container}>
        <div
          style={{ flexDirection: width < 1000 ? "column" : "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            {isVideo && (
              <p className={classes.tour_text}>Click above to launch Tour</p>
            )}
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
            ) : isVideo &&
              projectDetails?._id === "6301e2257cd62ffd3a83a286" ? (
              <a
                href="/vr/6301e2257cd62ffd3a83a286-PT/6301e2257cd62ffd3a83a286-PT.html"
                target={"_blank"}
                rel="noreferrer"
              >
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className={classes.img}
                  src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/projects/6301e2257cd62ffd3a83a286/WhatsApp+Video+2022-08-16+at+1.08.28+PM.mp4"
                />
              </a>
            ) : (
              <Image
                onClick={handleVideoToggle}
                src={img1}
                className={classes.img}
              />
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
                      <img src={bullet.src} style={{ height: "13px" }} />
                      <p>{amenity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            {isVideoLocation && (
              <p className={classes.tour_text}>Click above to launch Tour</p>
            )}
            {!isVideoLocation ? (
              <iframe
                onClick={handleVideoLocationToggle}
                style={{ borderRadius: "40px", objectFit: "initial" }}
                allowFullScreen
                src={
                  toursBaseUrl +
                  projectDetails?._id +
                  "-LT/" +
                  projectDetails?._id +
                  "-LT.html"
                }
                height="100%"
                width="100%"
                className={classes.img}
              />
            ) : (
              <a
                href={
                  toursBaseUrl +
                  projectDetails?._id +
                  "-LT/" +
                  projectDetails?._id +
                  "-LT.html"
                }
                target={"_blank"}
                rel="noreferrer"
              >
                <Image src={img2} className={classes.img} />
              </a>
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
        {projectDetails?.youtubeVideo1 &&
          projectDetails?.youtubeVideo1 !== "" &&
          projectDetails?.youtubeVideo1 !== " " && (
            <div className={classes.video_container}>
              <iframe
                className={classes.video}
                src={projectDetails?.youtubeVideo1}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}

        {projectDetails?.youtubeVideo2 &&
          projectDetails?.youtubeVideo2 !== "" &&
          projectDetails?.youtubeVideo2 !== " " && (
            <div className={classes.video_container}>
              <iframe
                className={classes.video}
                src={projectDetails?.youtubeVideo2}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}

        <div className={classes.augmented_reality_section}>
          <h1>AUGMENTED REALITY</h1>
          <div onClick={handleModal} className={classes.ar_imgs_btn}>
            <p>AR Images</p>
          </div>
          {width < 786 ? (
            <>
              <div className={classes.cards_container}>
                {/* <a href="">


            </a> */}
                {/* <a
                href="https://mywebar.com/p/Project_8_nz3i3roow9"
                target={"_blank"}
                rel="noreferrer"
              > */}
                <FindSectionCards
                  imgWidth={"50%"}
                  imgHeight={"40%"}
                  maxWidth={"350px"}
                  minWidth={"320px"}
                  icon={icon3}
                  isStart={true}
                  titleColor={"black"}
                  title={"Interactive Layout"}
                  link={"https://mywebar.com/p/Project_8_nz3i3roow9"}
                  subheading={"(Exterior)"}
                />
                {/* </a> */}

                <FindSectionCards
                  imgWidth={"50%"}
                  imgHeight={"40%"}
                  maxWidth={"350px"}
                  minWidth={"320px"}
                  icon={icon3}
                  isStart={true}
                  titleColor={"black"}
                  title={"Interactive Layout"}
                  link={"https://mywebar.com/p/Project_9_8xq88kb0qb"}
                  subheading={"(1 Bed Apartment)"}
                />

                <FindSectionCards
                  imgWidth={"50%"}
                  imgHeight={"40%"}
                  maxWidth={"350px"}
                  minWidth={"320px"}
                  icon={icon3}
                  isStart={true}
                  titleColor={"black"}
                  title={"Interactive Layout"}
                  link={"https://mywebar.com/p/Project_10_l53yep0som"}
                  subheading={"(2 Bed Apartment)"}
                />

                <FindSectionCards
                  imgWidth={"50%"}
                  imgHeight={"40%"}
                  maxWidth={"350px"}
                  minWidth={"320px"}
                  icon={icon3}
                  isStart={true}
                  titleColor={"black"}
                  title={"Interactive Layout"}
                  link={"https://mywebar.com/p/Project_5_txnu3qobej"}
                  subheading={"(3 Bed Apartment)"}
                />
              </div>
            </>
          ) : (
            <p style={{ marginTop: "60px" }}>
              This feature is available on tablet and mobile devices
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectConentSection;
