import React from "react";
import Image from "../../images/home.jpg";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="text">
        <div className="text-container">
          <h2 className="header">Naša priča</h2>

          <div className="paragraph">
            <div>
              <p> {props.text1}</p>
              <p> {props.text2}</p>
              <p>{props.text3}</p>
            </div>
          </div>
          <div className="button-container"></div>
        </div>
      </div>
      <div className="images">
        <img src={Image} alt="photo" />
      </div>
    </div>
  );
};

export default About;
