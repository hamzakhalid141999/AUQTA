import React, { useEffect, useState } from "react";
import classes from "./blogCardsSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "../components/blogCard";
import { useWindowSize } from "../../../../utils";

function BlogCardsSection({ isTitle }) {
  const { width } = useWindowSize();
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    if (width) {
      if (width > 1390) {
        setSlidesToShow(3);
      }
      if (width < 1390) {
        setSlidesToShow(3);
      }
      if (width < 1024) {
        setSlidesToShow(2);
      }
      if (width < 754) {
        setSlidesToShow(1);
      }
    }
  }, [width]);

  return (
    <div className={classes.blogs_section_container}>
      {isTitle && <h1>YOU MAY ALSO LIKE</h1>}
      <div className={classes.blogs_section}>
        <h1>Coming Soon</h1>
        {/* <Slider slidesToShow={slidesToShow} {...settings}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Slider> */}
      </div>
    </div>
  );
}

export default BlogCardsSection;
