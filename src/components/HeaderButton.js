import React from "react";
import ReactDOMServer from "react-dom/server";
import NavOptionsSideBar from "./NavOptionsSideBar";

class HeaderButton extends React.Component {
  state = {
    colorText: "#FFFFFF"
  };

  handlerMouseOver = () => {
    this.setState({ colorText: "#DE1E00" });
    if (
      this.props.sendChangeUp != undefined &&
      this.props.options != undefined
    ) {
      this.props.sendChangeUp(true, this.props.options);
    }
  };

  handlerMouseLeave = () => {
    this.setState({ colorText: "#FFFFFF" });
    if (
      this.props.sendChangeUp != undefined &&
      this.props.options != undefined
    ) {
      this.props.sendChangeUp(false, []);
    }
  };

  render() {
    return (
      <div>
        <a
          style={{ color: this.state.colorText }}
          className="header-button"
          onMouseOver={this.handlerMouseOver}
          onMouseLeave={this.handlerMouseLeave}
        >
          {this.props.labelButton}
        </a>
      </div>
    );
  }
}

export default HeaderButton;
