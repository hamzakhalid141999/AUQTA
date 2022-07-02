import React, { useEffect, useState } from "react";
import classes from "./mainFeaturesSection.module.css";

function MainFeaturesSection({ features }) {
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
    }
  }, [features]);

  return (
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
            {features?.mainFeatures?.nearbyLandmarks?.map((landmark, index) => (
              <div key={index} className={classes.bullets_container}>
                <div className={classes.bullet} />
                <p>{landmark}</p>
              </div>
            ))}
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
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
                    <div className={classes.bullet} />
                    <p>{feature?.label}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainFeaturesSection;
