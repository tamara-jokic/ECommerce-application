import React from "react";
import MapContainer from "../../Components/MapContainer";

const ContactInfo = (props) => {
  return (
    <div className="contact-info">
      <div className="text">
        <div className="text-container">
          <h2 className="header">Kontakt</h2>

          <div className="paragraph">
            <div>
              <p>Adresa: {props.txt1}</p>
              <p>
                E-mail:
                <a target="_blank" href="#" title="mail" className="mail">
                  blackbelt@gmail.com
                </a>{" "}
              </p>
              <p>Telefon: {props.txt2}</p>
              <p>Mobilni: {props.txt3}</p>
            </div>
          </div>
          <div className="button-container"></div>
        </div>
      </div>
      <div className="images">
        <MapContainer />
      </div>
    </div>
  );
};

export default ContactInfo;
