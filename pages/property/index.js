import React, { useEffect, useState } from "react";
import classes from "./property.module.css";
import FirstSection from "../../components/screenComponents/propertyScreen/firstSection";
import PictureSection from "../../components/screenComponents/propertyScreen/picturesSection";
import Description from "../../components/screenComponents/propertyScreen/descriptionSection";
import TrendingProperties from "../../components/screenComponents/homeScreen/trendingProperties";
import MainFeaturesSection from "../../components/screenComponents/propertyScreen/mainFeaturesSection";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { baseURL } from "../../constants";
import { useAuth } from "../../contextAPI";

function Property() {
  const [property, setProperty] = useState();
  const [propertyOwnerId, setPropertyOwnerId] = useState();
  const [propertyOwnerDetails, setPropertyOwnerDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchProperty();
    }
  }, [user]);

  const bucketBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const fetchProperty = async () => {
    try {
      const property = await axios.get(
        // baseURL + "/api/property/allpropertylistings/id/" + user,
        baseURL + "/api/property/allpropertylistings/id/" + user?.id,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const propertyArrLength = property?.data?.length;
      const data = property?.data[propertyArrLength - 1];
      // const propertyArrLength = data?.data?.length;
      for (var i = 0; i < data?.propertyListing?.images?.length; i++) {
        data.propertyListing.images[i] =
          bucketBaseUrl + data?.propertyListing?.images[i];
      }
      setProperty(data);
      setPropertyOwnerId(data?.propertyListing?.userId);
      // console.log(data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(propertyOwnerDetails);

  useEffect(() => {
    const fetchDeveloperDetails = async () => {
      try {
        const data = await axios.get(
          baseURL + "/api/user/profilebyid/" + user?.id,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPropertyOwnerDetails(data?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    if (propertyOwnerId) {
      fetchDeveloperDetails();
    }
  }, [propertyOwnerId]);

  return (
    <div className={classes.property_section}>
      {loading ? (
        <div className={classes.loader_container}>
          <p>Loading property..</p>
          <ClipLoader size={"20px"} color="black" />
        </div>
      ) : (
        <>
          <FirstSection
            images={property?.propertyListing?.images}
            propertyDetails={property?.propertyListing}
            ownerDetails={propertyOwnerDetails}
          />
          <PictureSection images={property?.propertyListing?.images} />
          <Description property={property} />
          <MainFeaturesSection features={property?.resSalientFeatures} />
          <TrendingProperties noButtons={true} heading={"SIMILAR PROPERTIES"} />
        </>
      )}
    </div>
  );
}

export default Property;
