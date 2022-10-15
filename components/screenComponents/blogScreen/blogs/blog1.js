import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog1/img1.jpg";
import img2 from "../../../../public/assets/blogs/blog1/img2.jpg";
import img3 from "../../../../public/assets/blogs/blog1/img3.png";

function Blog1() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>
          Introduction to Immersive Technologies
        </h1>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Immersive technologies create a unique user experience by merging the
          physical world with digital reality. The term “immersive technologies”
          combines augmented reality and virtual reality which form as its two
          principal types. Sometimes digital content is placed on top of
          physical objects and sometimes the user is immersed into a programmed
          environment.
        </p>

        <p className={classes.blog_para}>
          Immersive technologies have been amongst us for the past 50 years when
          the first Man- Machine Graphical Communication system, called the
          Sketchpad was built in 1964. This eliminated the need for written
          statements and allowed the user to interact with the computer machine
          through line drawings. Since then, the technology has been constantly
          evolving and new experiences through which the user can interact with
          digital environments are being developed.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Overview of Augmented Reality (AR)</p>
        <img src={img1.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Augmented reality (AR) maps a three-dimensional (3-D) layer upon a
          two-dimensional (2-D) object which allows the user to visualise the
          environment in greater depth and detail. AR relies on a display,
          sensory equipment, processors, and input devices to create a unique
          experience. The current input devices include smart phones and tablets
          which have enough processing power to display a digital object upon
          physical content through the mapping characteristics of their built-in
          camera.
        </p>

        <p className={classes.blog_para}>
          The above image displays a representation of AR. As seen, the user
          simply points the tablet’s camera upon a two-dimensional floor plan
          print of an apartment. The AR application then maps a
          three-dimensional representation of the same apartment which is
          displayed on the tablet’s screen. Thus, this gives a detailed overview
          of how the apartment model will look like in reality.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Overview of Virtual Reality (VR)</p>
        <img src={img3.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Virtual reality (VR) is a simulated and an interactive experience
          which brings the user in a digital environment. This environment can
          be similar or completely different from the physical world. For
          example, taking the real estate industry into account, the environment
          of an architecture is digitally created based upon physical and
          technical factors such as the floor plans and architectural models.
          Through VR the user can immerse into the environment of their future
          architecture in order to get a detailed feel of their future home.
          Moreover, for other entertainment purposes like gaming, VR can also be
          used to create an artificial environment where the user can interact
          with digital creativity.
        </p>

        <p className={classes.blog_para}>
          VR uses special sensory systems and electronic equipment’s like the
          Oculus goggles as shown above to map an artificial environment in
          front of the user. The required environment is programmed within the
          gear’s hardware so that the user can enjoy the interactive experience.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Conclusion</p>
        <p style={{ marginTop: "10px" }} className={classes.blog_para}>
          Immersive technologies which include AR and VR are the future of human
          interaction with physical environments as they provide upmost
          convenience and numerous advantages in terms of distant communication
          and resource utilisation. These technologies are still facing constant
          developments with the aim of further elevating the user’s experience
          with digital environments.
        </p>
      </div>
    </>
  );
}

export default Blog1;
