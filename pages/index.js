import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../public/assets/main_bg.png";
import classes from "../styles/Home.module.css";
import HomeFirstSection from "../components/screenComponents/homeScreen/firstSection/index";
import FindSection from "../components/screenComponents/homeScreen/findSection";
import OurMission from "../components/screenComponents/homeScreen/ourMission";
import TrendingProperties from "../components/screenComponents/homeScreen/trendingProperties";
import { getHomePageProjects } from "../components/utils/fetchProjectsByProvince";
import ComingSoonModal from "../components/modals/comingSoonProjectModal";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState();

  const onCloseHandle = () => {
    setOpen(false);
    window.localStorage.setItem("comingSoon", false);
  };

  useEffect(() => {
    const getProjects = async () => {
      const data = await getHomePageProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <div className={classes.main_body}>
      <div className={classes.main_bg}>
        <Image alt="bg" className={classes.bg} layout="fill" src={bg} />
        <ComingSoonModal
          setOpen={setOpen}
          open={open}
          onCloseModal={onCloseHandle}
        />
        <HomeFirstSection />
        <OurMission />
        <FindSection />
        <TrendingProperties fromHome={true} investmentProjects={projects} />
      </div>
    </div>
  );
}
