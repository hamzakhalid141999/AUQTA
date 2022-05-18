import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import logo_black from "../../public/assets/logo_black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LoginSignupModal from "../modals/loginSignupModal";
import { useRouter } from "next/router";
import globe from "../../public/assets/globe.png";
import login_icon from "../../public/assets/login.png";
import globe_dark from "../../public/assets/globe-dark.png";

function Navbar() {
  const router = useRouter();
  const page = router.pathname;
  const [categorySelected, setCategorySelected] = useState("buy");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [showFilter, setShowFilter] = useState(false);
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [open, setOpen] = useState();
  const [currentPage, setCurrentPage] = useState();
  const onCloseModal = () => setOpen(false);
  let listener = null;

  useEffect(() => {
    if (router.pathname) {
      console.log(router.pathname);
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  useEffect(() => {
    if (currentPage) {
      if (currentPage === "map" || currentPage === "invest") {
        setIsNavbarVisibleFromTop(true);
      } else if (currentPage !== "map" || currentPage === "invest") {
        setIsNavbarVisibleFromTop(false);
      }
    }
  }, [currentPage]);

  // useEffect(() => {
  //   if (currentPage){
  //     if (currentPage === "invest") {
  //       setIsNavbarVisibleFromTop(true);
  //     }
  //     else if (currentPage !== "invest") {
  //       setIsNavbarVisibleFromTop(false);
  //     }
  //   }

  // }, [currentPage]);

  const handleModal = () => {
    setOpen(true);
  };

  console.log(isNavbarVisisbleFromTop, currentPage);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 600) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
      if (scrolled >= 10) {
        if (backgroundColor !== "opaque") {
          setBackgroundColor("opaque");
        }
      } else {
        if (backgroundColor !== "transparent") {
          setBackgroundColor("transparent");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  return (
    <div
      className={
        isNavbarVisisbleFromTop
          ? classes.navbar_body_opaque
          : backgroundColor === "opaque"
          ? classes.navbar_body_opaque
          : classes.navbar_body
      }
    >
      <LoginSignupModal open={open} onCloseModal={onCloseModal} />
      <div
        className={
          isNavbarVisisbleFromTop
            ? classes.filter_panel
            : showFilter
            ? classes.filter_panel
            : classes.filter_panel_hidden
        }
      >
        <div className={classes.filter_panel_content}>
          <div className={classes.btns_container}>
            <div
              onClick={() => {
                handleCategorySelected("buy");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "buy"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                INVEST
              </p>
            </div>
            <div className={classes.divider} />
            <div
              onClick={() => {
                handleCategorySelected("rent");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "rent"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                BUY
              </p>
            </div>
            <div className={classes.divider} />
            <div
              onClick={() => {
                handleCategorySelected("invest");
              }}
              className={classes.filter_panel_btn}
            >
              <p
                className={
                  categorySelected === "invest"
                    ? classes.filter_panel_btn_label_selected
                    : classes.filter_panel_btn_label_unselected
                }
              >
                RENT
              </p>
            </div>
          </div>
          <div className={classes.search_bar}>
            <div className={classes.search_category}>
              <p>CITY</p>
              <h3>BALAKAN MOUNTAINS</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>LOCATION</p>
              <h3>SOUTH EASTERN EUROPE</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PROPERTY TYPE</p>
              <h3>PRIVATE HOUSE</h3>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PRICE RANGE</p>
              <h3>$40000 - $60000</h3>
            </div>
            <div className={classes.search_icon}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faSearch}
                size={"1x"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.left_panel}>
        <Link href={"/"}>
          <div className={classes.logo}>
            <Image
              src={
                isNavbarVisisbleFromTop
                  ? logo_black
                  : backgroundColor === "transparent"
                  ? logo
                  : logo_black
              }
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className={classes.right_panel}>
        <Link href={"/about"}>
          <p
            className={
              page.includes("about")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            ABOUT
          </p>
        </Link>
        <Link href={"/services"}>
          <p
            className={
              page.includes("services")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            SERVICES
          </p>
        </Link>
        <Link href={"/invest"}>
          <p
            className={
              page.includes("invest")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            INVEST
          </p>
        </Link>
        <Link href={"/map"}>
          <p
            className={
              page.includes("map")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            BUY
          </p>
        </Link>
        <Link href={"#"}>
          <p
            className={
              page.includes("rent")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            RENT
          </p>
        </Link>

        <Link href={"/contact"}>
          <p className={classes.hover_underline_animation}>CONTACT US</p>
        </Link>

        <Link href={"#"}>
          <div className={classes.dropdown_container}>
            <div className={classes.dropdown}>
              <div className={classes.option}>
                <Link href={"/dashboard/property"}>
                  <p>Property</p>
                </Link>
              </div>
              <div className={classes.option}>
                <Link href={"/dashboard/agent"}>
                  <p>Agent</p>
                </Link>
              </div>
              <div className={classes.option}>
                <Link href={"/dashboard/project"}>
                  <p>Project</p>
                </Link>
              </div>
              <div className={classes.option}>
                <Link href={"/dashboard/developer"}>
                  <p>Developer</p>
                </Link>
              </div>
            </div>
            {/* <p className={classes.hover_underline_animation}>DASHBOARD</p> */}
            <img src={ isNavbarVisisbleFromTop
                  ? globe.src
                  : backgroundColor === "transparent"
                  ? globe.src
                  : globe_dark.src} style={{ width: "25px", height: "25px" }} />
          </div>
        </Link>

        <div onClick={handleModal} className={classes.login_btn}>
          <p>LOGIN</p>
          <img src={login_icon.src} style={{ width: "14px" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
