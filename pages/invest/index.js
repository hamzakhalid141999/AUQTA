import React, { useEffect, useRef, useState, useMemo } from "react";
import classes from "./invest.module.css";
import TrendingProperties from "../../components/screenComponents/homeScreen/trendingProperties";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import {
  faBath,
  faBed,
  faMapMarker,
  faHeart,
  faExternalLink,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { baseURL } from "../../constants";
import { PuffLoader } from "react-spinners";
import placeholder from "../../public/assets/placeholder-company.png";

function Invest() {
  const router = useRouter();
  const searchBox = useRef();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searchedParams, setSearchedParams] = useState();
  const [longLatArr, setLongLatArr] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState();
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const handleToggleOpen = () => {
    setIsOpen(true);
  };
  const handleToggleClose = () => {
    setIsOpen(false);
  };

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
          if (filteredProperties[i]?.lat || filteredProperties[i]?.lng) {
            let longLatArr;

            longLatArr = {
              lat: parseFloat(filteredProperties[i]?.lat),
              lng: parseFloat(filteredProperties[i]?.lng),
            };
            longlatTempArr.push(longLatArr);
          } else {
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

  const center = useMemo(
    () => ({ lat: longLatArr[0]?.lat, lng: longLatArr[0]?.lng }),
    [longLatArr]
  );

  const map = useMemo(() => {
    return (
      <GoogleMap
        // className={classes.iframe}
        zoom={10}
        center={center}
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
            position={{
              lat: location?.lat,
              lng: location?.lng,
            }}
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
                <div className={classes.card_body}>
                  <div className={classes.image_container}>
                    <Image
                      layout="fill"
                      className={classes.property_picture}
                      src={
                        baseS3Url + filteredProperties[index]?.images[0]
                          ? baseS3Url + filteredProperties[index]?.images[0]
                          : placeholder
                      }
                      alt="picture"
                    />
                  </div>
                  <div className={classes.description_container}>
                    <div className={classes.title_and_price_container}>
                      <p className={classes.title}>
                        {filteredProperties[index]?.projectName}
                      </p>
                    </div>
                    <>
                      <div className={classes.location_container}>
                        <FontAwesomeIcon
                          className={classes.location_icon}
                          icon={faMapMarker}
                          size={"1x"}
                        />
                        <p className={classes.location}>
                          {filteredProperties[index]?.location},{" "}
                          {filteredProperties[index]?.city}
                        </p>
                      </div>
                    </>

                    <div className={classes.property_description_container}>
                      <p>{filteredProperties[index]?.projectDescription}</p>
                    </div>
                    <div className={classes.bottom_description_container}>
                      <p className={classes.price}>
                        {filteredProperties[index]?.priceRangeFrom} -{" "}
                        {filteredProperties[index]?.priceRangeTo}
                      </p>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  }, [center, longLatArr, activeMarker]);

  console.log(filteredProperties);

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
        ) : filteredProperties?.length === 0 ? (
          <div className={classes.loader_container}>
            <p>No Properties Found</p>
          </div>
        ) : (
          map
        )}
      </div>

      {filteredProperties?.length > 0 && (
        <div className={classes.cards_container}>
          <TrendingProperties
            investmentProjects={filteredProperties}
            isProject={true}
          />
        </div>
      )}
    </div>
  );
}

export default Invest;
