import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { ClipLoader } from "react-spinners";
import { fetchUserDetailsById } from "../../utils/fetchUserDetailsById";
import Link from "next/link";

function AdminProjects({
  handleOpenModal,
  setSelectedRealEstateId,
  setIsActive,
  setIsProject,
}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getAdminProjects();
        for (var i = 0; i < data?.length; i++) {
          const user = await fetchUserDetailsById(data[i]?.userId);
          data[i].owner = user?.user?.username;
        }
        setProjects(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <div className={classes.table_container}>
      <div className={classes.table}>
        <div className={classes.table_heading_bar}>
          <p className={classes.heading}>Project Name</p>
          <p className={classes.heading}>Owned By</p>
          <p className={classes.heading}>Status</p>
        </div>

        <div className={classes.table_content}>
          {loading ? (
            <div className={classes.loader_container}>
              <ClipLoader size={"20px"} color="black" />
            </div>
          ) : (
            projects?.map((project, index) => (
              <div key={index} className={classes.single_entry}>
                <Link
                  href={{
                    pathname: "/dashboard/edit_project",
                    query: {
                      projectId: project?._id,
                    },
                  }}
                >
                  <p style={{ cursor: "pointer" }}>{project?.projectName}</p>
                </Link>
                <p>{project?.owner}</p>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
