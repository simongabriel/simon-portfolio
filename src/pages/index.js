import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <SEO title="Simon Gabriel" />

  <div class="grid-container">
    <div class="avatar-container">
    </div>

    <div class="header-container">
      <h1>Hi, I'm Simon</h1>
      <p>I’m a UX/UI designer with a problem solving mindset who helps companies achieve user centric and frictionless experiences.</p>
    </div>

    <div class="body-container">
    <p>Body version; I’m a UX/UI designer with a problem solving mindset who helps companies achieve user centric and frictionless experiences.</p>
    </div>

    <div class="list-container">
    <p>This is the left col</p>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>

  </div>




  </Layout>
)

export default IndexPage
