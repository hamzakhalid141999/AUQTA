import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProperties } from "../../utils/getAdminProperties";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { ClipLoader } from "react-spinners";
function AdminProperties({
  handleOpenModal,
  setSelectedRealEstateId,
  setIsActive,
}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await getAdminProperties();
        setProperties(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  console.log(properties);

  return (
    <div className={classes.table_container}>
      <div className={classes.table}>
        <div className={classes.table_heading_bar}>
          <p className={classes.heading}>Property Name</p>
          <p className={classes.heading}>Owned By</p>
          <p className={classes.heading}>Status</p>
        </div>

        <div className={classes.table_content}>
          {loading ? (
            <div className={classes.loader_container}>
              <ClipLoader size={"20px"} color="black" />
            </div>
          ) : (
            properties?.map((property, index) => (
              <div key={index} className={classes.single_entry}>
                <p>{property?.propertyListing?.title}</p>
                <p>Random Name</p>
                <div style={{ minWidth: "170px" }}>
                  <img
                    onClick={() => {
                      handleOpenModal();
                      setSelectedRealEstateId(property?.propertyListing?._id);
                      setIsActive(property?.propertyListing?.isActive);
                    }}
                    src={
                      property?.propertyListing?.isActive === true
                        ? check.src
                        : pending.src
                    }
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

export default AdminProperties;
