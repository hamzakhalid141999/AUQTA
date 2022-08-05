import React from "react";
import classes from "./blogs.module.css";
import FirstSection from "../../components/screenComponents/blogScreen/firstSection";
import BlogCardsSection from "../../components/screenComponents/blogScreen/blogCardsSection";

function Blogs() {
  return (
    <div className={classes.blogs_section}>
      <FirstSection />
      <BlogCardsSection />
    </div>
  );
}

export default Blogs;
