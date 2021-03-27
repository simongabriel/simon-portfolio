import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <SEO title="Simon Gabriel" />
  <div class="grid-container">
    <div class="left-col">
      <h1>Hi, I'm Simon</h1>
    </div>
    <div class="right-col">
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </div>


  </Layout>
)

export default IndexPage
