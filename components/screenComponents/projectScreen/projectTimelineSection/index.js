import React from "react";
import classes from "./projectTimelineSection.module.css";
import timeline from "../../../../public/assets/timeline.png";
import Image from "next/image";

function ProjectTimelineSection({ project }) {
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <h1 style={{ marginBottom: "60px" }}>PROJECT TIMELINE</h1>
        <div className={classes.timeline_section}>
          <div className={classes.startTimeSection}>
            <p>{project?.startDate?.date ? project?.startDate?.date : "N/A"}</p>
          </div>
          <div className={classes.endTimeSection}>
            <p>{project?.endDate?.date ? project?.endDate?.date : "N/A"}</p>
          </div>
          {project?.firstMilestone?.date.length !== 0 && (
            <div className={classes.firstMilestoneSectionDate}>
              <p>{project?.firstMilestone?.date}</p>
            </div>
          )}

          {project?.firstMilestone?.image.length !== 0 && (
            <div className={classes.firstMilestoneSection}>
              <img
                src={baseS3Url + project?.firstMilestone?.image}
                style={{ height: "100%" }}
              />
            </div>
          )}
          {project?.secondMilestone?.date.length !== 0 && (
            <div className={classes.secondMilestoneSectionDate}>
              <p>{project?.secondMilestone?.date}</p>
            </div>
          )}

          {project?.secondMilestone?.image.length !== 0 && (
            <div className={classes.secondMilestoneSection}>
              <img
                src={baseS3Url + project?.secondMilestone?.image}
                style={{ height: "100%" }}
              />
            </div>
          )}

          {project?.thirdMilestone?.date.length !== 0 && (
            <div className={classes.thirdMilestoneSectionDate}>
              <p>{project?.thirdMilestone?.date}</p>
            </div>
          )}

          {project?.thirdMilestone?.image.length !== 0 && (
            <div className={classes.thirdMilestoneSection}>
              <img
                src={baseS3Url + project?.thirdMilestone?.image}
                style={{ height: "100%" }}
              />
            </div>
          )}

          <Image src={timeline} className={classes.timeline_img} />
        </div>
      </div>
    </div>
  );
}

export default ProjectTimelineSection;
