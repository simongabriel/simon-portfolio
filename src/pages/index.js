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
    <StaticImage
      src="../images/avatar.png"
      style={{borderRadius: 100, height: 136}}
      width={136}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />

    <div class="list-container">
      <ul class="list-1">
        <li class="name">Simon Gabriel</li>
        <li>he/him/his</li>
        <li>@SimonGabriel</li>
        <li>sgabriel1790@gmail.com</li>
        <li>Download CV</li>
      </ul>

      <ul class="list-2">
        <li>About</li>
        <li>What I'm looking for</li>
        <li>Work Samples</li>
        <li>Contact</li>
      </ul>
    </div>

    </div>

    <div class="header-container">
      <h1>Hi, I'm Simon</h1>
      <p class="intro-text">I’m a UX/UI designer with a problem solving mindset who helps companies achieve user centric and frictionless experiences.</p>
      <div class="body-container">
      <h2>About me</h2>
      <p>One day in 1998 my dad unexpectedly brought home a computer he’d spontaneously bought. It was unlike him to do something like that. We couldn’t really afford it, and no family members really knew what to do with it. But I was 8 years old, and absolutely facinated by it.</p>
      <p>Since then I’ve spent my life tinkering with computers and navigating my career on the back of my interest in them as creative tools for good.</p>
      </div>
    </div>



  </div>




  </Layout>
)

export default IndexPage
