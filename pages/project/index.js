import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../constants";
import classes from "./project.module.css";
import FirstSection from "../../components/screenComponents/projectScreen/firstSection";
import ProjectConentSection from "../../components/screenComponents/projectScreen/projectContentSection";
import SimilarPropertySection from "../../components/screenComponents/projectScreen/similarPropertySection";
import ProjectTimelineSection from "../../components/screenComponents/projectScreen/projectTimelineSection";
import { useAuth } from "../../contextAPI";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";
import ProjectImagesModal from "../../components/modals/projectImagesModal.js";

function Project() {
  const [project, setProject] = useState();
  const router = useRouter();
  const { user } = useAuth();
  const [projectOwnerId, setProjectOwnerId] = useState();
  const [projectOwnerDetails, setProjectOwnerDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [isNoProject, setIsNoProject] = useState(false);
  const [projectId, setProjectId] = useState();

  useEffect(() => {
    if (router?.query?.projectId) {
      setProjectId(router?.query?.projectId);
    }
  }, [router]);

  useEffect(() => {
    if (projectId) {
      fetchProjectDetails();
    }
  }, [projectId]);

  const baseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const fetchProjectDetails = async () => {
    try {
      const projects = await axios.get(
        baseURL + "/api/newproject/" + projectId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = projects?.data;
      setProjectOwnerId(data?.userId?._id);

      for (var i = 0; i < data?.ARimages?.length; i++) {
        data.ARimages[i] = baseUrl + data.ARimages[i];
      }

      for (var i = 0; i < data?.floorPlan?.length; i++) {
        data.floorPlan[i] = baseUrl + data.floorPlan[i];
      }

      for (var i = 0; i < data?.images?.length; i++) {
        data.images[i] = baseUrl + data.images[i];
      }

      for (var i = 0; i < data?.pricePlan?.length; i++) {
        data.pricePlan[i] = baseUrl + data?.pricePlan[i];
      }

      for (var i = 0; i < data?.projectBrochure?.length; i++) {
        data.projectBrochure[i] = baseUrl + data?.projectBrochure[i];
      }

      for (var i = 0; i < data?.shopAvailability?.length; i++) {
        data.shopAvailability[i] = baseUrl + data?.shopAvailability[i];
      }
      setProject(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(project);

  useEffect(() => {
    const fetchDeveloperDetails = async () => {
      try {
        const data = await axios.get(
          baseURL + "/api/user/profilebyid/" + projectOwnerId,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProjectOwnerDetails(data?.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    if (projectOwnerId) {
      fetchDeveloperDetails();
    }
  }, [projectOwnerId]);

  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/projects/62a8aeb7ce61a92f2bcaf574/projectBrochure/download-6-14-2022-1655221943909.jpeg
  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/projects/62a8aeb7ce61a92f2bcaf574/projectBrochure/projects/62a8aeb7ce61a92f2bcaf574/projectBrochure/download-6-14-2022-1655221943909.jpeg

  return (
    <div className={classes.project_section}>
      {loading ? (
        <div className={classes.loader_container}>
          <p>Loading project..</p>
          <ClipLoader size={"20px"} color="black" />
        </div>
      ) : (
        <>
          <FirstSection
            images={project?.images}
            shopAvailability={project?.shopAvailability}
            pricePlan={project?.pricePlan}
            floorPlan={project?.floorPlan}
            projectBrochure={project?.projectBrochure}
            projectDetails={project}
            ownerDetails={projectOwnerDetails}
          />
          <ProjectConentSection
            features={project?.features}
            amenities={project?.amenities}
            address={project?.address}
            projectDetails={project}
            arImages={project?.ARimages}
          />
          <ProjectTimelineSection project={project} />
          <SimilarPropertySection />
        </>
      )}
    </div>
  );
}

export default Project;
