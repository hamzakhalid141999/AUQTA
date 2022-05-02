import React from 'react';
import classes from "./invest.module.css";
import TrendingProperties from '../../components/screenComponents/homeScreen/trendingProperties';

function invest() {
  return (
    <div>
    <div
      style={{
        width: "100%",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <iframe
        style={{
          width: "100%",
          borderBottomRightRadius: "180px",
          borderBottomLeftRadius: "180px",
        }}
        width="100%"
        height="700"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/marine-gps/">marine gps</a>
      </iframe>
    </div>

    <div className={classes.cards_container}>
      <TrendingProperties isProject = {true}/>
    </div>
  </div>
  )
}

export default invest