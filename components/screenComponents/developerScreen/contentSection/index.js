import React, { useState } from "react";
import Image from "next/image";
import classes from "./contentSection.module.css";
import img from "../../../../public/assets/developer_section_img.png";
import { useWindowSize } from "../../../../utils";

function ContentSection({ developerDetails }) {
  console.log(developerDetails);
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();
  const description = `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id es eopksio laborum. Sed ut
    perspiciatis unde omnis istpoe natus error sit voluptatem
    accusantium doloremque eopsloi laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunot explicabo. Nemo ernim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sedopk quia
    consequuntur magni dolores eos qui rationesopl voluptatem sequi
    nesciunt. Neque porro quisquameo est, qui dolorem ipsum quia dolor
    sit amet, eopsmiep consectetur, adipisci velit, seisud quia non
    numquam eius modi tempora I cidunt ut labore et dolore wopeir
    magnam aliquam quaerat voluptatem eoplmuriquisquGExcepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis
    unde omnis istpoe natus error sit voluptatem accusantium
    doloremque eopsloi laudantium, totam rem aperiam, eaque ips`;

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
              {showMore ? description : description.substr(0, width - 1200)}
              {!showMore && description.length > width - 1200 && (
                <span>{showMore ? ` ` : `...`}</span>
              )}
              {description.length > width - 1200 && (
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
                    <p>{developerDetails?.since}</p>
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
                    <p>{developerDetails?.projectsDeveloped}</p>
                  </div>
                </div>
              </div>
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
                  <p>City</p>
                  <div className={classes.values_container}>
                    <p>{developerDetails?.user?.city}</p>
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
                  <p>Social Media</p>
                  <div className={classes.values_container}>
                    <p>2012</p>
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
                    <p>{developerDetails?.user?.websiteURL}</p>
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
                    <p>{developerDetails?.corporateAddress}</p>
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
