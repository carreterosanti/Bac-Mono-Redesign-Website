import React from "react";

export default function HomeSideBarElements(props) {
  const createItems = props.items.map(item => {
    if (item.srcTwitter != undefined) {
      return (
        <div className="home-side-bar-item">
          <img className="img-side-bar" src={item.srcImg} alt="Bac Mono" />
          <div className="text-center-image div-align-horizontal">
            {item.text}
            <img
              style={{
                height: "45px",
                width: "45px",
                marginLeft: "6px",
                marginTop: "5px"
              }}
              src={item.srcTwitter}
              alt="Twitter Icon"
            />
          </div>
        </div>
      );
    } else if (item.srcImg != undefined) {
      return (
        <div className="home-side-bar-item">
          <img className="img-side-bar" src={item.srcImg} alt="Bac Mono" />
          <div className="text-center-image">{item.text}</div>
        </div>
      );
    } else if (item.text != undefined) {
      console.log("Entro al final!");
      return (
        <div className="home-side-bar-item">
          <div>{item.text}</div>
        </div>
      );
    }
  });

  return <div className="home-side-bar-container">{createItems}</div>;
}
