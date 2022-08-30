import React from "react";
import classes from "./similarPropertySection.module.css";
import PropertyCard from "../../homeScreen/trendingProperties/components/propertyCard";
import cardInfo from "../../homeScreen/trendingProperties/components/propertyCard/cardInfo";
import { useWindowSize } from "../../../../utils";
import TrendingProperties from "../../homeScreen/trendingProperties";

function SimilarPropertySection() {
  const { width } = useWindowSize();

  return (
    <TrendingProperties
      heading={"SIMILAR PROJECTS"}
      noButtons={true}
      fromHome
    />
  );
}

export default SimilarPropertySection;
