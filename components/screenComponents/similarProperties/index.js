import React from "react";
import classes from "./similarProperties.module.css";
import PropertyCard from "../../../pages/map/components/propertyCard";

function SimilarProperties({ properties }) {
  return (
    <div className={classes.trending_wrapper}>
      <div className={classes.trending_container}>
        <h1 style={{ marginBottom: "30px" }}>SIMILAR PROPERTIES</h1>
        <div className={classes.property_cards_container}>
          {properties
            ?.filter((property, index) => index < 4)
            ?.map((property, index) => (
              <PropertyCard
                key={index}
                city={property?.city}
                location={property?.location}
                price={property?.price}
                title={property?.title}
                picture={property?.images[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SimilarProperties;
