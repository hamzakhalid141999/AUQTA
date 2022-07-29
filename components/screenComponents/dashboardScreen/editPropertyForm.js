/* eslint-disable */

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import { getPropertyDetailsById } from "../../utils/fetchPropertyById";

function EditPropertyForm({ _setPropertyId, setIsPropertyActive }) {
  const router = useRouter();
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [loading, setLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState();
  const [salientFeatures, setSalientFeatures] = useState();

  const bucketBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  const [uploadedImg1, setUploadedImg1] = useState(undefined);
  const [uploadedImg2, setUploadedImg2] = useState(undefined);
  const [uploadedImg3, setUploadedImg3] = useState(undefined);

  const [uploadedImg4, setUploadedImg4] = useState(undefined);
  const [uploadedImg5, setUploadedImg5] = useState(undefined);
  const [uploadedImg6, setUploadedImg6] = useState(undefined);

  useEffect(() => {
    if (propertyDetails) {
      setIsPropertyActive(propertyDetails?.propertyListing?.isActive);
      if (propertyDetails?.resSalientFeatures) {
        setSalientFeatures(propertyDetails?.resSalientFeatures);
      } else if (propertyDetails?.commSalientFeatures) {
        setSalientFeatures(propertyDetails?.commSalientFeatures);
      } else if (propertyDetails?.plotSalientFeatures) {
        setSalientFeatures(propertyDetails?.plotSalientFeatures);
      }

      setUploadedImg1(
        propertyDetails?.propertyListing?.images[0] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[0]
          : undefined
      );
      setUploadedImg2(
        propertyDetails?.propertyListing?.images[1] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[1]
          : undefined
      );
      setUploadedImg3(
        propertyDetails?.propertyListing?.images[2] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[2]
          : undefined
      );
      setUploadedImg4(
        propertyDetails?.propertyListing?.images[3] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[3]
          : undefined
      );
      setUploadedImg5(
        propertyDetails?.propertyListing?.images[4] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[4]
          : undefined
      );
      setUploadedImg6(
        propertyDetails?.propertyListing?.images[5] !== undefined
          ? bucketBaseUrl + propertyDetails?.propertyListing?.images[5]
          : undefined
      );
    }
  }, [propertyDetails]);

  const { user } = useAuth();
  const { width } = useWindowSize();
  const [propertyId, setPropertyId] = useState();
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
  const [contactPhone, setContactPhone] = useState();
  const [contactPhoneHome, setContactPhoneHome] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactCnic, setContactCnic] = useState();
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
  const [imgArr, setImgArr] = useState([]);

  console.log(propertyDetails);

  // Salient Features

  //=================================== MAIN FEATURES ===================================

  const [builtYear, setBuiltYear] = useState();
  const [facingView, setFacingView] = useState();
  const [parking, setParking] = useState(false);

  const [basementIncluded, setBasementIncluded] = useState(
    salientFeatures?.mainFeatures?.basementIncluded
  );
  const [parkingSpaces, setParkingSpaces] = useState(
    salientFeatures?.mainFeatures?.parkingSpaces
  );
  const [centralHeating, setCentralHeating] = useState(
    salientFeatures?.mainFeatures?.centralHeating
  );
  const [centralCooling, setCentralCooling] = useState(
    salientFeatures?.mainFeatures?.centralCooling
  );
  const [furnished, setFurnished] = useState(
    salientFeatures?.mainFeatures?.furnished
  );
  const [semiFurnished, setSemiFurnished] = useState(
    salientFeatures?.mainFeatures?.semiFurnished
  );
  const [doubleGlazedWindows, setDoubleGlazedWindows] = useState(
    salientFeatures?.mainFeatures?.doubleGlazedWindows
  );
  const [electricityBackup, setElectricityBackup] = useState(
    salientFeatures?.mainFeatures?.electricityBackup
  );
  const [wasteDisposal, setWasteDisposal] = useState(
    salientFeatures?.mainFeatures?.wasteDisposal
  );
  const [nearbyLandmarks, setNearbyLandmarks] = useState([]);
  const [accessToNearbyPublicTransport, setAccessToNearbyPublicTransport] =
    useState(salientFeatures?.mainFeatures?.accessToNearbyPublicTransport);

  useEffect(() => {
    if (salientFeatures) {
      //=================================== MAIN FEATURES ===================================

      setParking(false);
      setBasementIncluded(salientFeatures?.mainFeatures?.basementIncluded);
      setParkingSpaces(salientFeatures?.mainFeatures?.parkingSpaces);
      setCentralHeating(salientFeatures?.mainFeatures?.centralHeating);
      setCentralCooling(salientFeatures?.mainFeatures?.centralCooling);
      setFurnished(salientFeatures?.mainFeatures?.furnished);
      setSemiFurnished(salientFeatures?.mainFeatures?.semiFurnished);
      setDoubleGlazedWindows(
        salientFeatures?.mainFeatures?.doubleGlazedWindows
      );
      setElectricityBackup(salientFeatures?.mainFeatures?.electricityBackup);
      setWasteDisposal(salientFeatures?.mainFeatures?.wasteDisposal);
      setAccessToNearbyPublicTransport(
        salientFeatures?.mainFeatures?.accessToNearbyPublicTransport
      );

      //=================================== ROOM FEATURES ===================================

      setConferenceRoom(salientFeatures?.rooms?.conferenceRoom);
      setMediaRoom(salientFeatures?.rooms?.mediaRoom);
      setCabinRoom(salientFeatures?.rooms?.cabinRoom);
      setIsBathroom(salientFeatures?.rooms?.bathroom);
      setPossession(salientFeatures?.mainFeatures?.possession);

      setUtlitiesPaid(salientFeatures?.mainFeatures?.utilitiesPaid);

      setSolidLand(salientFeatures?.mainFeatures?.solidLand);
      setFilledLand(salientFeatures?.mainFeatures?.filledLand);
      setCorner(salientFeatures?.mainFeatures?.corner);
      setBoulevardFacing(salientFeatures?.mainFeatures?.boulevardFacing);

      setParkFacing(salientFeatures?.mainFeatures?.parkFacing);
      setExtraLand(salientFeatures?.mainFeatures?.extraLand);
      setBoundaryWall(salientFeatures?.mainFeatures?.boundaryWall);
      setWaterSupply(salientFeatures?.mainFeatures?.waterSupply);
      setGasSupply(salientFeatures?.mainFeatures?.gasSupply);

      setTvLongue(salientFeatures?.rooms?.tvLounge);
      setDiningRoom(salientFeatures?.rooms?.diningRoom);
      setDrawingRoom(salientFeatures?.rooms?.drawingRoom);
      setKitchen(salientFeatures?.rooms?.kitchen);
      setDirtyKitchen(salientFeatures?.rooms?.dirtyKitchen);
      setStoreRoom(salientFeatures?.rooms?.storeRoom);
      setIroningRoom(salientFeatures?.rooms?.ironingRoom);
      setPowderRoom(salientFeatures?.rooms?.powderRoom);
      setLaundryRoom(salientFeatures?.rooms?.laundryRoom);
      setStudyRoom(salientFeatures?.rooms?.studyRoom);
      setHomeTheater(salientFeatures?.rooms?.hometheater);
      setGym(salientFeatures?.rooms?.gym);
      setPrayerRoom(salientFeatures?.rooms?.prayerRoom);
      setServantQuarter(salientFeatures?.rooms?.servantQuarter);
      // const [lawn, setLawn] = useState(salientFeatures?.room?.boundaryWall);
      // const [swimmingPool, setSwimmingPool] = useState(salientFeatures?.room?.boundaryWall);
      // const [suana, setSuana] = useState(salientFeatures?.room?.boundaryWall);
      // const [steamRoom, setSteamRoom] = useState(salientFeatures?.room?.boundaryWall);
      // const [jacuzzi, setJacuzzi] = useState(salientFeatures?.room?.boundaryWall);
      // const [balcony, setBalcony] = useState(salientFeatures?.room?.boundaryWall);
      // const [terrace, setTerrace] = useState(salientFeatures?.room?.boundaryWall);

      //=================================== UTILITIES FEATURES ===================================

      setElectricity(salientFeatures?.utilities?.electricity);
      setGas(salientFeatures?.utilities?.gas);
      setMaintenance(salientFeatures?.utilities?.maintenance);

      //=================================== COMMUNICATION FEATURES ===================================

      setWater(salientFeatures?.rooms?.water);
      setBroadbandAccess(salientFeatures?.communication?.broadbandAccess);

      setSatelliteOrCableAccess(
        salientFeatures?.communication?.satelliteOrTvCableAccess
      );
      setIntercom(salientFeatures?.communication?.intercom);

      //=================================== OTHER FEATURES ===================================

      setSecurityStaff(salientFeatures?.otherFeatures?.securityStaff);
      setMaintenanceStaff(salientFeatures?.otherFeatures?.maintenanceStaff);
      setCctv(salientFeatures?.otherFeatures?.cctv);

      setAccessibilityForSpecialOrElderlyPerson(
        salientFeatures?.otherFeatures?.accessibilityForSpecialOrElderlyPersons
      );
    }
  }, [salientFeatures]);

  //=================================== ROOM FEATURES ===================================

  const [conferenceRoom, setConferenceRoom] = useState();
  const [mediaRoom, setMediaRoom] = useState();
  const [cabinRoom, setCabinRoom] = useState();
  const [isBathroom, setIsBathroom] = useState();
  const [possession, setPossession] = useState();
  const [utilitiesPaid, setUtlitiesPaid] = useState();

  const [solidLand, setSolidLand] = useState();
  const [filledLand, setFilledLand] = useState();
  const [corner, setCorner] = useState();
  const [boulevardFacing, setBoulevardFacing] = useState();

  const [parkFacing, setParkFacing] = useState();
  const [extraLand, setExtraLand] = useState();
  const [boundaryWall, setBoundaryWall] = useState();
  const [waterSupply, setWaterSupply] = useState();
  const [gasSupply, setGasSupply] = useState();

  const [tvLongue, setTvLongue] = useState();
  const [diningRoom, setDiningRoom] = useState();
  const [drawingRoom, setDrawingRoom] = useState();
  const [kitchen, setKitchen] = useState();
  const [dirtyKitchen, setDirtyKitchen] = useState();
  const [storeRoom, setStoreRoom] = useState();
  const [ironingRoom, setIroningRoom] = useState();
  const [powderRoom, setPowderRoom] = useState();
  const [laundryRoom, setLaundryRoom] = useState();
  const [studyRoom, setStudyRoom] = useState();
  const [homeTheater, setHomeTheater] = useState();
  const [gym, setGym] = useState();
  const [prayerRoom, setPrayerRoom] = useState();
  const [servantQuarter, setServantQuarter] = useState();
  // const [lawn, setLawn] = useState(salientFeatures?.room?.boundaryWall);
  // const [swimmingPool, setSwimmingPool] = useState(salientFeatures?.room?.boundaryWall);
  // const [suana, setSuana] = useState(salientFeatures?.room?.boundaryWall);
  // const [steamRoom, setSteamRoom] = useState(salientFeatures?.room?.boundaryWall);
  // const [jacuzzi, setJacuzzi] = useState(salientFeatures?.room?.boundaryWall);
  // const [balcony, setBalcony] = useState(salientFeatures?.room?.boundaryWall);
  // const [terrace, setTerrace] = useState(salientFeatures?.room?.boundaryWall);

  //=================================== UTILITIES FEATURES ===================================

  const [electricity, setElectricity] = useState();
  const [gas, setGas] = useState();
  const [maintenance, setMaintenance] = useState();

  //=================================== COMMUNICATION FEATURES ===================================

  const [water, setWater] = useState();
  const [broadbandAccess, setBroadbandAccess] = useState();

  const [satelliteOrCableAccess, setSatelliteOrCableAccess] = useState();
  const [intercom, setIntercom] = useState();

  //=================================== OTHER FEATURES ===================================

  const [securityStaff, setSecurityStaff] = useState();
  const [maintenanceStaff, setMaintenanceStaff] = useState();
  const [cctv, setCctv] = useState();
  const [
    accessibilityForSpecialOrElderlyPerson,
    setAccessibilityForSpecialOrElderlyPerson,
  ] = useState(
    salientFeatures?.otherFeatures?.accessibilityForSpecialOrElderlyPersons
  );

  //=================================== OTHER REST FEATURES ===================================

  const [otherMainFeature, setOtherMainFeature] = useState([]);
  const [otherRoomFeature, setOtherRoomFeature] = useState([]);
  const [utilityOtherFeature, setUtilityOtherFeature] = useState([]);
  const [otherCommunicationFeature, setOtherCommunicationFeature] = useState(
    []
  );
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

  const nearbyLandmarksObject = (landmark, name) => ({
    label: landmark,
    value: name,
  });

  const handleEditPropertySalientFeatures = async () => {
    try {
      const data = await axios.post(
        baseURL +
          "/api/salientfeatures/edit/" +
          propertyDetails?.propertyListing?._id,
        {
          builtYear: builtYear
            ? builtYear
            : salientFeatures?.mainFeatures?.builtYear,
          parkingSpaces: parkingSpaces,
          facingView: facingView
            ? facingView
            : salientFeatures?.mainFeatures?.facingView,
          basementIncluded: basementIncluded,
          centralHeating: centralHeating,
          centralCooling: centralCooling,
          furnished: furnished,
          semiFurnished: semiFurnished,
          doubleGlazedWindows: doubleGlazedWindows,
          electricityBackup: electricityBackup,
          wasteDisposal: wasteDisposal,
          nearbyLandmarks: [],
          accessToNearbyPublicTransport: accessToNearbyPublicTransport,
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
          elevator: false,
          parking: parking,

          laundryRoom: laundryRoom,
          studyRoom: studyRoom,
          hometheater: homeTheater,
          gym: gym,
          prayerRoom: prayerRoom,
          servantQuarter: servantQuarter,
          lawn: false,
          swimmingPool: false,

          sauna: false,
          steamRoom: false,
          jacuzzi: false,
          balcony: false,
          terrace: false,
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
      setLoading(false);
      success();
      window.location.reload();
    } catch (err) {
      setLoading(false);
      error();

      console.log(err);
    }
  };

  const getUpdatedData = () => {
    let userData = {};
    if (title) {
      userData = { ...userData, title: title };
    }
    if (description) {
      userData = { ...userData, description: description };
    }
    if (price) {
      userData = { ...userData, price: price };
    }
    if (size && unit) {
      userData = { ...userData, size: size.toString() + " " + unit };
    }
    if (address) {
      userData = { ...userData, address: address };
    }
    if (province) {
      userData = { ...userData, province: province };
    }
    if (location) {
      userData = { ...userData, location: location };
    }
    if (city) {
      userData = { ...userData, city: city };
    }
    if (bedroom) {
      userData = { ...userData, noOfBedrooms: bedroom };
    }
    if (bathroom) {
      userData = { ...userData, noOfBathrooms: bathroom };
    }
    if (subtype) {
      userData = { ...userData, province: province };
    }
    if (landmarksFinalArray) {
      userData = { ...userData, nearbyLandmarks: landmarksFinalArray };
    }
    if (contactCnic) {
      userData = { ...userData, contactCnic: contactCnic };
    }
    if (contactEmail) {
      userData = { ...userData, contactEmail: contactEmail };
    }
    if (contactPhone) {
      userData = { ...userData, contactPhoneWork: contactPhone };
    }
    if (contactPhoneHome) {
      userData = { ...userData, contactPhoneHome: contactPhoneHome };
    }
    return userData;
  };

  const handleEditProperty = async () => {
    const updatedData = getUpdatedData();

    setLoading(true);
    try {
      const data = await axios.post(
        baseURL + "/api/property/edit/" + propertyDetails?.propertyListing?._id,
        {
          ...updatedData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // setImagesKeysArr(data?.data?.proplisting?.images);
      // setPropertyId(data?.data?.proplisting?._id);
      handleEditPropertySalientFeatures();
    } catch (err) {
      setLoading(false);
      error();
      console.log(err);
    }
  };

  useEffect(async () => {
    const data = await getAllCities();
    setCitiesAndLocations(data);
    data?.map((cityObject) =>
      setCities((city) => [...city, cityObject?.cityName])
    );
  }, []);

  useEffect(() => {
    if (cities?.length > 0) {
      setCity(cities[0]);
    }
  }, [cities]);

  useEffect(() => {
    if (router.query) {
      setPropertyId(router.query.propertyId);
      _setPropertyId(router?.query?.propertyId);
    }
  }, [router.query]);

  useEffect(() => {
    const getPropertyDetails = async () => {
      if (propertyId) {
        const data = await getPropertyDetailsById(propertyId);
        setPropertyDetails(data);
        setLoadingInfo(false);
      }
    };

    getPropertyDetails();
  }, [propertyId]);

  useEffect(() => {
    if (propertyDetails) {
      setPurposeSelected(propertyDetails?.propertyListing?.purpose);
      setType(propertyDetails?.propertyListing?.type);
      setSubtype(propertyDetails?.subtype);
      setImgArr(propertyDetails?.propertyListing?.images);
    }
  }, [propertyDetails]);

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

  useEffect(() => {
    if (salientFeatures) {
      salientFeatures?.mainFeatures?.nearbyLandmarks?.map((landmark) =>
        setLandmarksFinalArray((single) => [
          ...single,
          nearbyLandmarksObject(landmark, landmark),
        ])
      );
    }
  }, [salientFeatures]);

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

  useEffect(() => {
    if (isImageUploadCompleted) {
      setLoading(false);
      success();
      window.location.reload();
    }
  }, [isImageUploadCompleted]);

  const handleType = (value) => {
    setType(value);
  };

  const handlePurposeSelected = (value) => {
    setPurposeSelected(value);
  };

  useEffect(() => {
    if (files) {
      if (files.files.length !== 0) {
        uploadedFiles(files.files[0]);
      }
    }
  }, [files]);

  function uploadedFiles(file) {
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

  const success = () =>
    toast.success("Property updated", {
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
      {loadingInfo ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader size={"20px"} color="black" />
        </div>
      ) : (
        <>
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
                        <option
                          selected={
                            propertyDetails &&
                            propertyDetails?.subtype === subtype
                          }
                          value={subtype}
                          key={index}
                        >
                          {subtype}
                        </option>
                      ))
                    : type === "commercial"
                    ? commercial_subtypes?.map((subtype, index) => (
                        <option
                          selected={
                            propertyDetails &&
                            propertyDetails?.subtype === subtype
                          }
                          value={subtype}
                          key={index}
                        >
                          {subtype}
                        </option>
                      ))
                    : type === "plot" &&
                      plot_subtypes?.map((subtype, index) => (
                        <option
                          selected={
                            propertyDetails &&
                            propertyDetails?.subtype === subtype
                          }
                          value={subtype}
                          key={index}
                        >
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
                  {cities?.map((city, index) => (
                    <option
                      selected={
                        propertyDetails &&
                        propertyDetails?.propertyListing?.city === city
                      }
                      key={index}
                      value={city}
                    >
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
                    <option
                      selected={
                        propertyDetails &&
                        propertyDetails?.propertyListing?.location === location
                      }
                      key={index}
                      value={location}
                    >
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
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province === "islamabad"
                    }
                    value={"islamabad"}
                  >
                    Islamabad
                  </option>
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province === "punjab"
                    }
                    value={"punjab"}
                  >
                    Punjab
                  </option>
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province === "sindh"
                    }
                    value={"sindh"}
                  >
                    Sindh
                  </option>
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province === "kpk"
                    }
                    value={"kpk"}
                  >
                    KPK
                  </option>
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province ===
                      "baluchistan"
                    }
                    value={"baluchistan"}
                  >
                    Baluchistan
                  </option>
                  <option
                    selected={
                      propertyDetails?.propertyListing?.province === "gilgit"
                    }
                    value={"gilgit"}
                  >
                    Gilgit Baltistan
                  </option>
                </select>
              </div>
            </div>

            <div className={classes.single_row}>
              <p className={classes.label}>Address</p>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className={classes.input_field_single}
                placeholder={
                  propertyDetails && propertyDetails?.propertyListing?.address
                }
              />
            </div>
          </div>

          <div className={classes.section}>
            <h1 className={classes.heading}>
              Tell us more about your property
            </h1>

            <div className={classes.single_row}>
              <p className={classes.label}>Title</p>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className={classes.input_field_single}
                placeholder={
                  propertyDetails
                    ? propertyDetails?.propertyListing?.title
                    : "Enter title"
                }
              />
            </div>

            <div className={classes.single_row}>
              <div className={classes.three_field_container}>
                <p className={classes.label_dual}>Price</p>
                <input
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  placeholder={
                    propertyDetails
                      ? propertyDetails?.propertyListing?.price
                      : "Enter Price"
                  }
                  className={classes.input_field_three}
                />
              </div>
              <div className={classes.three_field_container}>
                <p className={classes.label_dual}>Size</p>
                <input
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  type="number"
                  placeholder={
                    propertyDetails?.propertyListing?.size
                      ? propertyDetails?.propertyListing?.size?.split(" ")[0]
                      : "Property size"
                  }
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
                    <option
                      selected={
                        propertyDetails?.propertyListing?.size &&
                        propertyDetails?.propertyListing?.size[1] ===
                          unit_subtype
                      }
                      value={unit_subtype}
                      key={index}
                    >
                      {unit_subtype}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {type !== "plot" && (
              <div className={classes.single_row}>
                <div className={classes.two_field_container}>
                  <p className={classes.label_dual}>Bedrooms</p>
                  <input
                    onChange={(e) => {
                      setBedroom(e.target.value);
                    }}
                    type="number"
                    placeholder={
                      propertyDetails && propertyDetails?.noOfBedrooms
                    }
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
                    placeholder={
                      propertyDetails && propertyDetails?.noOfBathrooms
                    }
                  />
                </div>
              </div>
            )}

            <div
              style={{ alignItems: "normal" }}
              className={classes.single_row}
            >
              <p className={classes.label}>Description</p>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                style={{ height: "150px", paddingTop: "10px" }}
                className={classes.input_field_single}
                placeholder={
                  propertyDetails &&
                  propertyDetails?.propertyListing?.description
                }
              />
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
                        placeholder={
                          propertyDetails &&
                          propertyDetails?.resSalientFeatures?.mainFeatures
                            ?.builtYear
                        }
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
                        <option
                          selected={
                            salientFeatures?.mainFeatures?.facingView === "East"
                          }
                          value="East"
                        >
                          East
                        </option>
                        <option
                          selected={
                            salientFeatures?.mainFeatures?.facingView === "West"
                          }
                          value="West"
                        >
                          West
                        </option>
                        <option
                          selected={
                            salientFeatures?.mainFeatures?.facingView ===
                            "North"
                          }
                          value="North"
                        >
                          North
                        </option>
                        <option
                          selected={
                            salientFeatures?.mainFeatures?.facingView ===
                            "South"
                          }
                          value="South"
                        >
                          South
                        </option>
                      </select>
                    </div>

                    <div
                      style={{
                        width: width < 1010 ? "100%" : "45%",
                        marginTop: width < 1010 && "10px",
                      }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Nearby Landmarkss</p>

                      {landmarksFinalArray && (
                        <Select
                          defaultValue={
                            landmarksFinalArray?.length > 0 &&
                            landmarksFinalArray
                          }
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
                      )}
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.basementIncluded
                        }
                      />
                      <p className={classes.checkbox_label}>
                        Basement Included
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        defaultChecked={
                          salientFeatures?.mainFeatures?.parkingSpaces
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.centralHeating
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.centralCooling
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.furnished
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.semiFurnished
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.doubleGlazedWindows
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.electricityBackup
                        }
                      />
                      <p className={classes.checkbox_label}>
                        Electricity Backup
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setWasteDisposal(e.target.checked);
                        }}
                        className={classes.checkbox}
                        type="checkbox"
                        defaultChecked={
                          salientFeatures?.mainFeatures?.wasteDisposal
                        }
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
                        defaultChecked={salientFeatures?.rooms?.tvLounge}
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
                        defaultChecked={salientFeatures?.rooms?.diningRoom}
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
                        defaultChecked={salientFeatures?.rooms?.drawingRoom}
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
                        defaultChecked={salientFeatures?.rooms?.kitchen}
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
                        defaultChecked={salientFeatures?.rooms?.dirtyKitchen}
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
                        defaultChecked={salientFeatures?.rooms?.storeroom}
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
                        defaultChecked={salientFeatures?.rooms?.ironingRoom}
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
                        defaultChecked={salientFeatures?.rooms?.powderRoom}
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
                        defaultChecked={salientFeatures?.rooms?.laundryRoom}
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
                        defaultChecked={salientFeatures?.rooms?.studyRoom}
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
                        defaultChecked={salientFeatures?.rooms?.hometheater}
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
                        defaultChecked={salientFeatures?.rooms?.gym}
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
                        defaultChecked={salientFeatures?.rooms?.prayerRoom}
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
                        defaultChecked={salientFeatures?.rooms?.servantQuarter}
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
                        defaultChecked={salientFeatures?.utilities?.electricity}
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
                        defaultChecked={salientFeatures?.utilities?.gas}
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
                        defaultChecked={salientFeatures?.utilities?.water}
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
                        defaultChecked={salientFeatures?.utilities?.maintenance}
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
                        defaultChecked={
                          salientFeatures?.communication?.broadbandAccess
                        }
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
                        defaultChecked={
                          salientFeatures?.utilities?.satelliteOrCableAccess
                        }
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
                        defaultChecked={salientFeatures?.utilities?.intercom}
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
                        defaultChecked={
                          salientFeatures?.otherFeatures?.securityStaff
                        }
                      />
                      <p className={classes.checkbox_label}>Security Staff</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setMaintenanceStaff(e.target.checked);
                        }}
                        defaultChecked={
                          salientFeatures?.otherFeatures?.maintenanceStaff
                        }
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>
                        Maintenance Staff
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setCctv(e.target.checked);
                        }}
                        defaultChecked={salientFeatures?.otherFeatures?.cctv}
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
                        defaultChecked={
                          salientFeatures?.otherFeatures
                            ?.accessibilityForSpecialOrElderlyPersons
                        }
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
                          className={
                            classes.input_field_with_label_top_container
                          }
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
                          className={
                            classes.input_field_with_label_top_container
                          }
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
                          className={
                            classes.input_field_with_label_top_container
                          }
                        >
                          <p className={classes.top_label}>
                            Floors in Building
                          </p>
                          <input
                            type="number"
                            className={classes.input_field_single}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{ width: "45%" }}
                          className={
                            classes.input_field_with_label_top_container
                          }
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
                          className={
                            classes.input_field_with_label_top_container
                          }
                        >
                          <p className={classes.top_label}>Nearby Landmarks</p>
                          <Select
                            defaultValue={landmarksFinalArray}
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
                        defaultValue={landmarksFinalArray}
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
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>
                        Electricity Backup
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Elevator/Lift</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        defaultChecked={
                          salientFeatures?.mainFeatures
                            ?.accessToNearbyPublicTransport
                        }
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
                          <p className={classes.checkbox_label}>
                            Conference Room
                          </p>
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
                        <p
                          style={{ width: "30%" }}
                          className={classes.top_label}
                        >
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
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Electricity</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Gas</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Water</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
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
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Broadband Access</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>
                        Sattelite or TV Cable Access
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
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
                      tags={otherMainFeature}
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
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Security Staff</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setMaintenanceStaff(e.target.checked);
                        }}
                        defaultChecked={
                          salientFeatures?.otherFeatures?.maintenanceStaff
                        }
                        className={classes.checkbox}
                        type="checkbox"
                      />
                      <p className={classes.checkbox_label}>
                        Maintenance Staff
                      </p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input
                        onChange={(e) => {
                          setCctv(e.target.checked);
                        }}
                        defaultChecked={salientFeatures?.otherFeatures?.cctv}
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
                        defaultChecked={
                          salientFeatures?.otherFeatures
                            ?.accessibilityForSpecialOrElderlyPersons
                        }
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
                        defaultValue={landmarksFinalArray}
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.possession
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.utilitiesPaid
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.solidLand
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.filledLand
                        }
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
                        defaultChecked={salientFeatures?.mainFeatures?.corner}
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.boulevardFacing
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.parkFacing
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.extraLand
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.boundaryWall
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.waterSupply
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures?.gasSupply
                        }
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
                        defaultChecked={
                          salientFeatures?.mainFeatures
                            ?.accessToNearbyPublicTransport
                        }
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
                    {img1 || uploadedImg1 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg1
                            ? uploadedImg1
                            : img1 && URL.createObjectURL(img1)
                        }
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
                    {img2 || uploadedImg2 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg2
                            ? uploadedImg2
                            : img2 && URL.createObjectURL(img2)
                        }
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
                    {img3 || uploadedImg3 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg3
                            ? uploadedImg3
                            : img3 && URL.createObjectURL(img3)
                        }
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
                    {img4 || uploadedImg4 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg4
                            ? uploadedImg4
                            : img4 && URL.createObjectURL(img4)
                        }
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
                    {img5 || uploadedImg5 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg5
                            ? uploadedImg5
                            : img5 && URL.createObjectURL(img5)
                        }
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
                    {img6 || uploadedImg6 ? (
                      <img
                        className={classes.img}
                        src={
                          uploadedImg6
                            ? uploadedImg6
                            : img6 && URL.createObjectURL(img6)
                        }
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
                    setContactPhone(e.target.value);
                  }}
                  placeholder={
                    propertyDetails?.propertyListing?.contactPhoneWork
                      ? propertyDetails?.propertyListing?.contactPhoneWork
                      : "Phone (Work)"
                  }
                  className={classes.input_field_dual}
                />
              </div>
              <div className={classes.two_field_container}>
                <p className={classes.label_dual}>Phone</p>
                <input
                  onChange={(e) => {
                    setContactPhoneHome(e.target.value);
                  }}
                  placeholder={
                    propertyDetails?.propertyListing?.contactPhoneHome
                      ? propertyDetails?.propertyListing?.contactPhoneHome
                      : "Phone (Home)"
                  }
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
                  placeholder={
                    propertyDetails?.propertyListing?.contactEmail
                      ? propertyDetails?.propertyListing?.contactEmail
                      : "Enter Email"
                  }
                  className={classes.input_field_dual}
                />
              </div>
              <div className={classes.two_field_container}>
                <p className={classes.label_dual}>CNIC#</p>
                <input
                  onChange={(e) => {
                    setContactCnic(e.target.value);
                  }}
                  placeholder={
                    propertyDetails?.propertyListing?.contactCnic
                      ? propertyDetails?.propertyListing?.contactCnic
                      : "XXXXX XXX XXXX X"
                  }
                  className={classes.input_field_dual}
                />
              </div>
            </div>
          </div>
          <div onClick={handleEditProperty} className={classes.btn}>
            <p>Edit property</p>
            {loading && <ClipLoader size={"20px"} color="white" />}
          </div>
        </>
      )}
    </div>
  );
}

export default EditPropertyForm;
