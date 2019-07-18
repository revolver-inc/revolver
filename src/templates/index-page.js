import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResponsiveSlider from "../components/ResponsiveSlider"

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, heading, subheading, description, featuredImage } = frontmatter

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
        <h1 className="secret-h1">Revolver - Music, Movies and Pop Culture</h1>
        <div className="intro-content">
          <h3>{heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
      <section>
        <ResponsiveSlider />
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
        heading
      }
    }
  }
`
