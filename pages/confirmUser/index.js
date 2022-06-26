import React, { useEffect, useState } from "react";
import classes from "./confirmUser.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseURL } from "../../constants";

function confirmUser() {
  const router = useRouter();
  const [code, setCode] = useState();

  const success = () =>
    toast.success("Confirmed, Please Login", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const error = () =>
    toast.error("Error Confirming", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const confirmUser = async () => {
    try {
      const data = await axios.get(baseURL + "/api/auth/confirm/" + code, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      success();
      router.push("/");
    } catch (err) {
      error();
      console.log(err);
    }
  };

  useEffect(() => {
    const url = window.location.href.split("?");
    const codeSplitted = url[1].split("=")[1];
    setCode(codeSplitted);
    console.log(codeSplitted);
  }, []);

  return (
    <div className={classes.container}>
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
      <div className={classes.form_container}>
        <h2>Confirm Account</h2>
        <div onClick={confirmUser} className={classes.confirm_btn}>
          <p>Confirm</p>
        </div>
      </div>
    </div>
  );
}

export default confirmUser;
