import React, { Component } from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="container-about pt-5">
        <BackgroundHeader backgroundHeader="aboutBackground">
          <Banner title="404" subtitle="Page not found">
            <Link to="/" className="btn-primary btn-products">
              Početna
            </Link>
          </Banner>
        </BackgroundHeader>
      </div>
    );
  }
}

export default Error;
