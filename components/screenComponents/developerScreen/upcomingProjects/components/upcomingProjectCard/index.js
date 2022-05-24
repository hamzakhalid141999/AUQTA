import React from "react";
import classes from "./upcomingProjectCard.module.css";
import Image from "next/image";
import {
  faBath,
  faBed,
  faMapMarker,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UpcomingProjectCard({ title, image }) {
  return (
    <div className={classes.card_body_bg}>
      <div className={classes.card_body}>
        <div className={classes.image_container}>
          <Image
            layout="fill"
            className={classes.property_picture}
            src={image}
            alt="picture"
          />
        </div>
        <div className={classes.description_container}>
          <p className={classes.title}>PROJECT {title}</p>
          <div className={classes.location_row}>
            <FontAwesomeIcon
              className={classes.location_icon}
              icon={faMapMarker}
              size={"1x"}
            />
            <p>Lahore, Pakistan</p>
          </div>
          <p className={classes.price}>PKR 230,000</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProjectCard;

// <FontAwesomeIcon
// className={classes.location_icon}
// icon={faMapMarker}
// size={"1x"}
// />
