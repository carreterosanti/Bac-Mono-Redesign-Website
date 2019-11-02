import React from "react";

export default function BottomFotoHomeButtom(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        style={{ height: "35px", width: "35px" }}
        src={
          props.tipo === "brochure"
            ? require("./images/brochure-icon.png")
            : require("./images/car-icon.png")
        }
        alt="Brochure Icon"
      />
      <h2
        style={{
          fontWeight: 400,
          fontSize: "18px",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "45px",
          color: props.color
        }}
      >
        {props.text}
      </h2>
    </div>
  );
}
