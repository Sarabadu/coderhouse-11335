import React, { Component } from "react";

export class ClassComp extends Component {
  render() {
    return <p>Hello from Class Component {this.props.nombre}</p>;
  }
}

export default ClassComp;
