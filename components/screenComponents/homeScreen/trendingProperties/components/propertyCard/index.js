import React from "react";
import classes from "./propertyCard.module.css";
import { faBath, faBed, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function PropertyCard({picture}) {
    console.log(picture)
  return (
    <div className={classes.card_body}>
      <div className={classes.image_container}>
          <Image layout="fill" className={classes.property_picture} src={picture} alt="picture"/>
      </div>
      <div className={classes.description_container}>
        <div className={classes.title_and_price_container}>
          <p className={classes.title}>Title</p>
          <p className={classes.price}>$23000</p>
        </div>
        <div className={classes.location_container}>
          <FontAwesomeIcon className={classes.location_icon} icon={faMapMarker} size={"1x"} />
          <p className={classes.location}>LA, UNITED STATES</p>
        </div>
        <div className={classes.property_description_container}>
            <p>Lorem ipsum is just a random text</p>
        </div>
        <div className={classes.bottom_description_container}>
        <FontAwesomeIcon className={classes.location_icon} icon={faBed} size={"0.5x"} />
        <p>2 Beds</p>
        <FontAwesomeIcon className={classes.location_icon} icon={faBath} size={"0.5x"} />
        <p>2 Bath</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
