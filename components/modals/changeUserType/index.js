import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import classes from "./changeUserType.module.css";
import { deleteProperty } from "../../utils/deleteProperty";
import { deleteProject } from "../../utils/deleteProject";
import { ClipLoader } from "react-spinners";
import { updateUserType } from "../../utils/updateUserType";
import { useRouter } from "next/router";
import { useAuth } from "../../../contextAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangeUserType({
  setOpen,
  open,
  onCloseModal,
  userId,
  userObj,
  closeModal,
}) {
  const router = useRouter();
  const [userType, setUserType] = useState();
  const [loading, setLoading] = useState();
  const { user, signUp, removeUser } = useAuth();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const success = (successMsg) =>
    toast.success(successMsg, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const error = (errorMessage) =>
    toast.error(errorMessage + " is missing", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const handleUpdateUserType = async () => {
    if (!userType) {
      return;
    }
    setLoading(true);
    const data = await updateUserType(userId, userType);
    userObj.userType = userType;
    userObj.id = userId;
    removeUser();
    signUp(userObj);
    await delay(1000);
    success("User Logged In");
    setLoading(false);
    closeModal();
    router.push("/");
  };

  return (
    <Modal
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.confirmDelModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
    >
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
      <div className={classes.main_container}>
        <div className={classes.content_container}>
          <h2>What's your role?</h2>
          <p className={classes.description}>
            Choose your role to complete your login procedure!
          </p>
          <select
            onChange={(e) => {
              setUserType(e.target.value);
            }}
            style={{ width: "100%" }}
            className={classes.input_field}
            placeholder="User Type"
          >
            <option>Select User Type</option>
            <option value="agent">I am a Real Estate Agent</option>
            <option value="developer">I am a Real Estate Developer</option>
            <option value="enduser">I am looking to sell a property</option>
          </select>
          <div onClick={handleUpdateUserType} className={classes.btn}>
            <p>Proceed</p>
            {loading && <ClipLoader size={"20px"} color="white" />}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ChangeUserType;
