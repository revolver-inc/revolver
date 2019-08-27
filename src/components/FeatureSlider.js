import React, { Component } from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "./image"

export default class ResponsiveSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      render: false,
      slideIndex: 0,
    }
  }
  componentDidMount() {
    this.setState({
      render: true,
    })
  }

  // function goTo(idx){

  // }

  render() {
    const { children, imgArr } = this.props
    const { render } = this.state
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <div className="slick-thumb-img">
              <Image name={imgArr[i]} />
            </div>
          </a>
        )
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (cur, next) => this.setState({ slideIndex: next }),
    }
    if (render) {
      return (
        <div>
          <Slider {...settings}>{children}</Slider>
          <div className="slider-counter">{`${this.state.slideIndex + 1}/${
            children.length
          }`}</div>
        </div>
      )
    }
    return null
  }
}
