import React, { useEffect, useState } from "react";
import classes from "./mainFeaturesSection.module.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function MainFeaturesSection({ property, features }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  function RenderMap() {
    return (
      <GoogleMap
        zoom={13}
        center={{
          lat: property?.lat ? parseFloat(property?.lat) : 88,
          lng: property?.lng ? parseFloat(property?.lng) : 48,
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
          position={{
            lat: property?.lat ? parseFloat(property?.lat) : 88,
            lng: property?.lng ? parseFloat(property?.lng) : 48,
          }}
        />
      </GoogleMap>
    );
  }

  const [mainFeatures, setMainFeatures] = useState([]);
  const [communicationFeatures, setCommunicationFeatures] = useState([]);
  const [otherFeatures, setOtherFeatures] = useState([]);
  const [recreationalFeatures, setRecreationalFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [utilitiesFeatures, setUtilitiesFeatures] = useState([]);

  const mockVal = (featureName, featureValue) => ({
    label: featureName,
    value: featureValue,
  });

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.mainFeatures) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setMainFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.mainFeatures[i]),
        ]);
      }
      for (
        var i = 0;
        i < features?.mainFeatures?.otherMainFeatures?.length;
        i++
      ) {
        var result = features?.mainFeatures?.otherMainFeatures[i].replace(
          /([A-Z])/g,
          " $1"
        );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        setMainFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, true),
        ]);
      }
    }
  }, [features]);

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.communication) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setCommunicationFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.communication[i]),
        ]);
      }

      for (var i = 0; i < features?.communication?.otherFeatures?.length; i++) {
        var result = features?.communication?.otherFeatures[i].replace(
          /([A-Z])/g,
          " $1"
        );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        setCommunicationFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, true),
        ]);
      }
    }
  }, [features]);

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.otherFeatures) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setOtherFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.otherFeatures[i]),
        ]);
      }

      for (var i = 0; i < features?.utilities?.otherFeatures?.length; i++) {
        var result = features?.utilities?.otherFeatures[i].replace(
          /([A-Z])/g,
          " $1"
        );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        setOtherFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, true),
        ]);
      }
    }
  }, [features]);

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.recreationalFeatures) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setRecreationalFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.recreationalFeatures[i]),
        ]);
      }
    }
  }, [features]);

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.rooms) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setRoomFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.rooms[i]),
        ]);
      }

      for (var i = 0; i < features?.rooms?.otherFeatures?.length; i++) {
        var result = features?.rooms?.otherFeatures[i].replace(
          /([A-Z])/g,
          " $1"
        );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        setRoomFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, true),
        ]);
      }
    }
  }, [features]);

  useEffect(() => {
    if (features) {
      let res = [];
      for (var i in features?.utilities) {
        var result = i.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        setUtilitiesFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, features?.utilities[i]),
        ]);
      }

      for (var i = 0; i < features?.utilities?.otherFeatures?.length; i++) {
        var result = features?.utilities?.otherFeatures[i].replace(
          /([A-Z])/g,
          " $1"
        );
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

        setUtilitiesFeatures((featureArr) => [
          ...featureArr,
          mockVal(finalResult, true),
        ]);
      }
    }
  }, [features]);

  return (
    <>
      <div className={classes.main_features_section}>
        <h1>MAIN FEATURES</h1>
        <div className={classes.main_features_content}>
          <div className={classes.single_row}>
            <div className={classes.input_field_container_dual}>
              <label>Build Year</label>
              <div className={classes.input_field}>
                <p>{features?.mainFeatures?.builtYear}</p>
              </div>
            </div>
            <div className={classes.input_field_container_dual}>
              <label>Facing View</label>
              <div className={classes.input_field}>
                <p>{features?.mainFeatures?.facingView}</p>
              </div>
            </div>
          </div>
          <div className={classes.section}>
            <label>Nearby Landmarks</label>
            <div className={classes.grid}>
              {features?.mainFeatures?.nearbyLandmarks?.map(
                (landmark, index) => (
                  <div key={index} className={classes.bullets_container}>
                    <div className={classes.bullet} />
                    <p>{landmark}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {mainFeatures?.filter((arr) => arr?.value === true)?.length > 0 && (
            <div className={classes.section}>
              <label>Salient Features</label>
              <div className={classes.grid}>
                {/* {
            features?.mainFeatures
          } */}
                {mainFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {communicationFeatures?.filter((arr) => arr?.value === true)?.length >
            0 && (
            <div className={classes.section}>
              <label>Communication Features</label>
              <div className={classes.grid}>
                {/* {
              features?.mainFeatures
            } */}
                {communicationFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {otherFeatures?.filter((arr) => arr?.value === true)?.length > 0 && (
            <div className={classes.section}>
              <label>Other Features</label>
              <div className={classes.grid}>
                {/* {
            features?.mainFeatures
          } */}
                {otherFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {recreationalFeatures?.filter((arr) => arr?.value === true)?.length >
            0 && (
            <div className={classes.section}>
              <label>Recreational Features</label>
              <div className={classes.grid}>
                {/* {
            features?.mainFeatures
          } */}
                {recreationalFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {roomFeatures?.filter((arr) => arr?.value === true)?.length > 0 && (
            <div className={classes.section}>
              <label>Room Features</label>
              <div className={classes.grid}>
                {/* {
              features?.mainFeatures
            } */}
                {roomFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {utilitiesFeatures?.filter((arr) => arr?.value === true)?.length >
            0 && (
            <div className={classes.section}>
              <label>Utility Features</label>
              <div className={classes.grid}>
                {/* {
              features?.mainFeatures
            } */}
                {utilitiesFeatures
                  ?.filter((feature, idx) => feature?.value === true)
                  ?.map((feature, index) => (
                    <div key={index} className={classes.bullets_container}>
                      <div className={classes.bullet} /> <p>{feature?.label}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        {isLoaded && property?.lng && property?.lat ? <RenderMap /> : <></>}
      </div>
    </>
  );
}

export default MainFeaturesSection;
