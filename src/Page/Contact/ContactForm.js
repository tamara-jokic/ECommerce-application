import React from "react";
import ButtonRadius from "../../Components/ButtonRadius";
import InputText from "../../Components/InputText";

const ContactForm = () => {
  return (
    <div className="contactform-container">
      <div className="ContactForm container">
        <div className="row">
          <h1>Kontaktirajte nas</h1>
        </div>
        <div className="row form-description">
          <div className="col-11 p-0">
            <p style={{ width: "60%" }}>
              Ukoliko imate neko pitanje, sugestiju ili primjedbu za nas,
              slobodno nam se obratite, a mi ćemo u najkraćem roku odgovoriti.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-sm-12 p-0">
            <InputText label="Ime i prezime" />
          </div>
          <div className="col-md-5 col-sm-12 p-0">
            <InputText label="email" />
          </div>
        </div>
        <div className="row message">
          <InputText label="Poruka" />
        </div>
        <div className="row form-submit">
          <ButtonRadius text="Posalji" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
