/* eslint-disable */
import React, { useEffect, useState } from "react";
import classes from "./accordionSection.module.css";
import Faq from "react-faq-component";

function AccordionSection() {
  const AnswerSection = () => {
    return (
      <>
        <div className={classes.answer_section}>
          <div className={classes.divider} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </>
    );
  };

  const data = {
    rows: [
      {
        title: "QUESTION NUMBER 1",
        content: <AnswerSection />,
      },
      {
        title: "QUESTION NUMBER 2",
        content: <AnswerSection />,
      },
      {
        title: "QUESTION NUMBER 3",
        content: <AnswerSection />,
      },
      {
        title: "QUESTION NUMBER 4",
        content: <AnswerSection />,
      },
    ],
  };

  return (
    <div className={classes.accordion_section}>
      <div className={classes.accordion_content_section}>
        <h1>FAQ</h1>
        <Faq
          styles={{
            titleTextColor: "#0068ed",
            rowTitleColor: "#0068ed",
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default AccordionSection;
