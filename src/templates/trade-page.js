import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import BlogRoll from "../components/BlogRoll"

const TradePageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
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
      <h1>{title}</h1>
      <p>{headingBlurb}</p>
      <div className="trade-faq">
        <h2>Trade F.A.Q.</h2>
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
