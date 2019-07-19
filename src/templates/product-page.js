import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

// import BlogRoll from "../components/BlogRoll"

const ProductPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const {
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

  return (
    <Layout>
      <SEO
        title={`Revolver | ${title} - ${subtitle}`}
        keywords={[`Revolver`, `${title}`, `${subtitle}`, `${genre}`]}
      />
      <article className="product">
        <header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p className="product-genre">{genre}</p>
        </header>
        <div className="product-media">
          <Image name={productImg.relativePath} />
          {condition && <p className="product-condition">{condition}</p>}
          {mediaUrl && (
            <a className="btn-media" href={mediaUrl}>
              <FontAwesomeIcon icon={faPlayCircle} className="media-icon" />
            </a>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
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
            templateKey
          }
        }
      }
    }
  }
`
