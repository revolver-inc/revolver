import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const ProductSquare = ({ product }) => {
  const img = product.productImg.relativePath
  return (
    <div className="product-square">
      <Link to={`/products/${product.name}`}>
        <div>
          <Image name={img} />
        </div>
        <h4>{product.title}</h4>
        <h5>{product.subtitle}</h5>
      </Link>
    </div>
  )
}

export default ProductSquare
