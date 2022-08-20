import React, { useState } from "react";
import Image from "next/image";
import classes from "./contentSection.module.css";
import img from "../../../../public/assets/developer_section_img.png";
import { useWindowSize } from "../../../../utils";
import { SocialIcon } from "react-social-icons";

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
            <h1>ABOUT THE AGENT</h1>

            <p>
              {showMore
                ? developerDetails?.user?.aboutInformation
                : developerDetails?.user?.aboutInformation.substr(
                    0,
                    width - 1200
                  )}
              {!showMore &&
                developerDetails?.user?.aboutInformation.length >
                  width - 1200 && <span>{showMore ? ` ` : `...`}</span>}
              {developerDetails?.user?.aboutInformation.length >
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
                    width: "100%",
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
                    {developerDetails?.user?.socialMedia?.map((link, index) => (
                      <SocialIcon
                        key={index}
                        style={{
                          height: 35,
                          width: 35,
                          marginLeft: "15px",
                          marginRight: "15px",
                          marginBottom: "10px",
                        }}
                        bgColor="#0169ec"
                        fgColor="#fff"
                        url={
                          link === "Instagram"
                            ? "https://instagram.com/a"
                            : link === "Facebook"
                            ? "www.facebook.com"
                            : link === "Twitter"
                            ? "https://twitter.com/a"
                            : link === "Youtube" &&
                              "https://www.youtube.com/channel/a"
                        }
                      />
                    ))}
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
                  <p>Company Address</p>
                  <div className={classes.values_container}>
                    <p className={classes.values}>
                      {developerDetails?.companyAddress}
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
