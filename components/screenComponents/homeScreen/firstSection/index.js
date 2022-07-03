import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllCities } from "../../../utils";
import { all_subtypes } from "../../dashboardScreen/dropdowns/dropdowns";
import Link from "next/link";

function FirstSection() {
  const [activeTab, setActiveTab] = useState("buy");
  const [type, setType] = useState();
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [citiesAndLocations, setCitiesAndLocations] = useState();
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [priceBracket, setPriceBracket] = useState();

  const [showMobileFilterPanel, setShowMobileFilterPanel] = useState(true);

  const handleToggleMobileFilterPanel = () => {
    setShowMobileFilterPanel(!showMobileFilterPanel);
  };

  useEffect(() => {
    // AOS.init({
    //   startEvent: "load",
    //   disableMutationObserver: false,
    //   duration: 500,
    // });
    // AOS.refresh();

    const fetchAllCities = async () => {
      const data = await getAllCities();
      setCitiesAndLocations(data);
      data?.map((cityObject) =>
        setCities((city) => [...city, cityObject?.cityName])
      );
    };
    fetchAllCities();
  }, []);

  useEffect(() => {
    if (cities?.length > 0) {
      setCity(cities[0]);
    }
  }, [cities]);

  useEffect(() => {
    if (city) {
      for (var i = 0; i < citiesAndLocations?.length; i++) {
        if (citiesAndLocations[i]?.cityName === city) {
          setLocations(citiesAndLocations[i]?.areas);
        }
      }
    }
  }, [city]);

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className={classes.first_section_wrapper}>
      <div id="home" className={classes.first_section_body}>
        <div className={classes.banner_img_container}>
          <div className={classes.overlay} />
          <video
            src="https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/media/Auqta+Short+Final.mp4"
            className={classes.banner_img}
            alt="hero_banner_img"
            loop
            autoPlay
            muted
            playsInline={true}
          />
        </div>
        <div className={classes.first_section_content_section}>
          <div
            // data-aos="fade-up"
            className={classes.search_bar_container}
          >
            <div className={classes.tabs_container}>
              <div
                onClick={() => {
                  handleTab("invest");
                }}
                style={{ width: "40%", borderTopRightRadius: 0 }}
                className={classes.single_tab}
              >
                <p
                  style={{
                    width: "65%",
                    textAlign: "right",
                    color:
                      activeTab === "invest" ? "#0068ed" : "rgb(70, 70, 70)",
                  }}
                >
                  INVEST
                </p>
              </div>
              <div className={classes.divider_small} />
              <div
                onClick={() => {
                  handleTab("buy");
                }}
                style={{
                  width: "20%",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
                className={classes.single_tab_mid}
              >
                <p
                  style={{
                    color: activeTab === "buy" ? "#0068ed" : "rgb(70, 70, 70)",
                  }}
                >
                  BUY
                </p>
              </div>
              <div className={classes.divider_small} />
              <div
                onClick={() => {
                  handleTab("rent");
                }}
                style={{ width: "40%", borderTopLeftRadius: 0 }}
                className={classes.single_tab}
              >
                <p
                  style={{
                    width: "65%",
                    textAlign: "left",
                    color: activeTab === "rent" ? "#0068ed" : "rgb(70, 70, 70)",
                  }}
                >
                  RENT
                </p>
              </div>
            </div>
            <div className={classes.search_bar}>
              <div className={classes.search_category}>
                <p>CITY</p>
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className={classes.input_field}
                >
                  <option>Select City</option>

                  {cities?.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>LOCATION</p>
                <select
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className={classes.input_field}
                >
                  <option>Select Location</option>
                  {locations?.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>TYPE</p>
                <select
                  disabled={activeTab === "invest" ? true : false}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  className={classes.input_field}
                >
                  <option>Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>PRICE RANGE</p>
                <select
                  onChange={(e) => {
                    setPriceBracket(e.target.value);
                  }}
                  className={classes.input_field}
                >
                  <option>Select Price</option>
                  <option value="1000000-2000000">10 lacs-20 lacs</option>
                  <option value="3000000-4000000">30 lacs-40 lacs</option>
                  <option value="4000000-5000000">40 lacs-50 lacs</option>
                  <option value="5000000-6000000">50 lacs-60 lacs</option>
                  <option value="6000000-7000000">60 lacs-70 lacs</option>
                  <option value="7000000-8000000">70 lacs-80 lacs</option>
                  <option value="8000000-9000000">80 lacs-90 lacs</option>
                  <option value="9000000-10000000">90 lacs-100 lacs</option>
                  <option value="10000000-nill">100 lacs +</option>
                </select>
              </div>
              <Link
                href={{
                  pathname:
                    activeTab === "buy"
                      ? "/map"
                      : activeTab === "rent"
                      ? "/rent"
                      : activeTab === "invest" && "/invest",
                  query: {
                    purpose: activeTab,
                    city: city,
                    location: location,
                    priceRange: priceBracket,
                    type: type,
                  },
                }}
              >
                <div className={classes.search_icon}>
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faSearch}
                    size={"1x"}
                  />
                </div>
              </Link>
            </div>
            <div
              style={{ padding: !showMobileFilterPanel && "0px" }}
              className={classes.search_bar_mobile}
            >
              {showMobileFilterPanel && (
                <>
                  <div className={classes.single_row}>
                    <div className={classes.search_category_mobile}>
                      <p>CITY</p>
                      <select
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        className={classes.input_field}
                      >
                        <option>Select City</option>

                        {cities?.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={classes.search_category_mobile}>
                      <p>LOCATION</p>
                      <select
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                        className={classes.input_field}
                      >
                        <option>Select Location</option>
                        {locations?.map((location, index) => (
                          <option key={index} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={classes.single_row}>
                    <div className={classes.search_category_mobile}>
                      <p>PROPERTY TYPE</p>
                      <select
                        disabled={activeTab === "invest" ? true : false}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                        className={classes.input_field}
                      >
                        <option>Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="plot">Plot</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div className={classes.search_category_mobile}>
                      <p>PRICE RANGE</p>
                      <select
                        onChange={(e) => {
                          setPriceBracket(e.target.value);
                        }}
                        className={classes.input_field}
                      >
                        <option>Select Price</option>
                        <option value="1000000-2000000">10 lacs-20 lacs</option>
                        <option value="3000000-4000000">30 lacs-40 lacs</option>
                        <option value="4000000-5000000">40 lacs-50 lacs</option>
                        <option value="5000000-6000000">50 lacs-60 lacs</option>
                        <option value="6000000-7000000">60 lacs-70 lacs</option>
                        <option value="7000000-8000000">70 lacs-80 lacs</option>
                        <option value="8000000-9000000">80 lacs-90 lacs</option>
                        <option value="9000000-10000000">
                          90 lacs-100 lacs
                        </option>
                        <option value="10000000-nill">100 lacs +</option>
                      </select>
                    </div>
                  </div>

                  <Link
                    href={{
                      pathname:
                        activeTab === "buy"
                          ? "/map"
                          : activeTab === "rent"
                          ? "/rent"
                          : activeTab === "invest" && "/invest",
                      query: {
                        purpose: activeTab,
                        city: city,
                        location: location,
                        priceRange: priceBracket,
                        type: type,
                      },
                    }}
                  >
                    <div className={classes.search_mobile_btn}>
                      <p>SEARCH</p>

                      <FontAwesomeIcon
                        className={classes.icon}
                        icon={faSearch}
                        size={"1x"}
                      />
                    </div>
                  </Link>
                </>
              )}
            </div>
            <div
              onClick={handleToggleMobileFilterPanel}
              className={classes.mobile_filter_toggler}
            >
              <FontAwesomeIcon
                style={{ color: "#0068ed" }}
                className={classes.icon}
                icon={showMobileFilterPanel ? faAngleUp : faAngleDown}
                size={"1x"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
