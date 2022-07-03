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
import { getPropertiesByProvince } from "../../components/utils/fetchPropertiesByProvince";
import SimilarProperties from "../../components/screenComponents/similarProperties";

function Property() {
  const [property, setProperty] = useState();
  const [propertyOwnerId, setPropertyOwnerId] = useState();
  const [propertyOwnerDetails, setPropertyOwnerDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [similarProperties, setSimilarProperties] = useState();
  const { user } = useAuth();
  const [isNoProperty, setIsNoProperty] = useState(false);

  useEffect(() => {
    if (user) {
      fetchProperty();
    }
  }, [user]);

  useEffect(() => {
    const fetchPropertiesByLocation = async () => {
      if (property) {
        console.log(property);
        const data = await getPropertiesByProvince(
          property?.propertyListing?.province
        );
        console.log(data);
        setSimilarProperties(data);
      }
    };

    fetchPropertiesByLocation();
  }, [property]);

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
      if (property?.data?.length === 0) {
        setIsNoProperty(true);
        setLoading(false);
      } else if (property?.data?.length === 1) {
        const data = property?.data[0];
        for (var i = 0; i < data?.propertyListing?.images?.length; i++) {
          data.propertyListing.images[i] =
            bucketBaseUrl + data?.propertyListing?.images[i];
        }
        setProperty(data);
        setPropertyOwnerId(data?.propertyListing?.userId);
      } else if (property?.data?.length > 1) {
        const data = property?.data[propertyArrLength - 1];
        for (var i = 0; i < data?.propertyListing?.images?.length; i++) {
          data.propertyListing.images[i] =
            bucketBaseUrl + data?.propertyListing?.images[i];
        }
        setProperty(data);
        setPropertyOwnerId(data?.propertyListing?.userId);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      {!user ? (
        <div className={classes.message_container}>
          <p>No User Logged In</p>
        </div>
      ) : loading ? (
        <div className={classes.loader_container}>
          <p>Loading property..</p>
          <ClipLoader size={"20px"} color="black" />
        </div>
      ) : !property ? (
        <div className={classes.message_container}>
          <p>No Property</p>
        </div>
      ) : (
        <>
          <FirstSection
            images={property?.propertyListing?.images}
            propertyDetails={property?.propertyListing}
            propertyListingDetails={property}
            ownerDetails={propertyOwnerDetails}
          />
          <PictureSection images={property?.propertyListing?.images} />
          <Description property={property} />
          <MainFeaturesSection features={property?.resSalientFeatures} />
          <SimilarProperties properties={similarProperties} />
        </>
      )}
    </div>
  );
}

export default Property;
