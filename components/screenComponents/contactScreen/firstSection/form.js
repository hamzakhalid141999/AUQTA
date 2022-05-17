import React from "react";
import classes from "./form.module.css";
import mail from "../../../../public/assets/contact-email.png";
import phone from "../../../../public/assets/contact-phone.png";
import location from "../../../../public/assets/contact-location.png";
import bg from "../../../../public/assets/contact_page_bg.png";

function Contact_Form() {
  return (
    <div className={classes.form_body}>
      <img src={bg.src} className={classes.bg_pic} />
      <div style={{ paddingTop: "60px" }} className={classes.section_half}>
        <h1>SAY HELLO TO US!</h1>
        <h3>Let{"'"}s Talk</h3>
        <p>
          To request a quote or want to meet up for coffee, contact us directly
          or fill out the form and we will get back to you promptly.
        </p>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Your name</label>
          <input
            placeholder="Type name"
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Your email</label>
          <input
            placeholder="Type email"
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.vertical_field_container}>
          <label className={classes.label}>Phone</label>
          <input
            placeholder="Enter phone"
            className={classes.input_field_single}
          />
        </div>
      </div>
      <div className={classes.section_full}>
        <div
          style={{ width: "50%" }}
          className={classes.vertical_field_container}
        >
          <label className={classes.label}>Your Message</label>
          <textarea
            style={{ height: "200px", paddingTop: "20px" }}
            placeholder="Enter phone"
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
            <p>aliasghar@auqta.com</p>
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
      <div className={classes.send_message_btn}>SEND MESSAGE</div>
    </div>
  );
}

export default Contact_Form;
