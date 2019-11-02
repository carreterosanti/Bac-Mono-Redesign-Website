import React from "react";
import NavBar from "./NavBar";
import MainLayout from "./MainLayout";

class HandlerConteiner extends React.Component {
  constructor() {
    super();
    this.state = {
      tituloMainLaylout: "One of a Kind.",
      showOptions: false,
      options: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(value, options) {
    console.log("Llego al changeHandler de HandlerControler", options, value);
    this.setState({
      showOptions: value,
      options: options
    });
  }

  render() {
    return (
      <div>
        <NavBar onChange={this.changeHandler} />
        <MainLayout
          titulo={this.state.tituloMainLaylout}
          showOptions={this.state.showOptions}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default HandlerConteiner;
