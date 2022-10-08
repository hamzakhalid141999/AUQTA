import React, { useEffect, useState, useMemo } from "react";
import classes from "./allAgentsAndDevelopers.module.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import { getAllDevelopers } from "../../utils/getAllDevelopers";
import DeveloperCard from "../../userCard";
import ClipLoader from "react-spinners/ClipLoader";

function AllDevelopers() {
  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";
  const [loading, setLoading] = useState(true);
  const [longLatArr, setLongLatArr] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });
  const [searchCity, setSearchCity] = useState();

  const [developers, setDevelopers] = useState();

  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAllDevelopers();
      setDevelopers(data);
      setLoading(false);
    };

    fetchAgents();
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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

  const map = useMemo(() => {
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
            onClick={() => handleActiveMarker(index)}
          >
            {activeMarker === index && (
              <InfoWindow
                position={{
                  lat: location?.lat,
                  lng: location?.lng,
                }}
                onCloseClick={() => setActiveMarker(null)}
              >
                <DeveloperCard
                  key={index}
                  isSmall={true}
                  id={developers[index]?.user?._id}
                  name={developers[index]?.user?.username}
                  city={developers[index]?.user?.city}
                  location={developers[index]?.user?.location}
                  picture={developers[index]?.user?.profilePicture}
                  description={developers[index]?.user?.aboutInformation}
                  logo={developers[index]?.developerLogo}
                />
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  }, [longLatArr, activeMarker]);

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
        {!isLoaded ? <p>Loading</p> : map}
      </div>

      <h1 className={classes.heading}>Developers</h1>

      <div className={classes.search_container}>
        <input
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
          placeholder="Search Developer by city"
          className={classes.search}
        />
      </div>

      {loading ? (
        <div className={classes.loading_container}>
          <ClipLoader size={"15px"} color="black" />
        </div>
      ) : developers?.length === 0 ? (
        <div className={classes.loading_container}>
          <p> No Developers</p>
        </div>
      ) : (
        <div className={classes.content_container}>
          {searchCity
            ? developers
                ?.filter((user, index) =>
                  user?.user?.city
                    ?.toLowerCase()
                    .includes(searchCity?.toLowerCase())
                )
                ?.map((user, index) => (
                  <DeveloperCard
                    key={index}
                    id={user?.user?._id}
                    name={user?.user?.username}
                    city={user?.user?.city}
                    location={user?.user?.location}
                    picture={user?.user?.profilePicture}
                    description={user?.user?.aboutInformation}
                    logo={user?.developerLogo}
                  />
                ))
            : developers?.map((user, index) => (
                <DeveloperCard
                  key={index}
                  id={user?.user?._id}
                  name={user?.user?.username}
                  city={user?.user?.city}
                  location={user?.user?.location}
                  picture={user?.user?.profilePicture}
                  description={user?.user?.aboutInformation}
                  logo={user?.developerLogo}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default AllDevelopers;
