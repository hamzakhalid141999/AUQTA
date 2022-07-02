import React, { useEffect, useState } from "react";
import classes from "./developer.module.css";
import FirstSection from "../../components/screenComponents/developerScreen/firstSection";
import ContentSection from "../../components/screenComponents/developerScreen/contentSection";
import UpcomingProjects from "../../components/screenComponents/developerScreen/upcomingProjects";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "../../constants";

function Developer() {
  const router = useRouter();
  const [developer, setDeveloper] = useState();
  const [developerDetails, setDeveloperDetails] = useState();

  useEffect(() => {
    if (router) {
      setDeveloper(router.query?.developerId);
    }
  }, [router]);

  const fetchDeveloperDetails = async () => {
    try {
      const data = await axios.get(
        baseURL + "/api/user/profilebyid/" + developer,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setDeveloperDetails(data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (developer) {
      fetchDeveloperDetails();
    }
  }, [developer]);

  return (
    <div className={classes.developer_section}>
      <FirstSection />
      <ContentSection developerDetails={developerDetails} />
      <UpcomingProjects />
    </div>
  );
}

export default Developer;
