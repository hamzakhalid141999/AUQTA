import React from "react";
import classes from "./similarPropertySection.module.css";
import PropertyCard from "../../homeScreen/trendingProperties/components/propertyCard";
import cardInfo from "../../homeScreen/trendingProperties/components/propertyCard/cardInfo";
import { useWindowSize } from "../../../../utils";

function SimilarPropertySection() {
  const { width } = useWindowSize();

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <h1 data-aos="fade-up">SIMILAR PROPERTIES</h1>
        <div data-aos="fade-up" className={classes.property_cards_container}>
          {cardInfo
            ?.filter((property, index) => (width < 1177 ? index < 3 : 4))
            .map((property, index) => (
              <PropertyCard
                key={index}
                title={property.title}
                description={property.description}
                price={property.price}
                location={property.location}
                picture={property.picture}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SimilarPropertySection;
