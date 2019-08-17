import React from "react"
import { graphql } from "gatsby"
import showdown from "showdown"

import Layout from "../components/layout"
import FeatureSlider from "../components/FeatureSlider"
import FeaturedItem from "../components/FeaturedItem"
import ProductSquare from "../components/ProductSquare"
import ResponsiveSlider from "../components/ResponsiveSlider"
import SEO from "../components/seo"
import SliderData from "../components/SliderData"

const DiscoverPageTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark, allListsJson } = data
  const { frontmatter } = markdownRemark
  const { title, heading } = frontmatter

  const rawProducts = allMarkdownRemark.edges
  const rawProductLists = allListsJson.edges
  const { featuredData, localData, indieData } = SliderData(
    rawProducts,
    rawProductLists
  )

  const converter = new showdown.Converter()

  return (
    <Layout>
      <SEO
        title="Locations"
        keywords={[
          `Revolver`,
          `Discover`,
          `Music`,
          `Movies`,
          `Pop Culture`,
          `Records`,
          `CDs`,
          `Vinyl`,
          `Trade`,
          `Sell`,
        ]}
      />

      <section className="discover-intro">
        <h1 className="discover-title">{title}</h1>
        <p>{heading}</p>
      </section>

      <section className="discover-featured">
        <div className="main-slider-container">
          <h2>Featured Items</h2>
          <FeatureSlider>
            {featuredData.map(product => (
              <FeaturedItem
                key={product.name}
                product={product}
                converter={converter}
              />
            ))}
          </FeatureSlider>
        </div>
      </section>

      <section className="discover-slider">
        <h2>Local Talent</h2>
        <ResponsiveSlider>
          {localData.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </section>

      <section className="discover-slider">
        <h2>Indie Corner</h2>
        <ResponsiveSlider>
          {indieData.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </section>
    </Layout>
  )
}

export default DiscoverPageTemplate

export const pageQuery = graphql`
  query DisoverPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "discover-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          excerpt(format: HTML)
          frontmatter {
            name
            title
            subtitle
            useBlurb
            blurb
            productImg {
              relativePath
            }
            templateKey
          }
        }
      }
    }
    allListsJson {
      edges {
        node {
          featuredList {
            product
          }
          indieList {
            product
          }
          localList {
            product
          }
        }
      }
    }
  }
`
