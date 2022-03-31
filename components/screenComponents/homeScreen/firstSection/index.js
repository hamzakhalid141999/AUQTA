import React, { useState, useEffect } from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function FirstSection() {
  const [activeTab, setActiveTab] = useState("buy");

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className={classes.first_section_wrapper}>
      <div id="home" className={classes.first_section_body}>
        <div className={classes.banner_img_container}>
          <div className={classes.overlay} />
          <video
            src="https://farbe9d3fb46190ad4564938d20f57a5ad372133227-test.s3.eu-central-1.amazonaws.com/public/compressed/first_section_banner_video.mp4"
            className={classes.banner_img}
            alt="hero_banner_img"
            loop
            autoPlay
            muted
            playsInline={true}
          />
        </div>
        <div className={classes.first_section_content_section}>
          <h1 data-aos="fade-right">
            Indulge in the world of immersive technologies
          </h1>
          <p data-aos="fade-right">
            Auqta brings you the world{"'"}s first immersive property portal
          </p>
          <div data-aos="fade-up" className={classes.search_bar_container}>
            <div className={classes.tabs_container}>
              <div
                onClick={() => {
                  handleTab("buy");
                }}
                className={
                  activeTab === "buy"
                    ? classes.single_tab_active
                    : classes.single_tab_inactive
                }
              >
                <p>BUY</p>
              </div>
              <div
                onClick={() => {
                  handleTab("rent");
                }}
                className={
                  activeTab === "rent"
                    ? classes.single_tab_active
                    : classes.single_tab_inactive
                }
              >
                <p>RENT</p>
              </div>
              <div
                onClick={() => {
                  handleTab("invest");
                }}
                className={
                  activeTab === "invest"
                    ? classes.single_tab_active
                    : classes.single_tab_inactive
                }
              >
                <p>INVEST</p>
              </div>
            </div>
            <div className={classes.search_bar}>
              <div className={classes.search_category}>
                <p>CITY</p>
                <h3>BALAKAN MOUNTAINS</h3>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>LOCATION</p>
                <h3>SOUTH EASTERN EUROPE</h3>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>PROPERTY TYPE</p>
                <h3>PRIVATE HOUSE</h3>
              </div>
              <div className={classes.divider} />
              <div className={classes.search_category}>
                <p>PRICE RANGE</p>
                <h3>$40000 - $60000</h3>
              </div>
              <div className={classes.search_icon}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faSearch}
                  size={"1x"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
