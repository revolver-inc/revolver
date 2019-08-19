import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactBackground from "../components/ContactBackground"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", email: "", subject: "", message: "" }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  ContactForm = () => {
    return (
      <div className="form-container">
        <form
          name="the-contact-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="no-robots-allowed"
          onSubmit={this.handleSubmit}
          action="/thanks/"
        >
          <input type="hidden" name="form-name" value="the-contact-form" />
          <p className="hidden">
            <label>
              Do not fill this out:{" "}
              <input name="no-robots-allowed" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            Your Name:
            <br />
            <input type="text" name="name" onChange={this.handleChange} />
          </p>
          <p>
            Email:
            <br />
            <input type="email" name="email" onChange={this.handleChange} />
          </p>
          <p>
            Subject:
            <br />
            <input type="text" name="subject" onChange={this.handleChange} />
          </p>
          <p>
            Message:
            <br />
            <textarea name="message" onChange={this.handleChange} />
          </p>
          <p>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </p>
        </form>
      </div>
    )
  }
  // const ContactPageTemplate = ({ data }) => {
  render() {
    const { markdownRemark } = this.props.data
    const { html } = markdownRemark

    return (
      <Layout>
        <SEO
          title="Contact Us - Revolver"
          keywords={[
            `Revolver`,
            `Contact Us`,
            `Help`,
            `Music`,
            `Movies`,
            `Pop Culture`,
            `Records`,
            `CDs`,
            `Vinyl`,
            `Trade`,
            `Sell`,
          ]}
        />
        {/* <div className="contact-page"> */}
        <ContactBackground className="contact-page">
          <section className="contact-blurb">
            <h1>Contact Us</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </section>
          <this.ContactForm />
        </ContactBackground>
      </Layout>
    )
  }
}

export default ContactPageTemplate

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
