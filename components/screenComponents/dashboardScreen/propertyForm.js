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

function PropertyForm() {
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { width } = useWindowSize();
  const [propertyId, setPropertyId] = useState();
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
  const [imgArr, setImgArr] = useState([]);

  // Salient Features

  const [builtYear, setBuiltYear] = useState();
  const [facingView, setFacingView] = useState();
  const [basementIncluded, setBasementIncluded] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState(false);
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
  const [otherMainFeature, setOtherMainFeature] = useState();
  const [otherRoomFeature, setOtherRoomFeature] = useState();
  const [utilityOtherFeature, setUtilityOtherFeature] = useState();
  const [otherCommunicationFeature, setOtherCommunicationFeature] = useState();
  const [facilitiesOtherFeatures, setFacilitiesOtherFeatures] = useState();

  console.log(subtype);

  const handleAddProperty = async () => {
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
          size: size,
          address: address,
          location: location,
          city: city,
          noOfBedrooms: bedroom,
          noOfBathrooms: bathroom,
          subtype: subtype,
          // country: country,
          // images: imgArr,
          userId: "62990b56ce95ea1954228f94",
          hasBasement: "false",
          images: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data?.data?.proplisting?._id);
      setPropertyId(data?.data?.proplisting?._id);
    } catch (err) {
      setLoading(false);
      error();
      // if (err.response) {
      //   console.log(err.response.data?.message);
      //   if (err.response.data?.message === "Invalid Password!") {
      //     error("Invaid Password");
      //   } else if (err.response.data?.message === "User not found") {
      //     error("User not found");
      //   }
      // }
      console.log(err);
    }
  };

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
              nearbyLandmarks: [],
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
              otherCommunicationFeatures: otherCommunicationFeature,
              securityStaff: securityStaff,
              maintenanceStaff: maintenanceStaff,
              cctv: cctv,

              accessibilityForSpecialOrElderlyPersons:
                accessibilityForSpecialOrElderlyPerson,

              otherMainFeatures: otherMainFeature,
              otherRoomFeatures: otherMainFeature,
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
          console.log(data);
          setLoading(false);
          success();
          window.location.reload();
          // setPropertyId(data?.data?.proplisting?._id);
        } catch (err) {
          setLoading(false);
          error();
          // if (err.response) {
          //   console.log(err.response.data?.message);
          //   if (err.response.data?.message === "Invalid Password!") {
          //     error("Invaid Password");
          //   } else if (err.response.data?.message === "User not found") {
          //     error("User not found");
          //   }
          // }
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

  console.log(basementIncluded);

  const handleImg1 = async (event) => {
    // const file = event?.target?.files[0];;
    // var reader = new FileReader();
    // reader.onload = function (){
    //   console.log(reader.result);
    //   if(typeof window !==undefined){
    //     var blob = window.dataURLtoBlob(reader.result);
    //   }
    //   console.log(blob, newFile([blob], "image.png"), {
    //     type: "image/png"
    //   })
    // };
    // reader.readAsDataURL(file);

    if (event?.target?.files) {
      setImg1(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  const handleImg2 = async (event) => {
    if (event?.target?.files) {
      setImg2(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  const handleImg3 = async (event) => {
    if (event?.target?.files) {
      setImg3(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  const handleImg4 = async (event) => {
    if (event?.target?.files) {
      setImg4(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  const handleImg5 = async (event) => {
    if (event?.target?.files) {
      setImg5(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  const handleImg6 = async (event) => {
    if (event?.target?.files) {
      setImg6(event?.target?.files[0]);
      const blobUrl = URL.createObjectURL(event?.target?.files[0], {
        type: "image/png",
      });
      var file = new File([blobUrl], "imagefile");
      imgArr.push(file);
    }
  };

  console.log("Array: ", imgArr);

  const success = () =>
    toast.success("Property added!", {
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
                console.log(e.target.value);
                setSubtype(e.target.value);
              }}
              style={{ width: "100%" }}
              className={classes.input_field_single}
            >
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
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="City Name"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Location</p>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Location Area"
              className={classes.input_field_dual}
            />
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
              <option value={"punjab"}>Punjab</option>
              <option value={"sindh"}>Sindh</option>
              <option value={"kpk"}>KPK</option>
              <option value={"baluchistan"}>Baluchistan</option>
              <option value={"gilgit"}>Gilgit Baltistan</option>
            </select>
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Address</p>
          <textarea
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            style={{ height: "150px", paddingTop: "10px" }}
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
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Price</p>
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price (PKR)  "
              className={classes.input_field_three}
            />
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Size</p>
            <input
              onChange={(e) => {
                setSize(e.target.value);
              }}
              placeholder="City Name"
              className={classes.input_field_three}
            />
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Unit</p>
            <select className={classes.input_field_three}>
              {unit_subtypes?.map((unit_subtype, index) => (
                <option key={index}>{unit_subtype}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Bedrooms</p>
            <input
              onChange={(e) => {
                setBedroom(e.target.value);
              }}
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Bathrooms</p>
            <input
              onChange={(e) => {
                setBathroom(e.target.value);
              }}
              className={classes.input_field_dual}
            />
          </div>
        </div>
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
                  <input
                    onChange={(e) => {
                      setFacingView(e.target.value);
                    }}
                    className={classes.input_field_single}
                  />
                </div>

                <div
                  style={{
                    width: width < 1010 ? "100%" : "45%",
                    marginTop: width < 1010 && "10px",
                  }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>
                  <select
                    onChange={(e) => {
                      nearbyLandmarks.push(e.target.value);
                    }}
                    className={classes.input_field_single}
                  >
                    {landmarks?.map((landmark, index) => (
                      <option value={landmark} key={index}>
                        {landmark}
                      </option>
                    ))}
                  </select>
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
                <input
                  onChange={(e) => {
                    setOtherMainFeature(e.target.value);
                  }}
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
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
                <input
                  onChange={(e) => {
                    setOtherRoomFeature(e.target.value);
                  }}
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
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
                <input
                  onChange={(e) => {
                    setOtherCommunicationFeature(e.target.value);
                  }}
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
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
                <input
                  onChange={(e) => {
                    setFacilitiesOtherFeatures(e.target.value);
                  }}
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
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
                      <input
                        onChange={(e) => {
                          setFacingView(e.target.value);
                        }}
                        className={classes.input_field_single}
                      />
                    </div>

                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Floors in Building</p>
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
                      <select
                        onChange={(e) => {
                          setNearbyLandmarks(e.target.value);
                        }}
                        className={classes.input_field_single}
                      >
                        {landmarks?.map((landmark, index) => (
                          <option value={landmark} key={index}>
                            {landmark}
                          </option>
                        ))}
                      </select>
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
                  <select
                    onChange={(e) => {
                      setNearbyLandmarks(e.target.value);
                    }}
                    className={classes.input_field_single}
                  >
                    {landmarks?.map((landmark, index) => (
                      <option value={landmark} key={index}>
                        {landmark}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Parking</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Electricity Backup</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Elevator/Lift</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
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
                <input className={classes.input_field_single} />
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
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Conference Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Media Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Cabin Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Kitchen</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Bathroom</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
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
                    <input className={classes.input_field_single} />
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
                <input className={classes.input_field_single} />
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
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Maintenance Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>CCTV</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
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
                <input className={classes.input_field_single} />
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
                  <select className={classes.input_field_single}>
                    {landmarks?.map((landmark, index) => (
                      <option key={index}>{landmark}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Possession</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Utilities Paid</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Solid Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Filled Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Corner</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Boulevard Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Park Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Extra Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Boundary Wall</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Water Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Gas Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
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
                <input className={classes.input_field_single} />
              </div>
            </div>
          </>
        )}

        <div style={{ marginTop: "80px" }} className={classes.single_row}>
          <p className={classes.label}>Images</p>

          <div className={classes.container_with_top_label}>
            <p className={classes.small_label}>
              Upload at least 570x570 resolution images
            </p>
            <div className={classes.image_holder_container}>
              <div className={classes.image_holder}>
                {img1 ? (
                  <img
                    className={classes.img}
                    src={img1 && URL.createObjectURL(img1)}
                  />
                ) : (
                  <label className={classes.custom_file_upload}>
                    <input
                      className={classes.img_input_field}
                      style={{ display: "flex", flexDirection: "column" }}
                      onChange={(e) => {
                        handleImg1(e, "files");
                      }}
                      id="image_input"
                      type="file"
                      name="fileToUpload"
                      accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                    />
                  </label>
                )}
              </div>
              <div className={classes.image_holder}>
                {img2 ? (
                  <img
                    className={classes.img}
                    src={img2 && URL.createObjectURL(img2)}
                  />
                ) : (
                  <input
                    className={classes.img_input_field}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(e) => {
                      handleImg2(e, "files");
                    }}
                    id="image_input"
                    type="file"
                    name="fileToUpload"
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
              <div className={classes.image_holder}>
                {img3 ? (
                  <img
                    className={classes.img}
                    src={img3 && URL.createObjectURL(img3)}
                  />
                ) : (
                  <input
                    className={classes.img_input_field}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(e) => {
                      handleImg3(e, "files");
                    }}
                    id="image_input"
                    type="file"
                    name="fileToUpload"
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
              <div className={classes.image_holder}>
                {img4 ? (
                  <img
                    className={classes.img}
                    src={img4 && URL.createObjectURL(img4)}
                  />
                ) : (
                  <input
                    className={classes.img_input_field}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(e) => {
                      handleImg4(e, "files");
                    }}
                    id="image_input"
                    type="file"
                    name="fileToUpload"
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
              <div className={classes.image_holder}>
                {img5 ? (
                  <img
                    className={classes.img}
                    src={img5 && URL.createObjectURL(img5)}
                  />
                ) : (
                  <input
                    className={classes.img_input_field}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(e) => {
                      handleImg5(e, "files");
                    }}
                    id="image_input"
                    type="file"
                    name="fileToUpload"
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
              <div className={classes.image_holder}>
                {img6 ? (
                  <img
                    className={classes.img}
                    src={img6 && URL.createObjectURL(img6)}
                  />
                ) : (
                  <input
                    className={classes.img_input_field}
                    style={{ display: "flex", flexDirection: "column" }}
                    onChange={(e) => {
                      handleImg6(e, "files");
                    }}
                    id="image_input"
                    type="file"
                    name="fileToUpload"
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Contact Details</h1>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              placeholder="Phone (Work)"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              placeholder="Phone (Home)"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Email</p>
            <input
              placeholder="Enter Email"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>CNIC#</p>
            <input
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
