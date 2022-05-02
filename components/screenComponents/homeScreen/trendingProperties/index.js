import React, {useEffect} from "react";
import classes from "./trendingProperties.module.css";
import PropertyCard from "./components/propertyCard";
import cardInfo from "./components/propertyCard/cardInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useWindowSize } from "../../../../utils";

function TrendingProperties({isProject}) {
  const {width} = useWindowSize();
  useEffect(()=>{
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  },[])

  return (
    <div className={classes.trending_wrapper}>
      <div id="trending" className={classes.trending_container}>
        <h1 data-aos="fade-up">TOP INVESTMENT OPPORTUNITIES</h1>
        <div className={classes.category_tabs_container}>
          <p className={classes.category_tabs_selected}>
            ISLAMABAD
          </p>
          <p className={classes.category_tabs_unselected}>PUNJAB</p>
          <p className={classes.category_tabs_unselected}>SINDH</p>
          <p className={classes.category_tabs_unselected}>BALOCHISTAN</p>
          <p className={classes.category_tabs_unselected}>KHYBER PAKHTUNKHWA</p>
        </div>
        <div data-aos="fade-up" className={classes.property_cards_container}>
          {cardInfo?.filter((property, index) => width < 1177 ? index < 3 : 4).map((property, index) => (
            <PropertyCard isProject = {isProject} title={property.title} description={property.description} price={property.price} location={property.location} picture = {property.picture} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProperties;
