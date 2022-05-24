import React from 'react';
import classes from "./developer.module.css";
import FirstSection from '../../components/screenComponents/developerScreen/firstSection';
import ContentSection from '../../components/screenComponents/developerScreen/contentSection';
import UpcomingProjects from '../../components/screenComponents/developerScreen/upcomingProjects';

function developer() {
  return (
    <div className={classes.developer_section}>
      <FirstSection/>
      <ContentSection/>
      <UpcomingProjects/>
    </div>
  )
}

export default developer