import React, { useEffect, useRef, useState } from "react";
import classes from "./map.module.css";
import PropertyCard from "./components/propertyCard";
import img from "../../public/assets/map_property_img.png";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";
import { baseURL } from "../../constants";

function map() {
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

  console.log(filteredProperties);
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  useEffect(() => {
    if (router) {
      setSearchedParams(router.query);
    }
  }, [router]);

  useEffect(async () => {
    if (filteredProperties?.length > 0) {
      var longlatTempArr = [];
      for (var i = 0; i < filteredProperties?.length; i++) {
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
      setLoading(false);
      setLongLatArr(longlatTempArr);
    }
  }, [filteredProperties]);

  useEffect(() => {
    const fetchSearchedProperties = async () => {
      if (
        searchedParams?.purpose &&
        searchedParams?.city &&
        searchedParams?.location
      ) {
        try {
          const data = await axios.get(
            baseURL + "/api/property/filter",
            {
              params: {
                purpose:
                  searchedParams?.purpose === "buy"
                    ? "sell"
                    : searchedParams?.purpose === "rent" && "rent",
                city: searchedParams?.city,
                location: searchedParams?.location,
                pageNumber: 1,
                nPerPage: 100,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setFilteredProperties(data?.data);
          // setLoading(false);
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
        {longLatArr?.map((location) => (
          <Marker
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
            <p>Fetching properties..</p>
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
        <div className={classes.categories_container}>
          <div className={classes.left_panel}>
            <p>Off-the-grid</p>
            <p>Farms</p>
            <p>Kezhans</p>
            <p>Beach Front</p>
            <p>Tiny Homes</p>
            <p>More</p>
          </div>
        </div>
        <div className={classes.cards}>
          {filteredProperties
            ?.filter((property, index) => index < 4)
            ?.map((property, index) => (
              <PropertyCard
                key={index}
                title={property?.title}
                price={property?.price}
                location={property?.location}
                city={property?.city}
                picture={baseS3Url + property?.images[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default map;
