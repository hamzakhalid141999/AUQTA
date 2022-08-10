import React, { useEffect, useState } from "react";
import classes from "./allAgentsAndDevelopers.module.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import { getAllDevelopers } from "../../utils/getAllDevelopers";
import DeveloperCard from "../../userCard";

function AllDevelopers({ dashboardType }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const [developers, setDevelopers] = useState();

  useEffect(() => {
    const fetchAgents = async () => {
      if (dashboardType === "developers") {
        const data = await getAllDevelopers();
        setDevelopers(data);
        console.log(data);
      }
    };

    fetchAgents();
  }, [dashboardType]);

  function RenderMap() {
    return (
      <GoogleMap
        // className={classes.iframe}
        zoom={10}
        center={{
          lat: 44,
          lng: -80,
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
          icon={
            "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/assets/pin-without-shadow.png"
          }
          position={{ lat: 44, lng: -80 }}
        />
      </GoogleMap>
    );
  }

  return (
    <div className={classes.container}>
      <div
        style={{
          width: "100%",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          height: "500px",
        }}
      >
        {!isLoaded ? <p>Loading</p> : <RenderMap />}
      </div>

      <div className={classes.content_container}>
        {developers?.map((user, index) => (
          <DeveloperCard
            key={index}
            name={user?.user?.username}
            city={user?.user?.city}
            location={user?.user?.location}
            picture={user?.user?.profilePicture}
            description={user?.user?.aboutInformation}
          />
        ))}
      </div>
    </div>
  );
}

export default AllDevelopers;
