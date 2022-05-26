import React from "react";
import classes from "./descriptionSection.module.css";
import Image from "next/image";
import img from "../../../../public/assets/service_1_icon.png";

function Description() {
  return (
    <div className={classes.description_section}>
      <div
        style={{ flexDirection: "row-reverse" }}
        className={classes.services_container}
      >
        <div className={classes.image_container}>
          <Image src={img} className={classes.img} />
        </div>
        <div className={classes.description}>
          <h1>DESCRIPTION OF THE PROPRERTY</h1>
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
            <div className={classes.single_row}>
                <div className={classes.input_field_container_dual}>
                    <label>TYPE</label>
                    <input className={classes.input_field}/>
                </div>
                <div className={classes.input_field_container_dual}>
                    <label>SUBTYPE</label>
                    <input className={classes.input_field}/>
                </div>
            </div>
            <div className={classes.single_row}>
                <div className={classes.input_field_container_dual}>
                    <label>BUILD YEAR</label>
                    <input className={classes.input_field}/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.services_container}
      >
        <div className={classes.image_container}>
          <Image src={img} className={classes.img} />
        </div>
        <div className={classes.description}>
          <h1>OVERVIEW OF THE LOCATIONs</h1>
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
