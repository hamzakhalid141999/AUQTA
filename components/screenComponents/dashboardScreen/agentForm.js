import React, { useState, useEffect } from "react";
import classes from "./forms.module.css";
import axios from "axios";
import { useAuth } from "../../../contextAPI";
import { baseURL } from "../../../constants";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select, { components } from "react-select";
import placeholder from "../../../public/assets/placeholder_user.png";

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

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const [cnic, setCnic] = useState();

  const [img, setImg] = useState();
  const [imagesBlobArr, setImagesBlobArr] = useState();
  const [imgArr, setImgArr] = useState();
  const [imgKey, setImgKey] = useState();

  const [profilePicture, setProfilePicture] = useState();

  const handleImg = async (event) => {
    if (event) {
      console.log(event);
      setImg(event);
      setImagesBlobArr(event);
      setImgArr(event?.name);
    }
  };

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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("AGENTT: ", agent);

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

  console.log(corporateAddress);

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
                    placeholder={agent?.username ? agent?.username : ""}
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
                    placeholder={agent?.username ? agent?.username : ""}
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
                    placeholder={agent?.since ? agent?.since : "Type Year"}
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
                  agent?.aboutInformation ? agent?.aboutInformation : ""
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
                  placeholder={agent?.city ? agent?.city : "City Name"}
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
                    agent?.location ? agent?.location : "Location Area"
                  }
                  className={classes.input_field_dual}
                />
              </div>
            </div>

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
                  placeholder={agent?.websiteURL ? agent?.websiteURL : ""}
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
                {agent?.companyLogo ? (
                  <img
                    className={classes.img}
                    src={baseS3Url + agent?.companyLogo}
                  />
                ) : logoImg ? (
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
