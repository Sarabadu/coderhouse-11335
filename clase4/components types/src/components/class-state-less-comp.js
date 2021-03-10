import React, { Component } from "react";

export class ClassStateLessComp extends Component {
  render() {
    return <p>Hello {this.props.name}!!</p>;
  }
}

export default ClassStateLessComp