import React from "react";
import classes from "./services.module.css";
import Image from "next/image";
import service1 from "../../../../public/assets/service_1_icon.png";
import service2 from "../../../../public/assets/service_2_icon.png";
import service3 from "../../../../public/assets/service_3_icon.png";
import service4 from "../../../../public/assets/service_4_icon.png";
import logo1 from "../../../../public/assets/service_1_heading_icon.png";
import logo2 from "../../../../public/assets/service_2_heading_icon.png";
import logo3 from "../../../../public/assets/service_3_heading_icon.png";
import logo4 from "../../../../public/assets/service_4_heading_icon.png";

function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.description_container}>
          <p>
            In the era of technological innovation, let technology be your
            fellow associate in real estate trading. Auqta brings you the one
            stop solution in a property portal, which hasn{"'"}t been done
            before. YOur digital real estate will be presented on Auqta{"'"}s
            immersive portal where people will visualise it on a global scale.
            Our team of technological experts offer you the services for letting
            your real estate stand out globally.
          </p>
          <h3>
            So sit back, relax, and let Auqta bring your property/project into
            the digital realm
          </h3>
          <div className={classes.btn}>
            <p>READ MORE</p>
          </div>
        </div>

        <div
          style={{ flexDirection: "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            <Image src={service1} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo1} />
              </div>
              <div className={classes.title_container}>
                <p>ARCHITECTURAL VISUALISATION</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                Architectural visualisation is the art of crafting a
                three-dimensional structure or space through cutting edge
                technology. This can enable people to visualise structures that
                haven{"'"}t been built or view existing structures from anywhere
                across the globe.
              </p>
              <p>
                Get in touch with an Auqta specialist and bring your vision to
                life.
              </p>
              <p>
                We offer a wide range of architectural visualisation services
                which include:
              </p>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    INTERIOR/EXTERIOR RENDERINGS
                  </p>
                </div>
                <p>Photorealistic depiction of your architectural design</p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    DYNAMIC VIRTUAL TOUR (INTERIOR)
                  </p>
                </div>
                <p>Complete walkthrough of your interior through specific pinpoints</p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    LOCALITY TOUR
                  </p>
                </div>
                <p>Complete walkthrough of the real-time surrounding location of the architecture</p>
              </div>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    CINEMATIC VIRTUAL VIDEO
                  </p>
                </div>
                <p>Experience your project in a cinematic video tour showcasing its exterior, interior and surrounding</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            <Image src={service2} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo2} />
              </div>
              <div className={classes.title_container}>
                <p>AUGMENTED STRUCTURES</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                Augmented reality superimposes a digital layer upon physical
                content which allows user to interact with a structure in a
                physical environment. This is an innovative marketing solution
                for realtors who can showcase their future projects with the tip
                of their smartphones/tablets.
              </p>
              <p>
                So, Contact Us! and elevate your immersive experience with your
                future property.
              </p>
              <p>Our augmented reality services include:</p>

              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    INTERACTIVE FLOOR PLAN
                  </p>
                </div>
                <p>Project your architectural structure through your floor plan</p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    3D ON CONSTRUCTION SITE 
                  </p>
                </div>
                <p>Visualise your future project on the actual construction site</p>
              </div>
              <div className={classes.bullet_point}>
                <div className={classes.bullets_container}>
                  <div className={classes.bullet}></div>
                  <p className={classes.bullet_text}>
                    INTERACTIVE BROUCHERS
                  </p>
                </div>
                <p>Elevate your client{"'"}s experience through our immersive brouchers which contain interact floor plans of your structure and creative content</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ flexDirection: "row-reverse" }}
          className={classes.services_container}
        >
          <div className={classes.image_container}>
            <Image src={service3} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo3} />
              </div>
              <div className={classes.title_container}>
                <p>VIRTUAL REALITY</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                Virtual reality is a digital environment created through
                computing models and graphic simulations. This enables the user
                to experience the virtual world and immerse into the digital
                environment of an architecture. Auqta offers a complete virtual
                walkthrough where the user can interact with the property{"'"}s
                exterior/interior or environment in real-time.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.services_container}>
          <div className={classes.image_container}>
            <Image src={service4} className={classes.img} />
          </div>
          <div className={classes.description}>
            <div className={classes.heading_container}>
              <div className={classes.left_panel} />
              <div className={classes.icon_container}>
                <Image className={classes.img} src={logo4} />
              </div>
              <div className={classes.title_container}>
                <p>ADDITIONAL SERVICES</p>
              </div>
            </div>
            <div className={classes.service_description_container}>
              <p>
                We offer additional services for property holders to elevate
                their trading experience. These services include high end
                photography of existing properties done by our team of
                visualisation experts so that clients can showcase a complete
                pictorial represenation on a budget.
              </p>
              <p>Contact Us! For further information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;