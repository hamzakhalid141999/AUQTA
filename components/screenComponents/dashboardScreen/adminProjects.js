import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { ClipLoader } from "react-spinners";
import { fetchUserDetailsById } from "../../utils/fetchUserDetailsById";
import Link from "next/link";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          data[i].ownerEmail = user?.user?.email;
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
          <p className={classes.heading}>Owned Email</p>
          <p style={{ minWidth: "120px" }} className={classes.heading}>
            Status
          </p>
          <p style={{ minWidth: "100px", color: "transparent" }}>asd</p>
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
                <p>{project?.ownerEmail}</p>
                <div style={{ minWidth: "100px" }}>
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
                <Link
                  href={{
                    pathname: "/project",
                    query: {
                      projectId: project?._id,
                    },
                  }}
                >
                  <FontAwesomeIcon
                    // className={classes.location_icon}
                    style={{ cursor: "pointer" }}
                    icon={faShare}
                    size={"1x"}
                  />
                </Link>

                <Link
                  href={{
                    pathname: "/dashboard/edit_project",
                    query: {
                      projectId: project?._id,
                    },
                  }}
                >
                  <FontAwesomeIcon
                    // className={classes.location_icon}
                    style={{ cursor: "pointer" }}
                    icon={faPencil}
                    size={"1x"}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
