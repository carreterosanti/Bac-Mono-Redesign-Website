import React from "react";
import HeaderButton from "./HeaderButton";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(value) {
    console.log("Llego al changeHandler de NavBar ");
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="nav-background">
        <div className="div-buttons-header">
          <HeaderButton onMouseOverM={this.changeHandler} labelButton="News" />
          <HeaderButton labelButton={this.state.htmlARenderizar} />
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
}

export default NavBar;
