import React from "react";
import HeaderButton from "./HeaderButton";

export default function NavBar() {
  return (
    <div className="nav-background">
      <div className="div-buttons-header">
        <HeaderButton labelButton="News" />
        <HeaderButton labelButton="Discover" />
        <HeaderButton labelButton="Gallery" />
        <HeaderButton labelButton="Configurator" />
        <HeaderButton labelButton="Company" />
        <HeaderButton labelButton="Clothing" />
        <HeaderButton labelButton="Contact" />
      </div>

      <img src="http://www.bac-mono.com/img/logo.png" alt="Logo Mono" />
    </div>
  );
}
