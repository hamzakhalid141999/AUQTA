import React, { useState, useEffect } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { useAuth } from "../../../contextAPI";
import { baseURL } from "../../../constants";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      console.log(data);
      success();
      setLogoKey(data?.data?.user?.companyLogo);
      setLoading(false);
      window.location.reload();
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
        <h1 className={classes.heading}>Agent Information</h1>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Name</p>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={agent?.user?.username ? agent?.user?.username : ""}
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Since</p>
            <input
              onChange={(e) => {
                setSinceYear(e.target.value);
              }}
              placeholder={agent?.since ? agent?.since : "Type Year"}
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>About Information</p>
          <textarea
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            style={{ height: "150px", paddingTop: "10px" }}
            placeholder={
              agent?.user?.aboutInformation ? agent?.user?.aboutInformation : ""
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
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder={agent?.user?.city ? agent?.user?.city : "City Name"}
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
                agent?.user?.location ? agent?.user?.location : "Location Area"
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
            <select
              placeholder="Location Area"
              className={classes.input_field_dual}
            >
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Instagram</option>
            </select>
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
                <input
                  onChange={(e) => {
                    handleLogoFile(e.target.files[0], "files");
                  }}
                  type={"file"}
                  placeholder="City Name"
                  className={classes.input_field_dual}
                  accept={".png,.jpeg,.jpg,.mp4, .MOV, .gif"}
                />
              )
            }
          </div>
        </div>
      </div>

      <div onClick={handleEditUserInformation} className={classes.btn}>
        <p>Add details</p>
        {loading && <ClipLoader size={"20px"} color="white" />}
      </div>
    </div>
  );
}

export default AgentForm;
