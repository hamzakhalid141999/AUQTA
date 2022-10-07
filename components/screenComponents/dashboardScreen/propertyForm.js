import React, { useEffect, useMemo, useState } from "react";
import classes from "./forms.module.css";
import {
  residential_subtypes,
  commercial_subtypes,
  plot_subtypes,
  unit_subtypes,
  landmarks,
} from "./dropdowns/dropdowns";
import { useAuth } from "../../../contextAPI";
import { baseURL } from "../../../constants";
import axios from "axios";
import { useWindowSize } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Select, { components } from "react-select";
import { getAllCities } from "../../utils";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function PropertyForm() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { width } = useWindowSize();
  const [propertyId, setPropertyId] = useState();
  const [floorsInBuilding, setFloorsInBuilding] = useState();
  const [unit, setUnit] = useState();
  const [type, setType] = useState("residential");
  const [subtype, setSubtype] = useState();
  const [purposeSelected, setPurposeSelected] = useState("sell");
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [province, setProvince] = useState();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [description, setDescription] = useState();
  const [files, setFiles] = useState({ files: [] });
  const [filesToUpload, setFilesToUpload] = useState({
    file: "",
  });
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [img6, setImg6] = useState();

  const [img7, setImg7] = useState();
  const [img8, setImg8] = useState();
  const [img9, setImg9] = useState();
  const [img10, setImg10] = useState();
  const [img11, setImg11] = useState();
  const [img12, setImg12] = useState();
  const [imgArr, setImgArr] = useState([]);

  // Salient Features

  const [builtYear, setBuiltYear] = useState();
  const [youtubeLink1, setYoutubeLink1] = useState();
  const [youtubeLink2, setYoutubeLink2] = useState();

  const [facingView, setFacingView] = useState();
  const [basementIncluded, setBasementIncluded] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState(false);
  const [parking, setParking] = useState(false);
  const [centralHeating, setCentralHeating] = useState(false);
  const [centralCooling, setCentralCooling] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [semiFurnished, setSemiFurnished] = useState(false);
  const [doubleGlazedWindows, setDoubleGlazedWindows] = useState(false);
  const [electricityBackup, setElectricityBackup] = useState(false);
  const [wasteDisposal, setWasteDisposal] = useState(false);
  const [nearbyLandmarks, setNearbyLandmarks] = useState([]);
  const [accessToNearbyPublicTransport, setAccessToNearbyPublicTransport] =
    useState(false);
  const [tvLongue, setTvLongue] = useState(false);
  const [conferenceRoom, setConferenceRoom] = useState(false);
  const [mediaRoom, setMediaRoom] = useState(false);
  const [cabinRoom, setCabinRoom] = useState(false);
  const [isBathroom, setIsBathroom] = useState(false);
  const [possession, setPossession] = useState(false);
  const [utilitiesPaid, setUtlitiesPaid] = useState(false);
  const [solidLand, setSolidLand] = useState(false);
  const [filledLand, setFilledLand] = useState(false);
  const [corner, setCorner] = useState(false);
  const [boulevardFacing, setBoulevardFacing] = useState(false);
  const [parkFacing, setParkFacing] = useState(false);
  const [extraLand, setExtraLand] = useState(false);
  const [boundaryWall, setBoundaryWall] = useState(false);
  const [waterSupply, setWaterSupply] = useState(false);
  const [gasSupply, setGasSupply] = useState(false);

  const [diningRoom, setDiningRoom] = useState(false);
  const [drawingRoom, setDrawingRoom] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [dirtyKitchen, setDirtyKitchen] = useState(false);
  const [storeRoom, setStoreRoom] = useState(false);
  const [ironingRoom, setIroningRoom] = useState(false);
  const [powderRoom, setPowderRoom] = useState(false);
  const [laundryRoom, setLaundryRoom] = useState(false);
  const [studyRoom, setStudyRoom] = useState(false);
  const [homeTheater, setHomeTheater] = useState(false);
  const [gym, setGym] = useState(false);
  const [prayerRoom, setPrayerRoom] = useState(false);
  const [servantQuarter, setServantQuarter] = useState(false);
  const [lawn, setLawn] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [suana, setSuana] = useState(false);
  const [steamRoom, setSteamRoom] = useState(false);
  const [jacuzzi, setJacuzzi] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [gas, setGas] = useState(false);
  const [water, setWater] = useState(false);
  const [broadbandAccess, setBroadbandAccess] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [satelliteOrCableAccess, setSatelliteOrCableAccess] = useState(false);
  const [intercom, setIntercom] = useState(false);
  const [securityStaff, setSecurityStaff] = useState(false);
  const [maintenanceStaff, setMaintenanceStaff] = useState(false);
  const [cctv, setCctv] = useState(false);
  const [
    accessibilityForSpecialOrElderlyPerson,
    setAccessibilityForSpecialOrElderlyPerson,
  ] = useState(false);
  const [otherMainFeature, setOtherMainFeature] = useState([]);
  const [otherRoomFeature, setOtherRoomFeature] = useState([]);
  const [utilityOtherFeature, setUtilityOtherFeature] = useState([]);
  const [otherCommunicationFeature, setOtherCommunicationFeature] = useState(
    []
  );
  const [elevator, setElevator] = useState();
  const [elevatorOrLift, setElevatorOrLift] = useState(false);
  const [facilitiesOtherFeatures, setFacilitiesOtherFeatures] = useState([]);

  const [imagesKeysArr, setImagesKeysArr] = useState([]);
  const [imagesBlobArr, setImagesBlobArr] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [landmarkArr, setLandmarkArr] = useState([]);
  const [landmarksFinalArray, setLandmarksFinalArray] = useState([]);
  const [citiesAndLocations, setCitiesAndLocations] = useState();

  const [isImageUploadCompleted, setIsImageUploadCompleted] = useState(false);

  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [initialLat, setInitialLat] = useState();
  const [initialLng, setInitialLng] = useState();

  const [contactPhoneWork, setContactPhoneWork] = useState();
  const [contactPhoneHome, setContactPhoneHome] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactCnic, setContactCnic] = useState();

  const nearbyLandmarksObject = (landmark, name) => ({
    label: landmark,
    value: name,
  });

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

  useEffect(() => {
    landmarks?.map((landmark) =>
      setLandmarkArr((single) => [
        ...single,
        nearbyLandmarksObject(landmark, landmark),
      ])
    );
  }, [landmarks]);

  const handleAddProperty = async () => {
    if (!title) {
      missingCredError("title");
      return;
    } else if (!purposeSelected) {
      missingCredError("purpose");
      return;
    } else if (!type) {
      missingCredError("type");
      return;
    } else if (!subtype) {
      missingCredError("sub-type");
      return;
    } else if (!city) {
      missingCredError("city");
      return;
    } else if (!location) {
      missingCredError("location");
      return;
    } else if (!province) {
      missingCredError("province");
      return;
    } else if (!address) {
      missingCredError("address");
      return;
    } else if (!price) {
      missingCredError("price");
      return;
    } else if (!size) {
      missingCredError("size");
      return;
    } else if (!bathroom && type === "residential") {
      missingCredError("bathroom");
      return;
    } else if (!bedroom && type === "residential") {
      missingCredError("bedroom");
      return;
    } else if (!description) {
      missingCredError("description");
      return;
    } else if (type !== "plot") {
      if (!builtYear) {
        missingCredError("built year");
        return;
      }
    } else if (type !== "plot") {
      if (!facingView) {
        missingCredError("facing view");
        return;
      }
    } else if (landmarksFinalArray?.length === 0) {
      missingCredError("nearby landmarks");
      return;
    }

    setLoading(true);
    try {
      const data = await axios.post(
        baseURL + "/api/property/add",
        {
          purpose: purposeSelected,
          type: type,
          title: title,
          description: description,
          price: price,
          size: size.toString() + " " + unit,
          address: address,
          province: province,
          location: location,
          city: city,
          noOfBedrooms: bedroom,
          noOfBathrooms: bathroom,
          subtype: subtype,
          dateAdded: Math.floor(Date.now() / 1000),
          images: imgArr,
          userId: user?.id,
          hasBasement: "false",
          nearbyLandmarks: landmarksFinalArray,
          lat: lat,
          lng: lng,
          contactCnic: contactCnic,
          contactEmail: contactEmail,
          contactPhoneWork: contactPhoneWork,
          contactPhoneHome: contactPhoneHome,
          youtubeVideo1: youtubeLink1,
          youtubeVideo2: youtubeLink2,
          // images: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setImagesKeysArr(data?.data?.proplisting?.images);
      setPropertyId(data?.data?.proplisting?._id);
    } catch (err) {
      setLoading(false);
      error();
      console.log(err);
    }
  };

  useEffect(() => {
    if (imagesKeysArr.length > 0) {
      var imagesUrlTempArr = [];
      for (var i = 0; i < imagesKeysArr?.length; i++) {
        const data = {
          fileKey: imagesKeysArr[i],
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
                imagesUrlTempArr.push(s3Url);
                if (i === imagesKeysArr?.length - 1) {
                  setIsImageUploadCompleted(true);
                }
              }
            };
            xhr.send();
          });
      }
    }
  }, [imagesKeysArr]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const handleFinishPropertyAddition = async () => {
      if (isImageUploadCompleted) {
        setLoading(false);
        success();
        propertyAddDisclaimer();
        await delay(2000);
        window.location.reload();
      }
    };

    handleFinishPropertyAddition();
  }, [isImageUploadCompleted]);

  useEffect(() => {
    const handleAddPropertySalientFeaturesById = async () => {
      if (propertyId) {
        try {
          const data = await axios.post(
            baseURL + "/api/salientfeatures/add/" + propertyId,
            {
              builtYear: builtYear,
              parkingSpaces: parkingSpaces,
              facingView: facingView,
              basementIncluded: basementIncluded,
              centralHeating: centralHeating,
              centralCooling: centralCooling,
              furnished: furnished,
              semiFurnished: semiFurnished,
              doubleGlazedWindows: doubleGlazedWindows,
              electricityBackup: electricityBackup,
              wasteDisposal: wasteDisposal,
              nearbyLandmarks: landmarksFinalArray,
              accessToNearbyPublicTransport: accessToNearbyPublicTransport,
              // country: country,
              // images: imgArr,
              tvLounge: tvLongue,
              diningRoom: diningRoom,
              drawingRoom: drawingRoom,
              kitchen: kitchen,
              dirtyKitchen: dirtyKitchen,
              storeroom: storeRoom,
              ironingRoom: ironingRoom,
              powderRoom: powderRoom,

              possession: possession,
              utilitiesPaid: utilitiesPaid,
              solidLand: solidLand,
              filledLand: filledLand,
              corner: corner,
              boulevardFacing: boulevardFacing,
              parkFacing: parkFacing,
              extraLand: extraLand,
              boundaryWall: boundaryWall,
              waterSupply: waterSupply,
              gasSupply: gasSupply,

              electricityBackup: electricityBackup,
              elevator: elevator,
              parking: parking,

              laundryRoom: laundryRoom,
              studyRoom: studyRoom,
              hometheater: homeTheater,
              gym: gym,
              prayerRoom: prayerRoom,
              servantQuarter: servantQuarter,
              lawn: lawn,
              swimmingPool: swimmingPool,

              sauna: suana,
              steamRoom: steamRoom,
              jacuzzi: jacuzzi,
              balcony: balcony,
              terrace: terrace,
              electricity: electricity,
              gas: gas,
              water: water,

              maintenance: maintenance,
              broadbandAccess: broadbandAccess,
              satelliteOrTvCableAccess: satelliteOrCableAccess,
              intercom: intercom,
              securityStaff: securityStaff,
              maintenanceStaff: maintenanceStaff,
              cctv: cctv,

              conferenceRoom: conferenceRoom,
              mediaRoom: mediaRoom,
              cabinRoom: cabinRoom,
              kitchen: kitchen,
              storeroom: storeRoom,

              bathroom: isBathroom,

              floorsInBuilding: floorsInBuilding,

              accessibilityForSpecialOrElderlyPersons:
                accessibilityForSpecialOrElderlyPerson,

              otherMainFeatures: otherMainFeature,
              otherRoomFeatures: otherRoomFeature,
              otherRecreationalFeatures: "random feature",
              otherCommunicationFeatures: otherCommunicationFeature,
              otherOtherFeatures: facilitiesOtherFeatures,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (err) {
          setLoading(false);
          error();

          console.log(err);
        }
      }
    };

    handleAddPropertySalientFeaturesById();
  }, [propertyId]);

  const handleType = (value) => {
    setType(value);
  };

  const handlePurposeSelected = (value) => {
    setPurposeSelected(value);
  };

  // console.log(files);

  useEffect(() => {
    if (files) {
      if (files.files.length !== 0) {
        uploadedFiles(files.files[0]);
      }
    }
  }, [files]);

  function uploadedFiles(file) {
    // console.log("FILE", file);
    setFilesToUpload({
      file,
    });
  }

  const handleImg1 = async (event) => {
    if (event) {
      setImg1(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg2 = async (event) => {
    if (event) {
      setImg2(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg3 = async (event) => {
    if (event) {
      setImg3(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg4 = async (event) => {
    if (event) {
      setImg4(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg5 = async (event) => {
    if (event) {
      setImg5(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg6 = async (event) => {
    if (event) {
      setImg6(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg7 = async (event) => {
    if (event) {
      setImg7(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg8 = async (event) => {
    if (event) {
      setImg8(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg9 = async (event) => {
    if (event) {
      setImg9(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg10 = async (event) => {
    if (event) {
      setImg10(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg11 = async (event) => {
    if (event) {
      setImg11(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const handleImg12 = async (event) => {
    if (event) {
      setImg12(event);
      imagesBlobArr.push(event);
      imgArr.push(event?.name);
    }
  };

  const success = () =>
    toast.success("Property Added Successfully", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const propertyAddDisclaimer = () =>
    toast.info("Your property will be displayed after authentication", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const error = () =>
    toast.error("Error occured!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const missingCredError = (value) =>
    toast.error("Enter " + value, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const addLandmarks = (landMarkArr) => {
    const temp = [];
    landMarkArr?.map((landmark) => temp.push(landmark?.value));
    setLandmarksFinalArray(temp);
  };

  const [formattedPrice, setFormattedPrice] = useState();

  useEffect(() => {
    if (price >= 100000) {
      const formattedPrice = numDifferentiation(price);
      setFormattedPrice(formattedPrice);
    } else {
      setFormattedPrice();
    }

    function numDifferentiation(value) {
      var val = Math.abs(value);
      if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + " Crores";
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + " Lac";
      }
      return val;
    }
  }, [price]);

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
        <h1 className={classes.heading}>Basic Information</h1>
        <div
          style={{
            width: width < 1011 && "100%",
            flexDirection: width < 1011 && "column",
            rowGap: width < 1011 && "20px",
          }}
          className={classes.single_row}
        >
          <div
            style={{ width: width < 1011 && "100%" }}
            className={classes.input_field}
          >
            <p className={classes.label}>Purpose</p>
            <div className={classes.btns_container}>
              <div
                onClick={() => {
                  handlePurposeSelected("sell");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    purposeSelected === "sell"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  SELL
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handlePurposeSelected("rent");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    purposeSelected === "rent"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  RENT
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ width: width < 1011 && "100%" }}
            className={classes.input_field}
          >
            <p className={classes.label}>Type</p>
            <div className={classes.btns_container}>
              <div
                onClick={() => {
                  handleType("residential");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "residential"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  RESIDENTIAL
                </p>
              </div>
              <div className={classes.divider} />

              <div
                onClick={() => {
                  handleType("commercial");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "commercial"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  COMMERCIAL
                </p>
              </div>

              <div className={classes.divider} />
              <div
                onClick={() => {
                  handleType("plot");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "plot"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  PLOT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label}>Subtype</p>
            <select
              onChange={(e) => {
                setSubtype(e.target.value);
              }}
              style={{ width: "100%" }}
              className={classes.input_field_single}
            >
              <option>Select Subtype</option>
              {type === "residential"
                ? residential_subtypes?.map((subtype, index) => (
                    <option value={subtype} key={index}>
                      {subtype}
                    </option>
                  ))
                : type === "commercial"
                ? commercial_subtypes?.map((subtype, index) => (
                    <option value={subtype} key={index}>
                      {subtype}
                    </option>
                  ))
                : type === "plot" &&
                  plot_subtypes?.map((subtype, index) => (
                    <option value={subtype} key={index}>
                      {subtype}
                    </option>
                  ))}
            </select>
          </div>
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
        </div>

        <div className={classes.single_row}>
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
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Province</p>
            <select
              onChange={(e) => {
                setProvince(e.target.value);
              }}
              style={{ width: "100%" }}
              className={classes.input_field_single}
            >
              <option>Select Province</option>
              <option value={"kpk"}>Islamabad</option>
              <option value={"punjab"}>Punjab</option>
              <option value={"sindh"}>Sindh</option>
              <option value={"kpk"}>KPK</option>
              <option value={"baluchistan"}>Baluchistan</option>
              <option value={"gilgit"}>Gilgit Baltistan</option>
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
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Tell us more about your property</h1>

        <div className={classes.single_row}>
          <p className={classes.label}>Title</p>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title"
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div
            style={{ marginBottom: width < 786 ? "30px" : "0px" }}
            className={classes.three_field_container}
          >
            <p className={classes.label_dual}>Price</p>
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={"number"}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Price (PKR)  "
                className={classes.input_field_three}
              />
              <p
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "58px",
                  color: "grey",
                  fontSize: "12px",
                }}
              >
                {formattedPrice}
              </p>
            </div>
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Size</p>
            <input
              onChange={(e) => {
                setSize(e.target.value);
              }}
              type="number"
              placeholder="Property Size"
              className={classes.input_field_three}
            />
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Unit</p>
            <select
              onChange={(e) => {
                setUnit(e.target.value);
              }}
              className={classes.input_field_three}
            >
              {unit_subtypes?.map((unit_subtype, index) => (
                <option value={unit_subtype} key={index}>
                  {unit_subtype}
                </option>
              ))}
            </select>
          </div>
        </div>

        {type !== "plot" && type !== "commercial" ? (
          <div className={classes.single_row}>
            <div className={classes.two_field_container}>
              <p className={classes.label_dual}>Bedrooms</p>
              <input
                onChange={(e) => {
                  setBedroom(e.target.value);
                }}
                type="number"
                className={classes.input_field_dual}
              />
            </div>
            <div className={classes.two_field_container}>
              <p className={classes.label_dual}>Bathrooms</p>
              <input
                type="number"
                onChange={(e) => {
                  setBathroom(e.target.value);
                }}
                className={classes.input_field_dual}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Description</p>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>YouTube Link 1</p>
            <input
              onChange={(e) => {
                setYoutubeLink1(e.target.value);
              }}
              type="text"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>YouTube Link 2</p>
            <input
              type="text"
              onChange={(e) => {
                setYoutubeLink2(e.target.value);
              }}
              className={classes.input_field_dual}
            />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Salient Features</h1>

        {type === "residential" ? (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ width: width < 1010 ? "48%" : "25%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Build Year</p>
                  <input
                    onChange={(e) => {
                      setBuiltYear(e.target.value);
                    }}
                    className={classes.input_field_single}
                  />
                </div>

                <div
                  style={{ width: width < 1010 ? "48%" : "25%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Facing View</p>
                  <select
                    onChange={(e) => {
                      setFacingView(e.target.value);
                    }}
                    className={classes.input_field_single}
                  >
                    <option>Select</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                  </select>
                </div>

                <div
                  style={{
                    width: width < 1010 ? "100%" : "45%",
                    marginTop: width < 1010 && "10px",
                  }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>

                  <Select
                    className={classes.input_field_single}
                    components={{ Option }}
                    hideSelectedOptions={false}
                    options={landmarkArr}
                    closeMenuOnSelect={false}
                    placeholder=" "
                    isMulti
                    isClearable
                    onChange={(e) => {
                      // addArtist(e);
                      console.log(e);
                      addLandmarks(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setBasementIncluded(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Basement Included</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setParkingSpaces(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Parking Spaces</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setCentralHeating(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Central Heating</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setCentralCooling(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Central Cooling</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setFurnished(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Furnished</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSemiFurnished(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Semi Furnished</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setDoubleGlazedWindows(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Double Glazed Windows
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setElectricityBackup(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Electricity Backup</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setWasteDisposal(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Waste Disposal</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>

                <ReactTagInput
                  tags={otherMainFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherMainFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>

            <p className={classes.label}>Rooms</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setTvLongue(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>TV Longue</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setDiningRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Dining Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setDrawingRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Drawing Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setKitchen(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Kitchen</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setDirtyKitchen(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Dirty Kitchen</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setStoreRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Storeroom</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setIroningRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Ironing Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setPowderRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Powder Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setLaundryRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Laundry Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setStudyRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Study Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setHomeTheater(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Home Theatre</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setGym(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Gym</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setPrayerRoom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Prayer Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setServantQuarter(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Servant Quarter</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <ReactTagInput
                  tags={otherRoomFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherRoomFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>

            <p className={classes.label}>Utilities</p>

            <div className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setElectricity(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Electricity</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setGas(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Gas</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setWater(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Water</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setMaintenance(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Maintenance</p>
                </div>
              </div>
            </div>

            <p className={classes.label}>Communication</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setBroadbandAccess(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Broadband Access</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSatelliteOrCableAccess(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Sattelite or TV Cable Access
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setIntercom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Intercom</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <ReactTagInput
                  tags={otherCommunicationFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherCommunicationFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>

            <p className={classes.label}>Other Features/Facilities</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSecurityStaff(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Security Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setMaintenance(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Maintenance Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setCctv(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>CCTV</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setAccessToNearbyPublicTransport(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Accessibility for Special or Elderly Persons
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <ReactTagInput
                  tags={facilitiesOtherFeatures}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setFacilitiesOtherFeatures(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>
          </>
        ) : type === "commercial" ? (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {subtype !== "Factory" && subtype !== "Warehouse" ? (
                  <>
                    <div
                      style={{ width: "25%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Build Year</p>
                      <input
                        onChange={(e) => {
                          setBuiltYear(e.target.value);
                        }}
                        className={classes.input_field_single}
                      />
                    </div>

                    <div
                      style={{ width: "25%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Facing View</p>
                      <select
                        onChange={(e) => {
                          setFacingView(e.target.value);
                        }}
                        className={classes.input_field_single}
                      >
                        <option>Select</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                      </select>
                    </div>

                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Floors in Building</p>
                      <input
                        onChange={(e) => {
                          setFloorsInBuilding(e.target.value);
                        }}
                        type="number"
                        className={classes.input_field_single}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Build Year</p>
                      <input
                        onChange={(e) => {
                          setBuiltYear(e.target.value);
                        }}
                        className={classes.input_field_single}
                      />
                    </div>

                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Nearby Landmarks</p>
                      <Select
                        className={classes.input_field_single}
                        components={{ Option }}
                        hideSelectedOptions={false}
                        options={landmarkArr}
                        closeMenuOnSelect={false}
                        placeholder=" "
                        isMulti
                        isClearable
                        onChange={(e) => {
                          // addArtist(e);
                          console.log(e);
                          addLandmarks(e);
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            {subtype !== "Factory" && subtype !== "Warehouse" && (
              <div className={classes.single_row}>
                <div
                  style={{ width: "100%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>
                  <Select
                    className={classes.input_field_single}
                    components={{ Option }}
                    hideSelectedOptions={false}
                    options={landmarkArr}
                    closeMenuOnSelect={false}
                    placeholder=" "
                    isMulti
                    isClearable
                    onChange={(e) => {
                      // addArtist(e);
                      console.log(e);
                      addLandmarks(e);
                    }}
                  />
                </div>
              </div>
            )}

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setParking(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Parking</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setElectricityBackup(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Electricity Backup</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setElevator(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Elevator/Lift</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setAccessToNearbyPublicTransport(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Access to Nearby Public Transport
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <ReactTagInput
                  tags={otherMainFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherMainFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>

            {subtype !== "Factory" && subtype !== "Warehouse" && (
              <>
                <p className={classes.label}>Rooms</p>

                <div
                  style={{ flexDirection: "column" }}
                  className={classes.single_row}
                >
                  <div className={classes.checkboxes_container}>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setConferenceRoom(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Conference Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setMediaRoom(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Media Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setCabinRoom(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Cabin Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setKitchen(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Kitchen</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setIsBathroom(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Bathroom</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setStoreRoom(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>Store Room</p>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%" }}
                    className={classes.input_field_with_label_top_container}
                  >
                    <p style={{ width: "30%" }} className={classes.top_label}>
                      Other Features
                    </p>
                    <ReactTagInput
                      tags={otherRoomFeature}
                      maxTags={50}
                      className={classes.input_field_single}
                      removeOnBackspace={true}
                      placeholder="Type and press enter"
                      onChange={(newTags) => {
                        var arr = newTags.filter((e) => String(e).trim());
                        setOtherRoomFeature(arr);
                        // setErrorCode(-1);
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            <p className={classes.label}>Utilities</p>

            <div className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setElectricity(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Electricity</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setGas(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Gas</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setWater(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Water</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setMaintenance(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Maintenance</p>
                </div>
              </div>
            </div>

            <p className={classes.label}>Communication</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setBroadbandAccess(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Broadband Access</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSatelliteOrCableAccess(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Sattelite or TV Cable Access
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setIntercom(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Intercom</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <ReactTagInput
                  tags={otherCommunicationFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherCommunicationFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>

            <p className={classes.label}>Other Features/Facilities</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSecurityStaff(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Security Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setMaintenanceStaff(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Maintenance Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setCctv(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>CCTV</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setAccessibilityForSpecialOrElderlyPerson(
                        e.target.checked
                      );
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Accessibility for Special or Elderly Persons
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <ReactTagInput
                  tags={facilitiesOtherFeatures}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setFacilitiesOtherFeatures(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{ width: "100%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>
                  <Select
                    className={classes.input_field_single}
                    components={{ Option }}
                    hideSelectedOptions={false}
                    options={landmarkArr}
                    closeMenuOnSelect={false}
                    placeholder=" "
                    isMulti
                    isClearable
                    onChange={(e) => {
                      // addArtist(e);
                      console.log(e);
                      addLandmarks(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setPossession(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Possession</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setUtlitiesPaid(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Utilities Paid</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setSolidLand(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Solid Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setFilledLand(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Filled Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setCorner(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Corner</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setBoulevardFacing(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Boulevard Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setParkFacing(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Park Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setExtraLand(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Extra Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setBoundaryWall(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Boundary Wall</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setWaterSupply(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Water Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setGasSupply(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>Gas Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input
                    onChange={(e) => {
                      setAccessToNearbyPublicTransport(e.target.checked);
                    }}
                    className={classes.checkbox}
                    type="checkbox"
                  />
                  <p className={classes.checkbox_label}>
                    Access to Nearby Public Transport
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <ReactTagInput
                  tags={otherMainFeature}
                  maxTags={50}
                  className={classes.input_field_single}
                  removeOnBackspace={true}
                  placeholder="Type and press enter"
                  onChange={(newTags) => {
                    var arr = newTags.filter((e) => String(e).trim());
                    setOtherMainFeature(arr);
                    // setErrorCode(-1);
                  }}
                />
              </div>
            </div>
          </>
        )}

        <p style={{ marginTop: "80px" }} className={classes.label}>
          Images
        </p>

        <div style={{ marginTop: "30px" }} className={classes.single_row}>
          <div className={classes.container_with_top_label}>
            <div className={classes.image_holder_container}>
              <div className={classes.image_holder}>
                {img1 ? (
                  <img
                    className={classes.img}
                    src={img1 && URL.createObjectURL(img1)}
                  />
                ) : (
                  <>
                    <p style={{ marginBottom: "10px", color: "grey" }}>
                      COVER IMAGE
                    </p>

                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg1(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img2 ? (
                  <img
                    className={classes.img}
                    src={img2 && URL.createObjectURL(img2)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg2(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img3 ? (
                  <img
                    className={classes.img}
                    src={img3 && URL.createObjectURL(img3)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg3(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img4 ? (
                  <img
                    className={classes.img}
                    src={img4 && URL.createObjectURL(img4)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg4(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img5 ? (
                  <img
                    className={classes.img}
                    src={img5 && URL.createObjectURL(img5)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg5(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img6 ? (
                  <img
                    className={classes.img}
                    src={img6 && URL.createObjectURL(img6)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg6(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
            </div>
            <div
              style={{ marginTop: "30px" }}
              className={classes.image_holder_container}
            >
              <div className={classes.image_holder}>
                {img7 ? (
                  <img
                    className={classes.img}
                    src={img7 && URL.createObjectURL(img7)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg7(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img8 ? (
                  <img
                    className={classes.img}
                    src={img8 && URL.createObjectURL(img8)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg8(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img9 ? (
                  <img
                    className={classes.img}
                    src={img9 && URL.createObjectURL(img9)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg9(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img10 ? (
                  <img
                    className={classes.img}
                    src={img10 && URL.createObjectURL(img10)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg10(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img11 ? (
                  <img
                    className={classes.img}
                    src={img11 && URL.createObjectURL(img11)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg11(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
              <div className={classes.image_holder}>
                {img12 ? (
                  <img
                    className={classes.img}
                    src={img12 && URL.createObjectURL(img12)}
                  />
                ) : (
                  <>
                    <div className={classes.add_btn_label}>
                      <h1>+</h1>
                    </div>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg12(e.target.files[0], "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </>
                )}
              </div>
            </div>
            <p className={classes.small_label}>
              Upload at least 570x570 resolution images
            </p>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Contact Details</h1>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              onChange={(e) => {
                setContactPhoneWork(e.target.value);
              }}
              placeholder="Phone (Work)"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              onChange={(e) => {
                setContactPhoneHome(e.target.value);
              }}
              placeholder="Phone (Home)"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Email</p>
            <input
              onChange={(e) => {
                setContactEmail(e.target.value);
              }}
              placeholder="Enter Email"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>CNIC#</p>
            <input
              onChange={(e) => {
                setContactCnic(e.target.value);
              }}
              maxLength="13"
              placeholder="XXXXX XXX XXXX X"
              className={classes.input_field_dual}
            />
          </div>
        </div>
      </div>
      <div className={classes.btn} onClick={handleAddProperty}>
        <p>Add property</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default PropertyForm;
