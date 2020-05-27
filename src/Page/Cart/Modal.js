import React from "react";
import { Row, Col, Container } from "reactstrap";
import Cancel from "../../images/cancel.svg";
import InputText from "../../Components/InputText";
import UseField from "../../Hooks/useField";
import ButtonRadius from "../../Components/ButtonRadius";
import { makeShipping } from "../../Actions/shippingAction";
import { connect } from "react-redux";

const Modal = (props) => {
  const { handleClose, show } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [name, changeName] = UseField("");
  const [address, changeAddress] = UseField("");
  //   const [city, changeCity] = UseField("");
  //   const [country, changeCountry] = UseField("");
  const [number, changeNumber] = UseField("");
  const [card, changeCard] = UseField("");
  const [code, changeCode] = UseField("");
  const [date, changeDate] = UseField("");

  const onSubmit = () => {
    const shipping = {
      name: name,
      address: address,
      //   city: city,
      //   country: country,
      number: number,
      card: card,
      code: code,
      date: date,
    };

    props.makeShipping(shipping);
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <Container className="modal-mainmain">
        <Row>
          <Col md="10">
            <h1>Završi kupovinu proizvoda</h1>
          </Col>
          <Col md="2" className="end">
            <img src={Cancel} alt="cancel_button" onClick={handleClose} />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Ime i prezime"
              value={name}
              onchange={changeName}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Adresa"
              value={address}
              onchange={changeAddress}
              type="email"
            />
          </Col>
        </Row>
        {/* <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Grad"
              value={city}
              onchange={changeCity}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Zemlja"
              value={country}
              onchange={changeCountry}
              type="email"
            />
          </Col>
        </Row> */}
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Kontakt telefon"
              value={number}
              onchange={changeNumber}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Broj kartice"
              value={card}
              onchange={changeCard}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Kod"
              value={code}
              onchange={changeCode}
              type="email"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md="6" className="text_center">
            <InputText
              label="Datum isticanja kartice"
              value={date}
              onchange={changeDate}
              type="email"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={{ size: 3, offset: 5 }}>
            <ButtonRadius text="Kupi" onclick={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { makeShipping })(Modal);
