import React, { useState, useEffect } from "react";
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
import placeholder from "../../../../../../public/assets/placeholder-company.png";

function PropertyCard({
  picture,
  title,
  description,
  price,
  location,
  isProject,
  city,
}) {
  const [source, setSource] = useState();
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  useState(() => {
    setSource(baseS3Url + picture);
  }, [picture]);

  const [formattedPrice, setFormattedPrice] = useState();

  useEffect(() => {
    if (price) {
      let number = price;
      setFormattedPrice(
        number.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
      ); // or en-PK
    } else {
      setFormattedPrice("-");
    }
  }, [price]);

  return (
    <Link href={"/project"}>
      <div className={classes.card_body}>
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
            <p>{description}</p>
          </div>
          <div className={classes.bottom_description_container}>
            <p className={classes.price}>{formattedPrice}</p>
            <FontAwesomeIcon
              className={classes.heart_icon}
              icon={faHeart}
              size={"1x"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
