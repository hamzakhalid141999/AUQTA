import React, { useState, useEffect } from "react";
import classes from "./userCard.module.css";
import {
  faBath,
  faBed,
  faMapMarker,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../../public/assets/placeholder_user.png";

function AgentCard({ picture, name, city, location, description }) {
  const [source, setSource] = useState();
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  useState(() => {
    setSource(baseS3Url + picture);
  }, [picture]);

  return (
    // <Link
    //   href={{
    //     pathname: openEdit === true ? "/dashboard/edit_project" : "/project",
    //     query: {
    //       projectId: id,
    //     },
    //   }}
    // >
    <div className={classes.card_body}>
      <div className={classes.logo_container}>
        <div className={classes.logo_image_container}>{}</div>
      </div>
      <div className={classes.image_container}>
        <Image
          layout="fill"
          className={classes.property_picture}
          src={picture ? source : placeholder}
          onError={() => {
            setSource(placeholder);
          }}
          alt="picture"
        />
      </div>
      <div className={classes.description_container}>
        <div className={classes.title_and_price_container}>
          <p className={classes.title}>{name}</p>
        </div>
        <div className={classes.location_container}>
          <FontAwesomeIcon
            className={classes.location_icon}
            icon={faMapMarker}
            size={"1x"}
          />
          <p className={classes.location}>
            {location}, {city}
          </p>
        </div>
        <div className={classes.property_description_container}>
          <p>{description}</p>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default AgentCard;
