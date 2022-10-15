import React, { useEffect, useState } from "react";
import classes from "./specificBlog.module.css";
import Image from "next/image";
import img from "../../../public/assets/blog_picture.png";
import BlogCardsSection from "../../../components/screenComponents/blogScreen/blogCardsSection";
import Blog1 from "../../../components/screenComponents/blogScreen/blogs/blog1";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();
  const [blogId, setBlogId] = useState();

  useEffect(() => {
    if (router) {
      setBlogId(router?.query?.id?.split("+")[0]);
    }
  }, [router]);

  return (
    <div className={classes.blog_content_container}>
      <div className={classes.blog_content}>
        {blogId === "1" ? <Blog1 /> : <></>}
      </div>
      <BlogCardsSection isTitle={true} />
    </div>
  );
}

export default Blog;
