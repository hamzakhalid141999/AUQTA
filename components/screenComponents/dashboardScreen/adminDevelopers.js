import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProjects } from "../../utils/getAdminProjects";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { getAllDevelopers } from "../../utils/getAllDevelopers";
import { ClipLoader } from "react-spinners";

function AdminDevelopers({
  handleOpenModal,
  setSelectedRealEstateId,
  setIsActive,
  setIsProject,
}) {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const data = await getAllDevelopers();
        setDevelopers(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  console.log(developers);

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
            developers?.map((developer, index) => (
              <div key={index} className={classes.single_entry}>
                <p>
                  {developer?.user?.firstName} {developer?.user?.lastName}
                </p>
                <p>{developer?.user?.username}</p>
                <p>{developer?.user?.email}</p>
                <div style={{ minWidth: "170px" }}>
                  <img
                    onClick={() => {
                      handleOpenModal();
                      setSelectedRealEstateId(developer?._id);
                      setIsActive(developer?.isActive);
                      setIsProject(true);
                    }}
                    src={developer?.pause === true ? pending.src : check.src}
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

export default AdminDevelopers;
