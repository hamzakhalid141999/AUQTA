import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import logo_black from "../../public/assets/logo_black.png";
import NavbarModal from "../navbarModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LoginSignupModal from "../modals/loginSignupModal";
import { useRouter } from "next/router";
import globe from "../../public/assets/globe.png";
import login_icon from "../../public/assets/login.png";
import globe_dark from "../../public/assets/globe-dark.png";
import { useAuth } from "../../contextAPI";
import { useWindowSize } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCities } from "../utils";

function Navbar() {
  const router = useRouter();
  const { width } = useWindowSize();
  const page = router.pathname;
  const [displayModal, setDisplayModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState("buy");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [showFilter, setShowFilter] = useState(false);
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [open, setOpen] = useState();
  const [currentPage, setCurrentPage] = useState();
  const onCloseModal = () => setOpen(false);
  const { user, removeUser } = useAuth();
  const [isDropDown, setIsDropDown] = useState(false);
  const [type, setType] = useState();
  const [priceBracket, setPriceBracket] = useState();

  const [citiesAndLocations, setCitiesAndLocations] = useState();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState([]);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  let listener = null;

  useEffect(() => {
    const fetchAllCities = async () => {
      const data = await getAllCities();
      setCitiesAndLocations(data);
      data?.map((cityObject) => {
        if (
          cityObject?.cityName !== "Islamabad" &&
          cityObject?.cityName !== "Lahore" &&
          cityObject?.cityName !== "Rawalpindi" &&
          cityObject?.cityName !== "Faisalabad" &&
          cityObject?.cityName !== "Karachi"
        ) {
          setCities((city) => [...city, cityObject?.cityName]);
        }
      });
    };
    fetchAllCities();
  }, []);

  useEffect(() => {
    if (cities?.length > 0) {
      setCities(cities?.sort());
    }
  }, [cities]);

  useEffect(() => {
    if (city && citiesAndLocations) {
      for (var i = 0; i < citiesAndLocations?.length; i++) {
        if (citiesAndLocations[i]?.cityName === city) {
          setLocations(citiesAndLocations[i]?.areas);
        }
      }
    }
  }, [city, citiesAndLocations]);

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  const handleSignOut = () => {
    removeUser();
    router.push("/");
  };

  useEffect(() => {
    if (currentPage) {
      if (
        currentPage === "map" ||
        currentPage === "invest" ||
        currentPage === "contact" ||
        currentPage === "rent" ||
        currentPage === "confirmUser" ||
        currentPage === "dashboard" ||
        currentPage === "blogs" ||
        currentPage === "forgotPassword" ||
        currentPage === "all_agents" ||
        currentPage === "all_developers"
      ) {
        setIsNavbarVisibleFromTop(true);
      } else if (
        currentPage !== "map" ||
        currentPage === "invest" ||
        currentPage !== "contact" ||
        currentPage !== "rent" ||
        currentPage !== "confirmUser" ||
        currentPage !== "dashboard" ||
        currentPage !== "blogs" ||
        currentPage !== "forgotPassword" ||
        currentPage !== "all_agents" ||
        currentPage !== "all_developers"
      ) {
        setIsNavbarVisibleFromTop(false);
      }
    }
  }, [currentPage]);

  const handleModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 600 && width > 1000) {
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
      <NavbarModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
      <LoginSignupModal
        setOpen={setOpen}
        open={open}
        onCloseModal={onCloseModal}
      />
      <div
        className={
          isNavbarVisisbleFromTop
            ? classes.filter_panel
            : showFilter
            ? classes.filter_panel
            : classes.filter_panel_hidden
        }
        style={{
          display:
            (currentPage === "dashboard" ||
              currentPage === "blogs" ||
              currentPage === "forgotPassword" ||
              currentPage === "all_agents" ||
              currentPage === "all_developers") &&
            "none",
        }}
      >
        <div className={classes.filter_panel_content}>
          <div className={classes.btns_container}>
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
                INVEST
              </p>
            </div>
            <div className={classes.divider} />
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
                BUY
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
                RENT
              </p>
            </div>
          </div>
          <div className={classes.search_bar}>
            <div
              // style={{ paddingLeft: "0px" }}
              className={classes.search_category}
            >
              <p>CITY</p>
              <select
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                className={classes.input_field}
              >
                <option>Select City</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Rawalpindi">Rawalpindi</option>

                {cities?.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>LOCATION</p>
              <select
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className={classes.input_field}
              >
                <option>Select Location</option>
                {locations?.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PROPERTY TYPE</p>
              <select
                disabled={categorySelected === "invest" ? true : false}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                className={classes.input_field}
              >
                <option>Select Type</option>
                <option value="residential">Residential</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div className={classes.divider2} />
            <div className={classes.search_category}>
              <p>PRICE RANGE</p>
              <select
                onChange={(e) => {
                  setPriceBracket(e.target.value);
                }}
                className={classes.input_field}
              >
                <option>Select Price</option>
                <option value="1000000-2000000">10 lacs-20 lacs</option>
                <option value="3000000-4000000">30 lacs-40 lacs</option>
                <option value="4000000-5000000">40 lacs-50 lacs</option>
                <option value="5000000-6000000">50 lacs-60 lacs</option>
                <option value="6000000-7000000">60 lacs-70 lacs</option>
                <option value="7000000-8000000">70 lacs-80 lacs</option>
                <option value="8000000-9000000">80 lacs-90 lacs</option>
                <option value="9000000-10000000">90 lacs-100 lacs</option>
                <option value="10000000-nill">100 lacs +</option>
              </select>
            </div>
            <Link
              href={{
                pathname:
                  categorySelected === "buy"
                    ? "/map"
                    : categorySelected === "rent"
                    ? "/rent"
                    : categorySelected === "invest" && "/invest",
                query: {
                  purpose: categorySelected,
                  city: city,
                  location: location,
                  priceRange: priceBracket,
                  type: type,
                },
              }}
            >
              <div className={classes.search_icon}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faSearch}
                  size={"1x"}
                />
              </div>
            </Link>
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

        <Link href={"/blogs"}>
          <p
            className={
              page.includes("blogs")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            BLOGS
          </p>
        </Link>

        <Link href={"/contact"}>
          <p
            className={
              page.includes("contact")
                ? classes.selected
                : classes.hover_underline_animation
            }
          >
            CONTACT US
          </p>
        </Link>

        <Link href={"#"}>
          <div className={classes.dropdown_container}>
            <div className={classes.dropdown}>
              {user?.userType?.includes("agent") ||
                user?.userType?.includes("developer") ||
                (user?.userType?.includes("enduser") && (
                  <div className={classes.option}>
                    <Link href={"/dashboard/property"}>
                      <p>Property</p>
                    </Link>
                  </div>
                ))}

              {user?.userType?.includes("developer") && (
                <div className={classes.option}>
                  <Link href={"/dashboard/project"}>
                    <p>Project</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Link>

        {user ? (
          <div onClick={handleDropDown} className={classes.login_btn}>
            <>
              <p>{user?.username}</p>
              <div className={classes.img_placeholder}>
                <p>{user?.username.charAt(0).toUpperCase()}</p>
                <div className={classes.online_indicator}></div>
              </div>
              <FontAwesomeIcon
                className={classes.icon}
                style={{ transition: "ease-in-out 200ms" }}
                icon={isDropDown ? faAngleUp : faAngleDown}
                size={"1x"}
              />
              <div
                className={
                  isDropDown
                    ? classes.profile_dropdown_show
                    : classes.profile_dropdown_hidden
                }
              >
                <Link
                  href={
                    user?.userType === "agent"
                      ? "/dashboard/agent"
                      : user?.userType === "enduser"
                      ? "/dashboard/user"
                      : user?.userType === "developer"
                      ? "/dashboard/developer"
                      : user?.userType === "admin"
                      ? "/dashboard/admin_properties"
                      : "/dashboard/admin_properties"
                  }
                >
                  <div className={classes.option}>
                    <p>Profile</p>
                  </div>
                </Link>

                <div onClick={handleSignOut} className={classes.option}>
                  <p>Logout</p>
                </div>
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

      <div className={classes.right_panel_mobile}>
        <FontAwesomeIcon
          className={
            backgroundColor === "opaque" || isNavbarVisisbleFromTop
              ? classes.icon_black
              : classes.icon
          }
          icon={faBars}
          size={"2x"}
          onClick={() => {
            setDisplayModal(!displayModal);
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
