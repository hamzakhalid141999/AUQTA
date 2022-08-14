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

function AllDevelopers() {
  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";
  const [loading, setLoading] = useState(true);
  const [longLatArr, setLongLatArr] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const [developers, setDevelopers] = useState();

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAllDevelopers();
      setDevelopers(data);
    };

    fetchAgents();
  }, []);

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      if (developers?.length > 0) {
        var longlatTempArr = [];
        for (var i = 0; i < developers?.length; i++) {
          let url;
          url =
            "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            developers[i]?.corporateAddress +
            developers[i]?.user?.location +
            developers[i]?.user?.city +
            "&key=" +
            GEOCODING_API;

          const data = await axios.get(url);
          if (data?.data?.results.length > 0) {
            longlatTempArr.push(data?.data?.results[0]?.geometry?.location);
          } else {
            setLoading(false);
          }
        }
        setLoading(false);
        setLongLatArr(longlatTempArr);
      }
    };
    fetchFilteredProperties();
  }, [developers]);

  function RenderMap() {
    return (
      <GoogleMap
        // className={classes.iframe}
        zoom={7}
        center={{
          lat: longLatArr[0]?.lat ? longLatArr[0]?.lat : 44,
          lng: longLatArr[0]?.lng ? longLatArr[0]?.lng : -80,
        }}
        style={{
          height: "700px",
          borderBottomLeftRadius: "180px",
          borderBottomRightRadius: "180px",
          width: "100%",
        }}
        mapContainerClassName={classes.map_container}
      >
        {longLatArr?.map((location, index) => (
          <Marker
            key={index}
            icon={
              "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/assets/pin-without-shadow.png"
            }
            position={{ lat: location?.lat, lng: location?.lng }}
          />
        ))}
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

      <h1 className={classes.heading}>Our Developers</h1>
      <div className={classes.content_container}>
        {developers?.map((user, index) => (
          <DeveloperCard
            key={index}
            name={user?.user?.username}
            city={user?.user?.city}
            location={user?.user?.location}
            picture={user?.user?.profilePicture}
            description={user?.user?.aboutInformation}
            logo={user?.developerLogo}
          />
        ))}
      </div>
    </div>
  );
}

export default AllDevelopers;
