import React, { useEffect, useState } from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import location_pointer from "../../../../public/assets/pin-locator-white.png";
import Link from "next/link";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bathroom from "../../../../public/assets/bathroom.png";
import bedroom from "../../../../public/assets/bedroom.png";
import size from "../../../../public/assets/size.png";
import ProjectImagesModal from "../../../modals/projectImagesModal.js";

function FirstSection({
  images,
  propertyDetails,
  ownerDetails,
  propertyListingDetails,
}) {
  const [formattedPrice, setFormattedPrice] = useState();
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const slideImages = [
    "/assets/hotel_1.png",
    "/assets/hotel_2.png",
    "/assets/hotel_3.png",
    "/assets/hotel_4.png",
    "/assets/hotel_5.png",
    "/assets/hotel_6.png",
  ];

  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Crores";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }

  useEffect(() => {
    if (propertyDetails?.price) {
      if (parseInt(propertyDetails?.price) < 100000) {
        let number = propertyDetails?.price;
        setFormattedPrice(
          number.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
        ); // or en-PK
      } else {
        const convertedPrice = numDifferentiation(propertyDetails?.price);
        setFormattedPrice(convertedPrice);
      }
    }
  }, [propertyDetails]);

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          {images?.length > 0 ? (
            images?.map((image, index) => (
              <div key={index} className={classes.each_slide}>
                <div style={{ backgroundImage: `url(${image})` }}></div>
              </div>
            ))
          ) : (
            <></>
          )}
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <div className={classes.info_and_btns}>
          <div className={classes.property_info}>
            <div className={classes.property_stats}>
              <h1 className={classes.propert_name}>{propertyDetails?.title}</h1>
              <div className={classes.divider} />
              <p className={classes.pkr}>PKR</p>
              <h1 className={classes.price}>
                <h1 className={classes.price}>{formattedPrice}</h1>
              </h1>
            </div>
            <div className={classes.row}>
              <img
                src={location_pointer.src}
                className={classes.location_icon}
              />
              <p className={classes.property_location}>
                {propertyDetails?.location}, {propertyDetails?.city}
              </p>
            </div>
          </div>
          {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
          <div className={classes.btns_container}>
            <div className={classes.upper_btns}>
              <img
                src={
                  ownerDetails?.user?.userType === "developer"
                    ? baseS3Url + ownerDetails?.developerLogo
                    : baseS3Url + ownerDetails?.companyLogo
                }
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
            {/* <div style={{ width: "80%" }} className={classes.banner_btn}>
              <p>{projectDetails?.approvalBodyName}</p>
            </div> */}
          </div>
        </div>
        <div className={classes.banner_btns_wrapper}>
          <div className={classes.banner_btns_container}>
            <div className={classes.btn_body}>
              <img src={size.src} className={classes.img_icon} />
              {propertyDetails?.size}
            </div>
            <div className={classes.btn_body}>
              <img src={bathroom.src} className={classes.img_icon} />
              {propertyListingDetails?.noOfBathrooms}
            </div>
            <div className={classes.btn_body}>
              <img src={bedroom.src} className={classes.img_icon} />
              {propertyListingDetails?.noOfBedrooms}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
