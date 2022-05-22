import React from "react";
import classes from "./projectTimelineSection.module.css";
import timeline from "../../../../public/assets/timeline.png";
import Image from "next/image";

function ProjectTimelineSection() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
          <h1 style={{marginBottom: '60px'}}>PROJECT TIMELINE</h1>
          <Image src={timeline} className={classes.timeline_img}/>
      </div>
    </div>
  );
}

export default ProjectTimelineSection;
