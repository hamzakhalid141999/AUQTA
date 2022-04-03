import React, { useEffect, useState } from "react";
import classes from "./newsSection.module.css";

function NewsSection() {
  return (
    <div className={classes.news_section_wrapper}>
      <div className={classes.news_section_section}>
        <h1>NEWS</h1>
      </div>
    </div>
  );
}

export default NewsSection;
