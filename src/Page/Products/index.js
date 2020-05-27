import React, { useEffect, useState } from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import ProductsItem from "./ProductsItem";
import Filter from "../../Components/Filter";
import ModalWrapper from "../../Components/ModalWrapper";
import useToggle from "../../Hooks/useToggle";
import { connect } from "react-redux";
import { fetchKarate } from "../../Actions/karateActions";
import Axios from "axios";
// import AddProduct from "../../Components/AddProduct";
const Products = (props) => {
  // const { karate } = props;
  useEffect(() => {
    props.fetchKarate();
  }, []);

  return (
    <div className="products-container pt-5">
      <BackgroundHeader backgroundHeader="productsBackground">
        <Banner title="Proizvodi" subtitle="Proizvodi po WKF standardu">
          <Link to="/" className="btn-primary btn-products">
            Početna
          </Link>
        </Banner>
      </BackgroundHeader>
      {/* <h1></h1>
        <hr /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Filter />
            <hr />
            <div className="row">
              <ProductsItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  karate: state.karate.items,
});

export default connect(mapStateToProps, { fetchKarate })(Products);
