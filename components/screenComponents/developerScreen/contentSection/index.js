import React, { useState } from "react";
import Image from "next/image";
import classes from "./contentSection.module.css";
import img from "../../../../public/assets/developer_section_img.png";
import { useWindowSize } from "../../../../utils";
import { SocialIcon } from "react-social-icons";
import facebookIcon from "../../../../public/assets/icons/facebookIcon.png";
import youtubeIcon from "../../../../public/assets/icons/youtubeIcon.png";
import linkedinIcon from "../../../../public/assets/icons/linkedinIcon.png";
import instagramIcon from "../../../../public/assets/icons/instagramIcon.png";

function ContentSection({ developerDetails }) {
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            <Image src={img} className={classes.img} />
          </div>
          <div className={classes.description}>
            <h1>ABOUT THE DEVELOPER</h1>

            <p>
              {showMore
                ? developerDetails?.user?.aboutInformation
                : developerDetails?.user?.aboutInformation?.substr(
                    0,
                    width - 1200
                  )}
              {!showMore &&
                developerDetails?.user?.aboutInformation?.length >
                  width - 1200 && <span>{showMore ? ` ` : `...`}</span>}
              {developerDetails?.user?.aboutInformation?.length >
                width - 1200 && (
                <span
                  style={{ color: "black", cursor: "pointer", fontWeight: 700 }}
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? ` view less` : `view more`}
                </span>
              )}
            </p>

            <div className={classes.developer_info_section}>
              <div style={{ width: "98%" }} className={classes.single_row}>
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "15px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>Since</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>{developerDetails?.since}</p>
                  </div>
                </div>
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "15px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>Projects Developed</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>
                      {developerDetails?.projectsDeveloped}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ width: "98%" }} className={classes.single_row}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "15px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>City</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>
                      {developerDetails?.user?.city}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ width: "98%" }} className={classes.single_row}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "15px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>Social Media</p>
                  <div className={classes.social_values_container}>
                    {developerDetails?.FacebookLink && (
                      <a
                        href={developerDetails?.FacebookLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={facebookIcon.src}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    )}
                    {developerDetails?.InstagramLink && (
                      <a
                        href={developerDetails?.InstagramLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={instagramIcon.src}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    )}
                    {developerDetails?.YouTubeLink && (
                      <a
                        href={developerDetails?.YouTubeLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={youtubeIcon.src}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    )}
                    {developerDetails?.LinkedInLink && (
                      <a
                        href={developerDetails?.LinkedInLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={linkedinIcon.src}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div style={{ width: "100%" }} className={classes.single_row}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "15px",
                    // alignContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <p>Website URL</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>
                      {developerDetails?.user?.websiteURL}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ width: "100%" }} className={classes.single_row}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "15px",
                    // alignContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <p>Corporate Address</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>
                      {developerDetails?.corporateAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
