import React, { Component } from "react";
import Slider from "react-slick";
// import ButtonArrow from "../../Components/ButtonArrow";
import ArrowLeft from "../../images/arrow-left-slider.svg";
import ArrowRight from "../../images/arrow-right-slider.svg";
import { connect } from "react-redux";
import { fetchSports } from "../../Actions/sportsAction.js";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "9.38%",
        height: "100%",
        backgroundImage: `url(${ArrowRight}), linear-gradient(269deg, rgba(245, 245, 245, 1) 28%, rgba(245, 245, 245, 0.93) 61%, rgba(245, 245, 245, 0) 93%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "9.38%",
        left: "-9.5%",
        height: "100%",
        backgroundImage: `url(${ArrowLeft})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    />
  );
}

class Sports extends Component {
  componentDidMount() {
    this.props.fetchSports();
  }
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      draggable: true,
      speed: 500,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    const { popular } = this.props;
    const sliderBody = popular.map((pop, index) => {
      return (
        <div className="sports-div" key={index}>
          <img src={pop["img"]} alt={pop.text.title} />
          <div className="sports-text-div">
            <h3>{pop.text.title}</h3>
            <p>{pop.text.body}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="sports">
        <div className="sports-wrapper">
          <div className="sports-header">
            <h2 className="sports-heading">Najtraženije</h2>
            <span className="button-arrow-wrapper">
              {/* <ButtonArrow
                text="Ostali proizvodi"
                fontSize="18px"
                link="/products"
              ></ButtonArrow> */}
            </span>
          </div>

          <Slider {...settings}>{sliderBody}</Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popular: state.popular.items,
});

export default connect(mapStateToProps, { fetchSports })(Sports);
