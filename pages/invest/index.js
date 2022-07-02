import React, { useEffect, useRef, useState } from "react";
import classes from "./invest.module.css";
import TrendingProperties from "../../components/screenComponents/homeScreen/trendingProperties";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import { useRouter } from "next/router";
import { baseURL } from "../../constants";
import { PuffLoader } from "react-spinners";

function Invest() {
  const router = useRouter();
  const searchBox = useRef();
  const [loading, setLoading] = useState(true);
  const [searchedParams, setSearchedParams] = useState();
  const [longLatArr, setLongLatArr] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState();
  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  useEffect(() => {
    if (router) {
      setSearchedParams(router.query);
    }
  }, [router]);

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      if (filteredProperties?.length > 0) {
        var longlatTempArr = [];
        for (var i = 0; i < filteredProperties?.length; i++) {
          if (filteredProperties[i]?.address) {
            const url =
              "https://maps.googleapis.com/maps/api/geocode/json?address=" +
              filteredProperties[i]?.address +
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
  }, [filteredProperties]);

  useEffect(() => {
    const fetchSearchedProperties = async () => {
      if (
        searchedParams?.purpose ||
        searchedParams?.city ||
        searchedParams?.location
      ) {
        try {
          const lowerLimit = searchedParams?.priceRange?.split("-")[0];
          const upperLimit = searchedParams?.priceRange?.split("-")[1];

          const data = await axios.get(
            baseURL + "/api/newproject/filter",
            {
              params: {
                city: searchedParams?.city,
                location: searchedParams?.location,
                pageNumber: 1,
                nPerPage: 100,
                minprice: lowerLimit,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setFilteredProperties(data?.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchSearchedProperties();
  }, [searchedParams]);

  function RenderMap() {
    return (
      <GoogleMap
        // className={classes.iframe}
        zoom={10}
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
    <div>
      <div
        style={{
          width: "100%",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          height: "700px",
        }}
      >
        {!isLoaded ? (
          <p>Loading</p>
        ) : loading ? (
          <div className={classes.loader_container}>
            <p>Fetching Investment Opportunities..</p>
            <PuffLoader size={"80px"} color="#0068ed" />
          </div>
        ) : longLatArr?.length === 0 ? (
          <div className={classes.loader_container}>
            <p>No Properties Found</p>
          </div>
        ) : (
          <RenderMap />
        )}
      </div>

      <div className={classes.cards_container}>
        <TrendingProperties
          investmentProjects={filteredProperties}
          isProject={true}
        />
      </div>
    </div>
  );
}

export default Invest;
