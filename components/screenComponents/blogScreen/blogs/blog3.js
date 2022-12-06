import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog3/img1.jpeg";
import img2 from "../../../../public/assets/blogs/blog3/img2.jpeg";
import img3 from "../../../../public/assets/blogs/blog3/img3.jpeg";

function Blog3() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>
          How immersive technologies can uplift real estate in Pakistan
        </h1>
        <img src={img1.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          In today&#39;s competitive market every business and workplace is
          disrupted due to the advancement and changes that new technology
          brings. The real estate sector in Pakistan is also being affected and
          redefined by the market conditions and changes in client behaviors
          brought on by new technologies. Real estate in Pakistan is also
          quickly growing as investors are becoming more vigilant with a growing
          customer base. The real estate sector in Pakistan has shift towards
          immersive technology and real estate agents adopting new technologies
          to offer resources and solutions like smart homes that are beyond real
          estate services and products.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Augmented reality and Virtual reality: :
        </p>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Augmented reality and virtual reality are reliable as they allow
          clients to see undeveloped and finished housing societies from all
          over the world. Through technology and portable devices real estate
          developers get an advantage because they can easily show off the
          progress of the developing and completed projects. Virtual reality and
          augmented reality can be used in different businesses and real estate
          developers also use immersive technology to provide their prospective
          clients a realistic feel of the services and houses virtually, it will
          help them know what they purchase.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Artificial Intelligence:</p>
        {/* <img src={img3.src} className={classes.main_img} /> */}

        <p className={classes.blog_para}>
          Artificial Intelligence plays a specific role in the real estate
          sector by transforming sales and marketing strategies because through
          immersive technology they can easily show off commercial sites and
          developing societies. The real estate agents aim to commercialize the
          potential of virtual reality and augmented reality technology and sell
          property development projects. Many artificial intelligence tools make
          the process run effectively like investors analytics set accurate
          growth and income goals and through predictor analysis, they can
          assess risk and more focus on profitable investment. According to the
          research estimated virtual reality market in real estate will generate
          $2.6 billion by 2025. (The global Real Estate Market Is Transforming
          Through AR/VR Technology 2022)
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Data analytics:</p>
        <img src={img3.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Over the last decade, traditional business models shifted to
          technological mode and now they use data analytics prediction to
          discover customers&#39; desires, wants, needs, and trends and
          understand the state of the industry. To target the right customers,
          it is essential for real estate agencies need to know who their target
          audience is, and what is the right time to sell and buy they can
          target their customers with the appropriate sites but also position
          their properties most efficiently. Using data analytics would be best
          for real estate developers to pick out trends in customer behavior.
          This is important to ensure customer return because enables agents to
          target their right customer with the best-suited services and products
          as well as reduce marketing efforts to the wrong market section.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Use of immersive marketing in print media marketing
        </p>
        {/* <img src={img3.src} className={classes.main_img} /> */}

        <p className={classes.blog_para}>
          The use of immersive marketing to create innovative marketing
          strategies is definitely an up and coming trend. However, ending the
          debate on the insignificance of print media in today&#39;s age; we
          believe immersive technology can be used in print media too. For
          instance real estate agencies can publish augmented reality enabled
          print ads that display an interactive 3D model of different projects,
          societies and sites when a buyer points the access through their phone
          camera towards the advertisement. Such ads can be posted in newspapers
          or on billboards and news later. Similarly real estate agencies can
          create augmented reality enabled brochures, pamphlets to showcase
          their properties. All publishers and customers would appreciate the
          insight from such a campaign as it shows your achievements and
          commitment to the business.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          Advancement of internet technology:
        </p>
        {/* <img src={img3.src} className={classes.main_img} /> */}

        <p className={classes.blog_para}>
          With the advancement of technology to the point of making homes smart,
          real estate agencies attract customers with internet-ready homes
          instead of being satisfied with simple accommodations for a house. Now
          real estate agents will use the internet of technology for site
          searches. The practice of browsing the internet to search for their
          perfect home will be replaced by a phone application it will
          automatically answer clients&#39; concerns and queries. This means
          smart home technology is changing the way homeowners view their
          property.
        </p>

        <p className={classes.blog_para}>
          Our interface is designed with the integration of the technologies
          mentioned above to give clients the ultimate digital experience. Being
          a one of a kind webpage, we offer you an insight into your potential
          investments in a way that engages you from the comfort of your current
          space. We aim to contribute to a new era of sustainable growth by
          inaugurating technologies in Pakistan&#39;s real estate market that
          have never been seen before!
        </p>
      </div>

      {/* <div className={classes.section}>
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
      </div> */}
    </>
  );
}

export default Blog3;
