import React from "react";
import Modal from "react-responsive-modal";
import classes from "./contactDetailsModal.module.css";

function ContactDetail({ setOpen, open, onCloseModal, propertyDetails }) {
  return (
    <Modal
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.confirmDelModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
    >
      <div className={classes.main_container}>
        <div className={classes.content_container}>
          <h1>Get in touch!</h1>
          <p>Home: {propertyDetails?.contactPhoneHome}</p>
          <p>Work: {propertyDetails?.contactPhoneWork}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ContactDetail;
