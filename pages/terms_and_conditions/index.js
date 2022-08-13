import React from "react";
// import AccordionSection from "../../components/screenComponents/faqScreen/accordionSection";
import FirstSection from "../../components/screenComponents/termsConditionsScreen/firstSection/index";
import classes from "./termsConditions.module.css";
import ContentSection from "../../components/screenComponents/termsConditionsScreen/contentSection";

function FAQ() {
  return (
    <div className={classes.terms_section}>
      <FirstSection />
      <ContentSection />
    </div>
  );
}

export default FAQ;
