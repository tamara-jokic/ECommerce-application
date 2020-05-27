import React from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1: "Moskovska, Podgorica",
      txt2: " 020 123 123",
      txt3: " 069 987 654",
    };
  }

  render() {
    const { txt1, txt2, txt3 } = this.state;
    return (
      <div className="contact-container pt-5">
        <BackgroundHeader backgroundHeader="contactBackground">
          <Banner title="Kontakt">
            <Link to="/" className="btn-primary btn-products">
              Početna
            </Link>
          </Banner>
        </BackgroundHeader>
        <ContactInfo txt1={txt1} txt2={txt2} txt3={txt3} />

        <ContactForm />
      </div>
    );
  }
}

export default Contact;
