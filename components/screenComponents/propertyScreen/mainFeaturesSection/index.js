import React from "react";
import classes from "./mainFeaturesSection.module.css";

function MainFeaturesSection() {
  return (
    <div className={classes.main_features_section}>
      <h1>MAIN FEATURES</h1>
      <div className={classes.main_features_content}>
        <div className={classes.single_row}>
          <div className={classes.input_field_container_dual}>
            <label>Build Year</label>
            <div className={classes.input_field}>
              <p>2013</p>
            </div>
          </div>
          <div className={classes.input_field_container_dual}>
            <label>Facing View</label>
            <div className={classes.input_field}>
              <p>North</p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
            <label>Nearby Landmarks</label>
            <div className={classes.grid}>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Bahria Town Eiffel Tower</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Grand Mosque</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Family Club</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>IMAX</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Mega Mall</p>
                </div>
            </div>
        </div>

        <div className={classes.section}>
            <label>Salient Features</label>
            <div className={classes.grid}>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Basement Incldued</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Parking Spaces</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Elevator</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Water Disposal</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Electricty Backup</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Double Glazed Windows</p>
                </div>
                <div className={classes.bullets_container}>
                    <div className={classes.bullet}/>
                    <p>Semi Furnished</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeaturesSection;
