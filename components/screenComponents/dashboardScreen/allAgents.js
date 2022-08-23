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
import { getAllAgents } from "../../utils/getAllAgents";
import AgentCard from "../../userCard";
import ClipLoader from "react-spinners/ClipLoader";

function AllAgents() {
  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";
  const [loading, setLoading] = useState(true);
  const [longLatArr, setLongLatArr] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const [agents, setAgents] = useState();

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      if (agents?.length > 0) {
        var longlatTempArr = [];
        let longLatArr;
        let url;

        for (var i = 0; i < agents?.length; i++) {
          if (agents[i]?.lat || agents[i]?.lng) {
            longLatArr = {
              lat: parseFloat(agents[i]?.lat),
              lng: parseFloat(agents[i]?.lng),
            };
            longlatTempArr.push(longLatArr);
          } else {
            url =
              "https://maps.googleapis.com/maps/api/geocode/json?address=" +
              agents[i]?.companyAddress +
              agents[i]?.user?.location +
              agents[i]?.user?.city +
              "&key=" +
              GEOCODING_API;

            const data = await axios.get(url);
            if (data?.data?.results.length > 0) {
              longlatTempArr.push(data?.data?.results[0]?.geometry?.location);
            } else {
              setLoading(false);
            }
          }
        }
        setLoading(false);
        setLongLatArr(longlatTempArr);
      }
    };
    fetchFilteredProperties();
  }, [agents]);

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAllAgents();
      setAgents(data);
      setLoading(false);
    };

    fetchAgents();
  }, []);

  function RenderMap() {
    return (
      <GoogleMap
        // className={classes.iframe}
        zoom={7}
        center={{
          lat: longLatArr[0]?.lat ? longLatArr[0]?.lat : 33.6844,
          lng: longLatArr[0]?.lng ? longLatArr[0]?.lng : 73.0479,
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
      <h1 className={classes.heading}>Our Agents</h1>

      {loading ? (
        <div className={classes.loading_container}>
          <ClipLoader size={"15px"} color="black" />
        </div>
      ) : agents?.length === 0 ? (
        <div className={classes.loading_container}>
          <p> No Agents</p>
        </div>
      ) : (
        <div className={classes.content_container}>
          {agents?.map((user, index) => (
            <AgentCard
              isAgent={true}
              key={index}
              id={user?.user?._id}
              name={user?.user?.username}
              city={user?.user?.city}
              location={user?.user?.location}
              picture={user?.user?.profilePicture}
              description={user?.user?.aboutInformation}
              logo={user?.companyLogo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllAgents;
