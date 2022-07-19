import React, { useEffect, useState } from "react";
import classes from "./layout.module.css";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page[1]);
    }
  }, [router.pathname]);

  return (
    <div className={classes.container}>
      {currentPage === "dashboard" ? (
        <div className={classes.main}>{children}</div>
      ) : (
        <>
          <Navbar />
          <div className={classes.main}>{children}</div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
