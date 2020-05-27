import React from "react";
// import { Row, Col } from "reactstrap";

const UsersAdministration = ({ propsUsers }) => {
  return (
    <div className="col-md-5 user-admin py-2">
      <div className="thumbnail text-center">
        {/* <img
          src={propsProducts["img"]}
          alt={propsProducts.title}
          className="w-100"
        /> */}
        <p className="product-title">Korisničko ime: {propsUsers.user}</p>

        <p className="product-text">E-mail: {propsUsers.email}</p>
        <p className="product-text">Lozinka: {propsUsers.password}</p>

        {/* <div className="d-flex justify-content-between align-items-center">
          <b className="price-text">{propsUsers.price}€</b>
        </div> */}
      </div>
    </div>
  );
};

export default UsersAdministration;
