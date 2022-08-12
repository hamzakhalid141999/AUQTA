import React, { useState, useEffect } from "react";
import classes from "./forgotPassword.module.css";
import { resetPassword } from "../../components/utils/resetPassword";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const [loading, setLoading] = useState();
  const [stage, setStage] = useState(1);
  const [code, setCode] = useState();
  const [newPassword, setNewPassword] = useState();

  console.log(code);

  useEffect(() => {
    const url = window.location.href.split("?");
    const codeSplitted = url[1].split("=")[1];
    setCode(codeSplitted);
  }, []);

  const handleResetPassword = async () => {
    const data = await resetPassword(code, newPassword, setLoading, success);
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
      <div className={classes.content_container}>
        <h1>Reset Password</h1>
        <p className={classes.info}>
          Provide your email address to receive an email to reset your password
        </p>
        <div className={classes.inputField}>
          <label>New Password</label>
          <input type="email" placeholder="Enter new password" />
        </div>

        <div
          // onClick={() => {
          //   handleStateChange(1);
          // }}
          className={classes.btn}
        >
          <p>Reset My Password</p>
          {/* <ClipLoader size={"20px"} color="white" /> */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
