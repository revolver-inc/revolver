import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import showdown from "showdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliderData from "../components/SliderData"
import ResponsiveSlider from "../components/ResponsiveSlider"
import ProductSquare from "../components/ProductSquare"

const OldIndexPageTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark, allDataJson } = data
  const { frontmatter } = markdownRemark
  const { title, intro, news } = frontmatter
  const { featuredImage } = intro

  const rawProducts = allMarkdownRemark.edges
  const rawProductLists = allDataJson.edges

  const { featuredData, localData, indieData } = SliderData(
    rawProducts,
    rawProductLists
  )

  const converter = new showdown.Converter()
  const introHtml = converter.makeHtml(intro.introBody)
  const newsHtml = converter.makeHtml(news.body)

  return (
    <Layout>
      <SEO
        title="Revolver - Music, Movies and Pop Culture"
        keywords={[
          `Revolver`,
          `Home`,
          `Music`,
          `Movies`,
          `Pop Culture`,
          `Vinyl`,
          `CDs`,
        ]}
      />
      <section className="home-intro">
        <div className="intro-img">
          <Image className="home-img" name={featuredImage.relativePath} />
        </div>
        <h1 className="secret-h1">{title}</h1>
        <div className="intro-content">
          <h3>{intro.heading}</h3>
          <div
            className="intro-text"
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
          <div className="action-btns">
            <Link to="/trade/" className="btn-green btn-home">
              Learn More
            </Link>
            <Link to="/locations/" className="btn-brown btn-home">
              Find Stores
            </Link>
          </div>
        </div>
      </section>
      {news.newsIsVisible && (
        <section className="news">
          <div className="news-content">
            <h2>{news.newsHeading}</h2>
            <div dangerouslySetInnerHTML={{ __html: newsHtml }} />
          </div>
          <Image name={news.newsImage.relativePath} />
        </section>
      )}

      <section className="home-slider">
        <h3>Featured Items</h3>
        <ResponsiveSlider>
          {featuredData.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </section>

      <section className="home-slider">
        <h3>Local Talent</h3>
        <ResponsiveSlider>
          {localData.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </section>

      <section className="home-slider">
        <h3>Indie Corner</h3>
        <ResponsiveSlider>
          {indieData.map(product => (
            <ProductSquare key={product.name} product={product} />
          ))}
        </ResponsiveSlider>
      </section>
    </Layout>
  )
}

export default OldIndexPageTemplate

export const pageQuery = graphql`
  query OldIndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        intro {
          heading
          introBody
          featuredImage {
            name
            relativePath
          }
        }
        news {
          newsHeading
          newsImage {
            relativePath
          }
          newsIsVisible
          body
        }
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
