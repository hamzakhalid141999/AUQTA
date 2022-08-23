import React from "react";
import classes from "./descriptionSection.module.css";
import Image from "next/image";
import img from "../../../../public/assets/service_1_icon.png";
import { useWindowSize } from "../../../../utils";

function Description({ property }) {
  const { width } = useWindowSize();

  return (
    <div className={classes.description_section}>
      <div
        style={{ flexDirection: width < 1000 ? "column" : "row-reverse" }}
        className={classes.services_container}
      >
        <div className={classes.image_container}>
          <Image src={img} className={classes.img} />
        </div>
        <div className={classes.description}>
          <h1>DESCRIPTION OF THE PROPERTY</h1>
          <div className={classes.service_description_container}>
            <p>{property?.propertyListing?.description}</p>
            <div className={classes.single_row}>
              <div className={classes.input_field_container_dual}>
                <label>TYPE</label>
                <div className={classes.input_field}>
                  <p className={classes.input_value}>
                    {property?.propertyListing?.type}
                  </p>
                </div>
              </div>
              <div className={classes.input_field_container_dual}>
                <label>SUBTYPE</label>
                <div className={classes.input_field}>
                  <p className={classes.input_value}>{property?.subtype}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.service_description_container}>
            <div className={classes.input_field_container_dual}>
              <label>Address</label>
              {/* <div className={classes.input_field}> */}
              <p className={classes.info_val}>
                {property?.propertyListing?.address}
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
