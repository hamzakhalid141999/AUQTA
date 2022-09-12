import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";

function AdminProjects({
  handleOpenModal,
  setSelectedRealEstateId,
  setIsActive,
  setIsProject,
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getAdminProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  console.log(projects);

  return (
    <div className={classes.table_container}>
      <div className={classes.table}>
        <div className={classes.table_heading_bar}>
          <p className={classes.heading}>Project Name</p>
          <p className={classes.heading}>Owned By</p>
          <p className={classes.heading}>Status</p>
        </div>

        <div className={classes.table_content}>
          {projects?.map((project, index) => (
            <div key={index} className={classes.single_entry}>
              <p>{project?.projectName}</p>
              <p>Random Name</p>
              <div style={{ minWidth: "170px" }}>
                <img
                  onClick={() => {
                    handleOpenModal();
                    setSelectedRealEstateId(project?._id);
                    setIsActive(project?.isActive);
                    setIsProject(true);
                  }}
                  src={project?.isActive === true ? check.src : pending.src}
                  style={{ height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
