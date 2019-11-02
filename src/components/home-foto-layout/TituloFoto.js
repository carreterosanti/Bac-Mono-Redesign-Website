import React from "react";

export default function TituloFoto(props) {
  return (
    <h2
      className="h2-top-foto-home"
      style={{
        textAlign: "center",
        fontWeight: 490,
        fontSize: "50px",
        marginBottom: "20px",
        marginTop: 0
      }}
    >
      {props.text}
    </h2>
  );
}
