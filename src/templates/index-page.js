import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import BlogRoll from "../components/BlogRoll"

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, heading, subheading, description, featuredImage } = frontmatter

  return (
    <Layout>
      <SEO title="Home" keywords={[`Game Creator's Space`, `GCS`, `NAIT`]} />
      <section>
        <h1>{title}</h1>
      </section>
      <div
        className="main-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
        heading
      }
    }
  }
`
