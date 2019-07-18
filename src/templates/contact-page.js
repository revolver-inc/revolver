import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import BlogRoll from "../components/BlogRoll"

const ContactPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, heading, subheading, description, featuredImage } = frontmatter

  return (
    <Layout>
      <SEO title="Home" keywords={[`Game Creator's Space`, `GCS`, `NAIT`]} />
      <section className="home-intro">
        <Image name="record-store.png" />
        {/* <h1>{title}</h1> */}
        <div className="intro-content">
          <h3>{heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
      {/* <div
        className="main-content"
        dangerouslySetInnerHTML={{ __html: html }}
      /> */}
    </Layout>
  )
}

export default ContactPageTemplate

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
