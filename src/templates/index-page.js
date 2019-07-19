import React from "react"
import { Link, graphql } from "gatsby"
import showdown from "showdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResponsiveSlider from "../components/ResponsiveSlider"
import ProductSquare from "../components/product-square"

const removeEmpty = obj => {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key])
}

function cleanList(li) {
  removeEmpty(li)
  return li
}

function cleanProducts(products) {
  let arr = []
  for (let raw of products) {
    arr.push(raw.node.frontmatter)
  }
  return arr
}

function getLists(productLists) {
  const productArr = []
  for (let edge of productLists) {
    productArr.push(cleanList(edge.node))
  }
  return { ...productArr[0], ...productArr[1], ...productArr[2] }
}

function buildSliderData(prodList, products) {
  let sliderData = []
  for (let item of prodList) {
    let target = item.product
    let found = products.find(elt => elt.name === target)
    sliderData.push(found)
  }
  return sliderData
}

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark, allDataJson } = data
  const { html, frontmatter } = markdownRemark
  const { title, intro, news } = frontmatter
  const rawProducts = allMarkdownRemark.edges
  const rawProductLists = allDataJson.edges

  const products = cleanProducts(rawProducts)
  const productLists = getLists(rawProductLists)
  const { featuredList, localList, indieList } = productLists

  const featuredData = buildSliderData(featuredList, products)
  const localData = buildSliderData(localList, products)
  const indieData = buildSliderData(indieList, products)

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
    allDataJson {
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
