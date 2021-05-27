import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />

      <h1>About</h1>
      <Link to="/">Go back home</Link>
      <p>or</p>
      <Link to="/projects">Go back projects</Link>
    </Layout>
  )
}

export default AboutPage
