import React, { useState, useEffect } from "react";
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
import placeholder from "../../../../../../public/assets/placeholder-company.png";

function PropertyCard({
  picture,
  title,
  description,
  price,
  location,
  isProject,
  city,
  id,
  hardCodedProperty,
  openEdit,
  priceTo,
}) {
  const [source, setSource] = useState();
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";
  const [priceLower, setPriceLower] = useState();
  const [priceUpper, setPriceUpper] = useState();

  useState(() => {
    setSource(baseS3Url + picture);
  }, [picture]);

  const [formattedPrice, setFormattedPrice] = useState();

  useEffect(() => {
    if (price && priceTo) {
      const priceFromVar = numDifferentiation(price);
      setPriceLower(priceFromVar);

      const priceToVar = numDifferentiation(priceTo);
      setPriceUpper(priceToVar);
    }
  }, [price, priceTo]);

  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Crores";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }

  // useEffect(() => {
  //   if (price) {
  //     let number = price;
  //     setFormattedPrice(
  //       number.toLocaleString("ur-PK", { currency: "PKR", style: "currency" })
  //     ); // or en-PK
  //   } else {
  //     setFormattedPrice("-");
  //   }
  // }, [price]);

  return (
    <>
      {hardCodedProperty ? (
        <div className={classes.card_body}>
          <div className={classes.image_container}>
            <Image
              layout="fill"
              className={classes.property_picture}
              src={
                picture ? (hardCodedProperty ? picture : source) : placeholder
              }
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
            {!hardCodedProperty && (
              <>
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
              </>
            )}

            <div className={classes.property_description_container}>
              <p
                style={{
                  color: "#0068ed",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "35px",
                }}
              >
                {description}
              </p>
            </div>
            {!hardCodedProperty && (
              <div className={classes.bottom_description_container}>
                <p className={classes.price}>{formattedPrice}</p>
                <FontAwesomeIcon
                  className={classes.heart_icon}
                  icon={faHeart}
                  size={"1x"}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Link
          href={{
            pathname:
              openEdit === true ? "/dashboard/edit_project" : "/project",
            query: {
              projectId: id,
            },
          }}
        >
          <div className={classes.card_body}>
            <Link
              href={{
                pathname: openEdit ? "/dashboard/edit_project" : "/project",
                query: {
                  projectId: id,
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
                  pathname: "/project",
                  query: {
                    projectId: id,
                  },
                }}
              >
                <Image
                  layout="fill"
                  className={classes.property_picture}
                  src={
                    picture
                      ? hardCodedProperty
                        ? picture
                        : source
                      : placeholder
                  }
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
              {!hardCodedProperty && (
                <>
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
                </>
              )}

              <div className={classes.property_description_container}>
                <p>{description}</p>
              </div>
              {!hardCodedProperty && (
                <div className={classes.bottom_description_container}>
                  <p className={classes.price}>
                    {priceLower} - {priceUpper}
                  </p>
                  <FontAwesomeIcon
                    className={classes.heart_icon}
                    icon={faHeart}
                    size={"1x"}
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default PropertyCard;
