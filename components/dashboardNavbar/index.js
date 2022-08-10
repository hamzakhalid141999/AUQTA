import React from "react";
import classes from "./dashboardNavbar.module.css";
import Link from "next/link";
import logo_black from "../../public/assets/logo_black.png";
import Image from "next/image";
import logout from "../../public/assets/icons/logout.png";
import settings from "../../public/assets/icons/setting.png";
import user from "../../public/assets/icons/user.png";
import { useWindowSize } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function DashboardNavbar() {
  const { width } = useWindowSize();
  return (
    <div className={classes.navbar_body}>
      {width < 1060 ? (
        <div className={classes.first_panel}>
          <FontAwesomeIcon
            className={classes.menu_icon}
            icon={faBars}
            size={"2x"}
          />
        </div>
      ) : (
        <></>
      )}
      <div className={classes.left_panel}>
        <Link href={"/"}>
          <div className={classes.logo}>
            <Image src={logo_black} alt="logo" />
          </div>
        </Link>
      </div>
      <div className={classes.right_panel}>
        <div className={classes.icon}>
          <Image src={user} alt="logo" />
        </div>
        <div className={classes.icon}>
          <Image src={settings} alt="logo" />
        </div>

        <div className={classes.icon}>
          <Image src={logout} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
