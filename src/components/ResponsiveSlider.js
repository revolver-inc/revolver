import React, { Component } from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class ResponsiveSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      render: false,
    }
  }
  componentDidMount() {
    this.setState({
      render: true,
    })
  }
  render() {
    const { children } = this.props
    const { render } = this.state
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    if (render) {
      return (
        <div>
          <Slider {...settings}>{children}</Slider>
        </div>
      )
    }
    return null
  }
}
