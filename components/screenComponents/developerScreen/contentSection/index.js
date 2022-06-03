import React, { useState } from "react";
import Image from "next/image";
import classes from "./contentSection.module.css";
import img from "../../../../public/assets/developer_section_img.png";
import { useWindowSize } from "../../../../utils";

function ContentSection() {
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
        <div
          className={classes.services_container}
        >
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
                <div style={{width: '98%'}} className={classes.single_row}>
                    <p>Since:</p>
                    <p>2012</p>
                </div>
                <div style={{width: '98%'}} className={classes.single_row}>
                    <p>Projects Developed:</p>
                    <p>3</p>
                </div>
                <div style={{width: '98%'}} className={classes.single_row}>
                    <p>Website URL:</p>
                    <p>https://www.google.com</p>
                </div>
                <div style={{width: '98%'}} className={classes.single_row}>
                    <p>Social Media:</p>
                    <p>Facebook</p>
                </div>

                <div style={{width: '98%'}} className={classes.single_row}>
                    <p>Address:</p>
                    <p>Street 2, Block 1, Phase 2</p>
                </div>
                <div style={{width: '48%'}} className={classes.single_row}>
                    <p>City:</p>
                    <p>Rawalpindi</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
