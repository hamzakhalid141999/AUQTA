import React, {useEffect} from "react";
import classes from "./visionSection.module.css";
import cardInfo from "./components/cardInfo";
import VisionSectionCard from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

function VisionSection() {

    useEffect(()=>{
        AOS.init({
          duration: 500,
        });
        AOS.refresh();
      },[])

  return (
    <div className={classes.vision_section}>
      <div className={classes.content_container}>
        <h1 data-aos="fade-up">OUR VALUES</h1>
        <p data-aos="fade-up">
          Our CITIC (Convenience, Innovation, Teamworks, Integrity, and
          Communication) values give us the courage and motivation to constantly
          deliver perfection to our user base. We humbly believe that our values
          will help us outshine in the real estate industry.
        </p>
        <div data-aos="fade-up" className={classes.cards_container}>
          {cardInfo?.map((card, index) => (
            <VisionSectionCard
              key={index}
              icon={card?.icon}
              title={card?.title}
              description={card?.description}
              btn={card?.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
