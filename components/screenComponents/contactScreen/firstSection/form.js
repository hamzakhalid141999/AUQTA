import React, { useState } from "react";
import classes from "./form.module.css";
import mail from "../../../../public/assets/contact-email.png";
import phone from "../../../../public/assets/contact-phone.png";
import location from "../../../../public/assets/contact-location.png";
import bg from "../../../../public/assets/contact_page_bg.png";
import { contactUs } from "../../../utils/contactUs";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact_Form() {
  const [name, setName] = useState();
  const [phoneNo, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();

  const handleSendEmail = async () => {
    if (!name) {
      error("Enter your name");
      return;
    } else if (!email) {
      error("Enter your email");
      return;
    } else if (!phoneNo) {
      error("Enter your contact");
      return;
    } else if (!message) {
      error("Enter your message");
      return;
    }

    setLoading(true);
    const data = await contactUs(
      name,
      email,
      phoneNo,
      message,
      setLoading,
      success,
      error
    );
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

  const error = (errorMessage) =>
    toast.error(errorMessage, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

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
      <img src={bg.src} className={classes.bg_pic} />
      <div style={{ paddingTop: "60px" }} className={classes.section_half}>
        <h1>SAY HELLO TO US!</h1>
        <h3>Let{"'"}s Talk</h3>
        <p>
          Thank You for choosing Auqta. Please fill in the form below and one of
          our representatives will get back to you shortly
        </p>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Your name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter name"
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Your email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Phone</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Enter phone"
            className={classes.input_field_single}
          />
        </div>
      </div>
      <div className={classes.section_full}>
        <div className={classes.textarea_field_container}>
          <label className={classes.label}>Your Message</label>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            style={{
              height: "200px",
              paddingTop: "20px",
              fontFamily: "sans-serif",
            }}
            placeholder="Enter message"
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.info_container}>
          <div className={classes.single_info}>
            <img
              src={phone.src}
              style={{ maxWidth: "10%", maxHeight: "15px" }}
            />
            <p>+92 331 5008852</p>
          </div>
          <div className={classes.single_info}>
            <img
              src={mail.src}
              style={{ maxWidth: "10%", maxHeight: "15px" }}
            />
            <p>info@auqta.com</p>
          </div>
          <div className={classes.single_info}>
            <img
              src={location.src}
              style={{ maxWidth: "10%", maxHeight: "15px" }}
            />
            <p>
              Raj Heights, River View Commercial, Phase-7. <br />
              Bahria Town. Islamabad
            </p>
          </div>
        </div>
      </div>
      <div onClick={handleSendEmail} className={classes.send_message_btn}>
        <p>SEND MESSAGE</p>
        {loading && <ClipLoader size={"15px"} color="white" />}
      </div>
    </div>
  );
}

export default Contact_Form;
