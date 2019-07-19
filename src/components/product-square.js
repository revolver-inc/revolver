import React from "react"
import Image from "./image"

const ProductSquare = ({ product }) => {
  const img = product.productImg.relativePath
  return (
    <div className="product-square">
      <div>
        <Image name={img} />
      </div>
      <h4>{product.title}</h4>
      <h5>{product.subtitle}</h5>
    </div>
  )
}

export default ProductSquare
