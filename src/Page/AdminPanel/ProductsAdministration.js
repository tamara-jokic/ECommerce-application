import React from "react";
// import { Row, Col } from "reactstrap";

const ProductsAdministration = ({ propsProducts }) => {
  return (
    <div className="col-md-5 product-admin py-2">
      <div className="thumbnail text-center">
        <img
          src={propsProducts["img"]}
          alt={propsProducts.title}
          className="w-100"
        />
        <p className="product-title">{propsProducts.title}</p>

        <p className="product-text">{propsProducts.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <b className="price-text">{propsProducts.price}€</b>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdministration;
