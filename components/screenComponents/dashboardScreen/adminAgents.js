import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { getAllAgents } from "../../utils/getAllAgents";
import { ClipLoader } from "react-spinners";

function AdminAgents({
  handleOpenModal,
  setSelectedRealEstateId,
  setIsActive,
  setIsProject,
}) {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAllAgents();
      setAgents(data);
      setLoading(false);
    };

    fetchAgents();
  }, []);

  console.log(agents);

  return (
    <div className={classes.table_container}>
      <div className={classes.table}>
        <div className={classes.table_heading_bar}>
          <p className={classes.heading}>Name</p>
          <p className={classes.heading}>Username</p>
          <p className={classes.heading}>Email</p>
          <p className={classes.heading}>Status</p>
        </div>

        <div className={classes.table_content}>
          {loading ? (
            <div className={classes.loader_container}>
              <ClipLoader size={"20px"} color="black" />
            </div>
          ) : (
            agents?.map((agent, index) => (
              <div key={index} className={classes.single_entry}>
                <p>
                  {agent?.user?.firstName} {agent?.user?.lastName}
                </p>
                <p>{agent?.user?.username}</p>
                <p>{agent?.user?.email}</p>
                <div style={{ minWidth: "170px" }}>
                  <img
                    onClick={() => {
                      handleOpenModal();
                      setSelectedRealEstateId(agent?._id);
                      setIsActive(agent?.isActive);
                      setIsProject(true);
                    }}
                    src={agent?.pause === true ? pending.src : check.src}
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

export default AdminAgents;
