import React, { Component } from "react";
import { ShowCount } from "./show-count";

export class ClassStateFullComp extends Component {
  state = { count: 0, estado: "intacto" };

  render() {
    return (
      <div>
        <ShowCount count={this.state.count} />
        <ShowCount count={this.state.count} />
        <ShowCount count={this.state.count} />
        <ShowCount count={this.state.count} />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1, estado: "clickeado" });
          }}
        >
          Click me!!
        </button>
      </div>
    );
  }
}

export default ClassStateFullComp;
