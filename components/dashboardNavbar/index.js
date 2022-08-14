import React from "react";
import classes from "./dashboardNavbar.module.css";
import Link from "next/link";
import logo_black from "../../public/assets/logo_black.png";
import Image from "next/image";
import logout from "../../public/assets/icons/logout.png";
import settings from "../../public/assets/icons/setting.png";
import user_logo from "../../public/assets/icons/user.png";
import { useWindowSize } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contextAPI";
import { useRouter } from "next/router";

function DashboardNavbar({ handleOpenSideBar }) {
  const { width } = useWindowSize();
  const { user, removeUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    removeUser();
    router.push("/");
  };

  return (
    <div className={classes.navbar_body}>
      {width < 1060 ? (
        <div className={classes.first_panel}>
          <FontAwesomeIcon
            className={classes.menu_icon}
            icon={faBars}
            size={"2x"}
            onClick={() => {
              handleOpenSideBar();
            }}
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
        <Link
          href={
            user?.usertype === "agent"
              ? "/dashboard/agent_details"
              : user?.userType === "enduser"
              ? "/dashboard/user_details"
              : "/dashboard/developer_details"
          }
        >
          <div className={classes.icon}>
            <Image src={user_logo} alt="logo" />
          </div>
        </Link>

        <div onClick={handleLogout} className={classes.icon}>
          <Image src={logout} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
