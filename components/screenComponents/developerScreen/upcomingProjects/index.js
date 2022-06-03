import React from 'react';
import classes from "./upcomingProjects.module.css";
import UpcomingProjectCard from './components/upcomingProjectCard';
import img1 from "../../../../public/assets/project_1.png";
import img2 from "../../../../public/assets/project_2.png";
import img3 from "../../../../public/assets/project_3.png";
import img4 from "../../../../public/assets/project_4.png";
import { useWindowSize } from '../../../../utils';

function UpcomingProjects() {
  const {width} = useWindowSize();
  return (
    <div className={classes.upcoming_projects_section}>
        <h1>Upcoming Projects</h1>
        <div className={classes.upcoming_projects_cards_container}>
     
            <>
            <UpcomingProjectCard title={"1"} image = {img1}/>
            <UpcomingProjectCard title={"2"} image = {img2}/>
            <UpcomingProjectCard title={"3"} image = {img3}/>
            <UpcomingProjectCard title={"4"} image = {img4}/>
            </>
                   
        </div>

    </div>
  )
}

export default UpcomingProjects