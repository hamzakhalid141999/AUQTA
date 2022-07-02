import React, { useEffect, useState } from "react";
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
import placeholder from "../../../../public/assets/placeholder-company.png";

function PropertyCard({ picture, title, description, price, location, city }) {
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const [formattedPrice, setFormattedPrice] = useState();
  const [source, setSource] = useState();

  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = "PKR " + (val / 10000000).toFixed(2) + " Crores";
    } else if (val >= 100000) {
      val = "PKR " + (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }

  useState(() => {
    setSource(baseS3Url + picture);
  }, [picture]);

  useEffect(() => {
    if (price) {
      if (parseInt(price) < 100000) {
        let number = price;
        setFormattedPrice(
          number.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
        ); // or en-PK
      } else {
        const convertedPrice = numDifferentiation(price);
        setFormattedPrice(convertedPrice);
      }
    }
  }, [price]);

  return (
    <Link href={"/property"}>
      <div className={classes.card_body}>
        <FontAwesomeIcon className={classes.like} icon={faHeart} size={"1x"} />
        <div className={classes.image_container}>
          <Image
            layout="fill"
            className={classes.property_picture}
            src={source}
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
            <p className={classes.price}>{formattedPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
