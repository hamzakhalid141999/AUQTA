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
import { useRouter } from "next/router";
import { getUserType } from "../components/utils/getUserType";
import { useAuth } from "../contextAPI";
import ChangeUserType from "../components/modals/changeUserType";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState();
  const { user, signUp } = useAuth();

  const [openUserTypeModal, setOpenUserTypeModal] = useState();
  const handleOpenUserTypeModal = async () => {
    setOpenUserTypeModal(true);
  };
  const handleCloseUserTypeModal = async () => {
    // setOpenUserTypeModal(false);
  };
  const closeUserTypeModal = async () => {
    setOpenUserTypeModal(false);
  };

  const [hasLoggedInThroughSocialMedia, setHasLoggedInThroughSocialMedia] =
    useState();
  const router = useRouter();

  useEffect(() => {
    if (router) {
      console.log(router.query);
      if (router.query.userId) {
        setHasLoggedInThroughSocialMedia(true);
        router.query.username = router.query.name;
        router.query.id = router.query.userId;
        console.log(router.query);
        signUp(router.query);
      } else {
        setHasLoggedInThroughSocialMedia(false);
      }
    }
  }, [router]);

  console.log(user);

  useEffect(() => {
    const fetchUserType = async () => {
      if (hasLoggedInThroughSocialMedia) {
        const data = await getUserType(router?.query?.userId);
        console.log("USER TYPE: ", data);
        if (data === "" || data === undefined || data === " ") {
          handleOpenUserTypeModal();
        }
      }
    };

    fetchUserType();
  }, [hasLoggedInThroughSocialMedia]);

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
      <ChangeUserType
        open={openUserTypeModal}
        onCloseModal={handleCloseUserTypeModal}
        closeModal={closeUserTypeModal}
        userId={router.query.userId}
        userObj={router.query}
      />
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
