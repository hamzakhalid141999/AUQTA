import React, { useState, useEffect, useMemo } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { baseURL } from "../../../constants";
import { ClipLoader } from "react-spinners";
import { amenities } from "./dropdowns/dropdowns";
import Select, { components } from "react-select";
import { useAuth } from "../../../contextAPI";
import { getAllCities } from "../../utils";
import { useWindowSize } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import "react-toastify/dist/ReactToastify.css";

function ProjectForm() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";

  const { width } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [categorySelected, setCategorySelected] = useState("buy");
  const [featureArr, setFeatureArr] = useState([1, 2, 3, 4]);
  const [amenityArr, setAmenityArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  const [locationFeatureArr, setLocationFeatureArr] = useState([1, 2, 3, 4]);

  const [name, setName] = useState();
  const [priceLowerBound, setPriceLowerBound] = useState();
  const [priceUpperBound, setPriceUpperBound] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [province, setProvince] = useState();
  const [address, setAddress] = useState();
  const [isGovApproved, setIsGovApproved] = useState();
  const [approvalBody, setApprovalBody] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [firstMilestone, setFirstMilestone] = useState();
  const [secondMilestone, setSecondMilestone] = useState();
  const [thirdMilestone, setThirdMilestone] = useState();

  const [imgArr, setImgArr] = useState([]);
  const [imagesBlobArr, setImagesBlobArr] = useState([]);

  const [brochureImgArr, setBrochureImg] = useState([]);
  const [brochureImgBlobArr, setBrochureImgBlobArr] = useState([]);

  const [priceImgArr, setPriceImgArr] = useState([]);
  const [priceImgBlobArr, setPriceImgBlobArr] = useState([]);

  const [floorplanImgArr, setFloorplanImgArr] = useState([]);
  const [floorplanBlobImgArr, setFloorplanBlobImgArr] = useState([]);

  const [shopImgArr, setShopImgArr] = useState([]);
  const [shopImgBlobArr, setShopImgBlobArr] = useState([]);

  const [imgsKeysArr, setImgsKeysArr] = useState([]);
  const [brochureImgKeysArr, setBrochureImgKeysArr] = useState([]);
  const [priceImgKeysArr, setPriceImgKeysArr] = useState([]);
  const [floorPlanImgKeysArr, setFloorPlanImgKeysArr] = useState([]);
  const [shopImgKeysArr, setShopImgKeysArr] = useState([]);

  const [featuresArr, setFeaturesArr] = useState(featureArr);
  const [locationFeaturesArr, setLocationFeaturesArr] =
    useState(locationFeatureArr);

  const [amenitiesArr, setAmenitiesArr] = useState([]);
  const [amenitiesArrFinal, setAmenitiesArrFinal] = useState();
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [citiesAndLocations, setCitiesAndLocations] = useState();

  const [firstMilestoneImage, setFirstMilestoneImg] = useState();
  const [firstMilestoneBlob, setFirstMilestoneBlob] = useState();
  const [secondMilestoneImage, setSecondMilestoneImg] = useState();
  const [secondMilestoneBlob, setSecondMilestoneBlob] = useState();
  const [thirdMilestoneImage, setThirdMilestoneImg] = useState();
  const [thirdMilestoneBlob, setThirdMilestoneBlob] = useState();

  const [firstMilestoneImageKey, setFirstMilestoneImageKey] = useState();
  const [secondMilestoneImageKey, setSecondMilestoneImageKey] = useState();
  const [thirdMilestoneImageKey, setThirdMilestoneImageKey] = useState();

  const [isImagesUploaded, setIsImagesUploaded] = useState(false);
  const [isFirstMilestoneImageUploaded, setIsFirstMilestoneImageUploaded] =
    useState(false);
  const [isSecondMilestoneImageUploaded, setIsSecondMilestoneImageUploaded] =
    useState(false);
  const [isThirdMilestoneImageUploaded, setIsThirdMilestoneImageUploaded] =
    useState(false);
  const [isBrochureImageUploaded, setIsBrochureImageUploaded] = useState(false);
  const [isPricePlanImageUploaded, setIsPriceplanImageUplaoded] =
    useState(false);
  const [isFloorPlanImageUplaoded, setIsFloorPlanImageUploaded] =
    useState(false);
  const [isShopImageUploaded, setIsShopImageUploaded] = useState(false);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [initialLat, setInitialLat] = useState();
  const [initialLng, setInitialLng] = useState();

  const [locationOverview, setLocationOverview] = useState();

  useEffect(async () => {
    const data = await getAllCities();
    setCitiesAndLocations(data);
    data?.map((cityObject) =>
      setCities((city) => [...city, cityObject?.cityName])
    );
  }, []);

  useEffect(() => {
    if (cities?.length > 0) {
      setCities(cities?.sort());
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

  const missingCredError = (value) =>
    toast.error("Enter " + value, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const Option = (props) => {
    return (
      <div>
        {" "}
        <components.Option {...props}>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "10px",
              height: "100%",
            }}
          >
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={(e) => null}
            />{" "}
            <label>{props?.label}</label>
          </div>{" "}
        </components.Option>{" "}
      </div>
    );
  };

  const addAmenities = (amenitiesArr) => {
    const temp = [];
    amenitiesArr?.map((amenity) => temp.push(amenity?.value));
    setAmenitiesArrFinal(temp);
  };

  const amenitiesObj = (landmark, name) => ({
    label: landmark,
    value: name,
  });

  useEffect(() => {
    amenities?.map((amenity) => {
      setAmenitiesArr((single) => [...single, amenitiesObj(amenity, amenity)]);
    });
  }, [amenities]);

  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  const handleAddField = () => {
    setFeatureArr((array) => [...array, featureArr.length + 1]);
  };

  const handleAddLocationField = () => {
    setLocationFeatureArr((array) => [...array, locationFeatureArr.length + 1]);
  };

  const handleAddAmenity = () => {
    setAmenityArr((array) => [...array, amenityArr.length + 1]);
  };

  const handleImages = (files) => {
    for (var i = 0; i < files?.length; i++) {
      setImgArr((imgsArr) => [...imgsArr, files[i]?.name]);
      setImagesBlobArr((blobArr) => [...blobArr, files[i]]);
    }
  };

  const handleBrochureImages = (files) => {
    for (var i = 0; i < files?.length; i++) {
      setBrochureImg((imgsArr) => [...imgsArr, files[i]?.name]);
      setBrochureImgBlobArr((blobArr) => [...blobArr, files[i]]);
    }
  };

  const handlePricePlanImages = (files) => {
    for (var i = 0; i < files?.length; i++) {
      setPriceImgArr((imgsArr) => [...imgsArr, files[i]?.name]);
      setPriceImgBlobArr((blobArr) => [...blobArr, files[i]]);
    }
  };

  const handleFloorPlanImages = (files) => {
    for (var i = 0; i < files?.length; i++) {
      setFloorplanImgArr((imgsArr) => [...imgsArr, files[i]?.name]);
      setFloorplanBlobImgArr((blobArr) => [...blobArr, files[i]]);
    }
  };

  const handleShopAvailabilityImages = (files) => {
    for (var i = 0; i < files?.length; i++) {
      setShopImgArr((imgsArr) => [...imgsArr, files[i]?.name]);
      setShopImgBlobArr((blobArr) => [...blobArr, files[i]]);
    }
  };

  const handleFirstMilestoneImage = (file) => {
    setFirstMilestoneImg(file[0]?.name);
    setFirstMilestoneBlob(file[0]);
  };

  const handleSecondMilestoneImage = (file) => {
    setSecondMilestoneImg(file[0]?.name);
    setSecondMilestoneBlob(file[0]);
  };

  const handleThirdMilestoneImage = (file) => {
    setThirdMilestoneImg(file[0]?.name);
    setThirdMilestoneBlob(file[0]);
  };

  const handleAddProject = async () => {
    if (!name) {
      missingCredError("project name");
      return;
    } else if (!priceLowerBound) {
      missingCredError("price lower bound");
      return;
    } else if (!priceUpperBound) {
      missingCredError("price upper bound");
      return;
    } else if (!description) {
      missingCredError("description");
      return;
    } else if (featuresArr?.length === 0) {
      missingCredError("features");
      return;
    } else if (amenitiesArrFinal?.length === 0) {
      missingCredError("amenities");
      return;
    } else if (!city) {
      missingCredError("city");
      return;
    } else if (!location) {
      missingCredError("location");
      return;
    } else if (!address) {
      missingCredError("address");
      return;
    } else if (!province) {
      missingCredError("province");
      return;
    } else if (!approvalBody) {
      missingCredError("approval body name");
      return;
    } else if (!startDate) {
      missingCredError("start date");
      return;
    } else if (!endDate) {
      missingCredError("end date");
      return;
    }

    setLoading(true);
    try {
      const data = await axios.post(
        baseURL + "/api/newproject/add",
        {
          projectName: name,
          projectDescription: description,
          priceRangeFrom: priceLowerBound,
          priceRangeTo: priceUpperBound,
          city: city,
          location: location,
          features: featuresArr,
          locationOverview: locationOverview,
          locationFeatures: locationFeaturesArr,
          amenities: amenitiesArrFinal,
          govtApproved: isGovApproved,
          approvalBodyName: approvalBody,
          projectBrochure: brochureImgArr,
          floorPlan: floorplanImgArr,
          pricePlan: priceImgArr,
          shopAvailability: shopImgArr,
          images: imgArr,
          address: address,
          province: province,
          isActive: false,
          dateAdded: Math.floor(Date.now() / 1000),
          currentScenario: "ongoing",
          projectStartDate: startDate,
          projectEndDate: endDate,
          firstMilestone: firstMilestone,
          secondMilestone: secondMilestone,
          thirdMilestone: thirdMilestone,
          startDateImage: "startDate",
          endDateImage: "endDateImage",
          firstMilestoneImage: firstMilestoneImage,
          secondMilestoneImage: secondMilestoneImage,
          thirdMilestoneImage: thirdMilestoneImage,
          userId: user?.id,
          lat: lat,
          lng: lng,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!firstMilestoneImage) {
        setIsFirstMilestoneImageUploaded(true);
      }
      if (!secondMilestoneImage) {
        setIsSecondMilestoneImageUploaded(true);
      }
      if (!thirdMilestoneImage) {
        setIsThirdMilestoneImageUploaded(true);
      }
      if (!brochureImgArr) {
        setIsBrochureImageUploaded(true);
      }
      if (!shopImgArr) {
        setIsShopImageUploaded(true);
      }
      if (!floorplanImgArr) {
        setIsFloorPlanImageUploaded(true);
      }
      setImgsKeysArr(data?.data?.newproject?.images);
      setPriceImgKeysArr(data?.data?.newproject?.pricePlan);
      setBrochureImgKeysArr(data?.data?.newproject?.projectBrochure);
      setFloorPlanImgKeysArr(data?.data?.newproject?.floorPlan);
      setShopImgKeysArr(data?.data?.newproject?.shopAvailability);
      setFirstMilestoneImageKey(data?.data?.newproject?.firstMilestone?.image);
      setSecondMilestoneImageKey(
        data?.data?.newproject?.secondMilestone?.image
      );
      setThirdMilestoneImageKey(data?.data?.newproject?.thirdMilestone?.image);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  useEffect(() => {
    if (firstMilestoneImageKey && firstMilestoneImage) {
      const data = {
        fileKey: firstMilestoneImageKey,
      };
      axios
        .post(baseURL + "/api/s3/getUrlWithKey", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((url) => {
          const blobUrl = URL.createObjectURL(firstMilestoneBlob, {
            type: "image/png",
          });

          var xhr = new XMLHttpRequest();
          xhr.open("GET", blobUrl, true);
          xhr.responseType = "blob";
          xhr.onload = async function (e) {
            if (this.status === 200) {
              var myBlob = this.response;
              const myHeaders = new Headers({ "Content-Type": "image/*" });
              const response = await fetch(url.data.body.presigned_url, {
                method: "PUT",
                headers: myHeaders,
                body: myBlob,
              });
              const s3Url = response?.url?.split("?")[0];
              setIsFirstMilestoneImageUploaded(true);
            }
          };
          xhr.send();
        });
    }
  }, [firstMilestoneImageKey]);

  useEffect(() => {
    if (secondMilestoneImageKey) {
      const data = {
        fileKey: secondMilestoneImageKey,
      };
      axios
        .post(baseURL + "/api/s3/getUrlWithKey", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((url) => {
          const blobUrl = URL.createObjectURL(secondMilestoneBlob, {
            type: "image/png",
          });

          var xhr = new XMLHttpRequest();
          xhr.open("GET", blobUrl, true);
          xhr.responseType = "blob";
          xhr.onload = async function (e) {
            if (this.status === 200) {
              var myBlob = this.response;
              const myHeaders = new Headers({ "Content-Type": "image/*" });
              const response = await fetch(url.data.body.presigned_url, {
                method: "PUT",
                headers: myHeaders,
                body: myBlob,
              });
              const s3Url = response?.url?.split("?")[0];
              setIsSecondMilestoneImageUploaded(true);
            }
          };
          xhr.send();
        });
    }
  }, [secondMilestoneImageKey]);

  useEffect(() => {
    if (thirdMilestoneImageKey) {
      const data = {
        fileKey: thirdMilestoneImageKey,
      };
      axios
        .post(baseURL + "/api/s3/getUrlWithKey", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((url) => {
          const blobUrl = URL.createObjectURL(thirdMilestoneBlob, {
            type: "image/png",
          });

          var xhr = new XMLHttpRequest();
          xhr.open("GET", blobUrl, true);
          xhr.responseType = "blob";
          xhr.onload = async function (e) {
            if (this.status === 200) {
              var myBlob = this.response;
              const myHeaders = new Headers({ "Content-Type": "image/*" });
              const response = await fetch(url.data.body.presigned_url, {
                method: "PUT",
                headers: myHeaders,
                body: myBlob,
              });
              const s3Url = response?.url?.split("?")[0];
              setIsThirdMilestoneImageUploaded(true);
            }
          };
          xhr.send();
        });
    }
  }, [thirdMilestoneImageKey]);

  useEffect(() => {
    if (imgsKeysArr.length > 0) {
      for (var i = 0; i < imgsKeysArr?.length; i++) {
        const data = {
          fileKey: imgsKeysArr[i],
        };
        axios
          .post(baseURL + "/api/s3/getUrlWithKey", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((url) => {
            const blobUrl = URL.createObjectURL(imagesBlobArr[i], {
              type: "image/png",
            });

            var xhr = new XMLHttpRequest();
            xhr.open("GET", blobUrl, true);
            xhr.responseType = "blob";
            xhr.onload = async function (e) {
              if (this.status === 200) {
                var myBlob = this.response;
                const myHeaders = new Headers({ "Content-Type": "image/*" });
                const response = await fetch(url.data.body.presigned_url, {
                  method: "PUT",
                  headers: myHeaders,
                  body: myBlob,
                });
                const s3Url = response?.url?.split("?")[0];
                if (i === imgsKeysArr?.length - 1) {
                  setIsImagesUploaded(true);
                }
              }
            };
            xhr.send();
          });
      }
    }
  }, [imgsKeysArr]);

  useEffect(() => {
    if (floorPlanImgKeysArr.length > 0) {
      for (var i = 0; i < floorPlanImgKeysArr?.length; i++) {
        const data = {
          fileKey: floorPlanImgKeysArr[i],
        };
        axios
          .post(baseURL + "/api/s3/getUrlWithKey", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((url) => {
            const blobUrl = URL.createObjectURL(floorplanBlobImgArr[i], {
              type: "image/png",
            });

            var xhr = new XMLHttpRequest();
            xhr.open("GET", blobUrl, true);
            xhr.responseType = "blob";
            xhr.onload = async function (e) {
              if (this.status === 200) {
                var myBlob = this.response;
                const myHeaders = new Headers({ "Content-Type": "image/*" });
                const response = await fetch(url.data.body.presigned_url, {
                  method: "PUT",
                  headers: myHeaders,
                  body: myBlob,
                });
                const s3Url = response?.url?.split("?")[0];
                setIsFloorPlanImageUploaded(true);
              }
            };
            xhr.send();
          });
      }
    }
  }, [floorPlanImgKeysArr]);

  useEffect(() => {
    if (priceImgKeysArr.length > 0) {
      for (var i = 0; i < priceImgKeysArr?.length; i++) {
        const data = {
          fileKey: priceImgKeysArr[i],
        };
        axios
          .post(baseURL + "/api/s3/getUrlWithKey", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((url) => {
            const blobUrl = URL.createObjectURL(priceImgBlobArr[i], {
              type: "image/png",
            });

            var xhr = new XMLHttpRequest();
            xhr.open("GET", blobUrl, true);
            xhr.responseType = "blob";
            xhr.onload = async function (e) {
              if (this.status === 200) {
                var myBlob = this.response;
                const myHeaders = new Headers({ "Content-Type": "image/*" });
                const response = await fetch(url.data.body.presigned_url, {
                  method: "PUT",
                  headers: myHeaders,
                  body: myBlob,
                });
                const s3Url = response?.url?.split("?")[0];
                setIsPriceplanImageUplaoded(true);
              }
            };
            xhr.send();
          });
      }
    }
  }, [priceImgKeysArr]);

  useEffect(() => {
    if (brochureImgKeysArr.length > 0) {
      for (var i = 0; i < brochureImgKeysArr?.length; i++) {
        const data = {
          fileKey: brochureImgKeysArr[i],
        };
        axios
          .post(baseURL + "/api/s3/getUrlWithKey", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((url) => {
            const blobUrl = URL.createObjectURL(brochureImgBlobArr[i], {
              type: "image/png",
            });

            var xhr = new XMLHttpRequest();
            xhr.open("GET", blobUrl, true);
            xhr.responseType = "blob";
            xhr.onload = async function (e) {
              if (this.status === 200) {
                var myBlob = this.response;
                const myHeaders = new Headers({ "Content-Type": "image/*" });
                const response = await fetch(url.data.body.presigned_url, {
                  method: "PUT",
                  headers: myHeaders,
                  body: myBlob,
                });
                const s3Url = response?.url?.split("?")[0];
                setIsBrochureImageUploaded(true);
              }
            };
            xhr.send();
          });
      }
    }
  }, [brochureImgKeysArr]);

  useEffect(() => {
    if (shopImgKeysArr.length > 0) {
      for (var i = 0; i < shopImgKeysArr?.length; i++) {
        const data = {
          fileKey: shopImgKeysArr[i],
        };
        axios
          .post(baseURL + "/api/s3/getUrlWithKey", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((url) => {
            const blobUrl = URL.createObjectURL(shopImgBlobArr[i], {
              type: "image/png",
            });

            var xhr = new XMLHttpRequest();
            xhr.open("GET", blobUrl, true);
            xhr.responseType = "blob";
            xhr.onload = async function (e) {
              if (this.status === 200) {
                var myBlob = this.response;
                const myHeaders = new Headers({ "Content-Type": "image/*" });
                const response = await fetch(url.data.body.presigned_url, {
                  method: "PUT",
                  headers: myHeaders,
                  body: myBlob,
                });
                const s3Url = response?.url?.split("?")[0];
                setIsShopImageUploaded(true);
              }
            };
            xhr.send();
          });
      }
    }
  }, [shopImgKeysArr]);

  useEffect(() => {
    if (
      isImagesUploaded &&
      isBrochureImageUploaded &&
      isFirstMilestoneImageUploaded &&
      isSecondMilestoneImageUploaded &&
      isThirdMilestoneImageUploaded &&
      isFloorPlanImageUplaoded &&
      isPricePlanImageUploaded &&
      isShopImageUploaded
    ) {
      success();
      setLoading(false);
      window.location.reload();
    }
  }, [
    isImagesUploaded,
    isBrochureImageUploaded,
    isFirstMilestoneImageUploaded,
    isSecondMilestoneImageUploaded,
    isThirdMilestoneImageUploaded,
    isFloorPlanImageUplaoded,
    isPricePlanImageUploaded,
    isShopImageUploaded,
  ]);

  const handleFeaturesInputChange = (value, id) => {
    featuresArr[id] = value;
  };

  const handleLocationFeatureInputChange = (value, id) => {
    locationFeaturesArr[id] = value;
  };

  const handleAmenitiesInputChange = (value, id) => {
    amenitiesArr[id] = value;
  };

  const success = () =>
    toast.success("Property added!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      if (city && location) {
        let url =
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          city +
          location +
          "&key=" +
          GEOCODING_API;

        const data = await axios.get(url);
        if (data?.data?.results.length > 0) {
          setInitialLat(data?.data?.results[0]?.geometry?.location?.lat);
          setInitialLng(data?.data?.results[0]?.geometry?.location?.lng);
          setLat(data?.data?.results[0]?.geometry?.location?.lat);
          setLng(data?.data?.results[0]?.geometry?.location?.lng);
        }
      }
    };
    fetchFilteredProperties();
  }, [city, location]);

  const map = useMemo(() => {
    return (
      <>
        <p style={{ color: "grey", marginBottom: "20px", marginTop: "50px" }}>
          Move the pin to mark to your desired location
        </p>
        <GoogleMap
          zoom={14}
          center={{
            lat: initialLat,
            lng: initialLng,
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
            onDragEnd={(e) => {
              setLat(e.latLng.lat());
              setLng(e.latLng.lng());
            }}
            draggable
            position={{ lat: initialLat, lng: initialLng }}
          />
        </GoogleMap>
      </>
    );
  }, [initialLat, initialLng]);

  return (
    <div className={classes.form_body}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={classes.section}>
        <h1 className={classes.heading}>Project Information</h1>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Project Name</p>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Project Name"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Price Range (PKR) </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ width: "48%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>From</p>
                <input
                  onChange={(e) => {
                    setPriceLowerBound(e.target.value);
                  }}
                  className={classes.input_field_single}
                />
              </div>
              <div
                style={{ width: "48%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>To</p>
                <input
                  onChange={(e) => {
                    setPriceUpperBound(e.target.value);
                  }}
                  className={classes.input_field_single}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Project Description</p>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Overview of the Location</p>
          <textarea
            onChange={(e) => {
              setLocationOverview(e.target.value);
            }}
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: "100%", alignItems: "normal" }}
            className={classes.two_field_container}
          >
            <p style={{ marginTop: "17px" }} className={classes.label}>
              Location Features
            </p>
            <div className={classes.infinite_input_fields_container}>
              {locationFeatureArr?.map((feature, index) => (
                <div
                  key={index}
                  style={{ width: "100%" }}
                  className={classes.looped_input_field_container}
                >
                  <input
                    style={{ width: "100%", marginBottom: "20px" }}
                    disabled={
                      locationFeatureArr?.length === index + 1 ? true : false
                    }
                    onChange={(e) => {
                      handleLocationFeatureInputChange(e.target.value, index);
                    }}
                    on
                    placeholder={
                      locationFeatureArr?.length === index + 1
                        ? "Add more"
                        : "Feature " + parseInt(index + 1)
                    }
                    className={classes.input_field_dual}
                  />
                  {locationFeatureArr?.length === index + 1 && (
                    <div className={classes.add_btn_border_working}>
                      <h3
                        onClick={() => {
                          handleAddLocationField();
                        }}
                        className={classes.add_field_working}
                      >
                        +
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: "100%", alignItems: "normal" }}
            className={classes.two_field_container}
          >
            <p style={{ marginTop: "17px" }} className={classes.label}>
              Features
            </p>
            <div className={classes.infinite_input_fields_container}>
              {featureArr?.map((feature, index) => (
                <div
                  key={index}
                  style={{ width: "100%" }}
                  className={classes.looped_input_field_container}
                >
                  <input
                    style={{ width: "100%", marginBottom: "20px" }}
                    disabled={featureArr?.length === index + 1 ? true : false}
                    onChange={(e) => {
                      handleFeaturesInputChange(e.target.value, index);
                    }}
                    on
                    placeholder={
                      featureArr?.length === index + 1
                        ? "Add more"
                        : "Feature " + parseInt(index + 1)
                    }
                    className={classes.input_field_dual}
                  />
                  {featureArr?.length === index + 1 && (
                    <div className={classes.add_btn_border_working}>
                      <h3
                        onClick={() => {
                          handleAddField();
                        }}
                        className={classes.add_field_working}
                      >
                        +
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: "100%", alignItems: "normal" }}
            className={classes.single_row}
          >
            <p style={{ marginTop: "17px" }} className={classes.label}>
              Amenities
            </p>

            <Select
              className={classes.input_field_single}
              components={{ Option }}
              hideSelectedOptions={false}
              options={amenitiesArr}
              closeMenuOnSelect={false}
              placeholder=" "
              isMulti
              isClearable
              onChange={(e) => {
                // addArtist(e);
                addAmenities(e);
              }}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>City</p>
            <select
              className={classes.input_field_dual}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option>Select City</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              {cities?.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Location</p>
            <select
              className={classes.input_field_dual}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
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

        {city && location ? map : <></>}

        <div className={classes.single_row}>
          <p className={classes.label}>Address</p>
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <p className={classes.label_dual}>Province</p>
          <select
            placeholder="City Name"
            className={classes.input_field_single}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          >
            <option>Select</option>
            <option value={"Punjab"}>Punjab</option>
            <option value={"Baluchistan"}>Baluchistan</option>
            <option value={"KPK"}>KPK</option>
            <option value={"Gilgit"}>Gilgit Baltistan</option>
          </select>
        </div>

        <div className={classes.single_row}>
          <div
            style={{
              display: "flex",
              flexDirection: width < 1011 ? "row-reverse" : "row",
              columnGap: width < 1011 && "15px",
              width: width < 1011 ? "100%" : "25%",
            }}
            className={classes.two_field_container}
          >
            <p
              style={{
                width: "95%",
                fontSize: "13px",
                color: "rgb(56, 56, 56)",
                fontWeight: "bolder",
              }}
            >
              Government Approved
            </p>
            <input
              onChange={(e) => {
                setIsGovApproved(e.target.checked);
              }}
              style={{ width: "10%" }}
              type="checkbox"
              className={classes.checkbox}
            />
          </div>
          <div
            style={{
              width: width < 1011 ? "100%" : "60%",
            }}
            className={classes.two_field_container}
          >
            <p
              style={{
                width: "30%",
                fontSize: "13px",
                color: "rgb(56, 56, 56)",
                fontWeight: "bolder",
              }}
            >
              Approval Body
            </p>
            <input
              onChange={(e) => {
                setApprovalBody(e.target.value);
              }}
              className={classes.input_field_dual}
            />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Data Upload</h1>
        <div className={classes.single_row}>
          <div className={classes.data_tabs_container}>
            <div className={classes.data_input_container}>
              <p>Images</p>
              <input
                onChange={(e) => {
                  handleImages(e.target.files);
                }}
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Images"
                type={"file"}
                multiple
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <p>Brochure</p>

              <input
                onChange={(e) => {
                  handleBrochureImages(e.target.files);
                }}
                multiple
                type={"file"}
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Brochure"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <p>Price Plan</p>

              <input
                onChange={(e) => {
                  handlePricePlanImages(e.target.files);
                }}
                multiple
                type={"file"}
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Price Plan"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <p>Floor Plan</p>

              <input
                onChange={(e) => {
                  handleFloorPlanImages(e.target.files);
                }}
                multiple
                type={"file"}
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Floor Plan"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <p>Shop Availability</p>

              <input
                onChange={(e) => {
                  handleShopAvailabilityImages(e.target.files);
                }}
                multiple
                type={"file"}
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Shop Availability"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Project Timelines</h1>
        <div className={classes.single_row}>
          <div
            style={{ width: width < 1011 ? "100%" : "65%" }}
            className={classes.two_field_container}
          >
            <p className={classes.label}>Start Date</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: width < 1011 ? "100%" : "80%",
              }}
            >
              <div
                style={{ marginBottom: "0px", width: "48%" }}
                className={classes.data_input_container}
              >
                <p>Image</p>
                <input placeholder="Image" type="file" />
                <div className={classes.add_btn_border}>
                  <h3 className={classes.add_field}>+</h3>
                </div>
              </div>
              <input
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                style={{ width: "48%", paddingRight: "20px" }}
                type="date"
                className={classes.input_field_dual}
              />
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: width < 1011 ? "100%" : "65%" }}
            className={classes.two_field_container}
          >
            <p className={classes.label}>End Date</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: width < 1011 ? "100%" : "80%",
              }}
            >
              <div
                style={{ marginBottom: "0px", width: "48%" }}
                className={classes.data_input_container}
              >
                <p>Image</p>

                <input
                  style={{ width: "100%" }}
                  type="file"
                  placeholder="Image"
                />
                <div className={classes.add_btn_border}>
                  <h3 className={classes.add_field}>+</h3>
                </div>
              </div>
              <input
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                style={{ width: "48%", paddingRight: "20px" }}
                type="date"
                className={classes.input_field_dual}
              />
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: width < 1011 ? "100%" : "65%" }}
            className={classes.two_field_container}
          >
            <p className={classes.label}>
              1st <br /> Milestone
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: width < 1011 ? "100%" : "80%",
              }}
            >
              <div
                style={{ marginBottom: "0px", width: "48%" }}
                className={classes.data_input_container}
              >
                <p>Image</p>

                <input
                  style={{ width: "100%" }}
                  type="file"
                  placeholder="Image"
                  onChange={(e) => {
                    handleFirstMilestoneImage(e.target.files);
                  }}
                />
                <div className={classes.add_btn_border}>
                  <h3 className={classes.add_field}>+</h3>
                </div>
              </div>
              <input
                onChange={(e) => {
                  setFirstMilestone(e.target.value);
                }}
                style={{ width: "48%", paddingRight: "20px" }}
                type="date"
                className={classes.input_field_dual}
              />
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: width < 1011 ? "100%" : "65%" }}
            className={classes.two_field_container}
          >
            <p className={classes.label}>
              2nd <br /> Milestone
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: width < 1011 ? "100%" : "80%",
              }}
            >
              <div
                style={{ marginBottom: "0px", width: "48%" }}
                className={classes.data_input_container}
              >
                <p>Image</p>

                <input
                  style={{ width: "100%" }}
                  placeholder="Image"
                  type="file"
                  onChange={(e) => {
                    handleSecondMilestoneImage(e.target.files);
                  }}
                />
                <div className={classes.add_btn_border}>
                  <h3 className={classes.add_field}>+</h3>
                </div>
              </div>
              <input
                onChange={(e) => {
                  setSecondMilestone(e.target.value);
                }}
                style={{ width: "48%", paddingRight: "20px" }}
                type="date"
                className={classes.input_field_dual}
              />
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: width < 1011 ? "100%" : "65%" }}
            className={classes.two_field_container}
          >
            <p className={classes.label}>
              3rd <br /> Milestone
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: width < 1011 ? "100%" : "80%",
              }}
            >
              <div
                style={{ marginBottom: "0px", width: "48%" }}
                className={classes.data_input_container}
              >
                <p>Image</p>
                <input
                  style={{ width: "100%" }}
                  placeholder="Image"
                  type="file"
                  onChange={(e) => {
                    handleThirdMilestoneImage(e.target.files);
                  }}
                />
                <div className={classes.add_btn_border}>
                  <h3 className={classes.add_field}>+</h3>
                </div>
              </div>
              <input
                onChange={(e) => {
                  setThirdMilestone(e.target.value);
                }}
                style={{ width: "48%", paddingRight: "20px" }}
                type="date"
                className={classes.input_field_dual}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.btn} onClick={handleAddProject}>
        <p>Add Project</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default ProjectForm;
