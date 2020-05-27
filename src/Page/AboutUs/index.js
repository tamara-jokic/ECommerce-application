import React from "react";
import BackgroundHeader from "../Home/BackgroundHeader";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import About from "./About";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1:
        " Black Belt osnovan je 2020. godine u Podgorici, kao firma za proizvodnju, distribuciju i prodaju opreme za karate sport.Krenulo je skromno ali ambiciozno, sa ciljem da Black Belt postane lider za proizvodnju opreme za karate sport u Crnoj Gori i šire.",
      text2:
        " Black Belt posjeduje sopstvene proizvodne kapacitete, zapošljava 15 radnika, proizvodi više od 60 artikala. Do sada je proizvedeno iprodato preko 1 000 kimona. Black Belt zastupa neke od vodećih svjetskih brendova u proizvodnji opreme za karate, i to: IPON, TOKAIDO, DAX, MIZUNO. Razvijen je sopstveni prodajni sistem i zastupništva u većini zemalja u okruženju (Slovenija, Bosna i Hercegovina, Srbiji, Mađarska). U Crnoj Gori proizvodi Black Belt se prodaju putem veleprodaje, maloprodaje i pouzećem. Ponosno ističemo da smo prvi crnogorski brend koji je dobio sertifikat od Svjetske karate federacije (WKF approved) za sopstveni proizvod.",
      text3:
        "U planu je proširenje broja proizvoda sertifikovanih od strane WKF i razvoj sopstvene Black Belt sportske linije (kimona, štitnici, trenerke, majice, sportska odjeća za mlade). Planira se proširenje zastupništava svjetskih brendova. Black Belt je do sada podržavao brojne humanitarne i sportske akcije, kao i akcije od posebnog interesa za mlade. Kao i do sada Black Belt će, i ubuduće pratiti moderan sportski trend, razvijati proizvode koji zadovoljavaju potrebe svjetskog tržišta, vodeći računa o kvalitetu, rokovima isporuke, zadržati pristupačne cijene i graditi povjerenje!",
    };
  }

  render() {
    const { text1, text2, text3 } = this.state;
    return (
      <div className="container-about pt-5">
        <BackgroundHeader backgroundHeader="aboutBackground">
          <Banner title="O nama">
            <Link to="/" className="btn-primary btn-products">
              Početna
            </Link>
          </Banner>
        </BackgroundHeader>

        <About text1={text1} text2={text2} text3={text3} />
      </div>
    );
  }
}

export default AboutUs;
