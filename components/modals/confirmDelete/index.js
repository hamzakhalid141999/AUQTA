import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import classes from "./confirmDelete.module.css";
import { deleteProperty } from "../../utils/deleteProperty";
import { deleteProject } from "../../utils/deleteProject";
import { ClipLoader } from "react-spinners";

function ConfirmDelete({
  setOpen,
  open,
  onCloseModal,
  propertyOrProjectId,
  isProperty,
}) {
  const [propertyOrProject, setProjectOrProperty] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && propertyOrProjectId) {
      setProjectOrProperty(propertyOrProjectId);
    }
  }, [open, propertyOrProjectId]);

  const handleDelete = async () => {
    if (isProperty) {
      setLoading(true);
      const data = await deleteProperty(propertyOrProjectId);
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(true);
      const data = await deleteProject(propertyOrProjectId);
      setLoading(false);
      window.location.reload();
    }
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
    >
      <div className={classes.main_container}>
        <div className={classes.content_container}>
          <h1>Are you sure you want to delete your property?</h1>
          <div className={classes.row}>
            <div onClick={onCloseModal} className={classes.deny_btn}>
              <p>No</p>
            </div>
            <div onClick={handleDelete} className={classes.accept_btn}>
              <p>Yes</p>
              {loading && <ClipLoader size={"20px"} color="white" />}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
