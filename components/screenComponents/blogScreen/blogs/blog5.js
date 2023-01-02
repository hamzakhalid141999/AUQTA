import React from "react";
import classes from "./blog1.module.css";
import img1 from "../../../../public/assets/blogs/blog5/img1.jpeg";
import img2 from "../../../../public/assets/blogs/blog5/img2.jpeg";
import img3 from "../../../../public/assets/blogs/blog5/img3.jpeg";
import img4 from "../../../../public/assets/blogs/blog5/img4.jpeg";

function Blog5() {
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>
          The adaptation of technology in Pakistan
        </h1>
        <img src={img1.src} className={classes.main_img} />

        {/* &#39; */}

        <p className={classes.blog_para}>
          Technology has an immense impact on organizations all over the world.
          With the help of technology, organizations become capable of improving
          their products and services. In addition to this, they are able to
          develop their operations in a way that has never been seen before.
          Although, an adaptation to technology isn’t easy and usually
          organizations meet with a lot of resistance from employees who are
          comfortable doing their work in a particular and traditional way that
          they are not willing to change. Technological adaptation provides a
          root to improvement in economic development, infrastructure, and
          health services for all economies. The development of science and
          technology in Pakistan plays an important role in the reform of the
          poverty level and technological adaptation can be considered an engine
          of growth.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>Technology adaptation</p>
        <img src={img2.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Technology adaptation describes the process of enhancement of an
          innovation or product according to the psychological and demographic
          characteristics of a defined adaptive group of people.
        </p>

        <p className={classes.blog_para}>
          In simple words whenever an organization launches innovative
          technology into the work culture it should take time because every
          employee is not the same. Technology should be customized at the time
          of launch due to the different types of employees in the organization,
          to gain maximum profit. Mostly these organizations have driven to
          implement new technologies and build new standards at the time of
          launch. This helps them treat employees well, minimize losses, and
          attain adequate return on investment. For businesses, development
          innovators develop software and digital technology, which can help
          investors to discover appropriate customers for their products and
          service. It can also help any business to understand the impact of
          digital technology in the industry. Those businesses that can identify
          market and technology trends, for instance, can adapt technology
          before their competitors. This will often result in a competitive
          advantage for those businesses. Raising a proper technology adaptation
          program that promotes change increases the rate of investment (ROI),
          and minimizes resistance. For instance, in Pakistan companies need to
          understand the different adapter groups that their employees fall
          under which are
        </p>
      </div>

      <div className={classes.section}>
        {/* <p className={classes.subheading}>Augmented Reality (AR):</p> */}
        <img src={img3.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          - 13.5% of employees are early adapters in Pakistan. These employees
          care about their progress in their careers. They enhance the
          reputation of their organization and make a good impact in the market.
          These employees are usually found in the company’s top hierarchy and
          invest in whatever takes to help the company succeed.
        </p>

        <p className={classes.blog_para}>
          - 2.5% of the company employees are innovating individuals. These
          individuals adopt new technologies in their workplace. They are
          risk-takers and frequently use different technologies in their
          personal lives as well.
        </p>

        <p className={classes.blog_para}>
          - 34% of employees are the early majority who are new to adopt the
          technology. These employees are middle-line managers; these employees
          are slower in adapting to new technologies. They wait and observe how
          new technology changes the environment if the environment is higher up
          after adaptation then they commit to using these technologies.
        </p>

        <p className={classes.blog_para}>
          - 34% of employees are considered as the late majority because they
          are sceptical about new technologies and innovation. They learn to
          adapt when the organization almost completely using those
          technologies. Mostly they are seniors and older in age and working in
          a company for a long period.
        </p>

        <p className={classes.blog_para}>
          6% of employees are known as laggards, they focus on innovation vs
          traditions. They use technologies in two different scenarios:
        </p>

        <p className={classes.blog_para}>
          1. They are forced to use technologies and would be penalized for not
          using them.
        </p>

        <p className={classes.blog_para}>
          2. There is no alternative available to the tasks done without using
          new technology.
        </p>
      </div>

      <div className={classes.section}>
        <p className={classes.subheading}>
          A tailor-made approach to adaptation technology:
        </p>
        <img src={img4.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          It should be clear that “one size fits everywhere” is not applicable.
          For an organization to successfully adapt new technologies, it must
          customize and tailor its approach to introducing innovations and
          technologies in the workplace. Here we have mentioned a list of
          options that organizations can adopt per user group. These can be used
          to successfully introduce innovation and technology:
        </p>

        <p className={classes.blog_para}>- Awareness videos</p>

        <p className={classes.blog_para}>
          - Online Classes (Covid-19 pandemic)
        </p>

        <p className={classes.blog_para}>- Online training and webinars</p>

        <p className={classes.blog_para}>- Email marketing</p>

        <p className={classes.blog_para}>- Augmented Reality</p>

        <p className={classes.blog_para}>
          For every sector of Pakistan to get the most value from the technology
          they invest in; they need to make sure they launch innovations in the
          best way that entices employees to adopt it as fast as possible.
        </p>

        <p className={classes.blog_para}>
          Auqta.com will help its users to identify technology trends and
          utilizes technology adaptation tools to bring its users to online real
          estate transactions. Head on over to our page to view the revolution
          that is undertaking the real estate market of Pakistan!
        </p>
      </div>
    </>
  );
}

export default Blog5;
