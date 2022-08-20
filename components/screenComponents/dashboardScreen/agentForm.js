import React, { useState, useEffect, useMemo } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { useAuth } from "../../../contextAPI";
import { baseURL } from "../../../constants";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import { getAllCities } from "../../../components/utils";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function AgentForm() {
  const { user } = useAuth();
  const [agent, setAgent] = useState();
  const [name, setName] = useState();
  const [sinceYear, setSinceYear] = useState();
  const [about, setAbout] = useState();
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [corporateAddress, setCorporateAddress] = useState();
  const [websiteUrl, setWebsiteUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [logoImg, setLogoImg] = useState();
  const [imgName, setImgName] = useState();
  const [imgBlob, setImgBlob] = useState();
  const [logoKey, setLogoKey] = useState(logoKey);
  const [socialMediaArr, setSocialMediaArr] = useState([]);
  const [socialsArr, setSocialsArr] = useState([]);
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [citiesAndLocations, setCitiesAndLocations] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const [cnic, setCnic] = useState();

  const [img, setImg] = useState();
  const [imagesBlobArr, setImagesBlobArr] = useState();
  const [imgArr, setImgArr] = useState();
  const [imgKey, setImgKey] = useState();

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [initialLat, setInitialLat] = useState();
  const [initialLng, setInitialLng] = useState();

  const [profilePicture, setProfilePicture] = useState();

  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  useEffect(async () => {
    const data = await getAllCities();
    setCitiesAndLocations(data);
    data?.map((cityObject) => {
      if (
        cityObject?.cityName !== "Islamabad" &&
        cityObject?.cityName !== "Lahore" &&
        cityObject?.cityName !== "Rawalpindi" &&
        cityObject?.cityName !== "Faisalabad" &&
        cityObject?.cityName !== "Karachi"
      ) {
        setCities((city) => [...city, cityObject?.cityName]);
      }
    });
  }, []);

  useEffect(() => {
    if (cities?.length > 0) {
      setCities(cities?.sort());
    }
  }, [cities]);

  useEffect(() => {
    if (city && citiesAndLocations) {
      for (var i = 0; i < citiesAndLocations?.length; i++) {
        if (citiesAndLocations[i]?.cityName === city) {
          setLocations(citiesAndLocations[i]?.areas);
        }
      }
    }
  }, [city, citiesAndLocations]);

  const socials = [
    {
      label: "Facebook",
      value: "Facebook",
    },
    {
      label: "YouTube",
      value: "YouTube",
    },
    {
      label: "Instagram",
      value: "Instagram",
    },
    {
      label: "Twitter",
      value: "Twitter",
    },
    {
      label: "WhatsApp",
      value: "WhatsApp",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn",
    },
  ];

  const addSocials = (socialsArr) => {
    const temp = [];
    socialsArr?.map((socials) => temp.push(socials?.value));
    setSocialsArr(temp);
  };

  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

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
      setAgent(data?.data);
      setInitialLat(parseFloat(data?.data?.lat));
      setInitialLng(parseFloat(data?.data?.lng));
      // setCity(data?.data?.user?.city);
      // setLocation(data?.data?.user?.location);
    } catch (err) {
      console.log(err);
    }
  };

  const success = () =>
    toast.success("Profile Updated", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const error = (message) =>
    toast.error("Unexpected Error", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  useEffect(() => {
    fetchDeveloperDetails();
  }, []);

  const handleLogoFile = async (event) => {
    if (event) {
      setLogoImg(event);
      setImgBlob(event);
      setImgName(event?.name);
    }
  };

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

  const getUpdatedData = () => {
    let userData = {};
    if (name) {
      userData = { ...userData, username: name };
    }
    if (city) {
      userData = { ...userData, city: city };
    }
    if (about) {
      userData = { ...userData, aboutInformation: about };
    }
    if (location) {
      userData = { ...userData, location: location };
    }
    if (corporateAddress) {
      userData = { ...userData, companyAddress: corporateAddress };
    }
    if (websiteUrl) {
      userData = { ...userData, websiteURL: websiteUrl };
    }
    if (sinceYear) {
      userData = { ...userData, since: sinceYear };
    }
    if (imgName) {
      userData = { ...userData, companyLogo: imgName };
    }
    if (socialsArr?.length) {
      userData = { ...userData, socialMedia: socialsArr };
    }

    if (email) {
      userData = { ...userData, email: email };
    }

    if (firstName) {
      userData = { ...userData, firstName: firstName };
    }

    if (lastName) {
      userData = { ...userData, lastName: lastName };
    }
    if (phoneNo) {
      userData = { ...userData, phoneNo: phoneNo };
    }
    if (cnic) {
      userData = { ...userData, cnic: cnic };
    }
    if (lng) {
      userData = { ...userData, lng: lng };
    }
    if (lat) {
      userData = { ...userData, lat: lat };
    }

    return userData;
  };

  const handleEditUserInformation = async () => {
    const updatedData = getUpdatedData();

    try {
      setLoading(true);
      const data = await axios.post(
        baseURL + "/api/user/edit/" + user?.id,
        {
          ...updatedData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLogoKey(data?.data?.user?.companyLogo);
      if (!logoImg) {
        setLoading(false);
        window.location.reload();
      }
    } catch (err) {
      error();
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (logoKey && imgName) {
      const data = {
        fileKey: logoKey,
      };
      axios
        .post(baseURL + "/api/s3/getUrlWithKey", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((url) => {
          const blobUrl = URL.createObjectURL(imgBlob, {
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
              setLoading(false);
              success();
              window.location.reload();
            }
          };
          xhr.send();
        });
    }
  }, [logoKey]);

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

      {user?.userType === "agent" ? (
        <>
          <div className={classes.section}>
            <h1 className={classes.heading}>
              {user?.userType === "agent" ? "Agent" : "User"} Information
            </h1>
            <div className={classes.single_row}>
              {user?.userType === "agent" ? (
                <div className={classes.two_field_container}>
                  <p className={classes.label_dual}>Name</p>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={
                      agent?.user?.username ? agent?.user?.username : ""
                    }
                    className={classes.input_field_dual}
                  />
                </div>
              ) : (
                <>
                  <p className={classes.label_dual}>Name</p>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={
                      agent?.user?.username ? agent?.user?.username : ""
                    }
                    className={classes.input_field_single}
                  />
                </>
              )}

              {user?.userType === "agent" && (
                <div className={classes.two_field_container}>
                  <p className={classes.label_dual}>Since</p>
                  <input
                    onChange={(e) => {
                      setSinceYear(e.target.value);
                    }}
                    placeholder={
                      agent?.user?.since ? agent?.user?.since : "Type Year"
                    }
                    className={classes.input_field_dual}
                  />
                </div>
              )}
            </div>

            <div
              style={{ alignItems: "normal" }}
              className={classes.single_row}
            >
              <p className={classes.label}>About Information</p>
              <textarea
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                style={{ height: "150px", paddingTop: "10px" }}
                placeholder={
                  agent?.user?.aboutInformation
                    ? agent?.user?.aboutInformation
                    : ""
                }
                className={classes.input_field_single}
              />
            </div>
          </div>

          <div className={classes.section}>
            <h1 className={classes.heading}>Contact Details</h1>
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
                  <option
                    selected={agent && agent?.user?.city === "Islamabad"}
                    value="Islamabad"
                  >
                    Islamabad
                  </option>
                  <option
                    selected={agent && agent?.user?.city === "Lahore"}
                    value="Lahore"
                  >
                    Lahore
                  </option>
                  <option
                    selected={agent && agent?.user?.city === "Karachi"}
                    value="Karachi"
                  >
                    Karachi
                  </option>
                  <option
                    selected={agent && agent?.user?.city === "Faisalabad"}
                    value="Faisalabad"
                  >
                    Faisalabad
                  </option>
                  <option
                    selected={agent && agent?.user?.city === "Rawalpindi"}
                    value="Rawalpindi"
                  >
                    Rawalpindi
                  </option>

                  {cities?.map((city, index) => (
                    <option
                      selected={agent && agent?.user?.city === city}
                      key={index}
                      value={city}
                    >
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
                  {agent?.user?.location && (
                    <option selected value={agent?.user?.location}>
                      {agent?.user?.location}
                    </option>
                  )}
                  {locations?.map((location, index) => (
                    <option
                      selected={agent && agent?.user?.location === location}
                      key={index}
                      value={location}
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {isLoaded ? map : <></>}

            <div
              style={{ alignItems: "normal" }}
              className={classes.single_row}
            >
              <p className={classes.label}>
                {user?.userType === "agent" ? "Corporate Address" : "Address"}
              </p>
              <textarea
                onChange={(e) => {
                  setCorporateAddress(e.target.value);
                }}
                placeholder={agent?.companyAddress}
                style={{ height: "150px", paddingTop: "10px" }}
                className={classes.input_field_single}
              />
            </div>
            <div className={classes.single_row}>
              <div className={classes.two_field_container}>
                <p className={classes.label_dual}>Website URL</p>
                <input
                  onChange={(e) => {
                    setWebsiteUrl(e.target.value);
                  }}
                  placeholder={
                    agent?.user?.websiteURL ? agent?.user?.websiteURL : ""
                  }
                  className={classes.input_field_dual}
                />
              </div>
              <div className={classes.two_field_container}>
                <p className={classes.label_dual}>Social Media</p>
                <Select
                  className={classes.input_field_dual}
                  components={{ Option }}
                  hideSelectedOptions={false}
                  options={socials}
                  closeMenuOnSelect={false}
                  placeholder=" "
                  isMulti
                  isClearable
                  onChange={(e) => {
                    addSocials(e);
                  }}
                />
              </div>
            </div>

            <div className={classes.single_row}>
              <div
                style={{ justifyContent: "initial", columnGap: "20px" }}
                className={classes.two_field_container}
              >
                <p className={classes.label_dual}>Logo Attachment</p>
                {agent?.companyLogo ? (
                  <div style={{ position: "relative" }}>
                    <img
                      className={classes.img}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        minHeight: "100px",
                      }}
                      src={baseS3Url + agent?.companyLogo}
                    />
                    <div className={classes.input_on_top_image}>
                      <input
                        onChange={(e) => {
                          handleLogoFile(e.target.files[0], "files");
                        }}
                        type={"file"}
                        placeholder="City Name"
                        className={classes.input_field_dual}
                        accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                      />
                    </div>
                  </div>
                ) : logoImg ? (
                  <div className={classes.image_holder}>
                    <img
                      className={classes.img}
                      style={{ zIndex: "500" }}
                      src={logoImg && URL.createObjectURL(logoImg)}
                    />
                  </div>
                ) : (
                  <input
                    onChange={(e) => {
                      handleLogoFile(e.target.files[0], "files");
                    }}
                    type={"file"}
                    placeholder="City Name"
                    className={classes.input_field_dual}
                    accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.section}>
            <h1 className={classes.heading}>
              {user?.userType === "agent" ? "Agent" : "User"} Information
            </h1>

            <div className={classes.single_row}>
              <>
                <div className={classes.two_field_container}>
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    style={{ width: "100%" }}
                    placeholder={
                      agent?.firstName ? agent?.firstName : "First Name"
                    }
                    className={classes.input_field_dual}
                  />
                </div>

                <div className={classes.two_field_container}>
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    style={{ width: "100%" }}
                    placeholder={
                      agent?.lastName ? agent?.lastName : "Last Name"
                    }
                    className={classes.input_field_dual}
                  />
                </div>
              </>
            </div>

            <div className={classes.single_row}>
              <>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  style={{ width: "100%" }}
                  placeholder={agent?.email ? agent?.email : "Email"}
                  className={classes.input_field_single}
                />
              </>
            </div>

            <div className={classes.single_row}>
              <>
                <div className={classes.two_field_container}>
                  <input
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    style={{ width: "100%" }}
                    placeholder={
                      agent?.phoneNo ? agent?.phoneNo : "Phone Number"
                    }
                    className={classes.input_field_dual}
                  />
                </div>

                <div className={classes.two_field_container}>
                  <input
                    onChange={(e) => {
                      setCnic(e.target.value);
                    }}
                    maxLength={13}
                    style={{ width: "100%" }}
                    placeholder={agent?.cnic ? agent?.cnic : "CNIC"}
                    className={classes.input_field_dual}
                  />
                </div>
              </>
            </div>
          </div>
        </>
      )}

      <div onClick={handleEditUserInformation} className={classes.btn}>
        <p>Save Info</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default AgentForm;
