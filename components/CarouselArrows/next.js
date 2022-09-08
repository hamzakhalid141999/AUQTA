import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import arrow from "../../public/assets/leftArrow.png";
import Image from "next/image";

function next(props) {
  const { className, style, onClick, top } = props;

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-25px",
        top: top ? "50%" : "30%",
        display: "block",
        zIndex: "90",
      }}
    >
      <Image
        src={arrow}
        height={"32"}
        width={"27"}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default next;
