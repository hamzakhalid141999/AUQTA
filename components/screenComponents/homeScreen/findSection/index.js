import React, {useEffect} from "react";
import classes from "./findSection.module.css";
import Card from "./components/index";
import CardsInfo from "../findSection/components/cardInfo";
import AOS from "aos";
import "aos/dist/aos.css";

function FindSection() {
  console.log(CardsInfo);

  useEffect(()=>{
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  },[])

  return (
    <div className={classes.find_section_wrapper}>
      <div id="buy" className={classes.find_section_section}>
        <h1 data-aos="fade-up">WHAT CAN WE HELP YOU FIND?</h1>
        <div data-aos="fade-up" className={classes.cards_container}>
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

export default FindSection;
