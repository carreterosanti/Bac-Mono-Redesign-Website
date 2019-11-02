import React, { Component } from "react";
import HomeSideBarElements from "./HomeSideBarElements";
import ContainerHome from "./home-foto-layout/ContainerHome";

export default function MainLayout(props) {
  const homeSideBarDefaultElements = [
    {
      text: "Latest News",
      srcImg:
        "http://www.bac-mono.com/images/galleries/17/images/mp_diamond9_-_81.jpg"
    },
    {
      text: "We are hiring!",
      srcImg:
        "http://www.bac-mono.com/images/galleries/12/images/speedhunters_3.jpg"
    },
    {
      text: "Follow us on ",
      srcImg:
        "http://www.bac-mono.com/images/galleries/1/images/04_darkroom_back.jpg",
      srcTwitter: "https://img.icons8.com/color/48/000000/twitter.png"
    }
  ];

  return (
    <main id="idmainlayout">
      <div id="id-side-bar" className="main-layout-body full-height-minus-nav">
        <div className="div-columna-foto full-height-minus-nav">
          <div
            style={{ backgroundColor: "red", width: "30%", maxHeight: "100%" }}
          >
            <HomeSideBarElements items={homeSideBarDefaultElements} />
          </div>
          <ContainerHome titulo={props.titulo} />
        </div>
      </div>
    </main>
  );
}
