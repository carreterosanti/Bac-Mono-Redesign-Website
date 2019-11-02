import React from "react";
import HeaderButton from "./HeaderButton";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(value, options) {
    console.log("Llego al changeHandler de NavBar " + options);
    this.props.onChange(value, options);
  }

  render() {
    return (
      <div className="nav-background">
        <div className="div-buttons-header">
          <HeaderButton labelButton="News" />
          <HeaderButton
            options={this.discoverOptions}
            sendChangeUp={this.changeHandler}
            labelButton="Discover"
          />
          <HeaderButton
            options={this.galleryOptions}
            sendChangeUp={this.changeHandler}
            labelButton="Gallery"
          />
          <HeaderButton labelButton="Configurator" />
          <HeaderButton
            options={this.companyOptions}
            sendChangeUp={this.changeHandler}
            labelButton="Company"
          />
          <HeaderButton labelButton="Clothing" />
          <HeaderButton labelButton="Contact" />
        </div>

        <img
          style={{ paddingRight: "10px" }}
          src="http://www.bac-mono.com/img/logo.png"
          alt="Logo Mono"
        />
      </div>
    );
  }

  discoverOptions = [
    {
      text: "Concept"
    },
    {
      text: "Design"
    },
    {
      text: "Specifications"
    },
    {
      text: "Technical"
    }
  ];

  galleryOptions = [
    {
      text: "The Big Sheed Shoot"
    },
    {
      text: "SpeedHunters"
    },
    {
      text: "BAC meets the Red Arrows"
    },
    {
      text: "Darkroom"
    },
    {
      text: "Studio"
    },
    {
      text: "On the Road"
    },
    {
      text: "Best of Britannis"
    },
    {
      text: "Videos"
    }
  ];

  companyOptions = [
    {
      text: "Mision"
    },
    {
      text: "Who we are"
    },
    {
      text: "Jobs at BAC"
    }
  ];
}

export default NavBar;
