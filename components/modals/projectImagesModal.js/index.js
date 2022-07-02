import React from "react";
import classes from "./projectImagesModal.module.css";
import Modal from "react-responsive-modal";

function ProjectImagesModal({ setOpen, open, onCloseModal, pictures }) {
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
            {pictures?.map((image, index) => (
              <div key={index} className={classes.single_image_container}>
                <img src={image} className={classes.single_img} />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProjectImagesModal;
