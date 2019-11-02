import React from "react";
import TituloFoto from "./TituloFoto.js";
import BottomFotoHomeButtom from "./BottomFotoHomeButtom.js";

export default function ContainerHome(props) {
  return (
    <div className="div-foto-home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeigth: "100%"
        }}
      >
        <TituloFoto text={props.titulo} />
        <div className="crop">
          <img
            style={{ maxWidth: "100%", maxHeigth: "100%" }}
            src="http://www.bac-mono.com/images/galleries/3/images/03_studio_956x540.jpg"
            alt="Bac Mono"
          />
        </div>

        <div className="div-bottom-foto-home">
          <BottomFotoHomeButtom
            tipo="brochure"
            text="Brochure"
            borderColor="white"
            color="black"
          />
          <BottomFotoHomeButtom
            rutaImage="./images/brochure-icon.png"
            text="Configurator"
            color="#DE1E00"
          />
        </div>
      </div>
    </div>
  );
}
