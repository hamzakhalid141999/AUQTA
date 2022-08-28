import React from "react";
import Modal from "react-responsive-modal";
import classes from "./contactDetailsModal.module.css";

function ContactDetail({
  setOpen,
  open,
  onCloseModal,
  firstContact,
  secondContact,
}) {
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
          <p>Home: {firstContact ? firstContact : "Not available"}</p>
          <p>Work: {secondContact ? secondContact : "Not available"}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ContactDetail;
