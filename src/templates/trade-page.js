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
  const { title, tradeFAQ, headingBlurb } = frontmatter

  const testArr = [1, 2, 3, 4, 5, 6]

  const testItems = testArr.map(test => {
    return (
      <li key={test}>
        <Accordion title={test} content={test} />
      </li>
    )
  })

  const faqItems = tradeFAQ.map(tradeItem => {
    return (
      <li key={tradeItem.question}>
        <Accordion title={tradeItem.question} content={tradeItem.answer} />
      </li>
    )
  })

  console.log(tradeFAQ)
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
          `Buy`,
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
          {/* <ul>{faqItems}</ul> */}
          <ul>{testItems}</ul>
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
        tradeFAQ {
          question
          answer
        }
        headingBlurb
      }
    }
  }
`
