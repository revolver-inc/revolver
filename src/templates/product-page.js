import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductSquare from "../components/ProductSquare"
import ResponsiveSlider from "../components/ResponsiveSlider"
import { cleanProducts } from "../components/SliderData"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

// import BlogRoll from "../components/BlogRoll"

const ProductPageTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { html, frontmatter } = markdownRemark
  let {
    name,
    title,
    subtitle,
    genre,
    year,
    isLocal,
    condition,
    tags,
    mediaUrl,
    productImg,
    productType,
  } = frontmatter

  const products = cleanProducts(allMarkdownRemark.edges).filter(
    prod => prod.name != name
  )

  const tagItems = tags
    .map(tag => {
      console.log(tag.length)
      if (tag.length > 0) return <li key={tag}>{`#${tag.trim()}`}</li>
      return null
    })
    .filter(elt => elt !== undefined)

  if (mediaUrl === " ") mediaUrl = undefined

  return (
    <Layout>
      <SEO
        title={`Revolver | ${title} - ${subtitle}`}
        keywords={[`Revolver`, `${title}`, `${subtitle}`, `${genre}`]}
      />
      <article className="product-page">
        <div className="product-info-container col-md-5">
          <header>
            <h1>{title}</h1>
            <h2>
              {subtitle}
              {year && ` (${year})`}
            </h2>
            <p className="product-genre">{genre}</p>
          </header>
          <div className="product-media">
            <div className="product-img">
              <Image name={productImg.relativePath} />
              {mediaUrl && (
                <a
                  className="btn-media"
                  href={mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    size="5x"
                    className="media-icon"
                  />
                </a>
              )}
            </div>
          </div>
          <div className="product-details">
            {condition && <p className="product-condition">{condition}</p>}
            {isLocal && <p className="product-local-status">Local</p>}
            {tags && (
              <ul className="tag-list">
                <span>Tags: </span>
                {tagItems}
              </ul>
            )}
          </div>
        </div>
        <div className="product-content col-md-7">
          <div className="body">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link to="/locations" className="btn-brown">
              Find Stores
            </Link>
          </div>
        </div>
      </article>
      <aside className="product-slider">
        <h2>Be sure to check out...</h2>
        <ResponsiveSlider>
          {products.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </aside>
    </Layout>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        title
        subtitle
        genre
        year
        isLocal
        condition
        tags
        mediaUrl
        productImg {
          relativePath
        }
        templateKey
        productType
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
      limit: 10
      sort: { fields: id, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            title
            subtitle
            productImg {
              relativePath
            }
            productType
            templateKey
          }
        }
      }
    }
  }
`
