import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import location_pointer from "../../../../public/assets/pin-locator-white.png";
import Link from "next/link";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import project_brochure from "../../../../public/assets/project_brochure.png";
import project_floorplan from "../../../../public/assets/project_floorplan.png";
import project_price from "../../../../public/assets/project_price.png";
import project_image from "../../../../public/assets/projct-imagewhite.png";
import ProjectImagesModal from "../../../modals/projectImagesModal.js";
import InquiryForm from "../../../modals/inquiryForm";

function FirstSection({
  projectDetails,
  images,
  shopAvailability,
  pricePlan,
  floorPlan,
  projectBrochure,
  ownerDetails,
}) {
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  console.log(projectDetails);

  const slideImages = [
    "/assets/first_section_banner_bg.jpg",
    "/assets/hotel_2.png",
    "/assets/hotel_3.png",
    "/assets/hotel_4.png",
    "/assets/hotel_5.png",
    "/assets/hotel_6.png",
  ];

  const [priceLowerBound, setPriceLowerBound] = useState();
  const [priceUpperBound, setPriceUpperBound] = useState();
  const [open, setOpen] = useState();
  const handleModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const [openInquiryForm, setOpenInquiryForm] = useState();
  const onOpenInquiryForm = () => {
    setOpenInquiryForm(true);
  };
  const onCloseInquiryForm = () => setOpenInquiryForm(false);

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
    if (projectDetails?.priceRangeFrom) {
      if (parseInt(projectDetails?.priceRangeFrom) < 100000) {
        let lower = projectDetails?.priceRangeFrom;
        setPriceLowerBound(
          lower.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
        ); // or en-PK
      } else {
        const lowerBoundFormatted = numDifferentiation(
          projectDetails?.priceRangeFrom
        );
        setPriceLowerBound(lowerBoundFormatted);
      }

      if (parseInt(projectDetails?.priceRangeFrom) < 100000) {
        let upper = projectDetails?.priceRangeTo;

        setPriceUpperBound(
          upper.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
        );
      } else {
        const upperBoundFormatted = numDifferentiation(
          projectDetails?.priceRangeTo
        );
        setPriceUpperBound(upperBoundFormatted);
      }
    }
  }, [projectDetails]);

  return (
    <div className={classes.first_section_body}>
      <InquiryForm
        propertyName={projectDetails?.projectName}
        realEstateId={projectDetails?._id}
        ownerId={projectDetails?.userId?._id}
        open={openInquiryForm}
        onCloseModal={onCloseInquiryForm}
      />
      <ProjectImagesModal
        setOpen={setOpen}
        open={open}
        onCloseModal={onCloseModal}
        pictures={images}
      />
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          <div className={classes.each_slide}>
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
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
              <Link
                href={{
                  pathname: "/developer",
                  query: {
                    developerId: projectDetails?.userId?._id,
                  },
                }}
              >
                <div style={{ width: "80%" }} className={classes.banner_btn}>
                  <p>
                    {ownerDetails?.user?.username}
                    <span>{">"}</span>
                  </p>
                </div>
              </Link>
            </div>
            <div style={{ width: "100%" }} className={classes.banner_btn}>
              <p>{projectDetails?.approvalBodyName}</p>
            </div>
            {/* <div
              onClick={onOpenInquiryForm}
              style={{ width: "100%" }}
              className={classes.banner_btn}
            >
              <p>Inquiry Form</p>
            </div> */}
          </div>
        </div>
        <div className={classes.banner_btns_wrapper}>
          <div className={classes.banner_btns_container}>
            <div className={classes.btn_body}>
              <img src={project_brochure.src} className={classes.img_icon} />
              <a href={projectBrochure} target="_blank" rel="noreferrer">
                BROCHURE
              </a>
            </div>
            <div className={classes.btn_body}>
              <img src={project_floorplan.src} className={classes.img_icon} />
              <a href={floorPlan} target="_blank" rel="noreferrer">
                FLOOR PLAN
              </a>
            </div>
            <div className={classes.btn_body}>
              <img src={project_price.src} className={classes.img_icon} />
              <a href={pricePlan} target="_blank" rel="noreferrer">
                PRICE PLAN
              </a>
            </div>
            <div onClick={handleModal} className={classes.btn_body}>
              <img src={project_image.src} className={classes.img_icon} />
              <a href="#">IMAGES</a>
            </div>
          </div>
          <div className={classes.inquiry_btn} onClick={onOpenInquiryForm}>
            <p>Inquiry Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
