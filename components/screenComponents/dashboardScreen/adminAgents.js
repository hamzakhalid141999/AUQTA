import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { getAdminAgents } from "../../utils/adminAgents";
import { ClipLoader } from "react-spinners";
import Link from "next/link";

function AdminAgents({
  handleOpenModal,
  setSelectedUserId,
  setIsAgent,
  setIsUserActivation,
  setIsPaused,
}) {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAdminAgents();
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
                <Link
                  href={{
                    pathname: "/agent",
                    query: {
                      developerId: agent?.user?._id,
                    },
                  }}
                >
                  <p style={{ cursor: "pointer" }}>
                    {agent?.user?.firstName
                      ? agent?.user?.firstName
                      : agent?.user?.name}{" "}
                    {agent?.user?.lastName}
                  </p>
                </Link>
                <p>{agent?.user?.username ? agent?.user?.username : "N/A"}</p>
                <p>{agent?.user?.email ? agent?.user?.email : "N/A"}</p>
                <div style={{ minWidth: "170px" }}>
                  <img
                    onClick={() => {
                      handleOpenModal();
                      setSelectedUserId(agent?.user?._id);
                      setIsAgent(true);
                      setIsUserActivation(true);
                      setIsPaused(agent?.pause);
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
