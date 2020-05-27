import React, { Component } from "react";
import Slider from "react-slick";
import ArrowLeft from "../../images/arrow-left-slider.svg";
import ArrowRight from "../../images/arrow-right-slider.svg";
import { connect } from "react-redux";
import { fetchDiscount } from "../../Actions/discountAction.js";

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

class Discount extends Component {
  componentDidMount() {
    this.props.fetchDiscount();
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
    const { discount } = this.props;
    const sliderBody = discount.map((dis, index) => {
      return (
        <div className="discount-div" key={index}>
          <img src={dis["img"]} alt={dis.text.title} />
          <div className="discount-text-div">
            <h2>{dis.text.title}</h2>
            <p>{dis.text.body}</p>
            <h3>{dis.text.oldprice}</h3>
            <h4>{dis.text.price}</h4>
          </div>
        </div>
      );
    });
    return (
      <div className="discount">
        <div className="discount-wrapper">
          <div className="discount-header">
            <h1 className="discount-heading">Akcije</h1>
            <span className="button-arrow-wrapper"></span>
          </div>

          <Slider {...settings}>{sliderBody}</Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  discount: state.discount.items,
});

export default connect(mapStateToProps, { fetchDiscount })(Discount);
