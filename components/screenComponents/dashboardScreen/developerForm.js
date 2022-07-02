import React, { useState, useEffect } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { baseURL } from "../../../constants";
import { useAuth } from "../../../contextAPI";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";

function DeveloperForm() {
  const [developer, setDeveloper] = useState();

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

  const [name, setName] = useState(developer?.username);

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
      setLoading(false);
      // await delay(2000);
      window.location.reload();
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
              console.log(s3Url);
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
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder={
                developer?.user?.city ? developer?.user?.city : "City Name"
              }
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Location</p>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder={
                developer?.user?.location
                  ? developer?.user?.location
                  : "Location Area"
              }
              className={classes.input_field_dual}
            />
          </div>
        </div>

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
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Logo Attachment</p>

            {
              // developer?.developerLogo ? (
              //   <img
              //     className={classes.img}
              //     src={baseS3Url + developer?.developerLogo}
              //   />
              // ) :
              logoImg ? (
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
              )
            }
          </div>
        </div>
      </div>

      <div className={classes.btn} onClick={handleEditUserInformation}>
        <p>Edit Details</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default DeveloperForm;
