import React from "react";
import classes from "./findSectionCards.module.css";
import Image from "next/image";

function findSectionCards({
  lower,
  icon,
  title,
  description,
  btn,
  maxWidth,
  minWidth,
  imgWidth,
  imgHeight,
  titleColor,
  subheading,
  link,
  isStart,
}) {
  return (
    <div
      style={{ maxWidth: maxWidth && maxWidth, minWidth: minWidth && minWidth }}
      className={classes.card_bg}
    >
      <div className={classes.card_body}>
        <div
          style={{
            height: imgHeight && imgHeight,
            width: imgWidth && imgWidth,
          }}
          className={classes.icon_container}
        >
          <Image src={icon} layout="fill" className={classes.icon} alt="icon" />
        </div>
        <h2 color="black">{title}</h2>
        <p className={classes.subheading}>{subheading}</p>
        <p>{description}</p>

        <a
          style={{ width: "38%", textAlign: "center" }}
          href={link}
          target={"_blank"}
          rel="noreferrer"
        >
          {isStart && (
            <div className={classes.btn}>
              <p>Start</p>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default findSectionCards;
