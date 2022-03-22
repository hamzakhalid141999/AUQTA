import React from "react";
import classes from "./findSection.module.css";
import Card from "./components/index";
import CardsInfo from "../findSection/components/cardInfo";

function findSection() {
  console.log(CardsInfo);

  return (
    <div className={classes.find_section_wrapper}>
      <div className={classes.find_section_section}>
        <h1>WHAT CAN WE HELP YOU FIND?</h1>
        <div className={classes.cards_container}>
          {CardsInfo?.map((card, index) => (
            <Card
              lower={index % 2 !== 0 ? true : false}
              icon={card?.icon}
              title={card?.title}
              description={card?.description}
              key={index}
              btn = {card?.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default findSection;
