import React from "react";
import classes from "./comingSoonProject.module.css";
import Modal from "react-responsive-modal";
import kmk from "../../../public/assets/comingSoonProjects/kmk_towers.jpg";

function ComingSoonModal({ setOpen, open, onCloseModal }) {
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
        <div className={classes.main_container}>
          <div className={classes.content_container}>
            <img src={kmk.src} className={classes.single_img} />
            <h2>KMK Towers</h2>
            <p>Coming Soon!</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ComingSoonModal;
