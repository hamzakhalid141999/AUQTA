import React from "react";
import classes from "./dashboardSideMenu.module.css";
import Link from "next/link";
import { useAuth } from "../../contextAPI";

function DashboardSideMenu() {
  const { user, removeUser } = useAuth();

  return (
    <div className={classes.menu_body}>
      <div className={classes.side_menu_content}>
        <div className={classes.image_container_outer}>
          <div className={classes.image_container_inner}>
            <div className={classes.image_container}></div>
          </div>
        </div>
        <h1>{user?.username}</h1>
        <p>{user?.userType}</p>
        <div className={classes.side_menu_btns_container}>
          <Link
            href={
              user?.usertype === "agent"
                ? "/dashboard/agent"
                : "/dashboard/developer"
            }
          >
            <h1>DASHBOARD</h1>
          </Link>
          <p>Projects</p>
          <p>Properties</p>
          <Link href={"/dashboard/add_project"}>
            <p>Add Project</p>
          </Link>
          <Link href={"/dashboard/add_property"}>
            <p>Add Property</p>
          </Link>
          <p>Developers</p>
          <p>Agents</p>
          <p>Developers</p>
          <p>Users</p>
          <p>Inquiry Form</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSideMenu;
