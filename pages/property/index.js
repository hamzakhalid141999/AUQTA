import React from "react";
import classes from "./property.module.css";
import FirstSection from "../../components/screenComponents/propertyScreen/firstSection";
import PictureSection from "../../components/screenComponents/propertyScreen/picturesSection";
import Description from "../../components/screenComponents/propertyScreen/descriptionSection";

function Property() {
  return (
    <div className={classes.property_section}>
      <FirstSection />
      <PictureSection />
      <Description/>
    </div>
  );
}

export default Property;
