import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { fetchProducts, makeProduct } from "../../Actions/adminAction";
import { connect } from "react-redux";
import ProductsAdministration from "./ProductsAdministration";
import ButtonRadius from "../../Components/ButtonRadius";
import Modal from "./Modal";
import Cancel from "../../images/cancel.svg";

class AdministrationP extends Component {
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
    const all = this.props.allProducts;
    const { close } = this.props;
    return (
      <div className="products-container  pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <Col md={{ size: 2, offset: 10 }}>
                <ButtonRadius
                  classes="blue"
                  text="Dodaj novi proizvod"
                  onclick={this.showModal}
                />
              </Col>
              <Modal
                show={this.state.show}
                handleClose={this.hideModal}
              ></Modal>

              <div className="row">
                {all.map((product) => (
                  <ProductsAdministration
                    propsProducts={product}
                    key={product.id}
                  />
                ))}{" "}
              </div>
              <div className="cancel">
                <img src={Cancel} onClick={close} alt="PhotoX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allProducts: state.productPosts.products.reverse(),
});

export default connect(mapStateToProps, { fetchProducts, makeProduct })(
  AdministrationP
);
