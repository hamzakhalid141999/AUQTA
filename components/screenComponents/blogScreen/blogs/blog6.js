import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog6/img1.jpeg";
import img2 from "../../../../public/assets/blogs/blog6/img2.jpeg";
import img3 from "../../../../public/assets/blogs/blog6/img3.jpeg";

function Blog6() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>
          Real Estate Market Potential in Pakistan
        </h1>
        <img src={img1.src} className={classes.main_img} />

        {/* &#39; */}

        <p className={classes.blog_para}>
          Since 2020, Pakistan’s real estate sector suffered due to a lack of
          investors as the covid-19 pandemic situation had led to a difficult
          state of affairs for real estate. A lack of investment meant that the
          prices eventually started to go down. However, the recent market
          trends and customers’ desires regarding real estate have changed
          radically. The real estate traditional trends are now shifting to
          digital and augmented reality in Pakistan.
        </p>

        <p className={classes.blog_para}>
          From what we see today, Pakistan’s real estate sector is growing
          quickly. The major reason behind this increase is the population
          growth trends going up; impacting the market positively. An increase
          in population is leading to an increase in opportunities and demands.
          Due to these facts, a lot of people are open to selling and buying
          property as the trend of purchasing your own house has expanded in
          Pakistan. People prefer purchasing their own homes as opposed to
          relying on rented property. An awareness of buying your own house has
          led to many people working on purchasing their own homes.  
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Potential of Real Estate</p>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          The real estate industry in Pakistan is forecasted to have a year of
          bloom in comparison to previous years due to many reasons such as
          inflation, gold prices, political instability, and an unstable stock
          market, etc. Many overseas Pakistanis usually invest in the form of
          land, considering investing in other businesses is not easy in
          Pakistan. This too ensures that the sector is at ease to experience
          aggressive growth in the future. Lastly, real estate is also a
          rewarding career path for the youth of this country.
        </p>

        <p className={classes.blog_para}>
          As the market becomes more and more saturated with business degrees,
          the real estate business provides an opportunity to extract massive
          growth from Pakistan’s economy. Pakistan’s real estate sector shows
          promise for exponential growth in the future. Considering the huge
          unmet housing demand in Pakistan, conservative estimates put the
          country’s housing backlog at 9 million units, increasing annually at a
          rate of 300,000 units.
        </p>

        <p className={classes.blog_para}>
          In previous years, overseas Pakistanis remained enthusiastic to invest
          in the real estate industry due to outdated laws and regulations. It
          was also required for them to visit in person for transfers and
          allotments. But since 2018, the government has started taking steps to
          encourage overseas investment by introducing digital accounts for easy
          transfer of payments. More so, they have implemented rigid regulations
          on newly marketed real estate projects to prevent fraud. Recently, the
          government has approved the development of a real estate regulatory
          authority which will regulate the real estate sector and ensure
          transparency in transactions.
        </p>

        <p className={classes.blog_para}>
          Pakistan is also experiencing an increase in demand for premium
          housing and secure living areas. Gated communities that offer all
          amenities alongside recreational and third places are gaining immense
          popularity among local and overseas Pakistanis. This is also
          intriguing builders and property development companies to establish
          more of such facilities. These not only boost construction and provide
          housing to a burgeoning population; it also stimulates buying and
          selling of land and revenues for the government.
        </p>

        <p className={classes.blog_para}>
          One significant factor which pushes real estate to the centre of
          Pakistan’s economic future is CPEC (China-Pakistan Economic Corridor).
          Special economic zones will be constructed under the project with
          cities like Multan becoming major hubs of business activity. This will
          generate demand for housing and commercial land development in these
          designated zones. and will ultimately lead to a boost in the real
          estate sector.
        </p>

        <img
          style={{ marginTop: "30px" }}
          src={img3.src}
          className={classes.main_img}
        />

        <p className={classes.blog_para}>
          Real estate has a large potential to become the largest contributor to
          Pakistan’s GDP. An excess of 200 industries come under the umbrella of
          real estate. Growth in this sector will not only solve the housing
          crisis of Pakistan, but it will also create immense employment
          opportunities for the youth of Pakistan.
        </p>

        <p className={classes.blog_para}>
          There are many reasons why real estate shows potential for growth
          through areas such as tourism and CPEC-related development. Pakistan
          should formulate a strategy for tackling the problems which investors
          and buyers are currently facing in the realty market. Transparency and
          regulation of real estate will always remain building blocks for the
          future growth of the realty sector. Auqta.com is a name you can trust
          with all of the above for your real estate needs!
        </p>
      </div>
    </>
  );
}

export default Blog6;
