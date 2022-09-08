import React from "react";
import classes from "../../servicesScreen/firstSection/servicesScreen.module.css";
import Image from "next/image";
import banner_img from "../../../../public/assets/about_banner.png";
import service_1 from "../../../../public/assets/services_1.png";
import service_2 from "../../../../public/assets/services_2.png";
import service_3 from "../../../../public/assets/services_3.png";
import service_4 from "../../../../public/assets/services_4.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useWindowSize } from "../../../../utils";

function FirstSection() {
  const { width } = useWindowSize();

  const slideImages = [
    width < 786
      ? "/assets/about_banner.png"
      : "assets/about_page_banner_bg.png",
  ];

  const slideImagesMobile = ["/assets/services_banner.png"];

  return (
    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay_black} />
        <Fade arrows={false} style={{ height: "100%" }} easing="ease">
          {width < 786 ? (
            <>
              <div className={classes.each_slide}>
                <div
                  style={{ backgroundImage: `url(${slideImagesMobile[0]})` }}
                ></div>
              </div>
            </>
          ) : (
            <>
              <div className={classes.each_slide}>
                <div
                  style={{ backgroundImage: `url(${slideImages[0]})` }}
                ></div>
              </div>
            </>
          )}
        </Fade>
      </div>
      <div className={classes.first_section_content_section}>
        <h1
        // data-aos="fade-right"
        >
          ABOUT US
        </h1>
      </div>
    </div>
  );
}

export default FirstSection;

// import React, { useEffect } from "react";
// import classes from "./firstSection.module.css";
// import Image from "next/image";
// import banner_img from "../../../../public/assets/about_banner.png";
// import banner_img_desktop from "../../../../public/assets/about_page_banner_bg.png";
// import { useWindowSize } from "../../../../utils";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function FirstSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//     });
//     AOS.refresh();
//   }, []);

//   const { width } = useWindowSize();

//   return (
//     <div id="home" className={classes.first_section_body}>
//       <div className={classes.banner_img_container}>
//         <div className={classes.overlay} />
//         <Image
//           src={banner_img}
//           className={classes.banner_img}
//           alt="hero_banner_img"
//           layout="fill"
//         />
//       </div>
//       <div className={classes.first_section_content_section}>
//         <h1
//         // data-aos="fade-right"
//         >
//           ABOUT US
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default FirstSection;
