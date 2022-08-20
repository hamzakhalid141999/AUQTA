import React, { useEffect, useState } from "react";
import classes from "./agent.module.css";
import FirstSection from "../../components/screenComponents/agentScreen/firstSection";
import ContentSection from "../../components/screenComponents/agentScreen/contentSection";
import UpcomingProjects from "../../components/screenComponents/agentScreen/upcomingProjects";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "../../constants";

function Agent() {
  const router = useRouter();
  const [developer, setDeveloper] = useState();
  const [developerDetails, setDeveloperDetails] = useState();

  useEffect(() => {
    if (router) {
      setDeveloper(router.query?.developerId);
    }
  }, [router]);

  console.log(developerDetails);

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
      <FirstSection developerDetails={developerDetails} />
      <ContentSection developerDetails={developerDetails} />
      {/* <UpcomingProjects /> */}
    </div>
  );
}

export default Agent;
