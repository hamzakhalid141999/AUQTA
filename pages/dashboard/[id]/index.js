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

function Dashboard() {
  const [dashboardType, setDashboardType] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [isActive, setIsActive] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [propertyId, setPropertyId] = useState();
  const [projectId, setProjectId] = useState();

  const onCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const onOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleActiveState = () => {
    setIsActive(!isActive);
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

  console.log(id);

  return (
    <div className={classes.main_container}>
      <ConfirmDelete
        open={openDeleteModal}
        setOpen={onOpenDeleteModal}
        onCloseModal={onCloseDeleteModal}
      />
      <DashboardSideMenu />
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
                            isActive === true
                              ? classes.active_btn
                              : isActive === false && classes.inactive_btn
                          }
                        >
                          ON
                        </p>
                        <Switch
                          onChange={handleActiveState}
                          checked={isActive}
                        />
                        <p
                          className={
                            isActive === true
                              ? classes.inactive_btn
                              : isActive === false && classes.active_btn
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
                <EditPropertyForm />
              </div>
            </>
          ) : (
            <>
              <p>Edit project</p>
              <div className={classes.dashboard_container}>
                <EditProjectForm />
              </div>
            </>
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
  );
}

export default Dashboard;
