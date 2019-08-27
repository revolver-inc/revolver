import React, { Component } from "react"
import { Link } from "gatsby"

import Image from "./image"
import showdown from "showdown"

export default class FeaturedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      render: false,
      converter: new showdown.Converter(),
    }

    this.getProductText = this.getProductText.bind(this)
  }
  componentDidMount() {
    this.setState({
      render: true,
    })
  }

  getProductText(product) {
    if (product.useBlurb) {
      return this.state.converter.makeHtml(product.blurb)
    } else {
      return product.excerpt
    }
  }
  render() {
    const { render } = this.state

    if (render) {
      const { product } = this.props
      const productImg = product.productImg.relativePath
      const body = this.getProductText(product)
      return (
        <div className="featured-product">
          <div className="product-info">
            <Link to={`/products/${product.name.toLowerCase()}`}>
              <div className="featured-product-img">
                <Image name={productImg} objectFit="contain" />
              </div>
              <h3>{product.title}</h3>
              <h4>{product.subtitle}</h4>
            </Link>
          </div>
          <div className="product-blurb">
            {body && <p dangerouslySetInnerHTML={{ __html: body }} />}
          </div>
        </div>
      )
    }
    return null
  }
}
