/* eslint-disable */

import React, { useState, useEffect } from "react";
import classes from "./dashboard.module.css";
import Image from "next/image";
import banner_img from "../../../public/assets/project_banner_img.png";
import { useRouter } from "next/router";
import PropertyForm from "../../../components/screenComponents/dashboardScreen/propertyForm";
import ProjectForm from "../../../components/screenComponents/dashboardScreen/projectForm";
import AgentForm from "../../../components/screenComponents/dashboardScreen/agentForm";
import DeveloperForm from "../../../components/screenComponents/dashboardScreen/developerForm";
import DashboardSideMenu from "../../../components/dashboardSideMenu";
import DashboardNavbar from "../../../components/dashboardNavbar";
import DashboardHomePage from "../../../components/dashboardHomePage";
import EditProjectForm from "../../../components/screenComponents/dashboardScreen/editProjectForm";
import EditPropertyForm from "../../../components/screenComponents/dashboardScreen/editPropertyForm";
import edit from "../../../public/assets/icons/write.png";
import bin from "../../../public/assets/icons/bin.png";
import Switch from "react-switch";
import ConfirmDelete from "../../../components/modals/confirmDelete";
import { activateProperty } from "../../../components/utils/activateProperty";
import { deactivateProperty } from "../../../components/utils/deactivateProperty";
import { activateProject } from "../../../components/utils/activateProject";
import { deactivateProject } from "../../../components/utils/deactivateProject";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWindowSize } from "../../../utils";
import Inbox from "../../../components/screenComponents/dashboardScreen/inbox";

