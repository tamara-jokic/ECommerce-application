import React from "react";
import MapContainer from "../../Components/MapContainer";

const ContactInfo = (props) => {
  return (
    <div className="contact">
      <div className="text">
        <div className="text-container">
          <h2 className="header">Kontakt</h2>

          <div className="paragraph">
            <div>
              <p> {props.txt1}</p>
              <p>
                {props.txt2}
                <a target="_blank" href="#" title="mail" className="mail">
                  blackbelt@gmail.com
                </a>{" "}
              </p>
              <p>{props.txt3}</p>
              <p>{props.txt4}</p>
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
