import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class ContactPageTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", message: ""}
  }
// const ContactPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, heading, subheading, description, featuredImage } = frontmatter

  return (
    <Layout>
      <SEO title="Home" keywords={[`Game Creator's Space`, `GCS`, `NAIT`]} />
      <section className="contact-blurb">
        <h1>Contact Us</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        netlify-honeypot="no-robots-allowed"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p class="hidden">
          <label>
            Do not fill this out:{" "}
            <input name="no-robots-allowed" />
          </label>
        </p>
      </form>
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
