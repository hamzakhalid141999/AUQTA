import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";
import banner_img from "../../../../public/assets/contact_us_banner_img.png";
import Contact_Form from "./form";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function FirstSection() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const RenderMap = () => {
    return (
      <>
        <GoogleMap
          zoom={14}
          center={{
            lat: 33.52591987135425,
            lng: 73.11186914233437,
          }}
          style={{
            height: "700px",
            borderBottomLeftRadius: "180px",
            borderBottomRightRadius: "180px",
            width: "100%",
          }}
          mapContainerClassName={classes.map_container}
        >
          <Marker
            // icon={
            //   "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/assets/pin-without-shadow.png"
            // }
            position={{ lat: 33.52591987135425, lng: 73.11186914233437 }}
          />
        </GoogleMap>
      </>
    );
  };

  return (
    <div className={classes.main_container}>
      <div
        style={{
          width: "100%",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        {isLoaded ? <RenderMap /> : <></>}
      </div>

      <div className={classes.dashboard_container}>
        <Contact_Form />
      </div>
    </div>
  );
}

export default FirstSection;
