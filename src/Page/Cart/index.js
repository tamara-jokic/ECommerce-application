import React, { Component } from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import Basket from "../../Components/Basket";

class Cart extends Component {
  render() {
    return (
      <div className="cart-container pt-5">
        <BackgroundHeader backgroundHeader="cartBackground">
          <Banner title="Korpa">
            <Link to="/products" className="btn-primary btn-products">
              Proizvodi
            </Link>
          </Banner>
        </BackgroundHeader>
        <Basket />
      </div>
    );
  }
}
export default Cart;
