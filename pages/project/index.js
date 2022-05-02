import React from "react";
import classes from "./project.module.css";
import FirstSection from "../../components/screenComponents/projectScreen/firstSection";
import ProjectConentSection from "../../components/screenComponents/projectScreen/projectContentSection";
import SimilarPropertySection from "../../components/screenComponents/projectScreen/similarPropertySection";
import ProjectTimelineSection from "../../components/screenComponents/projectScreen/projectTimelineSection";

function project() {
    return (
      <div className={classes.project_section}>
        <FirstSection />
        <ProjectConentSection/>
        <SimilarPropertySection />
        <ProjectTimelineSection/>
      </div>
    );
  }

export default project;
