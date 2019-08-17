import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <div className="container-404">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <div className="sad-img">
        <Image name="sad-guitar.png" objectFit="contain" />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
