import React, { Component } from "react";
import Navigation from "./Navigation";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff",
    };
  }
  render() {
    return (
      <div className="nav-wrapper" style={{ background: this.state.color }}>
        <Navigation />

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
