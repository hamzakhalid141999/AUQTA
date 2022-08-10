import React, { useEffect, useState } from "react";
import classes from "./allPropertiesProjects.module.css";
import { getAllProperties } from "../../utils/fetchAllActiveProperties";
import PropertyCard from "../../../pages/map/components/propertyCard";
import { ClipLoader } from "react-spinners";

function AllProperties({ dashboardType }) {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      if (dashboardType === "properties") {
        const data = await getAllProperties();
        setProperties(data);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [dashboardType]);

  console.log(properties);

  return (
    <>
      {loading ? (
        <div className={classes.loading_container}>
          <ClipLoader size={"40px"} color="black" />
        </div>
      ) : (
        <div className={classes.content_container}>
          {properties?.map((property, index) => (
            <PropertyCard
              key={index}
              propertyId={property?.propertyListing?._id}
              title={property?.propertyListing?.title}
              price={property?.propertyListing?.price}
              location={property?.propertyListing?.location}
              city={property?.propertyListing?.city}
              picture={property?.propertyListing?.images[0]}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AllProperties;