function Dashboard() {
  const { width } = useWindowSize();
  const [dashboardType, setDashboardType] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isPropertyActive, setIsPropertyActive] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [propertyId, _setPropertyId] = useState();
  const [projectId, _setProjectId] = useState();

  console.log("Property Id: ", propertyId);

  const onCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const onOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleProjectActiveState = async () => {
    if (!projectId) {
      return;
    }
    if (isProjectActive === true) {
      const data = await deactivateProject(projectId);
      success("Project deactivated!");
    }
    if (isProjectActive === false) {
      const data = await activateProject(projectId);
      success("Project activated!");
    }

    setIsProjectActive(!isProjectActive);
  };

  const handlePropertyActiveState = async () => {
    if (!propertyId) {
      return;
    }
    if (isPropertyActive === true) {
      const data = await deactivateProperty(propertyId);
      success("Property deactivated!");
    }
    if (isPropertyActive === false) {
      const data = await activateProperty(propertyId);
      success("Property activated!");
    }
    setIsPropertyActive(!isPropertyActive);
  };

  useEffect(() => {
    if (id) {
      setDashboardType(id);
    }
  }, [id]);

  useEffect(() => {
    if (router?.query) {
      console.log(router.query?.propertyId);
    }
  }, [router.query]);

  const success = (successMessage) =>
    toast.success(successMessage, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  console.log(id);

  return (
    <>
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
        <ConfirmDelete
          open={openDeleteModal}
          setOpen={onOpenDeleteModal}
          onCloseModal={onCloseDeleteModal}
          propertyOrProjectId={
            dashboardType === "edit_property" ? propertyId : projectId
          }
          isProperty={dashboardType === "edit_property" ? true : false}
        />

        {width > 1060 && <DashboardSideMenu />}
        <div className={classes.dashboard_screen}>
          <DashboardNavbar />
          <div className={classes.dashboard_content_container}>
            {dashboardType === "developer" || dashboardType === "agent" ? (
              <DashboardHomePage />
            ) : dashboardType === "add_property" ? (
              <>
                <div className={classes.dashboard_container}>
                  <PropertyForm />
                </div>
              </>
            ) : dashboardType === "add_project" ? (
              <div className={classes.dashboard_container}>
                <ProjectForm />
              </div>
            ) : dashboardType === "edit_property" ? (
              <>
                <div className={classes.top_content}>
                  <div className={classes.heading_contaienr}>
                    <h1 className={classes.page_section}>
                      Edit Property details
                    </h1>
                    <p className={classes.subheading}>
                      Auqta Developer Control System
                    </p>
                  </div>
                  <div className={classes.buttons_container}>
                    <div className={classes.tab_outer}>
                      <div className={classes.tab}>
                        <h1>EDIT</h1>
                        <div className={classes.icon_text_container}>
                          <img src={edit.src} style={{ height: "25px" }} />
                          <p>Edit Page</p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={onOpenDeleteModal}
                      className={classes.tab_outer}
                    >
                      <div className={classes.tab}>
                        <h1>DELETE</h1>
                        <div className={classes.icon_text_container}>
                          <img src={bin.src} style={{ height: "25px" }} />
                          <p>Confirm Delete</p>
                        </div>
                      </div>
                    </div>

                    <div className={classes.tab_outer}>
                      <div className={classes.tab}>
                        <h1>STATUS</h1>
                        <div className={classes.icon_text_container}>
                          <p
                            className={
                              isPropertyActive === true
                                ? classes.active_btn
                                : isPropertyActive === false &&
                                  classes.inactive_btn
                            }
                          >
                            ON
                          </p>
                          <Switch
                            onChange={handlePropertyActiveState}
                            checked={isPropertyActive}
                            disabled={propertyId ? false : true}
                          />
                          <p
                            className={
                              isPropertyActive === true
                                ? classes.inactive_btn
                                : isPropertyActive === false &&
                                  classes.active_btn
                            }
                          >
                            OFF
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.dashboard_container}>
                  <EditPropertyForm
                    setIsPropertyActive={setIsPropertyActive}
                    _setPropertyId={_setPropertyId}
                  />
                </div>
              </>
            ) : dashboardType === "edit_project" ? (
              <>
                <div className={classes.top_content}>
                  <div className={classes.heading_contaienr}>
                    <h1 className={classes.page_section}>
                      Edit Project details
                    </h1>
                    <p className={classes.subheading}>
                      Auqta Developer Control System
                    </p>
                  </div>
                  <div className={classes.buttons_container}>
                    <div className={classes.tab_outer}>
                      <div className={classes.tab}>
                        <h1>EDIT</h1>
                        <div className={classes.icon_text_container}>
                          <img src={edit.src} style={{ height: "25px" }} />
                          <p>Edit Page</p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={onOpenDeleteModal}
                      className={classes.tab_outer}
                    >
                      <div className={classes.tab}>
                        <h1>DELETE</h1>
                        <div className={classes.icon_text_container}>
                          <img src={bin.src} style={{ height: "25px" }} />
                          <p>Confirm Delete</p>
                        </div>
                      </div>
                    </div>

                    <div className={classes.tab_outer}>
                      <div className={classes.tab}>
                        <h1>STATUS</h1>
                        <div className={classes.icon_text_container}>
                          <p
                            className={
                              isProjectActive === true
                                ? classes.active_btn
                                : isProjectActive === false &&
                                  classes.inactive_btn
                            }
                          >
                            ON
                          </p>
                          <Switch
                            onChange={handleProjectActiveState}
                            checked={isProjectActive}
                          />
                          <p
                            className={
                              isProjectActive === true
                                ? classes.inactive_btn
                                : isProjectActive === false &&
                                  classes.active_btn
                            }
                          >
                            OFF
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.dashboard_container}>
                  <EditProjectForm
                    _setProjectId={_setProjectId}
                    setIsProjectActive={setIsProjectActive}
                  />
                </div>
              </>
            ) : (
              dashboardType === "inbox" && (
                <>
                  <div className={classes.top_content}>
                    <div className={classes.heading_contaienr}>
                      <h1 className={classes.page_section}>All Messages</h1>
                      <p className={classes.subheading}>
                        Auqta Developer Inbox
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingTop: "25px",
                      paddingBottom: "25px",
                      paddingLeft: "25px",
                    }}
                    className={classes.dashboard_container}
                  >
                    <Inbox />
                  </div>
                </>
              )
            )}
          </div>
        </div>
        {/* <div className={classes.dashboard_container}>
        {dashboardType === "property" ? (
          <PropertyForm />
        ) : dashboardType === "project" ? (
          <ProjectForm />
        ) : dashboardType === "agent" ? (
          <AgentForm />
        ) : (
          dashboardType === "developer" && <DeveloperForm />
        )}
      </div> */}
      </div>
    </>
  );
}

export default Dashboard;
