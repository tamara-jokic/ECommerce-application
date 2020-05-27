import React from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import Administration from "./Administration";
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="administration">
        <BackgroundHeader backgroundHeader="cartBackground">
          <Banner title="Administracija" subtitle="Proizvoda i Korisnika">
            <Link to="/" className="btn-primary btn-products">
              Početna
            </Link>
          </Banner>
        </BackgroundHeader>
        <Administration />
      </div>
    );
  }
}

export default AdminPanel;
