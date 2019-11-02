import React from "react";
import ReactDOMServer from "react-dom/server";
import NavOptionsSideBar from "./NavOptionsSideBar";

class HeaderButton extends React.Component {
  /*   headerButtonHandler = () => {
    NavOptionsSideBar([1, 2, 3]);
    const containerMain = document.getElementById("idmainlayout");
    console.log(document.getElementById("idmainlayout"));
  };
 */

  handlerMouseOver = () => {
    console.log(this.props);
    if (this.props.onMouseOverM != undefined) {
      this.props.onMouseOverM(<h2>Hello</h2>);
    }
  };

  render() {
    return (
      <div>
        <a className="header-button" onMouseOver={this.handlerMouseOver}>
          {this.props.labelButton}
        </a>
      </div>
    );
  }
}

export default HeaderButton;
