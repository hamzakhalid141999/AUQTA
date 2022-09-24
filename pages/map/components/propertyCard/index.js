import React, { useEffect, useState } from "react";
import classes from "./propertyCard.module.css";
import {
  faBath,
  faBed,
  faMapMarker,
  faHeart,
  faExternalLink,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import placeholder from "../../../../public/assets/placeholder-company.png";

function PropertyCard({
  picture,
  title,
  description,
  price,
  location,
  city,
  propertyId,
  openEdit,
  noResize,
  isMapCard,
}) {
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
    <div
      className={
        noResize
          ? isMapCard
            ? classes.card_body_map_card
            : classes.card_body_no_resize
          : isMapCard
          ? classes.card_body_map_card
          : classes.card_body
      }
    >
      <Link
        href={{
          pathname: openEdit ? "/dashboard/edit_property" : "/property",
          query: {
            propertyId: propertyId,
          },
        }}
      >
        <FontAwesomeIcon
          className={openEdit ? classes.edit : classes.like}
          icon={openEdit ? faCog : faExternalLink}
          size={"2x"}
        />
      </Link>
      <div className={classes.image_container}>
        <Link
          href={{
            pathname: "/property",
            query: {
              propertyId: propertyId,
            },
          }}
        >
          <Image
            layout="fill"
            className={classes.property_picture}
            src={source}
            onError={() => {
              setSource(placeholder);
            }}
            alt="picture"
          />
        </Link>
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
  );
}

export default PropertyCard;
