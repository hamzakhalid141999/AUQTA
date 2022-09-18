import React, { useState, useEffect } from "react";
import classes from "./adminPages.module.css";
import { getAdminProperties } from "../../utils/getAdminProperties";
import pending from "../../../public/assets/pending.png";
import check from "../../../public/assets/check.png";
import ActivatePropertyOrProject from "../../modals/activatePropertyOrProject";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import { fetchUserDetailsById } from "../../utils/fetchUserDetailsById";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        for (var i = 0; i < data?.length; i++) {
          const user = await fetchUserDetailsById(
            data[i]?.propertyListing?.userId
          );
          data[i].owner = user?.username;
          data[i].ownerEmail = user?.email;
        }

        console.log(data);
        setProperties(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  return (
    <div className={classes.table_container}>
      <div className={classes.table}>
        <div className={classes.table_heading_bar}>
          <p className={classes.heading}>Property Name</p>
          <p className={classes.heading}>Owned By</p>
          <p className={classes.heading}>Owned Email</p>
          <p style={{ minWidth: "120px" }} className={classes.heading}>
            Status
          </p>
          <p style={{ minWidth: "100px", color: "transparent" }}>asd</p>

          {/* <p className={classes.heading}></p> */}
        </div>

        <div className={classes.table_content}>
          {loading ? (
            <div className={classes.loader_container}>
              <ClipLoader size={"20px"} color="black" />
            </div>
          ) : (
            properties?.map((property, index) => (
              <div key={index} className={classes.single_entry}>
                <Link
                  href={{
                    pathname: "/dashboard/edit_property",
                    query: {
                      propertyId: property?.propertyListing?._id,
                    },
                  }}
                >
                  <p style={{ cursor: "pointer" }}>
                    {property?.propertyListing?.title}
                  </p>
                </Link>
                <p>{property?.owner}</p>
                <p>{property?.ownerEmail}</p>
                <div style={{ minWidth: "100px" }}>
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
                <Link
                  href={{
                    pathname: "/property",
                    query: {
                      propertyId: property?.propertyListing?._id,
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
                    pathname: "/dashboard/edit_property",
                    query: {
                      propertyId: property?.propertyListing?._id,
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

export default AdminProperties;
