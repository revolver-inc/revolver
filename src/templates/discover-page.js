import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import BlogRoll from "../components/BlogRoll"

const DiscoverPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, heading, subheading, description, featuredImage } = frontmatter

  return (
    <Layout>
      <SEO
        title="Revolver - Discover"
        keywords={[
          `Revolver`,
          `Discover`,
          `Vinyl`,
          `Movies`,
          `Merch`,
          `Music`,
          `Records`,
          `CDs`,
        ]}
      />
      <section className="home-intro">
        <Image name="record-store.png" />
        <h1>Discover</h1>
        <div className="discover-blurb">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  )
}

export default DiscoverPageTemplate

export const pageQuery = graphql`
  query DisoverPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
