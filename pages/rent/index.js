import React, { useEffect, useRef, useState } from "react";
import classes from "./map.module.css";
import PropertyCard from "../map/components/propertyCard";
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
import { baseURL } from "../../constants";
import { PuffLoader } from "react-spinners";

function Map() {
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

  console.log(searchedParams);

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      if (filteredProperties?.length > 0) {
        var longlatTempArr = [];
        for (var i = 0; i < filteredProperties?.length; i++) {
          let url;
          let longLatArr;

          if (
            filteredProperties[i]?.propertyListing?.lat ||
            filteredProperties[i]?.propertyListing?.lng ||
            filteredProperties[i]?.lat ||
            filteredProperties[i]?.lng
          ) {
            if (searchedParams?.type) {
              console.log(
                "LLAAAAATTTTTT: ",
                filteredProperties[i]?.propertyListing?.address
              );
              longLatArr = {
                lat: parseFloat(filteredProperties[i]?.propertyListing?.lat),
                lng: parseFloat(filteredProperties[i]?.propertyListing?.lng),
              };
              longlatTempArr.push(longLatArr);
            } else {
              console.log("LLAAAAATTTTTT: ", filteredProperties[i]?.lat);
              longLatArr = {
                lat: parseFloat(filteredProperties[i]?.lat),
                lng: parseFloat(filteredProperties[i]?.lng),
              };
              longlatTempArr.push(longLatArr);
            }
          } else {
            if (searchedParams?.type) {
              url =
                "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                filteredProperties[i]?.propertyListing?.address +
                "&key=" +
                GEOCODING_API;
            } else {
              url =
                "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                filteredProperties[i]?.address +
                "&key=" +
                GEOCODING_API;
            }

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
      if (searchedParams?.city) {
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
                propertytype: searchedParams?.type,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(data?.data);
          setFilteredProperties(data?.data);
          if (data?.data?.length === 0) {
            setLoading(false);
          }
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
            <p>Fetching properties..</p>
            <PuffLoader size={"80px"} color="#0068ed" />
          </div>
        ) : filteredProperties?.length === 0 ? (
          <div className={classes.loader_container}>
            <p>No Properties Found</p>
          </div>
        ) : (
          <RenderMap />
        )}
      </div>

      {filteredProperties?.length > 0 && (
        <div className={classes.cards_container}>
          <h1>Similar Properties</h1>
          <div className={classes.cards}>
            {filteredProperties
              ?.filter((property, index) => index < 4)
              ?.map((property, index) => (
                <PropertyCard
                  key={index}
                  propertyId={property?._id}
                  title={
                    searchedParams?.type
                      ? property?.propertyListing?.title
                      : property?.title
                  }
                  price={
                    searchedParams?.type
                      ? property?.propertyListing?.price
                      : property?.price
                  }
                  location={
                    searchedParams?.type
                      ? property?.propertyListing?.location
                      : property?.location
                  }
                  city={
                    searchedParams?.type
                      ? property?.propertyListing?.city
                      : property?.city
                  }
                  picture={
                    searchedParams?.type
                      ? property?.propertyListing?.images[0]
                      : property?.images?.length > 0 && property?.images[0]
                  }
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
