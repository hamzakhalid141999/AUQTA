import React from "react";
import AccordionSection from "../../components/screenComponents/faqScreen/accordionSection";
import FirstSection from "../../components/screenComponents/faqScreen/firstSection";
import classes from "./faq.module.css";

function FAQ() {
  return (
    <div className={classes.faq_section}>
      <FirstSection />
      <AccordionSection />
    </div>
  );
}

export default FAQ;
