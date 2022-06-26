import React from "react";
import classes from "./descriptionSection.module.css";
import Image from "next/image";
import img from "../../../../public/assets/service_1_icon.png";
import { useWindowSize } from "../../../../utils";

function Description({ property }) {
  const { width } = useWindowSize();

  console.log(property);
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
                  <p>{property?.propertyListing?.type}</p>
                </div>
              </div>
              <div className={classes.input_field_container_dual}>
                <label>SUBTYPE</label>
                <div className={classes.input_field}>
                  <p>{property?.subtype}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.services_container}>
        <div className={classes.image_container}>
          <Image src={img} className={classes.img} />
        </div>
        <div className={classes.description}>
          <h1>OVERVIEW OF THE LOCATION</h1>
          <div className={classes.service_description_container}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
              justo et eros suscipit ultricies. Nulla egestas at elit
              condimentum ultricies. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nam a fringilla leo. Nulla vestibulum, lorem sed
              efficitur pharetra, nulla est pharetra purus, sit amet ultricies
              nunc velit et odio. Aenean ultricies ultrices arcu nec egestas.
              Etiam nec ligula vel eros hendrerit luctus. Duis vehicula libero
              ut pretium ultricies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
