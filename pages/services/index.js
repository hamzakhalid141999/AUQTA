import React from "react";
import classes from "./services.module.css";
import FirstSection from "../../components/screenComponents/servicesScreen/firstSection";
import Services from "../../components/screenComponents/servicesScreen/services";
import DeveloperSection from "../../components/screenComponents/servicesScreen/developerSection";

function services() {
  return (
    <div className={classes.services_section}>
      <FirstSection />
      <Services />
      {/* <DeveloperSection /> */}
    </div>
  );
}

export default services;
