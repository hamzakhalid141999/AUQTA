import React from "react";
import classes from "./project_specific.module.css";
import FirstSection from "../../components/screenComponents/projectSpecificScreen/firstSection";
import ProjectConentSection from "../../components/screenComponents/projectSpecificScreen/projectContentSection";
import SimilarPropertySection from "../../components/screenComponents/projectSpecificScreen/similarPropertySection";
import ProjectTimelineSection from "../../components/screenComponents/projectSpecificScreen/projectTimelineSection";

function project_specific() {
    return (
      <div className={classes.project_section}>
        <FirstSection />
        <ProjectConentSection/>
        <SimilarPropertySection />
        <ProjectTimelineSection/>
      </div>
    );
  }

export default project_specific;
