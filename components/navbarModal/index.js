import React, { useEffect, useState } from "react";
import classes from "./navbarModal.module.css";
import Link from "next/link";
import globe from "../../public/assets/globe.png";
import { useAuth } from "../../contextAPI";
import LoginSignupModal from "../modals/loginSignupModal";
import login_icon from "../../public/assets/login.png";

function NavbarModal({ displayModal = false, setDisplayModal = () => {} }) {
  const { user, removeUser } = useAuth();
  const [open, setOpen] = useState();
  const onCloseModal = () => setOpen(false);

  const closeNavModal = () => {
    setDisplayModal(false);
  };
  const handleSignOut = () => {
    removeUser();
  };
  const handleModal = () => {
    setOpen(true);
  };

  return (
    <div
      id="myNav"
      className={displayModal ? classes.overlay_open : classes.overlay_closed}
    >
          <LoginSignupModal
        setOpen={setOpen}
        open={open}
        onCloseModal={onCloseModal}
      />
      <div className={classes.header}>
        <a href="#" className={classes.closebtn} onClick={closeNavModal}>
          &times;
        </a>
      </div>
      <div className={classes.nav_links_container}>
        <div onClick={closeNavModal}>
          <Link href="/works">
            <p>ABOUT</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/artists">
            <p>SERVICES</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/galleries">
            <p>BUY</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/galleries">
            <p>SELL</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/galleries">
            <p>RENT</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/galleries">
            <p>INVEST</p>
          </Link>
        </div>
        <div onClick={closeNavModal}>
          <Link href="/galleries">
            <p>NEWS</p>
          </Link>
        </div>
        <img
          src={globe.src}
          style={{ width: "25px", height: "25px" }}
        />
        {user ? (
          <div onClick={handleSignOut} className={classes.login_btn}>
            <>
              <p>LOGOUT</p>
              <div className={classes.img_placeholder}>
                <p>{user?.username.charAt(0).toUpperCase()}</p>
                <div className={classes.online_indicator}></div>
              </div>
            </>
          </div>
        ) : (
          <div onClick={handleModal} className={classes.login_btn}>
            <>
              <p>LOGIN</p>
              <img src={login_icon.src} style={{ width: "14px" }} />
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarModal;
