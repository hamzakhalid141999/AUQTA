import React from 'react';
import classes from "./ourMission.module.css";
import Image from 'next/image';
import our_mission from '../../../../public/assets/our_mission.png';

function OurMission() {
  return (
    <div className={classes.mission_section_wrapper}>
        <div className={classes.mission_section_section}>
            <h1>OUR MISSION</h1>
            <p>Delivering digital convenience to buyers, sellers, investors, and realtors</p>
            <div className={classes.content_container}>
                <div className={classes.image_container}>
                <Image src={our_mission} alt="pic" layout='fill' className={classes.img}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurMission