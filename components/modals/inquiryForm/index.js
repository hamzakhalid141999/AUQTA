import React, { useState, useEffect } from "react";
import classes from "./inquiryForm.module.css";
import Modal from "react-responsive-modal";
import { sendInquiry } from "../../utils/sendInquiry";
import { useAuth } from "../../../contextAPI";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InquiryForm({
  propertyName,
  setOpen,
  open,
  onCloseModal,
  realEstateId,
  ownerId,
}) {
  const [email, setEmail] = useState();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [userType, setUserType] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    if (open === true) {
      setEmail();
      setName();
      setLoading(false);
      setPhone();
      setUserType();
      setMessage();
    }
  }, [open]);

  const success = () =>
    toast.success("Message send", {
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

  const handleSendMessage = async () => {
    if (!name) {
      error("Name");
      return;
    } else if (!email) {
      error("Email");
      return;
    } else if (!phone) {
      error("Phone");
      return;
    } else if (!userType) {
      error("User type");
      return;
    } else if (!message) {
      error("Message");
      return;
    }

    setLoading(true);
    const data = await sendInquiry(
      ownerId,
      name,
      email,
      phone,
      "inquiry",
      message,
      realEstateId,
      userType,
      true,
      propertyName
    );
    success();
    setLoading(false);
    onCloseModal();
  };

  return (
    <>
      <Modal
        classNames={{
          overlay: classes.customOverlay,
          modal: classes.projectImagesModal,
        }}
        open={open}
        onClose={onCloseModal}
        center
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
            <h1>Get in touch!</h1>
            <div className={classes.single_row}>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ width: "100%" }}
                className={classes.input_field}
                placeholder="Name"
              />
            </div>
            <div className={classes.single_row}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                style={{ width: "48%" }}
                className={classes.input_field}
              />
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Phone Number"
                style={{ width: "48%" }}
                className={classes.input_field}
              />
            </div>
            <div className={classes.single_row}>
              <select
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
                style={{ width: "100%" }}
                className={classes.input_field}
                placeholder="User Type"
              >
                <option>Select User Type</option>
                <option value="developer">Developer</option>
                <option value="agent">Agent</option>
              </select>
            </div>
            <div className={classes.single_row}>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message"
                style={{
                  width: "100%",
                  paddingTop: "20px",
                  height: "180px",
                  fontFamily: "sans-serif",
                }}
                className={classes.input_field}
              />
            </div>
            <div onClick={handleSendMessage} className={classes.btn}>
              Send Message
              {loading && <ClipLoader size={"15px"} color="white" />}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default InquiryForm;
