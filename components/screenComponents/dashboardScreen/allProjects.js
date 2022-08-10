import React, { useEffect, useState } from "react";
import classes from "./allPropertiesProjects.module.css";
import { getAllActiveProjects } from "../../utils/fetchAllActiveProjects";
import ProjectCard from "../homeScreen/trendingProperties/components/propertyCard";
import { ClipLoader } from "react-spinners";

function AllProjects({ dashboardType }) {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      if (dashboardType === "projects") {
        const data = await getAllActiveProjects();
        setProjects(data);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [dashboardType]);

  console.log(projects);

  return (
    <>
      {loading ? (
        <div className={classes.loading_container}>
          <ClipLoader size={"40px"} color="black" />
        </div>
      ) : (
        <div className={classes.content_container}>
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.projectName}
              description={project.projectDescription}
              price={project.priceRangeFrom}
              location={project.location}
              city={project.city}
              picture={project.images[0]}
              id={project?._id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AllProjects;
