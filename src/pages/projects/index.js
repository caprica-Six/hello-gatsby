import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <Link to="/">Go back home</Link>
      <p>or</p>
      <Link to="/projects/test">Go test project</Link>
    </Layout>
  )
}
