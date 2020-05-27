import React from "react";
import BackgroundHeader from "./BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Sports from "./Sports";
import Discount from "./Discount";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1:
        "Black Belt osnovan je 2020. godine u Podgorici, kao firma za proizvodnju, distribuciju i prodaju opreme za borilačke sportove.Krenulo je skromno ali ambiciozno, sa ciljem da Black Belt postane lider za proizvodnju opreme za borilačke sportove u Crnoj Gori i šire.",
      text2:
        " Black Belt posjeduje sopstvene proizvodne kapacitete, zapošljava 15 radnika, proizvodi više od 60 artikala. Do sada je proizvedeno iprodato preko 15 000 kimona.",
    };
  }

  render() {
    const { text1, text2 } = this.state;
    return (
      <div className="home pt-5">
        <BackgroundHeader>
          <Banner
            title="Black Belt"
            subtitle="Online prodaja proizvoda za karate sport"
          >
            <Link to="/products" className="btn-primary btn-products">
              {" "}
              Naši proizvodi
            </Link>
          </Banner>
        </BackgroundHeader>
        <Sports />
        <Discount />
        <About text1={text1} text2={text2} />
        <Services />
      </div>
    );
  }
}

export default Home;
