import React, { useState, useEffect, useMemo } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { baseURL } from "../../../constants";
import { useAuth } from "../../../contextAPI";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCities } from "../../../components/utils";
import Select, { components } from "react-select";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function DeveloperForm() {
  const [developer, setDeveloper] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });

  const GEOCODING_API = "AIzaSyDz7IuvTbai-teM0mRziq4-j-pxBNn3APg";
  const [about, setAbout] = useState();
  const [sinceYear, setSinceYear] = useState();
  const [projectsDeveloped, setProjectsDeveloped] = useState();
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [corporateAddress, setCorporateAddress] = useState();
  const [websiteUrl, setWebsiteurl] = useState();
  const [logoImg, setLogoImg] = useState();
  const [imgName, setImgName] = useState();
  const [imgBlob, setImgBlob] = useState();
  const [logoKey, setLogoKey] = useState(logoKey);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [socialsArr, setSocialsArr] = useState([]);
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [citiesAndLocations, setCitiesAndLocations] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [phoneNoWork, setPhoneNoWork] = useState();
  const [initialLat, setInitialLat] = useState();
  const [initialLng, setInitialLng] = useState();
  const [name, setName] = useState(developer?.username);

  const [facebookLink, setFacebookLink] = useState();
  const [instaLink, setInstaLink] = useState();
  const [youtubeLink, setYoutubeLink] = useState();
  const [linkedinLink, setLinkedinLink] = useState();

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
    if (city) {
      for (var i = 0; i < citiesAndLocations?.length; i++) {
        if (citiesAndLocations[i]?.cityName === city) {
          setLocations(citiesAndLocations[i]?.areas);
        }
      }
    }
  }, [city]);

  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

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

  const addSocials = (socialsArr) => {
    const temp = [];
    socialsArr?.map((socials) => temp.push(socials?.value));
    setSocialsArr(temp);
  };

  const success = async () =>
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
    if (initialLat && initialLng) {
    }
  }, [initialLat, initialLng]);

  const map = useMemo(() => {
    return (
      <>
        <p style={{ color: "grey", marginBottom: "20px", marginTop: "50px" }}>
          Move the pin to mark to your desired location
        </p>

        <GoogleMap
          zoom={14}
          center={{
            lat: initialLat ? initialLat : 30.3753,
            lng: initialLng ? initialLng : 69.3451,
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
            position={{
              lat: initialLat ? initialLat : 30.3753,
              lng: initialLng ? initialLng : 69.3451,
            }}
          />
        </GoogleMap>
      </>
    );
  }, [initialLat, initialLng]);

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
      setDeveloper(data?.data);
      setInitialLat(parseFloat(data?.data?.lat));
      setInitialLng(parseFloat(data?.data?.lng));
    } catch (err) {
      console.log(err);
    }
  };

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
      userData = { ...userData, corporateAddress: corporateAddress };
    }
    if (websiteUrl) {
      userData = { ...userData, websiteURL: websiteUrl };
    }

    if (phoneNoWork) {
      userData = { ...userData, additionalPhoneNo: phoneNoWork };
    }

    if (phoneNo) {
      userData = { ...userData, phoneNo: phoneNo };
    }

    if (sinceYear) {
      userData = { ...userData, since: sinceYear };
    }
    if (projectsDeveloped) {
      userData = { ...userData, projectsDeveloped: projectsDeveloped };
    }
    if (imgName) {
      userData = { ...userData, developerLogo: imgName };
    }
    if (socialsArr?.length > 0) {
      userData = { ...userData, socialMedia: socialsArr };
    }
    if (lat) {
      userData = { ...userData, lat: lat };
    }
    if (lng) {
      userData = { ...userData, lng: lng };
    }

    if (facebookLink) {
      userData = { ...userData, FacebookLink: facebookLink };
    }
    if (youtubeLink) {
      userData = { ...userData, YouTubeLink: youtubeLink };
    }
    if (linkedinLink) {
      userData = { ...userData, LinkedInLink: linkedinLink };
    }
    if (instaLink) {
      userData = { ...userData, InstagramLink: instaLink };
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
      await success();
      setLogoKey(data?.data?.user?.developerLogo);
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

  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/users/developers/6299050a03ba683caaea666d/real_estate1-6-23-2022-1656000934322-6-24-2022-1656084999376.png
  // https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/users/developers/6299050a03ba683caaea666d/image-6-24-2022-1656082857179.png

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
      <div className={classes.section}>
        <h1 className={classes.heading}>Developer Information</h1>
        <div className={classes.single_row}>
          <p className={classes.label}>Developer Name</p>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={
              developer?.user?.username ? developer?.user?.username : ""
            }
            className={classes.input_field_single}
          />
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>About Information</p>
          <textarea
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder={
              developer?.user?.aboutInformation
                ? developer?.user?.aboutInformation
                : ""
            }
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Since</p>
            <input
              onChange={(e) => {
                setSinceYear(e.target.value);
              }}
              placeholder={developer?.since ? developer?.since : "Type Year"}
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Projects Developed</p>
            <input
              onChange={(e) => {
                setProjectsDeveloped(e.target.value);
              }}
              placeholder={
                developer?.projectsDeveloped ? developer?.projectsDeveloped : ""
              }
              className={classes.input_field_dual}
            />
          </div>
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
                selected={developer && developer?.user?.city === "Islamabad"}
                value="Islamabad"
              >
                Islamabad
              </option>
              <option
                selected={developer && developer?.user?.city === "Lahore"}
                value="Lahore"
              >
                Lahore
              </option>
              <option
                selected={developer && developer?.user?.city === "Karachi"}
                value="Karachi"
              >
                Karachi
              </option>
              <option
                selected={developer && developer?.user?.city === "Faisalabad"}
                value="Faisalabad"
              >
                Faisalabad
              </option>
              <option
                selected={developer && developer?.user?.city === "Rawalpindi"}
                value="Rawalpindi"
              >
                Rawalpindi
              </option>

              {cities?.map((city, index) => (
                <option
                  selected={developer && developer?.user?.city === city}
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
              {developer?.user?.location && (
                <option selected value={developer?.user?.location}>
                  {developer?.user?.location}
                </option>
              )}
              {locations?.map((location, index) => (
                <option
                  selected={developer && developer?.user?.location === location}
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

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Corporate Address</p>
          <textarea
            onChange={(e) => {
              setCorporateAddress(e.target.value);
            }}
            placeholder={developer?.corporateAddress}
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone (Home)</p>
            <input
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              placeholder={
                developer?.user?.phoneNo ? developer?.user?.phoneNo : ""
              }
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone (Work)</p>
            <input
              onChange={(e) => {
                setPhoneNoWork(e.target.value);
              }}
              placeholder={
                developer?.additionalPhoneNo ? developer?.additionalPhoneNo : ""
              }
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Facebook</p>
            <input
              onChange={(e) => {
                setFacebookLink(e.target.value);
              }}
              placeholder={
                developer?.FacebookLink ? developer?.FacebookLink : ""
              }
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Instagram</p>
            <input
              onChange={(e) => {
                setInstaLink(e.target.value);
              }}
              placeholder={
                developer?.InstagramLink ? developer?.InstagramLink : ""
              }
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>YouTube</p>
            <input
              onChange={(e) => {
                setYoutubeLink(e.target.value);
              }}
              placeholder={developer?.YouTubeLink ? developer?.YouTubeLink : ""}
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>LinkedIn</p>
            <input
              onChange={(e) => {
                setLinkedinLink(e.target.value);
              }}
              placeholder={
                developer?.LinkedInLink ? developer?.LinkedInLink : ""
              }
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Website URL</p>
            <input
              onChange={(e) => {
                setWebsiteurl(e.target.value);
              }}
              placeholder={
                developer?.user?.websiteURL ? developer?.user?.websiteURL : ""
              }
              className={classes.input_field_dual}
            />
          </div>
        </div>
        <div className={classes.single_row}>
          <div
            style={{ justifyContent: "initial", columnGap: "20px" }}
            className={classes.two_field_container}
          >
            <p className={classes.label_dual}>Logo Attachment</p>

            {developer?.developerLogo ? (
              <div style={{ position: "relative" }}>
                <img
                  className={classes.img}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    minHeight: "100px",
                  }}
                  src={baseS3Url + developer?.developerLogo}
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
                  src={logoImg && URL.createObjectURL(logoImg)}
                />
              </div>
            ) : (
              <div
                style={{
                  paddingRight: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
                className={classes.input_field_dual}
              >
                <p>Image</p>
                <div className={classes.add_btn_border}>
                  <p className={classes.add_field}>+</p>
                </div>
                <input
                  onChange={(e) => {
                    handleLogoFile(e.target.files[0], "files");
                  }}
                  type={"file"}
                  className={classes.companyLogo}
                  placeholder="City Name"
                  accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={classes.btn} onClick={handleEditUserInformation}>
        <p>Add Details</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default DeveloperForm;
