import React from "react";
import MapContainer from "../MapContainer";
// import Logo from "../Logo";

const Footer = (props) => {
  return (
    <div>
      <footer>
        <div className="contact">
          <div className="text">
            <div className="text-container">
              <h2 className="header">Kontakt</h2>

              <div className="paragraph">
                <div>
                  <p> Adresa: Moskovska, Podgorica</p>
                  <p>
                    E-mail:
                    <a target="_blank" href="#" title="mail" className="mail">
                      blackbelt@gmail.com
                    </a>{" "}
                  </p>
                  <p>Telefon: 020 123 123</p>
                  <p>Mobilni: 069 987 654</p>
                </div>
              </div>
              <div className="button-container"></div>
            </div>
          </div>
          <div className="images">
            <MapContainer />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
