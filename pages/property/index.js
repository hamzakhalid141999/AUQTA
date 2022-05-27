import React from "react";
import classes from "./property.module.css";
import FirstSection from "../../components/screenComponents/propertyScreen/firstSection";
import PictureSection from "../../components/screenComponents/propertyScreen/picturesSection";
import Description from "../../components/screenComponents/propertyScreen/descriptionSection";
import TrendingProperties from "../../components/screenComponents/homeScreen/trendingProperties";
import MainFeaturesSection from "../../components/screenComponents/propertyScreen/mainFeaturesSection";

function Property() {
  return (
    <div className={classes.property_section}>
      <FirstSection />
      <PictureSection />
      <Description/>
      <MainFeaturesSection/>
      <TrendingProperties noButtons = {true} heading = {"SIMILAR PROPERTIES"}/>
    </div>
  );
}

export default Property;
