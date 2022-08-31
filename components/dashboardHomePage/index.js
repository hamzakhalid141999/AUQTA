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
import { getInboxByUserId } from "../utils/fetchInboxByUserId";
import { fetchActiveProjectsByUserId } from "../utils/getActiveProjectsByUserId";
import { fetchInActiveProjectsByUserId } from "../utils/getInActiveProjectsByUserId";
import { fetchActivePropertiesByUserId } from "../utils/getActivePropertiesByUserId";
import { fetchInActivePropertiesByUserId } from "../utils/getInActivePropertiesByUserId";

function DashboardHomePage() {
  const { width } = useWindowSize();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [projects, setProjects] = useState([]);
  const [inboundMessages, setInboundMessages] = useState();
  const [inActiveProjects, setInActiveProjects] = useState();
  const [inActiveProperties, setInActiveProperties] = useState();

  useEffect(() => {
    const fetchActiveProperties = async () => {
      if (user?.id) {
        const data = await fetchActivePropertiesByUserId(user?.id, true);
        setProperties(data);
      }
    };

    const fetchInActiveProperties = async () => {
      if (user?.id) {
        const data = await fetchInActivePropertiesByUserId(user?.id, true);
        setInActiveProperties(data);
      }
    };

    const fetchActiveProjects = async () => {
      if (user?.id) {
        const data = await fetchActiveProjectsByUserId(user?.id, true);

        setProjects(data);
      }
    };

    const fetchInActiveProjects = async () => {
      if (user?.id) {
        const data = await fetchInActiveProjectsByUserId(user?.id, true);

        setInActiveProjects(data);
        // setProperties(data);
      }
    };

    fetchActiveProperties();
    fetchInActiveProperties();
    fetchActiveProjects();
    fetchInActiveProjects();
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

  useEffect(() => {
    const handleFetchUserInbox = async () => {
      if (user?.id) {
        const data = await getInboxByUserId(user?.id);
        setInboundMessages(data?.messages?.length);
      }
    };
    handleFetchUserInbox();
  }, [user?.id]);

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
      <p className={classes.subheading}>
        {user?.userType === "developer"
          ? "Auqta Developer Control System"
          : user?.userType === "enduser"
          ? "Auqta User Control System"
          : "Auqta Agent Control System"}
      </p>
      <div className={classes.calls_msgs_tab_container}>
        <div className={classes.tab}>
          <img src={email.src} className={classes.logo} />
          <div className={classes.tab_heading}>
            <h1>COMPLETED MESSAGES</h1>
            <p>{inboundMessages}</p>
          </div>
          <div className={classes.inbound_outbound}>
            <p className={classes.inbound_outbound_text}>
              <span style={{ color: "#0068ed", fontWeight: "bolder" }}>
                {inboundMessages}
              </span>{" "}
              INBOUND
            </p>
            <p className={classes.inbound_outbound_text}>
              <span style={{ color: "#0068ed", fontWeight: "bolder" }}>0</span>{" "}
              OUTBOUND
            </p>
            <Link href="/dashboard/inbox">
              <p>VIEW ALL</p>
            </Link>
          </div>
        </div>
        {/* <div className={classes.tab}>
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
        </div> */}
      </div>

      {(user?.userType === "agent" ||
        user?.userType === "developer" ||
        user?.userType === "enduser") &&
        (properties?.length < 3 ? (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Properties (Active)</p>

            <div className={classes.properties_container}>
              {properties?.length === 0 ? (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No Properties
                </p>
              ) : (
                properties?.map((property, index) => (
                  <PropertyCard
                    noResize={true}
                    openEdit={true}
                    key={index}
                    propertyId={property?.propertyListing?._id}
                    title={property?.propertyListing?.title}
                    price={property?.propertyListing?.price}
                    location={property?.propertyListing?.location}
                    city={property?.propertyListing?.city}
                    picture={property?.propertyListing?.images[0]}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Properties (Active)</p>
            <div className={classes.property_container}>
              <div className={classes.overlay} />
              <Slider slidesToShow={slidesToShow} {...settings}>
                {properties?.map((property, index) => (
                  <PropertyCard
                    openEdit={true}
                    noResize={true}
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
        ))}

      {user?.userType === "developer" &&
        (projects?.length < 3 ? (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Projects (Active)</p>

            <div className={classes.properties_container}>
              {projects?.length === 0 ? (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No Projects
                </p>
              ) : (
                projects?.map((project, index) => (
                  <ProjectCard
                    openEdit={true}
                    title={project.projectName}
                    description={project.projectDescription}
                    price={project.priceRangeFrom}
                    priceTo={project?.priceRangeTo}
                    location={project.location}
                    city={project.city}
                    picture={project.images[0]}
                    key={index}
                    id={project?._id}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Projects (Active)</p>
            <div className={classes.property_container}>
              <div className={classes.overlay} />
              <Slider slidesToShow={slidesToShow} {...settings}>
                {projects?.map((project, index) => (
                  <ProjectCard
                    openEdit={true}
                    title={project.projectName}
                    description={project.projectDescription}
                    price={project.priceRangeFrom}
                    priceTo={project?.priceRangeTo}
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
        ))}

      {(user?.userType === "agent" ||
        user?.userType === "developer" ||
        user?.userType === "enduser") &&
        (inActiveProperties?.length < 3 ? (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Properties (Inactive)</p>

            <div className={classes.properties_container}>
              {inActiveProperties?.length === 0 ? (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No Properties
                </p>
              ) : (
                inActiveProperties?.map((property, index) => (
                  <PropertyCard
                    noResize={true}
                    openEdit={true}
                    key={index}
                    propertyId={property?.propertyListing?._id}
                    title={property?.propertyListing?.title}
                    price={property?.propertyListing?.price}
                    location={property?.propertyListing?.location}
                    city={property?.propertyListing?.city}
                    picture={property?.propertyListing?.images[0]}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Properties (Inactive)</p>
            <div className={classes.property_container}>
              <div className={classes.overlay} />
              <Slider slidesToShow={slidesToShow} {...settings}>
                {inActiveProperties?.map((property, index) => (
                  <PropertyCard
                    openEdit={true}
                    noResize={true}
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
        ))}

      {user?.userType === "developer" &&
        (inActiveProjects?.length < 3 ? (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Projects (Inactive)</p>

            <div className={classes.properties_container}>
              {inActiveProjects?.length === 0 ? (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No In Active Projects
                </p>
              ) : (
                inActiveProjects?.map((project, index) => (
                  <ProjectCard
                    openEdit={true}
                    title={project.projectName}
                    description={project.projectDescription}
                    price={project.priceRangeFrom}
                    priceTo={project?.priceRangeTo}
                    location={project.location}
                    city={project.city}
                    picture={project.images[0]}
                    key={index}
                    id={project?._id}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className={classes.property_section}>
            <p className={classes.section_heading}>Projects (Inactive)</p>
            <div className={classes.property_container}>
              <div className={classes.overlay} />
              <Slider slidesToShow={slidesToShow} {...settings}>
                {inActiveProjects?.map((project, index) => (
                  <ProjectCard
                    openEdit={true}
                    title={project.projectName}
                    description={project.projectDescription}
                    price={project.priceRangeFrom}
                    priceTo={project?.priceRangeTo}
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
        ))}
    </div>
  );
}

export default DashboardHomePage;
