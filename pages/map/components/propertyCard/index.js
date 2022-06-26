import React from "react";
import classes from "./propertyCard.module.css";
import {
  faBath,
  faBed,
  faMapMarker,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function PropertyCard({ picture, title, description, price, location, city }) {
  return (
    <Link href={"/property"}>
      <div className={classes.card_body}>
        <FontAwesomeIcon className={classes.like} icon={faHeart} size={"1x"} />
        <div className={classes.image_container}>
          <Image
            layout="fill"
            className={classes.property_picture}
            src={picture}
            alt="picture"
          />
        </div>
        <div className={classes.description_container}>
          <div className={classes.title_and_price_container}>
            <p className={classes.title}>{title}</p>
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
            <p className={classes.price}>{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
