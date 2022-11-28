import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog2/pic1.jpeg";
import img2 from "../../../../public/assets/blogs/blog2/pic2.jpeg";
import img3 from "../../../../public/assets/blogs/blog2/pic3.jpeg";
import img4 from "../../../../public/assets/blogs/blog2/pic4.jpeg";

function Blog2() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>
          How immersive marketing can help boost the marketing potential for
          real estate projects and societies.
        </h1>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Over the years, real estate consultants have perfected in providing
          the latest services for the residential and commercial real estate
          industry. Immersive marketing in real estate consists of the strategic
          application of the principles of marketing applied in the positioning
          and sale of real estate products. It is a set of tools and processes
          designed to create strategies that foster lasting and profitable
          relationships for clients. The real estate sector is dependent on
          several extrinsic factors such as economic condition, job rate, and
          interest rate. Immersive technologies including augmented reality and
          virtual reality are transforming and replacing the traditional
          marketing potential, delivering a higher return on investment while
          also removing the expenses of staging a property. Regardless of how
          the market behaves currently, applying the many immersive technology
          strategies can propel the business smoothly.
        </p>

        <p className={classes.blog_para}>
          Real estate agents, brokers and buyers use a variety of immersive
          techniques to engage and attract property customers. These range from
          in-person to virtual property tours. In this era, the increased use of
          smartphones and tablets has become a key tool in marketing and thus,
          focusing on digitally savvy tools is always handy in increasing client
          engagement
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Personalized experience:</p>
        <img src={img1.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Augmented reality and virtual reality will enable real estate
          professionals to access customers with a more personalized and unique
          experience approach. Furthermore, augmented reality and virtual
          reality allows clients to see sites and even get a knowhow of how the
          location may look after finishing the house, shop, office etc. Some
          websites today even offer the option of fitting in your furniture in
          made house models for you to see how the project will look as an end
          result.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Better engagement with optimization
        </p>
        <img src={img3.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Immersive technology makes a significant difference in improving
          engagement with potential customers and differentiating your agency
          from the competition. Real estate developers can evaluate their data
          with augmented reality in real estate marketing to quantify
          engagement. The data will show the number of people that interact with
          the listing, their locations and how long they looked at it. This
          information can help real estate agents determine whether their
          virtual reality real estate marketing needs to be tweaked.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Use of immersive technology enhance brand loyalty
        </p>
        <img src={img4.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          The use of virtual reality and augmented reality in real estate can
          help agents and brokers to bring innovation in marketing campaigns.
          Real estate businesses need to strive to develop their own brand
          through immersive technology. Augmented reality improves the
          interactions through 3D visualization tours which increases the
          likelihood of customers buying the displayed sites. Real estate
          business running and their success depends on strong planning to
          develop a brand name.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Use of immersive marketing in print media marketing
        </p>
        {/* <img src={img4.src} className={classes.main_img} /> */}

        <p className={classes.blog_para}>
          The use of immersive marketing to create innovative marketing
          strategies is definitely an up and coming trend. However, ending the
          debate on the insignificance of print media in today’s age; we believe
          immersive technology can be used in print media too. For instance real
          estate agencies can publish augmented reality enabled print ads that
          display an interactive 3D model of different projects, societies and
          sites when a buyer points the access through their phone camera
          towards the advertisement. Such ads can be posted in newspapers or on
          billboards and news later. Similarly real estate agencies can create
          augmented reality enabled brochures, pamphlets to showcase their
          properties. All publishers and customers would appreciate the insight
          from such a campaign as it shows your achievements and commitment to
          the business.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Engaging customers through web applications and immersive features:
        </p>
        <img src={img4.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Real estate agencies can also create their online portals based on
          augmented reality and/or virtual reality that will be accessed through
          mobile phone apps. Marketers can showcase societies and sites to their
          clients using the interactive portal during meetings. With such apps,
          customers can remotely evaluate a property even after the meeting and
          interact with different parts of the space.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Conclusion</p>
        <p style={{ marginTop: "10px" }} className={classes.blog_para}>
          Auqta.com utilizes the above technologies to give clients a digital
          experience of visualizing their investment opportunities. The era of
          technological innovation is upon us and rapid adaptation towards
          technological integration in the business models ensures its
          sustainability. The use of traditional marketing techniques should be
          set aside as immersive marketing truly attains a global customer
          outreach.
        </p>
      </div>
    </>
  );
}

export default Blog2;
