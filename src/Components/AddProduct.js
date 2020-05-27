import React from "react";
import MainHeading from "./MainHeading";
import Cancel from "../images/cancel.svg";
import InputText from "./InputText";
import UseField from "../Hooks/useField";
import ButtonRadius from "./ButtonRadius";
import TextArea from "./TextArea";
import makeProduct from "../Actions/adminAction";
import { connect } from "react-redux";

const AddProduct = (props) => {
  const [title, changeTitle] = UseField("");
  const [description, changeDescription] = UseField("");
  const [availableSizes, changeAvailableSizes] = UseField("");
  const [price, changePrice] = UseField("");

  const onSubmitHandler = () => {
    const payload = {
      title: title,
      description: description,
      availableSizes: availableSizes,
      price: price,
      img: "src/images/karate1.jpg",
    };
    props.makeProduct(payload);
    props.close();
  };

  return (
    <div className="add-product-modal">
      <div className="add-product-modal__heading">
        <span></span>
        <MainHeading text="Novi Proizvod" style={{ flex: 1 }} />
        <img src={Cancel} alt="cancel_button" onClick={props.close} />
      </div>
      <div className="add-product-modal__content">
        <div className="content-title">
          <InputText
            label="Naslov"
            value={title}
            onchange={changeTitle}
            type="text"
          />
          <InputText
            label="Velicina"
            value={availableSizes}
            onchange={changeAvailableSizes}
            type="text"
          />
          <InputText
            label="Cijena"
            value={price}
            onchange={changePrice}
            type="text"
          />
        </div>
        <div className="content-body">
          <TextArea placeholder="Opis" onchange={changeDescription} />
        </div>
      </div>
      <div className="add-product-modal__footer">
        <ButtonRadius text="Dodaj" onclick={onSubmitHandler} />
      </div>
    </div>
  );
};

export default connect(null, { makeProduct })(AddProduct);
