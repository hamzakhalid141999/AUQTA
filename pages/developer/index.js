import React, { useEffect, useState } from "react";
import classes from "./developer.module.css";
import FirstSection from "../../components/screenComponents/developerScreen/firstSection";
import ContentSection from "../../components/screenComponents/developerScreen/contentSection";
import UpcomingProjects from "../../components/screenComponents/developerScreen/upcomingProjects";

function developer() {
  // const [developer, setDeveloper] = useState();

  // const fetchDeveloperDetails = async () => {
  //   try {
  //     const data = await axios.get(
  //       baseURL + "/user/profilebyid/6299050a03ba683caaea666d",
  //       {},
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(data);
  //     setProject(data?.data[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchDeveloperDetails();
  // }, []);

  return (
    <div className={classes.developer_section}>
      <FirstSection />
      <ContentSection />
      <UpcomingProjects />
    </div>
  );
}

export default developer;
