import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import bg from "../public/assets/main_bg.png";
import classes from "../styles/Home.module.css";
import Sec1_img from "../public/assets/hero_banner_bg.png";
import HomeFirstSection from "../components/screenComponents/homeScreen/firstSection/index";
import FindSection from "../components/screenComponents/homeScreen/findSection";
import Footer from "../components/footer";
import OurMission from "../components/screenComponents/homeScreen/ourMission";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={classes.main_body}>
        <div className={classes.main_bg}>
          <Image alt="bg" className={classes.bg} layout="fill" src={bg} />      
          <HomeFirstSection/>
          <FindSection/>
          <OurMission/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
