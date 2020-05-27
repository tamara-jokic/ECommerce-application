import React, { Component } from "react";
import { connect } from "react-redux";
import util from "./util";
import { addToCart, removeFromCart } from "../Actions/cartActions";
import { fetchProducts, makeProduct } from "../Actions/adminAction";
import ButtonRadius from "./ButtonRadius";
import Modal from "../Page/Cart/Modal";
import { Col } from "reactstrap";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    console.log("close");
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { cartItems } = this.props;
    //  const all = this.props.allProducts;
    // const { close } = this.props;

    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Korpa je prazna"
        ) : (
          <div className="cart-title">
            Broj proizvoda u korpi: {cartItems.length}
            <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item["img"]} className="cart-img" />
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <div className="sum">
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
            {/* <button
              onClick={() =>
                alert("Kupovina potvrđena i proslijeđena prodavcu")
              }
              className="btn btn-primary"
            >
              Kupi
            </button> */}
            <Col md={{ size: 4, offset: 4 }}>
              <ButtonRadius
                classes="blue"
                text="Kupi"
                onclick={this.showModal}
              />
            </Col>
            <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  fetchProducts,
  makeProduct,
})(Basket);
