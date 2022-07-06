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
import { useRouter } from "next/router";

function Property() {
  const router = useRouter();
  const [property, setProperty] = useState();
  const [propertyOwnerId, setPropertyOwnerId] = useState();
  const [propertyOwnerDetails, setPropertyOwnerDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [similarProperties, setSimilarProperties] = useState();
  const { user } = useAuth();
  const [isNoProperty, setIsNoProperty] = useState(false);
  const [propertyId, setPropertyId] = useState();

  useEffect(() => {
    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  useEffect(() => {
    if (router?.query?.propertyId) {
      console.log(router?.query?.propertyId);
      setPropertyId(router?.query?.propertyId);
    }
  }, [router]);

  useEffect(() => {
    const fetchPropertiesByLocation = async () => {
      if (property) {
        console.log(property);
        const data = await getPropertiesByProvince(
          property?.propertyListing?.province
        );
        setSimilarProperties(data);
      }
    };

    fetchPropertiesByLocation();
  }, [property]);

  console.log(property);

  const bucketBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const fetchProperty = async () => {
    try {
      const property = await axios.get(
        baseURL + "/api/property/" + propertyId,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(property?.data);
      const data = property?.data;
      setLoading(false);
      for (var i = 0; i < data?.propertyListing?.images?.length; i++) {
        data.propertyListing.images[i] =
          bucketBaseUrl + data?.propertyListing?.images[i];
      }
      setProperty(data);
      setPropertyOwnerId(data?.propertyListing?.userId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchDeveloperDetails = async () => {
      console.log(property?.propertyListing);
      try {
        const data = await axios.get(
          baseURL +
            "/api/user/profilebyid/" +
            property?.propertyListing?.userId?._id,
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

    if (property) {
      fetchDeveloperDetails();
    }
  }, [property]);

  return (
    <div className={classes.property_section}>
      {loading ? (
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
