import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import bg from "../public/assets/main_bg.png";
import classes from "../styles/Home.module.css";
import Sec1 from "../components/screenComponents/homeScreenSection1/index";
import Sec1_img from "../public/assets/hero_banner_bg.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={classes.main_body}>
        <div className={classes.main_bg}>
          <Image alt="bg" className={classes.bg} layout="fill" src={bg} />
          <div className={classes.sec_1_image_container}>
            <Image alt="sec_1_banner_picture" src={Sec1_img} className={classes.sec_1_image}/>
          </div>
          <div className={classes.heading_container}>
            <h1>LOREM IPSUM IS SIMPLY DUMMY TEXT</h1>
            <p>LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
          </div>
        </div>
      </div>
    </>
  );
}
