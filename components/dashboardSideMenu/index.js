import React, { useEffect, useState } from "react";
import classes from "./dashboardSideMenu.module.css";
import Link from "next/link";
import { useAuth } from "../../contextAPI";
import { baseURL } from "../../constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserDetailsById } from "../utils/fetchUserDetailsById";
import { useWindowSize } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DashboardSideMenu({ openSideBar, handleCloseSideBar }) {
  const { user, removeUser } = useAuth();
  const [img, setImg] = useState();
  const [imagesBlobArr, setImagesBlobArr] = useState();
  const [imgArr, setImgArr] = useState();
  const [imgKey, setImgKey] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const { width } = useWindowSize();

  const bucketBaseUrl = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  //users/developer/6299050a03ba683caaea666d/profile/profileImage-8-8-2022-1659964467685.jpeg
  //users/developer/6299050a03ba683caaea666d/profile/profileImage-8-8-2022-1659963644310.jpeg

  const handleImg = async (event) => {
    if (event) {
      setImg(event);
      setImagesBlobArr(event);
      setImgArr(event?.name);
      success("Uploading, please wait");
    }
  };

  useEffect(() => {
    if (imgArr) {
      handleEditUserInformation();
    }
  }, [imgArr]);

  useEffect(() => {
    const getUserDetails = async () => {
      if (user?.id) {
        const data = await fetchUserDetailsById(user?.id);
        setProfilePicture(data?.user?.profilePicture);
      }
    };

    getUserDetails();
  }, [user?.id]);

  useEffect(() => {
    if (imgKey) {
      const data = {
        fileKey: imgKey,
      };
      axios
        .post(baseURL + "/api/s3/getUrlWithKey", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((url) => {
          const blobUrl = URL.createObjectURL(imagesBlobArr, {
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
              success("Profile picture updated!");
              setImgArr();
              setImgKey();
            }
          };
          xhr.send();
        });
    }
  }, [imgKey]);

  const handleEditUserInformation = async () => {
    try {
      // setLoading(true);
      const data = await axios.post(
        baseURL + "/api/user/edit/" + user?.id,
        {
          profilePicture: imgArr,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // await success();
      setImgKey(data?.data?.user?.user?.profilePicture);
      // setLogoKey(data?.data?.user?.developerLogo);
      // setLoading(false);
      // await delay(2000);
      // window.location.reload();
    } catch (err) {
      // error();
      console.log(err);
      // setLoading(false);
    }
  };

  const success = (successMessage) =>
    toast.success(successMessage, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  return (
    <div
      className={
        width < 1060
          ? openSideBar
            ? classes.menu_body_mobile
            : classes.menu_body_mobile_hidden
          : classes.menu_body
      }
    >
      {width < 1060 && (
        <FontAwesomeIcon
          style={{
            color: "white",
            position: "absolute",
            top: "10px",
            left: "15px",
          }}
          icon={faArrowLeft}
          size={"2x"}
          onClick={() => {
            handleCloseSideBar();
          }}
        />
      )}

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
      <div className={classes.side_menu_content}>
        <div className={classes.image_container_outer}>
          <div className={classes.image_container_inner}>
            <div className={classes.image_container}>
              {img ? (
                <>
                  <input
                    onChange={(e) => {
                      handleImg(e.target.files[0], "files");
                    }}
                    className={classes.pic_input}
                    type="file"
                  />
                  <img
                    className={classes.img}
                    src={img && URL.createObjectURL(img)}
                  />
                </>
              ) : profilePicture ? (
                <>
                  <input
                    onChange={(e) => {
                      handleImg(e.target.files[0], "files");
                    }}
                    className={classes.pic_input}
                    type="file"
                  />
                  <img
                    style={{ pointerEvents: "none" }}
                    className={classes.img}
                    src={bucketBaseUrl + profilePicture}
                  />
                </>
              ) : (
                <>
                  <input
                    onChange={(e) => {
                      handleImg(e.target.files[0], "files");
                    }}
                    className={classes.pic_input}
                    type="file"
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <h1>{user?.username}</h1>
        <p>
          {user?.userType === "developer"
            ? "Developer"
            : user?.userType === "agent"
            ? "Agent"
            : "User"}
        </p>
        <div className={classes.side_menu_btns_container}>
          <Link
            href={
              user?.usertype === "agent"
                ? "/dashboard/agent"
                : user?.userType === "enduser"
                ? "/dashboard/user"
                : "/dashboard/developer"
            }
          >
            <h1>DASHBOARD</h1>
          </Link>
          {user?.userType === "developer" && (
            <Link href={"/dashboard/projects"}>
              <p>Projects</p>
            </Link>
          )}

          <Link href={"/dashboard/properties"}>
            <p>Properties</p>
          </Link>
          {user?.userType === "developer" && (
            <Link href={"/dashboard/add_project"}>
              <p>Add Project</p>
            </Link>
          )}
          <Link href={"/dashboard/add_property"}>
            <p>Add Property</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardSideMenu;
