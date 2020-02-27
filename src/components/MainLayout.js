import React, { Component } from "react";
import HomeSideBarElements from "./HomeSideBarElements";
import ContainerHome from "./home-foto-layout/ContainerHome";

export default function MainLayout(props) {
  const homeSideBarDefaultElements = [
    {
      text: "Latest News",
      srcImg: "./home-foto-layout/images/foto-3-bacmono.jpg"
    },
    {
      text: "We are hiring!",
      srcImg: "./home-foto-layout/images/foto-2-bacmono.jpg"
    },
    {
      text: "Follow us on ",
      srcImg: "./home-foto-layout/images/foto-4-bacmono.jpg",
      srcTwitter: "https://img.icons8.com/color/48/000000/twitter.png"
    }
  ];

  const SideBar = props.showOptions ? (
    <HomeSideBarElements items={props.options} />
  ) : (
    <HomeSideBarElements items={homeSideBarDefaultElements} />
  );

  return (
    <main id="idmainlayout">
      <div id="id-side-bar" className="main-layout-body full-height-minus-nav">
        <div className="div-columna-foto full-height-minus-nav">
          <div
            style={{ backgroundColor: "red", width: "30%", maxHeight: "100%" }}
          >
            {SideBar}
          </div>
          <ContainerHome titulo={props.titulo} />
        </div>
      </div>
    </main>
  );
}
