import React from "react";
import NavBar from "./NavBar";
import MainLayout from "./MainLayout";

class HandlerConteiner extends React.Component {
  constructor() {
    super();
    this.state = {
      tituloMainLaylout: "One of a 1.",
      h2: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(value) {
    console.log("Llego al changeHandler de HandlerControler");
    this.setState({ tituloMainLaylout: "One of a 2.", h2: value });
    if (value != undefined) {
      return <h2>Hola</h2>;
    }
  }

  render() {
    return (
      <div>
        <NavBar onChange={this.changeHandler} />
        <MainLayout titulo={this.state.tituloMainLaylout} h2={this.state.h2} />
      </div>
    );
  }
}

export default HandlerConteiner;
