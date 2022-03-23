import React, {useEffect} from "react";
import classes from "./trendingProperties.module.css";
import PropertyCard from "./components/propertyCard";
import cardInfo from "./components/propertyCard/cardInfo";
import AOS from "aos";
import "aos/dist/aos.css";

function TrendingProperties() {

  useEffect(()=>{
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  },[])

  return (
    <div className={classes.trending_wrapper}>
      <div id="trending" className={classes.trending_container}>
        <h1 data-aos="fade-up">OUR LATEST AND TRENDING PROPERTY</h1>
        <div className={classes.category_tabs_container}>
          <p className={classes.category_tabs_selected}>
            RECENTLY ADDED PROPERTIES
          </p>
          <p className={classes.category_tabs_unselected}>MODERN PROPERTY</p>
          <p className={classes.category_tabs_unselected}>HERITAGE PROPERTY</p>
          <p className={classes.category_tabs_unselected}>APARTMENTS</p>
        </div>
        <div data-aos="fade-up" className={classes.property_cards_container}>
          {cardInfo?.map((property, index) => (
            <PropertyCard title={property.title} description={property.description} price={property.price} location={property.location} picture = {property.picture} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProperties;
