import React from "react";
import Modal from "react-responsive-modal";
import classes from "./confirmDelete.module.css";

function ConfirmDelete({ setOpen, open, onCloseModal }) {
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
          <h1>Are you sure you want to delete your property?</h1>
          <div className={classes.row}>
            <div onClick={onCloseModal} className={classes.deny_btn}>
              <p>No</p>
            </div>
            <div className={classes.accept_btn}>Yes</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
