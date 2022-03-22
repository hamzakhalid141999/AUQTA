import React from "react";
import classes from "./trendingProperties.module.css";
import PropertyCard from "./components/propertyCard";
import cardInfo from "./components/propertyCard/cardInfo";

function TrendingProperties() {
  return (
    <div className={classes.trending_wrapper}>
      <div className={classes.trending_container}>
        <h1>OUR LATEST AND TRENDING PROPERTY</h1>
        <div className={classes.category_tabs_container}>
          <p className={classes.category_tabs_selected}>
            RECENTLY ADDED PROPERTIES
          </p>
          <p className={classes.category_tabs_unselected}>MODERN PROPERTY</p>
          <p className={classes.category_tabs_unselected}>HERITAGE PROPERTY</p>
          <p className={classes.category_tabs_unselected}>APARTMENTS</p>
        </div>
        <div className={classes.property_cards_container}>
          {cardInfo?.map((property, index) => (
            <PropertyCard picture = {property.picture} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProperties;
