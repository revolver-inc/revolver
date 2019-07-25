import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const titleStyle = {
  fontWeight: 400,
}

const subTitleStyle = {
  fontWeight: 300,
}

const maxStrLen = 24

// Limit string length to 24 characters, if not add ellipsis
function trimString(str, maxLen) {
  return str.length > maxLen ? str.substring(0, maxLen - 3) + "..." : str
}
const ProductSquare = ({ product }) => {
  const img = product.productImg.relativePath
  const title = trimString(product.title, maxStrLen)
  const subtitle = trimString(product.subtitle, maxStrLen)

  return (
    <div className="product-square">
      <Link to={`/products/${product.name.toLowerCase()}`}>
        <div className="img-container">
          <Image name={img} />
        </div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </Link>
    </div>
  )
}

export default ProductSquare
