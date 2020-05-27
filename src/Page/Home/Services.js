import React, { Component } from "react";
import Title from "../../Components/Title";
import { FaHandHoldingUsd, FaShippingFast } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <AiFillSafetyCertificate />,
          title: "VRHUNSKI KVALITET",
          info:
            "Najkvalitetniji materijali i način izrade koji garantuje udobnost i dugotrajnost.",
        },
        {
          icon: <FaHandHoldingUsd />,
          title: "PRISTUPAČNE CIJENE",
          info: "Popusti kod narudžbina za klubove i reprezentacije.",
        },
        {
          icon: <FaShippingFast />,
          title: "BRZA DOSTAVA",
          info: "Isporuka u najkraćem mogućem roku. Plaćanje pouzećem.",
        },
      ],
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="Uvjerite se sami" />
        <div className="service-center row">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service col-4">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Services;
