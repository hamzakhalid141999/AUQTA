import React from 'react';
import classes from "./upcomingProjects.module.css";
import UpcomingProjectCard from './components/upcomingProjectCard';
import img1 from "../../../../public/assets/project_1.png";
import img2 from "../../../../public/assets/project_2.png";
import img3 from "../../../../public/assets/project_3.png";
import img4 from "../../../../public/assets/project_4.png";

function UpcomingProjects() {
  return (
    <div className={classes.upcoming_projects_section}>
        <h1>Upcoming Projects</h1>
        <div className={classes.upcoming_projects_cards_container}>
            <UpcomingProjectCard image = {img1}/>
            <UpcomingProjectCard image = {img2}/>
            <UpcomingProjectCard image = {img3}/>
            <UpcomingProjectCard image = {img4}/>
        </div>

    </div>
  )
}

export default UpcomingProjects