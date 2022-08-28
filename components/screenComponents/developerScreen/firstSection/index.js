import React, { useEffect, useState } from "react";
import classes from "./firstSection.module.css";
import banner_img from "../../../../public/assets/project_banner_img.png";
import Image from "next/image";
import Link from "next/link";
import ContactDetail from "../../../modals/contactDetailsModal";

function FirstSection({ developerDetails }) {
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";
  const [openContactModal, setOpenContactModal] = useState();
  const onCloseContactModal = () => {
    setOpenContactModal(false);
  };

  const onOpenContactModal = () => {
    setOpenContactModal(true);
  };

  return (
    <div className={classes.first_section_body}>
      <ContactDetail
        open={openContactModal}
        onCloseModal={onCloseContactModal}
        firstContact={developerDetails?.additionalPhoneNo}
        secondContact={developerDetails?.user?.phoneNo}
      />
      <div className={classes.banner_img_container}>
        {/* <div className={classes.overlay} /> */}
        <Image
          src={banner_img}
          className={classes.banner_img}
          alt="hero_banner_img"
          layout="fill"
        />
      </div>
      <div className={classes.first_section_content_section}>
        <h1
        // data-aos="fade-right"
        >
          {developerDetails?.user?.username}
        </h1>
        {developerDetails?.developerLogo && (
          <img
            src={baseS3Url + developerDetails?.developerLogo}
            style={{ width: "100px" }}
          />
        )}

        {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
        <div className={classes.banner_btns_wrapper}>
          <div className={classes.banner_btns_container}></div>
          <div className={classes.inquire_contact_btns}>
            <div onClick={onOpenContactModal} className={classes.login_btn}>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
