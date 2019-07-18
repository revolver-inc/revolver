import React from "react"
import { Link, graphql } from "gatsby"
import showdown from "showdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResponsiveSlider from "../components/ResponsiveSlider"

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, intro, news } = frontmatter
  const products = allMarkdownRemark.edges

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
        <Image name="record-store.png" />
        <h1 className="secret-h1">{title}</h1>
        <div className="intro-content">
          <h3>{intro.heading}</h3>
          <div
            className="intro-text"
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
          <div className="action-btns">
            <Link to="/trade" className="btn-green btn-home">
              Learn More
            </Link>
            <Link to="/trade" className="btn-brown btn-home">
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </ResponsiveSlider>
      </section>
    </Layout>
  )
}

export default IndexPageTemplate

export const pageQuery = graphql`
  query IndexPageTemplate {
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
  }
`
