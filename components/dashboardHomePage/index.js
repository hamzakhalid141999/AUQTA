import React, { useEffect, useState } from "react";
import classes from "./dashboardHomePage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useWindowSize } from "../../utils";
import { useAuth } from "../../contextAPI";
import { getPropertiesByUserId } from "../utils/fetchPropertiesByUserId";
import { getProjectsByUserId } from "../utils/fetchProjectsByUserId";
import axios from "axios";
import PropertyCard from "../../pages/map/components/propertyCard";
import ProjectCard from "../screenComponents/homeScreen/trendingProperties/components/propertyCard";
import phone from "../../public/assets/phone_call.png";
import email from "../../public/assets/email_icon.png";
import Link from "next/link";

function DashboardHomePage() {
  const { width } = useWindowSize();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchPropertiesByUserId = async () => {
      if (user?.id) {
        const data = await getPropertiesByUserId(user?.id);
        setProperties(data);
      }
    };

    fetchPropertiesByUserId();
  }, [user?.id]);

  useEffect(() => {
    const fetchProjectsByUserId = async () => {
      if (user?.id && user?.userType === "developer") {
        const data = await getProjectsByUserId(user?.id);
        setProjects(data);
      }
    };

    fetchProjectsByUserId();
  }, [user?.id]);

  useEffect(() => {
    if (width) {
      if (width > 1390) {
        setSlidesToShow(3);
      }
      if (width < 1390) {
        setSlidesToShow(3);
      }
      if (width < 1024) {
        setSlidesToShow(2);
      }
      if (width < 754) {
        setSlidesToShow(1);
      }
    }
  }, [width]);

  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={classes.content_section}>
      <h1 className={classes.page_section}>Hello, {user?.username}</h1>
      <p className={classes.subheading}>Auqta Developer Control System</p>

      <div className={classes.calls_msgs_tab_container}>
        <div className={classes.tab}>
          <img src={phone.src} className={classes.logo} />
          <div className={classes.tab_heading}>
            <h1>COMPLETED CALLS</h1>
            <p>23</p>
          </div>
          <div className={classes.inbound_outbound}>
            <p className={classes.inbound_outbound_text}>
              <span style={{ color: "#0068ed", fontWeight: "bolder" }}>13</span>{" "}
              INBOUND
            </p>
            <p className={classes.inbound_outbound_text}>
              <span style={{ color: "#0068ed", fontWeight: "bolder" }}>13</span>{" "}
              OUTBOUND
            </p>
            <p>VIEW ALL</p>
          </div>
        </div>
        <Link href="/dashboard/inbox">
          <div className={classes.tab}>
            <img src={email.src} className={classes.logo} />
            <div className={classes.tab_heading}>
              <h1>COMPLETED MESSAGES</h1>
              <p>23</p>
            </div>
            <div className={classes.inbound_outbound}>
              <p className={classes.inbound_outbound_text}>
                <span style={{ color: "#0068ed", fontWeight: "bolder" }}>
                  13
                </span>{" "}
                INBOUND
              </p>
              <p className={classes.inbound_outbound_text}>
                <span style={{ color: "#0068ed", fontWeight: "bolder" }}>
                  13
                </span>{" "}
                OUTBOUND
              </p>
              <p>VIEW ALL</p>
            </div>
          </div>
        </Link>
      </div>

      {(user?.userType === "agent" || user?.userType === "developer") && (
        <div className={classes.property_section}>
          <p className={classes.section_heading}>Properties</p>
          <div className={classes.property_container}>
            <div className={classes.overlay} />
            <Slider slidesToShow={slidesToShow} {...settings}>
              {properties?.map((property, index) => (
                <PropertyCard
                  openEdit={true}
                  key={index}
                  propertyId={property?.propertyListing?._id}
                  title={property?.propertyListing?.title}
                  price={property?.propertyListing?.price}
                  location={property?.propertyListing?.location}
                  city={property?.propertyListing?.city}
                  picture={property?.propertyListing?.images[0]}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}

      {user?.userType === "developer" && (
        <div className={classes.property_section}>
          <p className={classes.section_heading}>Projects</p>
          <div className={classes.property_container}>
            <div className={classes.overlay} />
            <Slider slidesToShow={slidesToShow} {...settings}>
              {projects?.map((project, index) => (
                <ProjectCard
                  openEdit={true}
                  title={project.projectName}
                  description={project.projectDescription}
                  price={project.priceRangeFrom}
                  location={project.location}
                  city={project.city}
                  picture={project.images[0]}
                  key={index}
                  id={project?._id}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHomePage;
