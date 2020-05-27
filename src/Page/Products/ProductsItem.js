import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../../Components/util";
import { addToCart } from "../../Actions/cartActions";
import { fetchKarate } from "../../Actions/karateActions";

class ProductsItem extends Component {
  componentDidMount() {
    console.log("Tu!");
    this.props.fetchKarate();
  }
  render() {
    const productItems = this.props.karate.map((kproduct) => (
      <div className="col-md-5 prod py-2" key={kproduct.id}>
        <div className="thumbnail text-center">
          <a
            className="card-link"
            href={`#${kproduct.id}`}
            onClick={() => this.props.addToCart(this.props.cartItems, kproduct)}
          >
            <img src={kproduct["img"]} alt={kproduct.title} className="w-100" />
            <p className="product-title">{kproduct.title}</p>
          </a>
          <p className="product-text">{kproduct.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <b className="price-text">{util.formatCurrency(kproduct.price)}</b>
            <button
              className="btn btn-primary btn-products"
              onClick={() =>
                this.props.addToCart(this.props.cartItems, kproduct)
              }
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
      </div>
    ));
    return <>{productItems}</>;
  }
}
const mapStateToProps = (state) => ({
  karate: state.karate.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchKarate, addToCart })(
  ProductsItem
);
