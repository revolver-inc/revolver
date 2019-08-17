import React, { Component } from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    const { children } = this.props
    const { render } = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      // beforeChange: (cur, next) => this.setState({ slideIndex: next }),
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
