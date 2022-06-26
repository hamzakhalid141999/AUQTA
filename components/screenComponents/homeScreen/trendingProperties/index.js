import React, { useEffect, useState } from "react";
import classes from "./trendingProperties.module.css";
import PropertyCard from "./components/propertyCard";
import cardInfo from "./components/propertyCard/cardInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useWindowSize } from "../../../../utils";

function TrendingProperties({
  isProject,
  heading,
  noButtons,
  investmentProjects,
}) {
  const { width } = useWindowSize();
  const [citySelected, setCitySelected] = useState("ISLAMABAD");

  console.log(investmentProjects);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const handleCitySelected = (value) => {
    setCitySelected(value);
  };

  return (
    <div className={classes.trending_wrapper}>
      <div id="trending" className={classes.trending_container}>
        <h1
          style={{
            marginBottom:
              noButtons && width > 1000
                ? "50px"
                : noButtons && width < 1000
                ? "0px"
                : "0px",
          }}
          data-aos="fade-up"
        >
          {heading ? heading : "TOP INVESTMENT OPPORTUNITIES"}
        </h1>

        {noButtons ? (
          <></>
        ) : (
          <div className={classes.category_tabs_container}>
            <p
              onClick={() => {
                handleCitySelected("ISLAMABAD");
              }}
              className={
                citySelected === "ISLAMABAD"
                  ? classes.category_tabs_selected
                  : classes.category_tabs_unselected
              }
            >
              ISLAMABAD
            </p>
            <p
              onClick={() => {
                handleCitySelected("PUNJAB");
              }}
              className={
                citySelected === "PUNJAB"
                  ? classes.category_tabs_selected
                  : classes.category_tabs_unselected
              }
            >
              PUNJAB
            </p>
            <p
              onClick={() => {
                handleCitySelected("SINDH");
              }}
              className={
                citySelected === "SINDH"
                  ? classes.category_tabs_selected
                  : classes.category_tabs_unselected
              }
            >
              SINDH
            </p>
            <p
              onClick={() => {
                handleCitySelected("BALUCHISTAN");
              }}
              className={
                citySelected === "BALUCHISTAN"
                  ? classes.category_tabs_selected
                  : classes.category_tabs_unselected
              }
            >
              BALOCHISTAN
            </p>
            <p
              onClick={() => {
                handleCitySelected("KPK");
              }}
              className={
                citySelected === "KPK"
                  ? classes.category_tabs_selected
                  : classes.category_tabs_unselected
              }
            >
              KPK
            </p>
          </div>
        )}

        <div data-aos="fade-up" className={classes.property_cards_container}>
          {investmentProjects
            ?.filter((project, index) => (width < 1177 ? index < 3 : index < 4))
            .map((project, index) => (
              <PropertyCard
                isProject={isProject}
                title={project.projectName}
                description={project.projectDescription}
                price={project.priceRangeFrom}
                location={project.location}
                city={project.city}
                picture={project.images[0]}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProperties;
