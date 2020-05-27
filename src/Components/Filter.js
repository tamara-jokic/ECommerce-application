import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../Actions/karateActions";

class Filter extends Component {
  // constructor(props) {
  //   this.state = {
  //     products: [],
  //   };
  // }
  // componentDidMount() {
  //   Axios.get("http://localhost:5000/api/fetchKarate").then((res) => {
  //     this.setState({ ...this.state, products: res.data });
  //   });
  // }
  render() {
    return (
      <div className="row filteer">
        <div className="col-md-4 search">{`Broj pronađenih proizvoda: ${this.props.filteredProducts.length} `}</div>
        <div className="col-md-4 lab">
          <label>
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                console.log(this.props);
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Filter</option>
              <option value="lowestprice">Najjeftinije prvo</option>
              <option value="highestprice">Najskuplje prvo</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.karate,
                  event.target.value
                );
              }}
            >
              <option value="">Veličina</option>
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  karate: state.karate.items,
  filteredProducts: state.karate.filteredItems,
  size: state.karate.size,
  sort: state.karate.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
