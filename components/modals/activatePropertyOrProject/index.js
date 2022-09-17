import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import classes from "./activatePropertyOrProject.module.css";
import { deleteProperty } from "../../utils/deleteProperty";
import { deleteProject } from "../../utils/deleteProject";
import { ClipLoader } from "react-spinners";
import { adminActivateProject } from "../../utils/adminActivateProject";
import { adminActivateProperty } from "../../utils/adminActivateProperty";
import { adminDeactivateProject } from "../../utils/adminDeactivateProject";
import { adminDeactivateProperty } from "../../utils/adminDeactivateProperty";
import { pauseUser } from "../../utils/pauseUser";
import { unpauseUser } from "../../utils/unpauseUser";

function ActivatePropertyOrProject({
  setOpen,
  open,
  onCloseModal,
  propertyOrProjectId,
  isProperty,
  isActive,
  selectedRealEstateId,
  isProject,
  isUserActivation,
  isPaused,
  isAgent,
  selectedUserId,
}) {
  const [propertyOrProject, setProjectOrProperty] = useState();
  const [loading, setLoading] = useState(false);

  console.log(selectedRealEstateId);

  const handlePauseUser = async () => {
    setLoading(true);
    const data = await pauseUser(selectedUserId);
    console.log(data);
    setLoading(false);
    window.location.reload();
  };

  const handleUnpauseUser = async () => {
    setLoading(true);
    const data = await unpauseUser(selectedUserId);
    console.log(data);
    setLoading(false);
    window.location.reload();
  };

  const handleDeactivateProperty = async () => {
    setLoading(true);
    const data = await adminDeactivateProperty(selectedRealEstateId);
    console.log(data);
    setLoading(false);
    window.location.reload();
  };

  const handleActivateProperty = async () => {
    setLoading(true);
    const data = await adminActivateProperty(selectedRealEstateId);
    console.log(data);
    setLoading(false);
    window.location.reload();
  };

  const handleDeactivateProject = async () => {
    setLoading(true);
    const data = await adminDeactivateProject(selectedRealEstateId);
    console.log(data);
    setLoading(false);
    window.location.reload();
  };

  const handleActivateProject = async () => {
    setLoading(true);
    const data = await adminActivateProject(selectedRealEstateId);
    console.log(data);
    setLoading(false);
    window.location.reload();
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
          {isUserActivation ? (
            <h1>
              Are you sure you want to {isPaused === true ? "unpause" : "pause"}{" "}
              this {isAgent ? "agent" : "developer"}?
            </h1>
          ) : (
            <h1>
              Are you sure you want to{" "}
              {isActive === true ? "deactivate" : "activate"} this{" "}
              {isProject ? "project" : "property"}?
            </h1>
          )}

          <div className={classes.row}>
            <div onClick={onCloseModal} className={classes.deny_btn}>
              <p>No</p>
            </div>
            <div
              onClick={() => {
                if (!isUserActivation) {
                  if (isActive) {
                    if (isProject) {
                      handleDeactivateProject();
                    } else {
                      handleDeactivateProperty();
                    }
                  } else {
                    if (isProject) {
                      handleActivateProject();
                    } else {
                      handleActivateProperty();
                    }
                  }
                } else {
                  if (isPaused) {
                    handleUnpauseUser();
                  } else {
                    handlePauseUser();
                  }
                }
              }}
              className={classes.accept_btn}
            >
              <p>Yes</p>
              {loading && <ClipLoader size={"20px"} color="white" />}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ActivatePropertyOrProject;
