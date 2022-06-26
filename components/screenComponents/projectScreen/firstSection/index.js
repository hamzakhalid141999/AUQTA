import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import location_pointer from "../../../../public/assets/pin-locator-white.png";
import Link from "next/link";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hotel_1 from "../../../../public/assets/hotel_1.png";
import hotel_2 from "../../../../public/assets/hotel_2.png";
import hotel_3 from "../../../../public/assets/hotel_3.png";
import hotel_4 from "../../../../public/assets/hotel_4.png";
import hotel_5 from "../../../../public/assets/hotel_5.png";
import hotel_6 from "../../../../public/assets/hotel_6.png";
import { Slide } from "react-slideshow-image";
import axios from "axios";
import project_brochure from "../../../../public/assets/project_brochure.png";
import project_floorplan from "../../../../public/assets/project_floorplan.png";
import project_price from "../../../../public/assets/project_price.png";

function FirstSection({
  projectDetails,
  images,
  shopAvailability,
  pricePlan,
  floorPlan,
  projectBrochure,
  ownerDetails,
}) {
  console.log(ownerDetails);
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const slideImages = [
    "/assets/hotel_1.png",
    "/assets/hotel_2.png",
    "/assets/hotel_3.png",
    "/assets/hotel_4.png",
    "/assets/hotel_5.png",
    "/assets/hotel_6.png",
  ];

  const [priceLowerBound, setPriceLowerBound] = useState();
  const [priceUpperBound, setPriceUpperBound] = useState();

  console.log(images);
  console.log(shopAvailability);
  console.log(pricePlan);
  console.log(floorPlan);
  console.log(projectBrochure);

  useEffect(() => {
    if (projectDetails?.priceRangeFrom) {
      let lower = projectDetails?.priceRangeFrom;
      let upper = projectDetails?.priceRangeTo;
      setPriceLowerBound(
        lower.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
      ); // or en-PK
      setPriceUpperBound(
        upper.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
      );
    } else {
      setPriceUpperBound("-");
      setPriceLowerBound("-");
    }
  }, [projectDetails]);

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          </div>
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
          </div>
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <div className={classes.info_and_btns}>
          <div className={classes.property_info}>
            <div className={classes.property_stats}>
              <h1 className={classes.propert_name}>
                {projectDetails?.projectName}
              </h1>
              <div className={classes.divider} />
              {/* <p className={classes.pkr}>PKR</p> */}
              <h1 className={classes.price}>
                {" "}
                {priceLowerBound} - {priceUpperBound}
              </h1>
            </div>
            <div className={classes.row}>
              <img
                src={location_pointer.src}
                className={classes.location_icon}
              />
              <p className={classes.property_location}>
                {projectDetails?.location}, {projectDetails?.city}
              </p>
            </div>
          </div>
          {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
          <div className={classes.btns_container}>
            <div className={classes.upper_btns}>
              <img
                src={baseS3Url + ownerDetails?.developerLogo}
                className={classes.developer_logo}
              />
              <Link href={"/developer"}>
                <div className={classes.banner_btn}>
                  <p>
                    {ownerDetails?.user?.username}
                    <span>{">"}</span>
                  </p>
                </div>
              </Link>
            </div>
            <div style={{ width: "80%" }} className={classes.banner_btn}>
              <p>{projectDetails?.approvalBodyName}</p>
            </div>
          </div>
        </div>
        <div className={classes.banner_btns_wrapper}>
          <div className={classes.banner_btns_container}>
            <div className={classes.btn_body}>
              <img src={project_brochure.src} className={classes.img_icon} />
              <a href={projectBrochure} target="_blank">
                BROCHURE
              </a>
            </div>
            <div className={classes.btn_body}>
              <img src={project_floorplan.src} className={classes.img_icon} />
              <a href={floorPlan} target="_blank">
                FLOOR PLAN
              </a>
            </div>
            <div className={classes.btn_body}>
              <img src={project_price.src} className={classes.img_icon} />
              <a href={pricePlan} target="_blank">
                PRICE PLAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
