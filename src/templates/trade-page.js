import React from "react"
import { Link, graphql } from "gatsby"
import showdown from "showdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Accordion from "../components/accordion"

//Function to convert markdown string to HTML
function convertMarkdown(str) {
  const converter = new showdown.Converter()
  return converter.makeHtml(str)
}

const TradePageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  // const { title } = frontmatter
  const { title, tradeFAQ, headingBlurb } = frontmatter

  return (
    <Layout>
      <SEO
        title="Revolver - Trade"
        keywords={[
          `Revolver`,
          `Music`,
          `Movies`,
          `Pop Culture`,
          `Trade`,
          `Sell`,
          `Vinyl`,
          `Records`,
        ]}
      />
      <header className="trade-header row">
        <div className=" col-md-12">
          <h1>{title}</h1>
          <p>{headingBlurb}</p>
        </div>
      </header>
      <div className="trade-faq">
        <h2>Trade F.A.Q.</h2>
        <div className="trade-accordion">
          <Accordion title="Hey David! What's cookin?" content="Not Much" />
        </div>
      </div>
      <section className="trade-guidelines">
        <h2>Trade Guidelines</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export default TradePageTemplate

export const pageQuery = graphql`
  query TradePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "trade-page" } }) {
      html
      frontmatter {
        title
        tradeFAQ
        headingBlurb
      }
    }
  }
`
