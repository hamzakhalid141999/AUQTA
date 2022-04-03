import React, { useEffect } from "react";
import classes from "./findSection.module.css";
import Card from "./components/index";
import CardsInfo from "../findSection/components/cardInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function FindSection() {
  console.log(CardsInfo);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={classes.find_section_wrapper}>
      <div id="buy" className={classes.find_section_section}>
        <h1 data-aos="fade-up">BENEFITS OF USING THIS PLATFORM</h1>
        <div data-aos="fade-up" className={classes.cards_container}>
          <div className={classes.overlay} />
          <Slider {...settings}>
            {CardsInfo?.map((card, index) => (
              <Card
                key={index}
                lower={index % 2 !== 0 ? true : false}
                icon={card?.icon}
                title={card?.title}
                description={card?.description}
                btn={card?.btn}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FindSection;
