import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog4/img1.jpeg";
import img2 from "../../../../public/assets/blogs/blog4/img2.jpeg";
import img3 from "../../../../public/assets/blogs/blog4/img3.jpeg";
import img4 from "../../../../public/assets/blogs/blog4/img4.jpeg";

function Blog4() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>How do Immersive Technologies work?</h1>
        <img src={img1.src} className={classes.main_img} />

        {/* &#39; */}

        <p className={classes.blog_para}>
          Immersive technologies are an innovation of virtual reality and
          augmented reality content with the physical environment. This is done
          so in a way that permits the client to engage with mixed reality.
          Immersive technologies have transformed the digital experience by
          bringing together the internet of things with the client’s sight,
          touch, and even sound. Through an Immersive involvement, the client
          acknowledges virtual components of their environment as part of the
          whole package; potentially becoming less conscious that those elements
          are not part of physical reality. Immersive technologies are still
          relatively new and unknown in the corporate sector. They can
          potentially reshape the work environment and revolutionize how we
          engage, communicate, and collaborate with content. Immersive
          technologies can provide us with complete knowledge about the
          environment and surroundings without the need for physical contact.
          Exploring the world has never been more fun!
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Virtual Reality (VR):</p>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Virtual reality is completely digital and a computer-generated
          three-dimensional experiential environment. While in a normal setting
          clients view a screen, virtual reality allows their clients to step
          inside and experience a 3D world that is completely representative of
          the ‘what-might-be’ of the real world.
        </p>

        <p className={classes.blog_para}>
          <span style={{ fontWeight: "bolder" }}>Non-Immersive VR: </span>
          Non-Immersive VR systems depend on a video game console, display, or
          computer and tangible devices like a controller, mice, and keyboard,
          etc.
        </p>

        <p className={classes.blog_para}>
          <span style={{ fontWeight: "bolder" }}>
            Semi-Immersive virtual reality:{" "}
          </span>
          Semi-immersive virtual reality experience provides users with a
          partially virtual environment. This VR technology provides realism
          through 3D graphics. This technology is mostly used for educational or
          training purposes and relies on high-resolution displays, hard
          stimulators or projectors, and computers that replicate the design and
          functionality of the real-world mechanisms.
        </p>

        <p className={classes.blog_para}>
          <span style={{ fontWeight: "bolder" }}>
            Fully Immersive virtual reality:{" "}
          </span>
          This immersive reality provides users with the most realistic
          stimulation experience with sound and sight. For this purpose, the
          client needs the VR glasses and head mount display. This technology is
          frequently used in video games and for other entertainment purposes
          because there is a need for high-resolution content with a wide field
          of view.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Augmented Reality (AR):</p>
        <img src={img3.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Augmented reality puts digital representations of objects into the
          physical space; it could be the key to changing the client’s
          experience as we see it today. Augmented reality has quickly evolved
          in real estate environments, entertainment, pop culture, and media.
          Organizations from across the world are considering incorporating it
          into their procedure. AR is being used in immersive technology and is
          known as holoportation. In this reality use, a special set of cameras
          capture 3D objects or persons which can be placed in physical space
          anywhere in the world.
        </p>

        <p className={classes.blog_para}>
          You have all the tools and intelligence in augmented reality devices
          and can pull down the 3D models and use these models for assembly,
          workflow, inspection, and/or design processes as you are going through
          your job building a house or any commercial plaza and how to design it
          or furnish it. An augmented reality office could also attract specific
          talent from anywhere and could cut down on the overhead cost estimated
          by a physical office. Remote experts also use it to connect with their
          clients anywhere in the world, at any given time, whether you are a
          builder or a plant manufacturer or a general employee in any
          organization.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Mixed Reality (MR)</p>
        <img src={img4.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Mixed reality is going to the next step of augmented reality by the
          combination of virtual and real-world reality, where digital and
          physical objects can interact with each other in the same environment.
        </p>

        <p className={classes.blog_para}>
          Mixed reality allows you to see and immerse yourself in the world
          around you as you interact with the virtual environment using your
          hands. Mixed reality is frequently used in Instagram or Snapchat
          filters like virtual makeup applications and virtual furniture fitting
          etc.
        </p>

        <p className={classes.blog_para}>
          The virtual world can provide remote employees an opportunity to work
          in a secure space. They can connect, interact, hang out and catch up
          in an immersive 3D virtual environment from their homes. It creates a
          sense of social involvement and keeps the employees motivated while
          keeping the company culture alive. As a bonus, it counters the
          challenges of isolation and remote working.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Conclusion</p>
        <p style={{ marginTop: "10px" }} className={classes.blog_para}>
          Auqta.com utilizes the immersive technology tools to bring to its
          users a one-of-a-kind experience dealing in online real estate
          transactions. Head on over to our page to view the revolution that is
          undertaking the real estate market of Pakistan.
        </p>
      </div>
    </>
  );
}

export default Blog4;
