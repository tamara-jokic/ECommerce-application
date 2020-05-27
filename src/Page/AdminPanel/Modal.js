import React from "react";
import { Row, Col, Container } from "reactstrap";
import Cancel from "../../images/cancel.svg";
import InputText from "../../Components/InputText";
import UseField from "../../Hooks/useField";
import TextArea from "../../Components/TextArea";
import ButtonRadius from "../../Components/ButtonRadius";
import { makeProduct } from "../../Actions/adminAction";
import { connect } from "react-redux";

const Modal = (props) => {
  const { handleClose, show } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [title, changeTitle] = UseField("");
  const [description, changeDescription] = UseField("");
  const [availableSizes, changeSize] = UseField("");
  const [price, changePrice] = UseField("");

  const onSubmit = () => {
    const product = {
      title: title,
      img: "src/images/karate7.jpg",
      description: description,
      availableSizes: availableSizes,
      price: price,
    };

    props.makeProduct(product);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <Container className="modal-main">
        <Row>
          <Col md="10">
            <h1>Dodaj proizvod</h1>
          </Col>
          <Col md="2" className="end">
            <img src={Cancel} alt="cancel_button" onClick={handleClose} />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Naslov proizvoda"
              value={title}
              onchange={changeTitle}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Opis"
              value={description}
              onchange={changeDescription}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Velicina"
              value={availableSizes}
              onchange={changeSize}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Cijena"
              value={price}
              onchange={changePrice}
              type="email"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={{ size: 2, offset: 5 }}>
            <ButtonRadius text="Dodaj" onclick={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { makeProduct })(Modal);
