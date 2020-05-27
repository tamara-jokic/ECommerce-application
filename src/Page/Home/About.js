import React from "react";
import Image from "../../images/home.jpg";

import ButtonArrow from "../../Components/ButtonArrow";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="text">
        <div className="text-container">
          <h2 className="header">O nama</h2>

          <div className="paragraph">
            <div>
              <p> {props.text1}</p>
              <p> {props.text2}</p>
            </div>
          </div>
          <div className="button-container">
            <ButtonArrow
              fontSize="1.5rem"
              link="./aboutus"
              text="Saznaj više"
            />
          </div>
        </div>
      </div>
      <div className="images">
        <img src={Image} alt="photo" />
      </div>
    </div>
  );
};

export default About;
