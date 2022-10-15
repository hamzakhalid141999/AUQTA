/* eslint-disable */

import React from "react";
import classes from "./blogCard.module.css";
import blog_pic from "../../../../../public/assets/blog_picture.png";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blogId, blogName, image, title }) {
  return (
    <Link href={"/blogs/" + blogId + "+" + blogName}>
      <div className={classes.card_body}>
        <div className={classes.image_container}>
          <Image
            layout="fill"
            className={classes.blog_picture}
            src={image}
            alt="picture"
          />
        </div>
        <p className={classes.time}>12 Nov 2021</p>
        <h1 className={classes.title}>{title}</h1>
        {/* <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p> */}
        <div className={classes.btn}>
          <p>Read More</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
