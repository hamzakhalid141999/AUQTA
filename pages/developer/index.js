import React from 'react';
import classes from "./developer.module.css";
import FirstSection from '../../components/screenComponents/developerScreen/firstSection';
import ContentSection from '../../components/screenComponents/developerScreen/contentSection';

function developer() {
  return (
    <div className={classes.developer_section}>
      <FirstSection/>
      <ContentSection/>
    </div>
  )
}

export default developer